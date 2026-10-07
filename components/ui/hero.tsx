"use client"

import { motion, useReducedMotion } from "framer-motion"
import { ArrowDownRight, ArrowUpRight } from "lucide-react"
import dynamic from "next/dynamic"
import Link from "next/link"
import { useEffect, useState } from "react"

const HeroEffects = dynamic(() => import("@/components/ui/hero-effects"), { ssr: false })

export default function Hero() {
  const [active, setActive] = useState(false)
  const [showEffects, setShowEffects] = useState(false)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px) and (prefers-reduced-motion: no-preference)")
    const update = () => setShowEffects(media.matches)
    const timer = window.setTimeout(update, 250)
    media.addEventListener("change", update)
    return () => { window.clearTimeout(timer); media.removeEventListener("change", update) }
  }, [])

  return (
    <section
      className="relative min-h-[760px] overflow-hidden bg-black text-white md:min-h-screen"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,#164e63_0%,#000_58%)]" />
      {showEffects && <HeroEffects active={active} />}
      <div className="hero-vignette absolute inset-0" />

      <div className="relative z-10 mx-auto flex min-h-[760px] max-w-[1440px] -translate-y-[4vh] flex-col justify-center px-5 pb-8 pt-28 sm:px-8 md:min-h-screen lg:px-12 lg:pb-10">
        <motion.h1
          className="display max-w-[1120px] text-[clamp(4.15rem,10.5vw,10.5rem)] font-semibold"
          initial={reducedMotion ? false : { opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          I build intelligent software products.
        </motion.h1>

        <motion.div
          className="mt-8 grid gap-8 border-t border-white/20 pt-6 md:grid-cols-[1fr_auto] md:items-end"
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
        >
          <p className="max-w-xl text-sm leading-6 text-white/68 sm:text-base sm:leading-7">
            From LLM and RAG systems to complete full-stack products, I engineer the path from an ambitious idea to reliable software.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/work" className="inline-flex items-center justify-center gap-2 border border-white/35 px-5 py-3 text-[11px] font-semibold uppercase tracking-[.15em] transition-colors hover:bg-white hover:text-black">
              View work <ArrowDownRight size={15} />
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white px-5 py-3 text-[11px] font-semibold uppercase tracking-[.15em] text-black transition-colors hover:bg-orange-500 hover:text-white">
              Start a project <ArrowUpRight size={15} />
            </Link>
          </div>
        </motion.div>
      </div>

    </section>
  )
}
