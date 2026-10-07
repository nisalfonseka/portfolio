"use client"

import { MeshGradient, PulsingBorder } from "@paper-design/shaders-react"
import { motion } from "framer-motion"

export default function HeroEffects({ active }: { active: boolean }) {
  return (
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
      <motion.div className="absolute right-7 top-28 z-20 hidden size-24 items-center justify-center lg:flex" animate={active ? { scale: 1.08 } : { scale: 1 }}>
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
        <motion.svg className="absolute inset-0 size-full" viewBox="0 0 100 100" animate={{ rotate: 360 }} transition={{ duration: 22, repeat: Infinity, ease: "linear" }} aria-hidden="true">
          <defs><path id="hero-circle" d="M 50,50 m -39,0 a 39,39 0 1,1 78,0 a 39,39 0 1,1 -78,0" /></defs>
          <text className="fill-white/75 text-[8px] font-semibold tracking-[.12em]">
            <textPath href="#hero-circle">AI · SOFTWARE · RESEARCH · PRODUCT · </textPath>
          </text>
        </motion.svg>
      </motion.div>
    </>
  )
}
