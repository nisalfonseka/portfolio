import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { notes } from "@/lib/content"

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() { return notes.map((note) => ({ slug: note.slug })) }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const note = notes.find((item) => item.slug === slug)
  return note ? { title: note.title, description: note.intro, alternates: { canonical: `/writing/${slug}` } } : { title: "Writing" }
}

export default async function NotePage({ params }: Props) {
  const { slug } = await params
  const note = notes.find((item) => item.slug === slug)
  if (!note) notFound()

  return (
    <main className="page-shell">
      <article>
        <header className="border-b border-black/15 px-5 pb-20 pt-20 sm:px-8 lg:px-12 lg:pb-28 lg:pt-28">
          <div className="mx-auto max-w-5xl"><Link href="/writing" className="mb-16 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[.15em] text-black/45"><ArrowLeft size={14} /> All notes</Link><h1 className="display text-[clamp(4rem,9vw,8.5rem)] font-semibold">{note.title}</h1><p className="mt-10 max-w-3xl text-xl leading-8 text-black/58">{note.intro}</p><p className="mt-8 text-[11px] font-semibold uppercase tracking-[.15em] text-black/40">{note.date} · {note.readTime}</p></div>
        </header>
        <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 lg:py-24">
          {note.sections.map(([heading, body]) => <section key={heading} className="mb-16"><h2 className="text-3xl font-semibold tracking-[-.045em]">{heading}</h2><p className="mt-6 text-lg leading-9 text-black/62">{body}</p></section>)}
        </div>
      </article>
    </main>
  )
}
