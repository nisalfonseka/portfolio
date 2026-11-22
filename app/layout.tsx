import type { Metadata, Viewport } from "next"
import { Montserrat } from "next/font/google"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { SmoothScroll } from "@/components/smooth-scroll"
import { StructuredData } from "@/components/structured-data"
import { businessSchemaId, entitySummary, personSchemaId, sameAsProfiles, siteUrl, websiteSchemaId } from "@/lib/seo"
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
    default: "Nisal Fonseka - Freelance AI Developer in Colombo, Sri Lanka",
    template: "%s - Nisal Fonseka",
  },
  description:
    "Freelance AI engineer in Colombo, Sri Lanka building custom AI chatbots, RAG knowledge assistants, AI agents and full-stack products for businesses.",
  keywords: ["Nisal Fonseka", "freelance AI developer Colombo", "AI engineer Sri Lanka", "AI chatbot developer Sri Lanka", "RAG development", "LLM application development", "full-stack developer"],
  authors: [{ name: "Nisal Fonseka" }],
  creator: "Nisal Fonseka",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_LK",
    url: siteUrl,
    siteName: "Nisal Fonseka",
    title: "Nisal Fonseka - Freelance AI Developer in Colombo, Sri Lanka",
    description: "Custom AI chatbots, RAG assistants, AI agents and full-stack products, built end-to-end from Colombo, Sri Lanka.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nisal Fonseka - Freelance AI Developer in Colombo, Sri Lanka",
    description: "Freelance AI engineer in Colombo, Sri Lanka building custom AI chatbots, RAG knowledge assistants, AI agents and full-stack products.",
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
      jobTitle: "Freelance AI Engineer",
      description: entitySummary,
      url: siteUrl,
      image: `${siteUrl}/images/siteicon.png`,
      email: "mailto:hello@nisalfonseka.com",
      telephone: "+94710767697",
      address: { "@type": "PostalAddress", addressLocality: "Colombo", addressRegion: "Western Province", addressCountry: "LK" },
      homeLocation: { "@type": "City", name: "Colombo", containedInPlace: { "@type": "Country", name: "Sri Lanka" } },
      alumniOf: { "@type": "CollegeOrUniversity", name: "Sri Lanka Institute of Information Technology" },
      sameAs: sameAsProfiles,
      knowsLanguage: ["English", "Sinhala"],
      knowsAbout: ["AI engineering", "AI chatbot development", "retrieval-augmented generation", "AI agents", "large language models", "voice AI", "full-stack development", "Sinhala NLP"],
      hasOccupation: { "@type": "Occupation", name: "AI Engineer", occupationLocation: { "@type": "City", name: "Colombo" } },
    },
    {
      "@type": "ProfessionalService",
      "@id": businessSchemaId,
      name: "Nisal Fonseka - Freelance AI Engineering",
      description: "Freelance AI chatbot, RAG assistant, AI agent, AI automation and full-stack development services in Colombo, Sri Lanka and worldwide.",
      url: siteUrl,
      image: `${siteUrl}/images/siteicon.png`,
      email: "hello@nisalfonseka.com",
      telephone: "+94710767697",
      address: { "@type": "PostalAddress", addressLocality: "Colombo", addressRegion: "Western Province", addressCountry: "LK" },
      areaServed: [{ "@type": "City", name: "Colombo" }, { "@type": "Country", name: "Sri Lanka" }, "Worldwide"],
      founder: { "@id": personSchemaId },
      sameAs: sameAsProfiles,
      knowsLanguage: ["English", "Sinhala"],
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#profile-page`,
      url: siteUrl,
      name: "Nisal Fonseka - Freelance AI Developer in Colombo, Sri Lanka",
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
        <SmoothScroll />
        <SiteHeader />
        {children}
        <SiteFooter />
        <StructuredData id="site-schema" data={structuredData} />
      </body>
    </html>
  )
}
