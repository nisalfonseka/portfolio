import type { MetadataRoute } from "next"
import { getSiteContent } from "@/lib/content-store"
import { notes, services } from "@/lib/content"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://nisalfonseka.com"
  const { projects } = await getSiteContent()
  const paths = ["", "/work", "/services", "/experience", "/about", "/achievements", "/writing", "/lab", "/contact", "/resume"]
  const dynamic = [
    ...projects.map((project) => `/work/${project.slug}`),
    ...services.map((service) => `/services/${service.slug}`),
    ...notes.map((note) => `/writing/${note.slug}`),
  ]
  return [...paths, ...dynamic].map((path) => ({ url: `${base}${path}`, lastModified: new Date(), changeFrequency: path === "" ? "weekly" : "monthly", priority: path === "" ? 1 : 0.7 }))
}
