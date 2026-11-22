import type { Metadata } from "next"

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://nisalfonseka.com").replace(/\/$/, "")
export const siteName = "Nisal Fonseka"
export const siteLocation = "Colombo, Sri Lanka"

/** One quotable, factual definition of who Nisal is. Reused on the homepage, About page and in schema. */
export const entitySummary =
  "Nisal Fonseka is a freelance AI engineer and full-stack developer based in Colombo, Sri Lanka. He builds custom AI chatbots, RAG knowledge assistants, AI agents, multi-LLM applications, voice AI and Sinhala–English multilingual AI for businesses in Sri Lanka and worldwide."

/** Public profiles that describe the same person. Keep these consistent with the site. */
export const sameAsProfiles = [
  "https://www.linkedin.com/in/nisalfonseka/",
  "https://github.com/nisalfonseka",
  "https://clutch.co/profile/nisal-fonseka",
  "https://huggingface.co/nisalfonseka",
  "https://medium.com/@nisalfonseka",
  // Swap for the custom Upwork URL if one is set up (requires Freelancer Plus).
  "https://www.upwork.com/freelancers/~0147a2658b112b1402",
]

export function absoluteUrl(path = "/") {
  return new URL(path, `${siteUrl}/`).toString()
}

export function createPageMetadata({ title, description, path, image, type = "website" }: { title: string; description: string; path: string; image?: string; type?: "website" | "article" }): Metadata {
  const url = absoluteUrl(path)
  const socialTitle = `${title} - ${siteName}`
  const images = image ? [{ url: image.startsWith("/") ? absoluteUrl(image) : image }] : undefined

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type,
      locale: "en_LK",
      url,
      siteName,
      title: socialTitle,
      description,
      ...(images && { images }),
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      ...(images && { images: images.map((item) => item.url) }),
    },
  }
}

export const personSchemaId = `${siteUrl}/#person`
export const websiteSchemaId = `${siteUrl}/#website`
export const businessSchemaId = `${siteUrl}/#business`
