import Link from "next/link"
import { ArrowUpRight, MessageCircle } from "lucide-react"
import { whatsappDisplayNumber, whatsappUrl } from "@/lib/contact"

export function SiteFooter() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
        <div className="grid gap-8 border-b border-white/15 pb-10 sm:grid-cols-2 sm:gap-14 sm:pb-20 lg:grid-cols-[1.6fr_.65fr_.65fr_.65fr]">
          <div>
            <h2 className="display max-w-4xl text-[clamp(2.25rem,10vw,3.15rem)] font-semibold sm:text-[clamp(3.15rem,7vw,7.25rem)]">Let&apos;s build something useful.</h2>
            <Link href="/contact" className="mt-6 inline-flex items-center gap-3 border-b border-white pb-2 text-sm font-semibold uppercase tracking-[0.16em] sm:mt-10">
              Start a project <ArrowUpRight size={17} />
            </Link>
          </div>
          <div className="space-y-3 text-sm">
            <p className="font-semibold">Malabe, Sri Lanka</p>
            <p className="text-white/55">Working remotely worldwide</p>
            <a className="text-link inline-block text-white/75" href="mailto:hello@nisalfonseka.com">hello@nisalfonseka.com</a>
            <a className="inline-flex items-center gap-2 text-[#61e990]" href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={16} /> WhatsApp {whatsappDisplayNumber}</a>
          </div>
          <div className="grid grid-cols-2 gap-6 sm:contents">
            <nav className="flex flex-col items-start gap-2.5 text-sm text-white/75 sm:gap-3" aria-label="Footer navigation">
              <Link className="text-link" href="/work">Work</Link>
              <Link className="text-link" href="/services">Services</Link>
              <Link className="text-link" href="/experience">Experience</Link>
              <Link className="text-link" href="/writing">Writing</Link>
              <Link className="text-link" href="/publications">Publications</Link>
              <Link className="text-link" href="/contact">Contact</Link>
            </nav>
            <div className="flex flex-col items-start gap-2.5 text-sm text-white/75 sm:gap-3">
              <a className="text-link" href="https://www.linkedin.com/in/nisalfonseka/" target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="text-link" href="https://github.com/nisalfonseka" target="_blank" rel="noreferrer">GitHub</a>
              <Link className="text-link" href="/about">About</Link>
              <Link className="text-link" href="/achievements">Recognition</Link>
              <Link className="text-link" href="/resume">Résumé</Link>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-x-4 gap-y-2 pt-5 text-[10px] font-medium uppercase tracking-[0.13em] text-white/45 sm:pt-6 sm:text-[11px] sm:tracking-[0.15em]">
          <span>© {new Date().getFullYear()} Nisal Fonseka</span>
          <span>AI Application Engineer</span>
        </div>
      </div>
    </footer>
  )
}
