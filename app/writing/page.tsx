import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { PageHeading } from "@/components/page-heading"
import { notes } from "@/lib/content"

export const metadata: Metadata = { title: "Engineering Notes", description: "Original notes on LLM applications, retrieval systems, evaluation and full-stack AI engineering.", alternates: { canonical: "/writing" } }

export default function WritingPage() {
  return (
    <main className="page-shell">
      <PageHeading title="Engineering notes" intro="Practical observations from systems I have built, evaluated and learned from—not generic AI explainers." />
      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1440px] border-t border-black/20">
          {notes.map((note, index) => (
            <Link key={note.slug} href={`/writing/${note.slug}`} className="group grid gap-6 border-b border-black/20 py-9 md:grid-cols-[70px_1fr_180px_30px] md:items-center">
              <span className="text-xs font-semibold text-black/35">0{index + 1}</span>
              <div><h2 className="max-w-3xl text-2xl font-semibold leading-tight tracking-[-.04em] sm:text-3xl">{note.title}</h2><p className="mt-3 max-w-2xl text-sm leading-6 text-black/52">{note.intro}</p></div>
              <span className="text-xs uppercase tracking-[.12em] text-black/40">{note.date} · {note.readTime}</span>
              <ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
