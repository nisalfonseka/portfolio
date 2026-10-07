import { PageHeading } from "@/components/page-heading"
import { experience } from "@/lib/content"
import { createPageMetadata } from "@/lib/seo"

export const metadata = createPageMetadata({
  title: "AI Application Engineering Experience",
  description: "Nisal Fonseka's engineering experience at SLIIT and Sri Lanka Telecom across generative AI applications, RAG, voice systems and enterprise software.",
  path: "/experience",
})

export default function ExperiencePage() {
  return (
    <main className="page-shell">
      <PageHeading compact title="Experience" intro="Work across AI systems, product engineering and enterprise environments—with the engineering contributions kept concrete." />
      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1440px] border-t border-black/20">
          {experience.map((item, index) => (
            <article key={item.company} className="grid gap-8 border-b border-black/20 py-10 lg:grid-cols-[80px_260px_1fr]">
              <span className="text-xs font-semibold text-black/35">0{index + 1}</span>
              <div><h2 className="text-2xl font-semibold tracking-[-.04em]">{item.role}</h2><p className="mt-2 text-sm font-medium">{item.company}</p><p className="mt-4 text-xs uppercase tracking-[.12em] text-black/40">{item.period}</p></div>
              <div><p className="max-w-2xl text-base leading-7 text-black/58">{item.description}</p><div className="mt-7 flex flex-wrap gap-2">{item.contributions.map((entry) => <span key={entry} className="border border-black/15 px-3 py-2 text-[10px] font-semibold uppercase tracking-[.1em] text-black/55">{entry}</span>)}</div></div>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-ink px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1440px]">
          <h2 className="display text-[clamp(3.5rem,8vw,8rem)] font-semibold">What I actually do</h2>
          <div className="mt-14 grid gap-px bg-white/15 p-px md:grid-cols-2 lg:grid-cols-4">
            {[["AI engineering", "Model integration, retrieval, memory, evaluation and orchestration."], ["Software engineering", "Backend, APIs, data, authentication and infrastructure around the AI."], ["Product engineering", "Useful, coherent software instead of isolated technology demonstrations."], ["Research", "Fine-tuning and language-model experiments grounded in real domains."]].map(([title, text]) => <div key={title} className="bg-ink p-7"><h3 className="text-2xl font-semibold tracking-[-.04em]">{title}</h3><p className="mt-5 text-sm leading-6 text-white/55">{text}</p></div>)}
          </div>
        </div>
      </section>
    </main>
  )
}
