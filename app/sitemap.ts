import type { MetadataRoute } from "next"
import { getSiteContent } from "@/lib/content-store"
import { notes, services } from "@/lib/content"
import { absoluteUrl } from "@/lib/seo"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { projects } = await getSiteContent()
  const contentUpdated = new Date("2026-10-07T00:00:00+05:30")
  const staticPages: { path: string; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]; priority: number }[] = [
    { path: "/", changeFrequency: "weekly", priority: 1 },
    { path: "/work", changeFrequency: "weekly", priority: 0.9 },
    { path: "/services", changeFrequency: "monthly", priority: 0.8 },
    { path: "/experience", changeFrequency: "monthly", priority: 0.75 },
    { path: "/about", changeFrequency: "monthly", priority: 0.75 },
    { path: "/achievements", changeFrequency: "monthly", priority: 0.75 },
    { path: "/writing", changeFrequency: "monthly", priority: 0.75 },
    { path: "/publications", changeFrequency: "monthly", priority: 0.75 },
    { path: "/lab", changeFrequency: "monthly", priority: 0.65 },
    { path: "/contact", changeFrequency: "yearly", priority: 0.7 },
    { path: "/resume", changeFrequency: "monthly", priority: 0.65 },
  ]

  return [
    ...staticPages.map((page) => ({ url: absoluteUrl(page.path), lastModified: contentUpdated, changeFrequency: page.changeFrequency, priority: page.priority })),
    ...projects.map((project) => ({ url: absoluteUrl(`/work/${project.slug}`), lastModified: contentUpdated, changeFrequency: "monthly" as const, priority: 0.8 })),
    ...services.map((service) => ({ url: absoluteUrl(`/services/${service.slug}`), lastModified: contentUpdated, changeFrequency: "monthly" as const, priority: 0.7 })),
    ...notes.map((note) => ({ url: absoluteUrl(`/writing/${note.slug}`), lastModified: new Date(note.date), changeFrequency: "yearly" as const, priority: 0.65 })),
  ]
}
