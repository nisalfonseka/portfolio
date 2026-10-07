import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="grid gap-14 border-b border-white/15 pb-20 lg:grid-cols-[1.6fr_.8fr_.8fr]">
          <div>
            <h2 className="display max-w-4xl text-[clamp(3.6rem,9vw,9.5rem)] font-semibold">Let&apos;s build something useful.</h2>
            <Link href="/contact" className="mt-10 inline-flex items-center gap-3 border-b border-white pb-2 text-sm font-semibold uppercase tracking-[0.16em]">
              Start a project <ArrowUpRight size={17} />
            </Link>
          </div>
          <div className="space-y-3 text-sm">
            <p className="font-semibold">Colombo, Sri Lanka</p>
            <p className="text-white/55">Working remotely worldwide</p>
            <a className="text-link inline-block text-white/75" href="mailto:nisalfonseka@gmail.com">nisalfonseka@gmail.com</a>
          </div>
          <div className="flex flex-col items-start gap-3 text-sm text-white/75">
            <a className="text-link" href="https://www.linkedin.com/in/nisalfonseka/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="text-link" href="https://github.com/nisalfonseka" target="_blank" rel="noreferrer">GitHub</a>
            <Link className="text-link" href="/achievements">Recognition</Link>
          </div>
        </div>
        <div className="flex flex-col gap-3 pt-6 text-[11px] font-medium uppercase tracking-[0.15em] text-white/45 sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} Nisal Fonseka</span>
          <span>AI Engineer · Full-Stack Developer</span>
        </div>
      </div>
    </footer>
  )
}
