import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { PageHeading } from "@/components/page-heading"
import { PublicationList } from "@/components/publication-list"
import { StructuredData } from "@/components/structured-data"
import { getPublicSiteContent } from "@/lib/content-store"
import { absoluteUrl, createPageMetadata, personSchemaId } from "@/lib/seo"

export const metadata = createPageMetadata({
  title: "Research Publications",
  description: "Research papers and publications by Nisal Fonseka on Sinhala NLP, language-model fine-tuning and applied AI engineering.",
  path: "/publications",
})
export const revalidate = 300

export default async function PublicationsPage() {
  const { publications } = await getPublicSiteContent()

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Research Publications — Nisal Fonseka",
    url: absoluteUrl("/publications"),
    hasPart: publications.map((publication) => ({
      "@type": "ScholarlyArticle",
      headline: publication.title,
      author: publication.authors.split(",").map((name) => name.trim()).filter(Boolean).map((name) => name === "Nisal Fonseka" ? { "@id": personSchemaId } : { "@type": "Person", name }),
      datePublished: publication.year,
      ...(publication.venue && { isPartOf: { "@type": "Periodical", name: publication.venue } }),
      ...(publication.abstract && { abstract: publication.abstract }),
      ...(publication.url && { url: publication.url }),
      ...(publication.doi && { sameAs: publication.doi.startsWith("http") ? publication.doi : `https://doi.org/${publication.doi}` }),
    })),
  }

  return (
    <main className="page-shell">
      <PageHeading title="Publications" intro="Research papers, conference work and preprints—mostly on Sinhala language technology and applied large language models." />
      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1440px]">
          {publications.length > 0 ? (
            <PublicationList publications={publications} headingLevel="h2" />
          ) : (
            <div className="border-y border-black/20 py-20">
              <p className="max-w-xl text-lg leading-8 text-black/60">Published papers will appear here as they are released. In the meantime, the SinAI research is documented in detail.</p>
              <Link href="/work/sinai" className="mt-8 inline-flex items-center gap-2 border-b border-black pb-2 text-xs font-semibold uppercase tracking-[.15em]">Explore SinAI research <ArrowRight size={15} /></Link>
            </div>
          )}
        </div>
      </section>
      {publications.length > 0 && <StructuredData id="publications-schema" data={structuredData} />}
    </main>
  )
}
