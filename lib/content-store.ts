import "server-only"

import { promises as fs } from "node:fs"
import path from "node:path"
import { attachDatabasePool } from "@vercel/functions"
import { Pool } from "pg"
import { defaultContent, type Inquiry, type SiteContent } from "@/lib/content"
import { imageUrl } from "@/lib/storage"

const CONTENT_KEY = "primary"
const dataDirectory = path.join(process.cwd(), ".data")

const pool = process.env.DATABASE_URL ? new Pool({ connectionString: process.env.DATABASE_URL, max: 5 }) : null
if (pool && process.env.VERCEL) attachDatabasePool(pool)

async function readLocal<T>(fileName: string, fallback: T): Promise<T> {
  try {
    const data = await fs.readFile(path.join(dataDirectory, fileName), "utf8")
    return JSON.parse(data) as T
  } catch {
    return fallback
  }
}

async function writeLocal(fileName: string, data: unknown) {
  await fs.mkdir(dataDirectory, { recursive: true })
  await fs.writeFile(path.join(dataDirectory, fileName), JSON.stringify(data, null, 2), "utf8")
}

// Content saved before a field existed is missing it; fill in defaults so older rows stay valid.
function normalize(content: Partial<SiteContent>): SiteContent {
  return {
    projects: content.projects ?? defaultContent.projects,
    achievements: content.achievements ?? defaultContent.achievements,
    publications: content.publications ?? defaultContent.publications,
  }
}

export async function getSiteContent(): Promise<SiteContent> {
  if (pool) {
    const result = await pool.query<{ data: SiteContent }>("SELECT data FROM portfolio_content WHERE id = $1 LIMIT 1", [CONTENT_KEY])
    return normalize(result.rows[0]?.data ?? defaultContent)
  }

  if (process.env.NODE_ENV !== "production") return normalize(await readLocal("site-content.json", defaultContent))
  return defaultContent
}

export async function getPublicSiteContent(): Promise<SiteContent> {
  const content = await getSiteContent()
  const [projects, achievements, publications] = await Promise.all([
    Promise.all(content.projects.map(async (project) => ({ ...project, image: await imageUrl(project.image) }))),
    Promise.all(content.achievements.map(async (achievement) => ({
      ...achievement,
      image: await imageUrl(achievement.image),
      gallery: achievement.gallery && await Promise.all(achievement.gallery.map(async (item) => ({ ...item, image: await imageUrl(item.image) }))),
    }))),
    Promise.all(content.publications.map(async (publication) => ({ ...publication, pdf: publication.pdf ? await imageUrl(publication.pdf) : publication.pdf }))),
  ])
  return { projects, achievements, publications }
}

export async function saveSiteContent(content: SiteContent) {
  if (pool) {
    await pool.query(
      `INSERT INTO portfolio_content (id, data, updated_at)
       VALUES ($1, $2::jsonb, NOW())
       ON CONFLICT (id) DO UPDATE SET data = EXCLUDED.data, updated_at = NOW()`,
      [CONTENT_KEY, JSON.stringify(content)],
    )
    return
  }

  if (process.env.NODE_ENV !== "production") {
    await writeLocal("site-content.json", content)
    return
  }

  throw new Error("Persistent storage is not configured. Add Neon DATABASE_URL in Vercel.")
}

export async function getInquiries(): Promise<Inquiry[]> {
  if (pool) {
    const result = await pool.query<{ data: Inquiry }>("SELECT data FROM portfolio_inquiries ORDER BY created_at DESC LIMIT 100")
    return result.rows.map((row) => row.data)
  }

  if (process.env.NODE_ENV !== "production") return readLocal("inquiries.json", [])
  return []
}

export async function saveInquiry(inquiry: Inquiry) {
  if (pool) {
    await pool.query(
      "INSERT INTO portfolio_inquiries (id, data, created_at) VALUES ($1, $2::jsonb, $3::timestamptz)",
      [inquiry.id, JSON.stringify(inquiry), inquiry.createdAt],
    )
    return
  }

  if (process.env.NODE_ENV !== "production") {
    const inquiries = await readLocal<Inquiry[]>("inquiries.json", [])
    await writeLocal("inquiries.json", [inquiry, ...inquiries].slice(0, 100))
    return
  }

  throw new Error("Neon DATABASE_URL is not configured.")
}
