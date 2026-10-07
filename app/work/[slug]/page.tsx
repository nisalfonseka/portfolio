import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import { getPublicSiteContent } from "@/lib/content-store"

type Props = { params: Promise<{ slug: string }> }

export const revalidate = 0

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const { projects } = await getPublicSiteContent()
  const project = projects.find((item) => item.slug === slug)
  if (!project) return { title: "Work" }
  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/work/${project.slug}` },
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const { projects } = await getPublicSiteContent()
  const project = projects.find((item) => item.slug === slug)
  if (!project) notFound()

  return (
    <main className="page-shell">
      <article>
        <header className="border-b border-black/15 px-5 pb-14 pt-14 sm:px-8 lg:px-12 lg:pb-20 lg:pt-20">
          <div className="mx-auto max-w-[1440px]">
            <Link href="/work" className="mb-16 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[.15em] text-black/50"><ArrowLeft size={15} /> All work</Link>
            <h1 className="display max-w-6xl text-[clamp(4rem,11vw,10rem)] font-semibold">{project.title}</h1>
            <p className="mt-10 max-w-3xl text-lg leading-8 text-black/58">{project.description}</p>
            <div className="mt-14 grid gap-px border border-black/15 bg-black/15 sm:grid-cols-2 lg:grid-cols-4">
              {[["Role", project.role], ["Timeline", project.timeline], ["Status", project.status], [project.metricLabel, project.metric]].map(([label, value]) => (
                <div key={label} className="bg-paper p-5"><span className="block text-[10px] font-semibold uppercase tracking-[.15em] text-black/40">{label}</span><strong className="mt-2 block text-sm">{value}</strong></div>
              ))}
            </div>
          </div>
        </header>

        <section className="px-5 py-12 sm:px-8 lg:px-12 lg:py-20">
          <div className="mx-auto max-w-[1440px] overflow-hidden border border-black/15 bg-ink">
            {/* Admin-managed images may use local or remote URLs. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={project.image} alt={`${project.title} project visual`} className="aspect-[16/8] w-full object-cover" />
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-[.75fr_1.25fr]">
            <h2 className="display text-[clamp(3.5rem,7vw,7rem)] font-semibold">The problem</h2>
            <p className="self-end text-xl leading-9 text-black/62">{project.problem}</p>
          </div>
        </section>

        <section className="bg-ink px-5 py-16 text-white sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-[1440px]">
            <div className="grid gap-14 lg:grid-cols-[.75fr_1.25fr]">
              <h2 className="display text-[clamp(3.5rem,7vw,7rem)] font-semibold">The approach</h2>
              <div>
                <p className="text-xl leading-9 text-white/65">{project.approach}</p>
                <div className="mt-12 border-t border-white/20">
                  {project.decisions.map((decision, index) => (
                    <div key={decision} className="grid gap-4 border-b border-white/20 py-6 sm:grid-cols-[50px_1fr]"><span className="text-xs text-white/35">0{index + 1}</span><p className="leading-7 text-white/75">{decision}</p></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-[1440px]">
            <h2 className="display text-[clamp(3.5rem,7vw,7rem)] font-semibold">Results</h2>
            <div className="mt-14 grid gap-px border border-black/15 bg-black/15 md:grid-cols-3">
              {project.results.map((result, index) => <div key={result} className="bg-paper p-7 sm:p-9"><span className="text-xs font-semibold text-black/35">0{index + 1}</span><p className="mt-16 text-lg font-medium leading-7">{result}</p></div>)}
            </div>
            {(project.externalUrl || project.repoUrl) && (
              <div className="mt-10 flex flex-wrap gap-5">
                {project.externalUrl && <a href={project.externalUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-ink px-5 py-3 text-xs font-semibold uppercase tracking-[.14em] text-white">Visit live system <ArrowUpRight size={15} /></a>}
                {project.repoUrl && <a href={project.repoUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-black/25 px-5 py-3 text-xs font-semibold uppercase tracking-[.14em]">View source <ArrowUpRight size={15} /></a>}
              </div>
            )}
          </div>
        </section>
      </article>
    </main>
  )
}
