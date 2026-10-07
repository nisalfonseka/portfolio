import type { Metadata } from "next"

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://nisalfonseka.com").replace(/\/$/, "")
export const siteName = "Nisal Fonseka"

export function absoluteUrl(path = "/") {
  return new URL(path, `${siteUrl}/`).toString()
}

export function createPageMetadata({ title, description, path }: { title: string; description: string; path: string }): Metadata {
  const url = absoluteUrl(path)
  const socialTitle = `${title} — ${siteName}`

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "en_LK",
      url,
      siteName,
      title: socialTitle,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
    },
  }
}

export const personSchemaId = `${siteUrl}/#person`
export const websiteSchemaId = `${siteUrl}/#website`
