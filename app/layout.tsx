import type { Metadata, Viewport } from "next"
import { Montserrat } from "next/font/google"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { StructuredData } from "@/components/structured-data"
import { personSchemaId, siteUrl, websiteSchemaId } from "@/lib/seo"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Nisal Fonseka Portfolio",
  title: {
    default: "Nisal Fonseka — AI Application Engineer",
    template: "%s — Nisal Fonseka",
  },
  description:
    "AI application engineer building production-grade LLM applications, RAG systems and full-stack software products.",
  keywords: ["Nisal Fonseka", "AI Application Engineer Sri Lanka", "RAG development", "LLM application development", "full-stack developer"],
  authors: [{ name: "Nisal Fonseka" }],
  creator: "Nisal Fonseka",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_LK",
    url: siteUrl,
    siteName: "Nisal Fonseka",
    title: "Nisal Fonseka — AI Application Engineer",
    description: "I build AI-powered products end-to-end—from retrieval and model orchestration to polished web applications.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nisal Fonseka — AI Application Engineer",
    description: "AI application engineer building production-grade LLM applications, RAG systems and full-stack software products.",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: [{ url: "/apple-touch-icon.png", type: "image/png", sizes: "180x180" }],
    shortcut: ["/favicon.ico"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#101010",
}

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": websiteSchemaId,
      url: siteUrl,
      name: "Nisal Fonseka",
      description: "AI application engineering, Sinhala NLP research and full-stack product work by Nisal Fonseka.",
      inLanguage: "en-LK",
    },
    {
      "@type": "Person",
      "@id": personSchemaId,
      name: "Nisal Fonseka",
      jobTitle: "AI Application Engineer",
      url: siteUrl,
      image: `${siteUrl}/images/siteicon.png`,
      email: "mailto:hello@nisalfonseka.com",
      address: { "@type": "PostalAddress", addressLocality: "Malabe", addressCountry: "LK" },
      alumniOf: { "@type": "CollegeOrUniversity", name: "Sri Lanka Institute of Information Technology" },
      sameAs: ["https://github.com/nisalfonseka", "https://www.linkedin.com/in/nisalfonseka/"],
      knowsLanguage: ["English", "Sinhala"],
      knowsAbout: ["AI engineering", "retrieval-augmented generation", "large language models", "full-stack development", "Sinhala NLP"],
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#profile-page`,
      url: siteUrl,
      name: "Nisal Fonseka — AI Application Engineer",
      isPartOf: { "@id": websiteSchemaId },
      mainEntity: { "@id": personSchemaId },
    },
  ],
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-LK" className={montserrat.variable}>
      <head>
        <link rel="describedby" href="/llms.txt" />
      </head>
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
        <StructuredData id="site-schema" data={structuredData} />
      </body>
    </html>
  )
}
