import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import type { Project } from "@/lib/content"
import { Reveal } from "@/components/reveal"

export function ProjectList({ projects, limit }: { projects: Project[]; limit?: number }) {
  const visibleProjects = limit ? projects.slice(0, limit) : projects

  return (
    <div className="border-t border-black/20">
      {visibleProjects.map((project, index) => (
        <Reveal key={project.slug} delay={Math.min(index * 0.04, 0.16)}>
          <Link href={`/work/${project.slug}`} className="group grid gap-6 border-b border-black/20 py-8 transition-colors hover:bg-white/45 md:grid-cols-[80px_1.25fr_.8fr_120px] md:items-center md:px-4 lg:py-10">
            <span className="text-xs font-semibold tracking-[.18em] text-black/40">{project.number}</span>
            <div>
              <h3 className="text-2xl font-semibold tracking-[-.04em] sm:text-3xl">{project.title}</h3>
              <p className="mt-2 max-w-xl text-sm leading-6 text-black/55">{project.summary}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tags.slice(0, 3).map((tag) => <span key={tag} className="border border-black/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[.1em] text-black/55">{tag}</span>)}
            </div>
            <div className="flex items-center justify-between md:justify-end md:gap-5">
              <div className="md:text-right">
                <strong className="block text-lg">{project.metric}</strong>
                <span className="text-[10px] uppercase tracking-[.12em] text-black/45">{project.metricLabel}</span>
              </div>
              <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" size={22} />
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  )
}
