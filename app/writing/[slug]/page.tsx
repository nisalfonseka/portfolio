import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight } from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { StructuredData } from "@/components/structured-data"
import { notes } from "@/lib/content"
import { absoluteUrl, createPageMetadata, personSchemaId, websiteSchemaId } from "@/lib/seo"

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() { return notes.map((note) => ({ slug: note.slug })) }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const note = notes.find((item) => item.slug === slug)
  return note ? createPageMetadata({ title: note.title, description: note.intro, path: `/writing/${slug}` }) : { title: "Writing" }
}

export default async function NotePage({ params }: Props) {
  const { slug } = await params
  const note = notes.find((item) => item.slug === slug)
  if (!note) notFound()
  const canonicalUrl = absoluteUrl(`/writing/${note.slug}`)
  const relatedProjects: Record<string, { href: string; label: string }> = {
    "multi-llm-without-lock-in": { href: "/work/sliit-coeai-chatbot", label: "SLIIT COEAI Chatbot case study" },
    "rag-with-postgres-pgvector": { href: "/work/sliit-academic-chatbot-platform", label: "Academic Chatbot Platform case study" },
    "evaluating-sinhala-grammar-correction": { href: "/work/sinai", label: "SinAI research case study" },
  }
  const relatedProject = relatedProjects[note.slug]
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${canonicalUrl}#article`,
        headline: note.title,
        description: note.intro,
        url: canonicalUrl,
        mainEntityOfPage: canonicalUrl,
        author: { "@id": personSchemaId },
        isPartOf: { "@id": websiteSchemaId },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
          { "@type": "ListItem", position: 2, name: "Writing", item: absoluteUrl("/writing") },
          { "@type": "ListItem", position: 3, name: note.title, item: canonicalUrl },
        ],
      },
    ],
  }

  return (
    <main className="page-shell">
      <article>
        <StructuredData id="article-schema" data={structuredData} />
        <header className="border-b border-black/15 px-5 pb-20 pt-20 sm:px-8 lg:px-12 lg:pb-28 lg:pt-28">
          <div className="mx-auto max-w-5xl"><Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Writing", href: "/writing" }, { label: note.title }]} /><h1 className="display text-[clamp(4rem,9vw,8.5rem)] font-semibold">{note.title}</h1><p className="mt-10 max-w-3xl text-xl leading-8 text-black/58">{note.intro}</p><p className="mt-8 text-[11px] font-semibold uppercase tracking-[.15em] text-black/40">{note.date} · {note.readTime}</p></div>
        </header>
        <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 lg:py-24">
          {note.sections.map(([heading, body]) => <section key={heading} className="mb-16"><h2 className="text-3xl font-semibold tracking-[-.045em]">{heading}</h2><p className="mt-6 text-lg leading-9 text-black/62">{body}</p></section>)}
          {relatedProject && <div className="border-t border-black/15 pt-8"><p className="text-sm leading-6 text-black/55">See the engineering decisions applied in a real project.</p><Link href={relatedProject.href} className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[.14em]">{relatedProject.label} <ArrowRight size={14} /></Link></div>}
        </div>
      </article>
    </main>
  )
}
