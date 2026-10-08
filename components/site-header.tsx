"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { useEffect, useState } from "react"

const navigation = [
  ["Work", "/work"],
  ["Services", "/services"],
  ["Experience", "/experience"],
  ["About", "/about"],
  ["Writing", "/writing"],
  ["Contact", "/contact"],
]

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [pastHero, setPastHero] = useState(false)
  const onHero = pathname === "/"
  const darkHeader = onHero && !pastHero
  const raisedHeader = scrolled || open

  useEffect(() => {
    const updateHeader = () => {
      const hero = document.querySelector<HTMLElement>("[data-site-hero]")
      const heroBottom = hero ? hero.offsetTop + hero.offsetHeight : window.innerHeight

      setScrolled(window.scrollY > 24)
      setPastHero(pathname === "/" && window.scrollY >= heroBottom - 72)
    }

    updateHeader()
    window.addEventListener("scroll", updateHeader, { passive: true })
    window.addEventListener("resize", updateHeader)
    return () => {
      window.removeEventListener("scroll", updateHeader)
      window.removeEventListener("resize", updateHeader)
    }
  }, [pathname])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-[background-color,color,backdrop-filter] duration-300 ${darkHeader ? "text-white" : "text-ink"} ${raisedHeader ? darkHeader ? "bg-black/35 backdrop-blur-xl" : "bg-[#f4f1ea]/90 backdrop-blur-xl" : "bg-transparent backdrop-blur-none"}`}>
      <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link href="/" className="group flex items-center gap-3" aria-label="Nisal Fonseka home">
          <span className="grid size-9 place-items-center">
            <Image src={darkHeader ? "/images/logowhite.png" : "/images/logo.png"} alt="" width={30} height={30} priority />
          </span>
          <span className="text-[12px] font-semibold uppercase tracking-[0.18em]">Nisal Fonseka</span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {navigation.map(([label, href]) => (
            <Link key={href} href={href} aria-current={pathname === href ? "page" : undefined} className={`text-[11px] font-semibold uppercase tracking-[0.16em] transition-opacity hover:opacity-55 ${pathname === href ? "opacity-100" : "opacity-70"}`}>
              {label}
            </Link>
          ))}
          <Link href="/resume" className={`border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors ${darkHeader ? "border-white/40 hover:bg-white hover:text-black" : "border-black/30 hover:bg-black hover:text-white"}`}>
            Résumé
          </Link>
        </nav>

        <button type="button" className="grid size-10 place-items-center lg:hidden" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label="Toggle navigation">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <nav className={`px-5 py-6 lg:hidden ${darkHeader ? "bg-black/95" : "bg-paper"}`} aria-label="Mobile navigation">
          <div className="grid gap-1">
            {[...navigation, ["Résumé", "/resume"]].map(([label, href]) => (
              <Link key={href} href={href} onClick={() => setOpen(false)} className="border-b border-current/10 py-4 text-lg font-semibold">
                {label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
