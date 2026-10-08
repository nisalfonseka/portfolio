"use client"

import { Download } from "lucide-react"

export function PrintButton() {
  return (
    <button onClick={() => window.print()} className="inline-flex items-center gap-2 bg-ink px-5 py-3 text-xs font-semibold uppercase tracking-[.14em] text-white shadow-soft"><Download size={15} /> Save as PDF</button>
  )
}
