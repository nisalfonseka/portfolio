import type { Metadata } from "next"
import { PageHeading } from "@/components/page-heading"

export const metadata: Metadata = { title: "AI Engineer's Lab", description: "Experiments in retrieval, model evaluation, voice AI and Sinhala NLP.", alternates: { canonical: "/lab" } }

const experiments = [
  ["RAG experiments", "Retrieval quality, chunking, hybrid search and grounded answer behavior.", "Active"],
  ["LLM evaluation", "Small evaluation sets and failure analysis for application-specific behavior.", "Active"],
  ["Model comparisons", "Capability, latency and cost comparisons tied to defined product tasks.", "Ongoing"],
  ["Voice AI", "Interaction patterns and system boundaries for useful real-time voice experiences.", "Exploring"],
  ["Sinhala NLP", "Fine-tuning, correction and evaluation for underrepresented language workflows.", "Research"],
  ["Prompt systems", "Versioned prompts, structured output and regression-aware iteration.", "Ongoing"],
]

export default function LabPage() {
  return (
    <main className="page-shell">
      <PageHeading title="AI engineer’s lab" intro="A working shelf for experiments that are useful enough to share but not yet case studies." />
      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-[1440px] gap-px border border-black/15 bg-black/15 md:grid-cols-2 lg:grid-cols-3">
          {experiments.map(([title, description, status], index) => (
            <article key={title} className="min-h-72 bg-paper p-7 sm:p-8">
              <div className="flex justify-between text-[10px] font-semibold uppercase tracking-[.14em] text-black/40"><span>0{index + 1}</span><span>{status}</span></div>
              <h2 className="mt-20 text-3xl font-semibold tracking-[-.045em]">{title}</h2>
              <p className="mt-5 text-sm leading-6 text-black/55">{description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
