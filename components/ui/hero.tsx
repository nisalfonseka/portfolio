"use client"

import { MeshGradient, PulsingBorder } from "@paper-design/shaders-react"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowDownRight, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const disciplines = ["AI ENGINEERING", "RAG SYSTEMS", "FULL-STACK", "PRODUCT ENGINEERING"]

export default function Hero() {
  const [active, setActive] = useState(false)
  const reducedMotion = useReducedMotion()

  return (
    <section
      className="relative min-h-[760px] overflow-hidden bg-black text-white md:min-h-screen"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,#164e63_0%,#000_58%)]" />
      {!reducedMotion && (
        <>
          <MeshGradient
            className="absolute inset-0 h-full w-full opacity-95"
            colors={["#000000", "#06b6d4", "#082f49", "#f97316", "#000000"]}
            speed={0.22}
            distortion={0.7}
            swirl={0.55}
            grainMixer={0.08}
            grainOverlay={0.06}
          />
          <MeshGradient
            className="absolute inset-0 h-full w-full opacity-35 mix-blend-screen"
            colors={["#000000", "#ffffff", "#06b6d4", "#f97316"]}
            speed={0.12}
            distortion={1.1}
            swirl={0.35}
          />
        </>
      )}
      <div className="hero-vignette absolute inset-0" />
      <div className="absolute inset-0 opacity-[.08] [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)] [background-size:64px_64px]" />

      <div className="relative z-10 mx-auto flex min-h-[760px] max-w-[1440px] flex-col justify-end px-5 pb-8 pt-28 sm:px-8 md:min-h-screen lg:px-12 lg:pb-10">
        <motion.div
          className="mb-auto flex items-start justify-between pt-4 text-[10px] font-semibold uppercase tracking-[.2em] text-white/60 sm:text-[11px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <span>Colombo · Sri Lanka</span>
          <span className="hidden text-right sm:block">Available for selected<br />global projects</span>
        </motion.div>

        <motion.div
          className="mb-5 inline-flex w-fit items-center gap-3 border border-white/20 bg-black/15 px-4 py-2 text-[10px] font-semibold uppercase tracking-[.18em] backdrop-blur-md"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.2 }}
        >
          <span className="size-1.5 rounded-full bg-cyan shadow-[0_0_14px_#22d3ee]" />
          AI Engineer · Full-Stack Developer
        </motion.div>

        <motion.h1
          className="display max-w-[1120px] text-[clamp(4.15rem,10.5vw,10.5rem)] font-semibold"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
        >
          I build intelligent software products.
        </motion.h1>

        <motion.div
          className="mt-8 grid gap-8 border-t border-white/20 pt-6 md:grid-cols-[1.3fr_1fr_auto] md:items-end"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
        >
          <p className="max-w-xl text-sm leading-6 text-white/68 sm:text-base sm:leading-7">
            From LLM and RAG systems to complete full-stack products, I engineer the path from an ambitious idea to reliable software.
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-[10px] font-semibold tracking-[.14em] text-white/55">
            {disciplines.map((item) => <span key={item}>{item}</span>)}
          </div>
          <div className="flex gap-3">
            <Link href="/work" className="inline-flex items-center gap-2 border border-white/35 px-5 py-3 text-[11px] font-semibold uppercase tracking-[.15em] transition-colors hover:bg-white hover:text-black">
              View work <ArrowDownRight size={15} />
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-white px-5 py-3 text-[11px] font-semibold uppercase tracking-[.15em] text-black transition-colors hover:bg-orange-500 hover:text-white">
              Start a project <ArrowUpRight size={15} />
            </Link>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute right-7 top-28 z-20 hidden size-24 items-center justify-center lg:flex"
        animate={active && !reducedMotion ? { scale: 1.08 } : { scale: 1 }}
      >
        {!reducedMotion && (
          <PulsingBorder
            colors={["#06b6d4", "#0891b2", "#f97316", "#ffffff"]}
            colorBack="#00000000"
            speed={1.25}
            roundness={1}
            thickness={0.12}
            softness={0.25}
            intensity={4}
            spots={7}
            spotSize={0.12}
            pulse={0.14}
            smoke={0.4}
            smokeSize={3}
            className="size-16 rounded-full"
          />
        )}
        <motion.svg className="absolute inset-0 size-full" viewBox="0 0 100 100" animate={reducedMotion ? undefined : { rotate: 360 }} transition={{ duration: 22, repeat: Infinity, ease: "linear" }} aria-hidden="true">
          <defs><path id="hero-circle" d="M 50,50 m -39,0 a 39,39 0 1,1 78,0 a 39,39 0 1,1 -78,0" /></defs>
          <text className="fill-white/75 text-[8px] font-semibold tracking-[.12em]">
            <textPath href="#hero-circle">AI · SOFTWARE · RESEARCH · PRODUCT · </textPath>
          </text>
        </motion.svg>
      </motion.div>
    </section>
  )
}
