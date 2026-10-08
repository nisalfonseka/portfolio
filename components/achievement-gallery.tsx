"use client"

import { AnimatePresence, motion } from "framer-motion"
import { ArrowLeft, ArrowRight, Plus, X } from "lucide-react"
import { useCallback, useEffect, useState, useSyncExternalStore } from "react"
import { createPortal } from "react-dom"
import type { GalleryImage } from "@/lib/content"
import { getLenis } from "@/components/smooth-scroll"

/** Splits tiles after the cover into alternating rows of 2 and 3 on a 6-column grid. */
function layoutRows<T>(items: T[]) {
  const rows: T[][] = []
  let index = 0
  let size = 2
  while (index < items.length) {
    const remaining = items.length - index
    const take = remaining <= 3 ? remaining : size
    rows.push(items.slice(index, index + take))
    index += take
    size = size === 2 ? 3 : 2
  }
  return rows
}

const subscribe = () => () => {}

const spanClass: Record<number, string> = { 1: "col-span-6", 2: "col-span-3", 3: "col-span-2" }
const aspectClass: Record<number, string> = { 1: "aspect-[16/9]", 2: "aspect-[4/3]", 3: "aspect-square" }

export function AchievementGallery({ images, maxTiles }: { images: GalleryImage[]; maxTiles?: number }) {
  const [active, setActive] = useState<number | null>(null)
  // True only after hydration, so the portal never causes a server/client mismatch.
  const mounted = useSyncExternalStore(subscribe, () => true, () => false)
  const [cover, ...rest] = images
  const visible = maxTiles ? rest.slice(0, Math.max(0, maxTiles - 1)) : rest
  const hidden = rest.length - visible.length

  const close = useCallback(() => setActive(null), [])
  const step = useCallback((direction: 1 | -1) => setActive((current) => current === null ? null : (current + direction + images.length) % images.length), [images.length])

  useEffect(() => {
    if (active === null) return
    const lenis = getLenis()
    lenis?.stop()
    const overflow = document.documentElement.style.overflow
    document.documentElement.style.overflow = "hidden"
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close()
      if (event.key === "ArrowRight") step(1)
      if (event.key === "ArrowLeft") step(-1)
    }
    window.addEventListener("keydown", onKey)
    return () => {
      window.removeEventListener("keydown", onKey)
      document.documentElement.style.overflow = overflow
      lenis?.start()
    }
  }, [active, close, step])

  if (!cover) return null

  let position = 0
  const tile = (item: GalleryImage, columns: number, overlay?: number) => {
    const index = ++position
    return (
      <button key={`${item.image}-${index}`} type="button" onClick={() => setActive(index)} className={`group relative overflow-hidden bg-ink ${spanClass[columns]} ${aspectClass[columns]}`} aria-label={`View photo ${index + 1} of ${images.length}: ${item.alt}`}>
        {/* Admin-managed images may come from any HTTPS image host. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={item.image} alt="" width={1200} height={900} loading="lazy" decoding="async" className="h-full w-full object-cover object-[50%_30%] transition-transform duration-700 group-hover:scale-[1.035]" />
        {overlay ? (
          <span className="absolute inset-0 grid place-items-center bg-ink/70 text-white transition-colors group-hover:bg-ink/60">
            <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[.15em]"><Plus size={15} /> {overlay} more</span>
          </span>
        ) : null}
      </button>
    )
  }

  return (
    <>
      <div className="grid grid-cols-6 gap-px border border-black/15 bg-black/15">
        <button type="button" onClick={() => setActive(0)} className="group relative col-span-6 aspect-[16/9] overflow-hidden bg-ink" aria-label={`View photo 1 of ${images.length}: ${cover.alt}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={cover.image} alt={cover.alt} width={1800} height={1012} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" />
          <span className="absolute bottom-4 right-4 bg-paper px-3 py-2 text-[10px] font-semibold uppercase tracking-[.15em] text-ink">{images.length} photos</span>
        </button>
        {layoutRows(visible).map((row, rowIndex, rows) => row.map((item, itemIndex) => {
          const isLast = rowIndex === rows.length - 1 && itemIndex === row.length - 1
          return tile(item, row.length, isLast && hidden > 0 ? hidden : undefined)
        }))}
      </div>

      {/* Portal out of the Reveal wrapper, whose transform would otherwise trap the fixed overlay under the header. */}
      {mounted && createPortal(<AnimatePresence>
        {active !== null && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Photo viewer"
            className="fixed inset-0 z-[100] flex flex-col bg-ink/95 text-white backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={close}
            data-lenis-prevent
          >
            <div className="flex h-[72px] shrink-0 items-center justify-between px-5 sm:px-8">
              <span className="text-[11px] font-semibold uppercase tracking-[.18em] text-white/60">{String(active + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}</span>
              <button type="button" onClick={close} className="grid size-10 place-items-center border border-white/25 transition-colors hover:bg-white hover:text-ink" aria-label="Close photo viewer" autoFocus><X size={18} /></button>
            </div>
            <div className="relative flex min-h-0 flex-1 items-center justify-center px-5 sm:px-20">
              <AnimatePresence mode="wait">
                <motion.img
                  key={active}
                  src={images[active].image}
                  alt={images[active].alt}
                  className="max-h-full max-w-full object-contain"
                  initial={{ opacity: 0, scale: 0.985 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  onClick={(event) => event.stopPropagation()}
                />
              </AnimatePresence>
              {images.length > 1 && (
                <>
                  <button type="button" onClick={(event) => { event.stopPropagation(); step(-1) }} className="absolute left-3 top-1/2 grid size-11 -translate-y-1/2 place-items-center border border-white/25 bg-ink/60 transition-colors hover:bg-white hover:text-ink sm:left-6" aria-label="Previous photo"><ArrowLeft size={18} /></button>
                  <button type="button" onClick={(event) => { event.stopPropagation(); step(1) }} className="absolute right-3 top-1/2 grid size-11 -translate-y-1/2 place-items-center border border-white/25 bg-ink/60 transition-colors hover:bg-white hover:text-ink sm:right-6" aria-label="Next photo"><ArrowRight size={18} /></button>
                </>
              )}
            </div>
            <p className="mx-auto max-w-3xl shrink-0 px-5 py-6 text-center text-sm leading-6 text-white/65" onClick={(event) => event.stopPropagation()}>{images[active].alt}</p>
          </motion.div>
        )}
      </AnimatePresence>, document.body)}
    </>
  )
}
