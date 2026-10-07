"use client"

import { Download } from "lucide-react"
import { experience } from "@/lib/content"

export default function ResumePage() {
  return (
    <main className="page-shell bg-white">
      <div className="no-print fixed bottom-5 right-5 z-40">
        <button onClick={() => window.print()} className="inline-flex items-center gap-2 bg-ink px-5 py-3 text-xs font-semibold uppercase tracking-[.14em] text-white shadow-soft"><Download size={15} /> Save as PDF</button>
      </div>
      <article className="mx-auto max-w-5xl px-5 py-16 sm:px-10 lg:py-24">
        <header className="grid gap-8 border-b border-black/25 pb-10 sm:grid-cols-[1fr_auto] sm:items-end">
          <div><h1 className="text-5xl font-semibold tracking-[-.06em] sm:text-7xl">Nisal Fonseka</h1><p className="mt-4 text-lg text-black/60">AI Engineer · Full-Stack Developer</p></div>
          <div className="text-sm leading-6 text-black/60 sm:text-right"><p>Colombo, Sri Lanka</p><a href="mailto:nisalfonseka@gmail.com">nisalfonseka@gmail.com</a><p>github.com/nisalfonseka</p></div>
        </header>

        <section className="grid gap-8 border-b border-black/20 py-10 sm:grid-cols-[170px_1fr]"><h2 className="text-xs font-semibold uppercase tracking-[.16em] text-black/45">Profile</h2><p className="max-w-3xl leading-7 text-black/70">Software engineer building AI-powered products end-to-end across model integration, RAG, backend systems, databases, authentication, interfaces and deployment.</p></section>

        <section className="grid gap-8 border-b border-black/20 py-10 sm:grid-cols-[170px_1fr]"><h2 className="text-xs font-semibold uppercase tracking-[.16em] text-black/45">Experience</h2><div className="space-y-9">{experience.map((item) => <article key={item.company}><div className="flex flex-col justify-between gap-1 sm:flex-row"><h3 className="font-semibold">{item.role} · {item.company}</h3><span className="text-xs text-black/45">{item.period}</span></div><p className="mt-3 text-sm leading-6 text-black/65">{item.description}</p><p className="mt-3 text-xs text-black/45">{item.contributions.join(" · ")}</p></article>)}</div></section>

        <section className="grid gap-8 border-b border-black/20 py-10 sm:grid-cols-[170px_1fr]"><h2 className="text-xs font-semibold uppercase tracking-[.16em] text-black/45">Education</h2><div><h3 className="font-semibold">BSc (Hons) Information Technology — Software Engineering</h3><p className="mt-2 text-sm text-black/60">Sri Lanka Institute of Information Technology · 2022 — 2026</p><h3 className="mt-7 font-semibold">Diploma in Information Technology</h3><p className="mt-2 text-sm text-black/60">ESOFT Metro Campus · 2019</p></div></section>

        <section className="grid gap-8 py-10 sm:grid-cols-[170px_1fr]"><h2 className="text-xs font-semibold uppercase tracking-[.16em] text-black/45">Capabilities</h2><p className="text-sm leading-7 text-black/65">AI engineering · LLM applications · Retrieval-augmented generation · Model orchestration · Full-stack development · React · Next.js · Node.js · PostgreSQL · pgvector · Docker · Product engineering · Sinhala NLP</p></section>
      </article>
    </main>
  )
}
