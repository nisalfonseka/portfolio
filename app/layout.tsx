import type { Metadata, Viewport } from "next"
import { Montserrat } from "next/font/google"
import Script from "next/script"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://disulfonsega.co"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Nisal Fonseka — AI Engineer & Full-Stack Developer",
    template: "%s — Nisal Fonseka",
  },
  description:
    "AI engineer and full-stack developer building LLM applications, RAG systems and production-ready software products.",
  keywords: ["Nisal Fonseka", "AI Engineer Sri Lanka", "RAG development", "LLM application development", "full-stack developer"],
  authors: [{ name: "Nisal Fonseka" }],
  creator: "Nisal Fonseka",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Nisal Fonseka",
    title: "Nisal Fonseka — AI Engineer & Full-Stack Developer",
    description: "I build AI-powered products end-to-end—from retrieval and model orchestration to polished web applications.",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#101010",
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    name: "Nisal Fonseka",
    jobTitle: "AI Engineer and Full-Stack Developer",
    url: siteUrl,
    sameAs: ["https://github.com/nisalfonseka", "https://www.linkedin.com/in/nisalfonseka/"],
    knowsAbout: ["AI engineering", "retrieval-augmented generation", "large language models", "full-stack development", "Sinhala NLP"],
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
        <Script id="profile-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </body>
    </html>
  )
}
