import { ArrowUpRight } from "lucide-react"
import { PrintButton } from "@/components/print-button"
import { resume } from "@/lib/resume"

const sectionClass = "grid gap-6 border-b border-black/20 py-10 print:break-inside-auto print:py-6 sm:grid-cols-[170px_1fr] sm:gap-8"
const headingClass = "text-xs font-semibold uppercase tracking-[.16em] text-black/45"

export default function ResumePage() {
  return (
    <main className="page-shell bg-white">
      <div className="no-print fixed bottom-5 right-5 z-40">
        <PrintButton />
      </div>
      <article className="mx-auto max-w-5xl px-5 py-16 sm:px-10 lg:py-24 print:max-w-none print:px-0 print:py-0">
        <header className="grid gap-8 border-b border-black/25 pb-10 sm:grid-cols-[1fr_auto] sm:items-end">
          <div>
            <h1 className="text-5xl font-semibold tracking-[-.06em] sm:text-7xl">{resume.name}</h1>
            <p className="mt-4 text-lg text-black/60">{resume.title}</p>
          </div>
          <div className="text-sm leading-6 text-black/60 sm:text-right">
            <p>{resume.location}</p>
            <a className="block" href={`mailto:${resume.email}`}>{resume.email}</a>
            <a className="block" href={`tel:${resume.phone.replace(/\s/g, "")}`}>{resume.phone}</a>
            {resume.links.map((link) => <a key={link.href} className="block" href={link.href} target="_blank" rel="noreferrer">{link.label}</a>)}
          </div>
        </header>

        <section className={sectionClass}>
          <h2 className={headingClass}>Profile</h2>
          <p className="max-w-3xl leading-7 text-black/70">{resume.summary}</p>
        </section>

        <section className={sectionClass}>
          <h2 className={headingClass}>Experience</h2>
          <div className="space-y-6">
            {resume.experience.map((item) => (
              <article key={item.company} className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                <h3 className="font-semibold">{item.role} · {item.company}</h3>
                <span className="shrink-0 text-xs text-black/45">{item.period}</span>
              </article>
            ))}
          </div>
        </section>

        <section className={sectionClass}>
          <h2 className={headingClass}>Projects</h2>
          <div className="space-y-10">
            {resume.projects.map((project) => (
              <article key={project.title} className="break-inside-avoid">
                <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                  <h3 className="font-semibold">{project.title}</h3>
                  {project.href && <a href={project.href} target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center gap-1 text-xs font-semibold underline underline-offset-4">{project.href.replace(/^https?:\/\//, "").replace(/\/$/, "")} <ArrowUpRight size={12} /></a>}
                </div>
                <p className="mt-1 text-xs uppercase tracking-[.12em] text-black/45">{project.context}</p>
                <p className="mt-3 text-sm leading-6 text-black/70">{project.summary}</p>
                <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-6 text-black/65 marker:text-black/30">
                  {project.points.map((point) => <li key={point}>{point}</li>)}
                </ul>
                <p className="mt-3 text-xs leading-5 text-black/55"><span className="font-semibold text-black/70">Technologies:</span> {project.technologies}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={sectionClass}>
          <h2 className={headingClass}>Education</h2>
          <div className="space-y-6">
            {resume.education.map((item) => (
              <article key={item.institution} className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                <div><h3 className="font-semibold">{item.institution}</h3><p className="mt-1 text-sm text-black/60">{item.qualification}</p></div>
                <span className="shrink-0 text-xs text-black/45">{item.period}</span>
              </article>
            ))}
          </div>
        </section>

        <section className={sectionClass}>
          <h2 className={headingClass}>Skills</h2>
          <dl className="grid gap-x-8 gap-y-3 text-sm sm:grid-cols-[170px_1fr]">
            {resume.skills.map(([group, items]) => (
              <div key={group} className="contents">
                <dt className="font-semibold">{group}</dt>
                <dd className="text-black/65">{items}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className={sectionClass}>
          <h2 className={headingClass}>Certifications</h2>
          <ul className="space-y-2 text-sm text-black/70">{resume.certifications.map((item) => <li key={item}>{item}</li>)}</ul>
        </section>

        <section className={`${sectionClass} border-b-0`}>
          <h2 className={headingClass}>References</h2>
          <div className="grid gap-6 text-sm sm:grid-cols-2">
            {resume.references.map((reference) => (
              <div key={reference.name}><p className="font-semibold">{reference.name}</p><p className="mt-1 text-black/60">{reference.title} — {reference.organisation}</p></div>
            ))}
            <p className="text-xs text-black/45 sm:col-span-2">Contact details available on request.</p>
          </div>
        </section>
      </article>
    </main>
  )
}
