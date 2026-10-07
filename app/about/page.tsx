import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { PageHeading } from "@/components/page-heading"

export const metadata: Metadata = { title: "About", description: "About Nisal Fonseka, an AI engineer and full-stack developer based in Sri Lanka.", alternates: { canonical: "/about" } }

export default function AboutPage() {
  return (
    <main className="page-shell">
      <PageHeading title="About Nisal" intro="I’m a software engineer focused on useful products at the intersection of AI, full-stack development and language research." />
      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-[.8fr_1.2fr]">
          <h2 className="display text-[clamp(3.5rem,7vw,7rem)] font-semibold">How I got here</h2>
          <div className="space-y-7 text-lg leading-8 text-black/62">
            <p>I started with software development, moved through full-stack product work, and gradually focused on the engineering challenges that appear when language models meet real users and real data.</p>
            <p>That path now spans AI assistants, retrieval systems, product interfaces, backend architecture, deployment and Sinhala NLP research. The common thread is not a specific framework. It is building the complete system required to make an idea useful.</p>
            <p>I am completing a BSc (Hons) in Information Technology, specializing in Software Engineering at SLIIT, while working on production-oriented AI systems.</p>
          </div>
        </div>
      </section>
      <section className="border-y border-black/15 bg-white/45 px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1440px]">
          <h2 className="display text-[clamp(3.5rem,8vw,8rem)] font-semibold">What I care about</h2>
          <div className="mt-14 grid gap-px border border-black/15 bg-black/15 md:grid-cols-3">
            {[["Useful AI", "AI should solve a real problem and be evaluated against the job it needs to do."], ["Good engineering", "AI products still require sound architecture, security, reliability and maintainability."], ["Simple products", "Complexity should stay inside the system instead of leaking into the user experience."]].map(([title, text]) => <div key={title} className="bg-paper p-8"><h3 className="text-3xl font-semibold tracking-[-.045em]">{title}</h3><p className="mt-6 text-sm leading-7 text-black/55">{text}</p></div>)}
          </div>
        </div>
      </section>
      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-2">
          <div><h2 className="display text-6xl font-semibold sm:text-8xl">Currently</h2></div>
          <div className="border-t border-black/20">
            {[["Building", "Academic AI products and reliable retrieval systems"], ["Researching", "Sinhala language models and grammar correction"], ["Exploring", "Evaluation, agentic systems and voice AI"], ["Available for", "Selected AI and full-stack software projects"]].map(([label, value]) => <div key={label} className="grid gap-2 border-b border-black/20 py-5 sm:grid-cols-[130px_1fr]"><strong className="text-xs uppercase tracking-[.13em] text-black/40">{label}</strong><span className="text-sm font-medium">{value}</span></div>)}
            <Link href="/contact" className="mt-9 inline-flex items-center gap-2 border-b border-black pb-2 text-xs font-semibold uppercase tracking-[.15em]">Start a conversation <ArrowRight size={15} /></Link>
          </div>
        </div>
      </section>
    </main>
  )
}
