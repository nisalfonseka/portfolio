import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="grid gap-14 border-b border-white/15 pb-20 sm:grid-cols-2 lg:grid-cols-[1.6fr_.65fr_.65fr_.65fr]">
          <div>
            <h2 className="display max-w-4xl text-[clamp(3.15rem,7vw,7.25rem)] font-semibold">Let&apos;s build something useful.</h2>
            <Link href="/contact" className="mt-10 inline-flex items-center gap-3 border-b border-white pb-2 text-sm font-semibold uppercase tracking-[0.16em]">
              Start a project <ArrowUpRight size={17} />
            </Link>
          </div>
          <div className="space-y-3 text-sm">
            <p className="font-semibold">Malabe, Sri Lanka</p>
            <p className="text-white/55">Working remotely worldwide</p>
            <a className="text-link inline-block text-white/75" href="mailto:hello@nisalfonseka.com">hello@nisalfonseka.com</a>
          </div>
          <nav className="flex flex-col items-start gap-3 text-sm text-white/75" aria-label="Footer navigation">
            <Link className="text-link" href="/work">Work</Link>
            <Link className="text-link" href="/services">Services</Link>
            <Link className="text-link" href="/experience">Experience</Link>
            <Link className="text-link" href="/writing">Writing</Link>
            <Link className="text-link" href="/publications">Publications</Link>
            <Link className="text-link" href="/contact">Contact</Link>
          </nav>
          <div className="flex flex-col items-start gap-3 text-sm text-white/75">
            <a className="text-link" href="https://www.linkedin.com/in/nisalfonseka/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="text-link" href="https://github.com/nisalfonseka" target="_blank" rel="noreferrer">GitHub</a>
            <Link className="text-link" href="/about">About</Link>
            <Link className="text-link" href="/achievements">Recognition</Link>
            <Link className="text-link" href="/resume">Résumé</Link>
          </div>
        </div>
        <div className="flex flex-col gap-3 pt-6 text-[11px] font-medium uppercase tracking-[0.15em] text-white/45 sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} Nisal Fonseka</span>
          <span>AI Application Engineer</span>
        </div>
      </div>
    </footer>
  )
}
