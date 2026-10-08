"use client"

import Lenis from "lenis"
import "lenis/dist/lenis.css"
import { usePathname } from "next/navigation"
import { useEffect } from "react"

let instance: Lenis | null = null

/** The active Lenis instance, or null when smooth scrolling is disabled (e.g. reduced motion). */
export function getLenis() {
  return instance
}

export function SmoothScroll() {
  const pathname = usePathname()

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.1,
      anchors: { offset: -88 },
      allowNestedScroll: true,
    })
    instance = lenis

    return () => {
      lenis.destroy()
      instance = null
    }
  }, [])

  // Cancel any in-flight smooth scroll on navigation so it never fights Next.js scroll restoration.
  useEffect(() => {
    if (!instance) return
    instance.stop()
    instance.start()
    instance.resize()
  }, [pathname])

  return null
}
