import { ArrowUpRight, FileText } from "lucide-react"
import type { Publication } from "@/lib/content"
import { Reveal } from "@/components/reveal"

const OWNER = "Nisal Fonseka"

function doiUrl(doi: string) {
  return doi.startsWith("http") ? doi : `https://doi.org/${doi.replace(/^doi:\s*/i, "")}`
}

/** Renders the author list with the portfolio owner's name emphasised. */
function Authors({ authors }: { authors: string }) {
  const parts = authors.split(OWNER)
  return (
    <p className="mt-4 text-sm leading-6 text-black/60">
      {parts.map((part, index) => (
        <span key={index}>{part}{index < parts.length - 1 && <strong className="font-semibold text-ink">{OWNER}</strong>}</span>
      ))}
    </p>
  )
}

export function PublicationList({ publications, limit, compact = false, headingLevel = "h3" }: { publications: Publication[]; limit?: number; compact?: boolean; headingLevel?: "h2" | "h3" }) {
  const items = limit ? publications.slice(0, limit) : publications
  const Heading = headingLevel

  return (
    <div className="border-t border-black/20">
      {items.map((publication, index) => {
        const links = [
          publication.url && { href: publication.url, label: "Read paper", icon: ArrowUpRight },
          publication.pdf && { href: publication.pdf, label: "PDF", icon: FileText },
          publication.doi && { href: doiUrl(publication.doi), label: "DOI", icon: ArrowUpRight },
        ].filter((link): link is { href: string; label: string; icon: typeof ArrowUpRight } => Boolean(link))

        return (
          <Reveal key={publication.id} delay={index * 0.06}>
            <article className="grid gap-5 border-b border-black/20 py-9 md:grid-cols-[110px_1fr_190px] md:gap-8">
              <p className="text-xs font-semibold uppercase leading-5 tracking-[.12em] text-black/45">{publication.year}</p>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[.15em] text-black/45">{publication.type}</p>
                <Heading className="mt-3 max-w-4xl text-2xl font-semibold leading-tight tracking-[-.04em] sm:text-3xl">{publication.title}</Heading>
                <Authors authors={publication.authors} />
                {publication.venue && <p className="mt-1 text-sm italic text-black/50">{publication.venue}</p>}
                {publication.abstract && <p className={`mt-5 max-w-3xl text-sm leading-7 text-black/58 ${compact ? "line-clamp-3" : ""}`}>{publication.abstract}</p>}
                {links.length > 0 && (
                  <div className="mt-7 flex flex-wrap gap-x-7 gap-y-3">
                    {links.map(({ href, label, icon: Icon }) => (
                      <a key={label} href={href} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 border-b border-black pb-1.5 text-xs font-semibold uppercase tracking-[.15em]">
                        {label} <Icon size={14} className="transition-transform group-hover:-translate-y-0.5" />
                      </a>
                    ))}
                  </div>
                )}
              </div>
              <div className="md:text-right">
                <span className={`inline-block px-3 py-2 text-[10px] font-semibold uppercase tracking-[.12em] ${publication.status.toLowerCase() === "published" ? "bg-ink text-white" : "border border-black/20 text-black/60"}`}>{publication.status}</span>
              </div>
            </article>
          </Reveal>
        )
      })}
    </div>
  )
}
