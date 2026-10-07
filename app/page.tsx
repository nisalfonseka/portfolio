import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import Hero from "@/components/ui/hero"
import { ProjectList } from "@/components/project-list"
import { AchievementGrid } from "@/components/achievement-grid"
import { Reveal } from "@/components/reveal"
import { getPublicSiteContent } from "@/lib/content-store"
import { experience, notes, services } from "@/lib/content"

export const revalidate = 0

const proof = [
  ["300+", "students reached through an AI platform"],
  ["Multi-LLM", "OpenAI · Anthropic · xAI"],
  ["87.7%", "sentence-level grammar correction accuracy"],
  ["End-to-end", "AI · backend · interface · deployment"],
]

export default async function HomePage() {
  const content = await getPublicSiteContent()

  return (
    <main>
      <Hero />

      <section className="overflow-hidden border-b border-black/15 bg-ink py-4 text-white">
        <div className="marquee-track flex w-max items-center">
          {[...Array(2)].flatMap((_, copy) => ["AI ENGINEERING", "LLM / RAG", "FULL-STACK DEVELOPMENT", "PRODUCT ENGINEERING", "SINHALA NLP"].map((item) => (
            <span key={`${copy}-${item}`} className="flex items-center gap-7 whitespace-nowrap px-7 text-[11px] font-semibold tracking-[.18em] text-white/70">
              {item}<span className="size-1 rounded-full bg-orange-500" />
            </span>
          )))}
        </div>
      </section>

      <section className="border-b border-black/15 bg-paper px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-[1440px] gap-px overflow-hidden border border-black/15 bg-black/15 sm:grid-cols-2 lg:grid-cols-4">
          {proof.map(([value, label], index) => (
            <Reveal key={value} delay={index * 0.06} className="bg-paper p-6 lg:p-8">
              <strong className="block text-3xl font-semibold tracking-[-.05em]">{value}</strong>
              <span className="mt-3 block text-xs leading-5 text-black/50">{label}</span>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-12 flex items-end justify-between gap-8">
            <h2 className="display text-[clamp(3.5rem,8vw,8rem)] font-semibold">Selected work</h2>
            <Link href="/work" className="hidden items-center gap-2 border-b border-black pb-2 text-xs font-semibold uppercase tracking-[.15em] sm:inline-flex">All work <ArrowRight size={15} /></Link>
          </div>
          <ProjectList projects={content.projects} limit={5} />
        </div>
      </section>

      <section className="bg-ink px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1440px]">
          <h2 className="display max-w-5xl text-[clamp(3.5rem,8vw,8rem)] font-semibold">What I build</h2>
          <div className="mt-16 grid gap-px border border-white/15 bg-white/15 md:grid-cols-2">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={index * 0.06} className="bg-ink">
                <Link href={`/services/${service.slug}`} className="group block min-h-72 p-7 transition-colors hover:bg-white hover:text-black sm:p-10">
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-[11px] font-semibold tracking-[.18em] opacity-45">0{index + 1}</span>
                    <ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                  <h3 className="mt-20 text-3xl font-semibold tracking-[-.045em] sm:text-4xl">{service.title}</h3>
                  <p className="mt-4 max-w-md text-sm leading-6 opacity-58">{service.summary}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.6fr]">
            <h2 className="display text-[clamp(3.5rem,7vw,7rem)] font-semibold">Experience</h2>
            <div className="border-t border-black/20">
              {experience.map((item, index) => (
                <Reveal key={item.company} delay={index * 0.06}>
                  <article className="grid gap-5 border-b border-black/20 py-8 sm:grid-cols-[180px_1fr]">
                    <p className="text-xs font-semibold uppercase leading-5 tracking-[.12em] text-black/45">{item.period}</p>
                    <div>
                      <h3 className="text-2xl font-semibold tracking-[-.035em]">{item.role}</h3>
                      <p className="mt-1 text-sm font-medium">{item.company}</p>
                      <p className="mt-5 max-w-2xl text-sm leading-6 text-black/55">{item.description}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
              <Link href="/experience" className="mt-8 inline-flex items-center gap-2 border-b border-black pb-2 text-xs font-semibold uppercase tracking-[.15em]">Full experience <ArrowRight size={15} /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-black/15 bg-white/45 px-5 py-20 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:items-center">
            <div>
              <h2 className="display text-[clamp(3.5rem,7vw,7rem)] font-semibold">SinAI research</h2>
              <p className="mt-8 max-w-xl text-base leading-7 text-black/58">Style-controlled large language model research for diverse Sri Lankan newspaper writing, focused on Sinhala grammar correction and evaluation grounded in real editorial text.</p>
              <Link href="/work/sinai" className="mt-8 inline-flex items-center gap-2 border-b border-black pb-2 text-xs font-semibold uppercase tracking-[.15em]">Explore the research <ArrowRight size={15} /></Link>
            </div>
            <div className="grid grid-cols-2 gap-px bg-black/15 p-px">
              <div className="bg-ink p-8 text-white sm:p-12"><strong className="display text-5xl font-semibold sm:text-7xl">87.7%</strong><span className="mt-5 block text-xs uppercase tracking-[.15em] text-white/50">Sentence accuracy</span></div>
              <div className="bg-orange-600 p-8 text-white sm:p-12"><strong className="display text-5xl font-semibold sm:text-7xl">75.0%</strong><span className="mt-5 block text-xs uppercase tracking-[.15em] text-white/70">Real-news paragraphs</span></div>
              <div className="col-span-2 bg-paper p-8 sm:p-12"><strong className="display text-5xl font-semibold sm:text-7xl">~700k</strong><span className="mt-5 block text-xs uppercase tracking-[.15em] text-black/45">Sinhala news articles</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-12 flex items-end justify-between gap-8">
            <h2 className="display text-[clamp(3.5rem,8vw,8rem)] font-semibold">Engineering notes</h2>
            <Link href="/writing" className="hidden items-center gap-2 border-b border-black pb-2 text-xs font-semibold uppercase tracking-[.15em] sm:inline-flex">All notes <ArrowRight size={15} /></Link>
          </div>
          <div className="grid gap-px border border-black/15 bg-black/15 lg:grid-cols-3">
            {notes.map((note, index) => (
              <Reveal key={note.slug} delay={index * 0.06} className="bg-paper">
                <Link href={`/writing/${note.slug}`} className="group flex min-h-80 flex-col p-7 transition-colors hover:bg-ink hover:text-white sm:p-8">
                  <div className="flex justify-between text-[10px] font-semibold uppercase tracking-[.14em] opacity-45"><span>{note.date}</span><span>{note.readTime}</span></div>
                  <h3 className="mt-auto max-w-sm text-2xl font-semibold leading-tight tracking-[-.04em]">{note.title}</h3>
                  <ArrowUpRight className="mt-7 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" size={20} />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-black/15 px-5 py-20 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-12 flex items-end justify-between gap-8">
            <h2 className="display text-[clamp(3.5rem,8vw,8rem)] font-semibold">Recognition</h2>
            <Link href="/achievements" className="hidden items-center gap-2 border-b border-black pb-2 text-xs font-semibold uppercase tracking-[.15em] sm:inline-flex">View all <ArrowRight size={15} /></Link>
          </div>
          <AchievementGrid achievements={content.achievements} limit={3} />
        </div>
      </section>

      <section className="border-t border-black/15 px-5 py-20 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[1.2fr_.8fr]">
          <h2 className="display max-w-4xl text-[clamp(3.5rem,8vw,8rem)] font-semibold">Engineering the whole product.</h2>
          <div className="self-end">
            <p className="text-lg leading-8 text-black/60">I work across the AI layer, backend, database, authentication, interface and deployment—because useful AI depends on the complete system around it.</p>
            <div className="mt-9 flex gap-6">
              <Link href="/about" className="text-link text-xs font-semibold uppercase tracking-[.15em]">About me</Link>
              <Link href="/lab" className="text-link text-xs font-semibold uppercase tracking-[.15em]">Visit the lab</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
