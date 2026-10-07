"use client"

import { ArrowRight, Check, Loader2 } from "lucide-react"
import { FormEvent, useState } from "react"

const fieldClass = "w-full border-b border-black/25 bg-transparent px-0 py-4 text-sm outline-none transition-colors placeholder:text-black/30 focus:border-black"

export function ContactForm() {
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle")
  const [message, setMessage] = useState("")

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setState("sending")
    setMessage("")
    const form = event.currentTarget
    const payload = Object.fromEntries(new FormData(form).entries())

    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) })
      const data = (await response.json()) as { message?: string }
      if (!response.ok) throw new Error(data.message || "The message could not be sent.")
      setState("sent")
      setMessage("Thank you. Your project note is in my inbox and I’ll reply as soon as I can.")
      form.reset()
    } catch (error) {
      setState("error")
      setMessage(error instanceof Error ? error.message : "The message could not be sent.")
    }
  }

  return (
    <form onSubmit={submit} className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
      <input name="website" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <label className="text-xs font-semibold uppercase tracking-[.12em] text-black/45">Name<input name="name" required maxLength={80} placeholder="Your name" className={fieldClass} /></label>
      <label className="text-xs font-semibold uppercase tracking-[.12em] text-black/45">Work email<input name="email" type="email" required maxLength={160} placeholder="you@company.com" className={fieldClass} /></label>
      <label className="text-xs font-semibold uppercase tracking-[.12em] text-black/45">Company / organization<input name="company" maxLength={120} placeholder="Optional" className={fieldClass} /></label>
      <label className="text-xs font-semibold uppercase tracking-[.12em] text-black/45">What are you building?<select name="service" required defaultValue="" className={fieldClass}><option value="" disabled>Select a project type</option><option>AI application</option><option>AI chatbot / RAG</option><option>AI product</option><option>Full-stack application</option><option>AI integration</option><option>Other</option></select></label>
      <label className="text-xs font-semibold uppercase tracking-[.12em] text-black/45">Expected timeline<select name="timeline" defaultValue="" className={fieldClass}><option value="">Not decided</option><option>As soon as possible</option><option>1–2 months</option><option>3–6 months</option><option>6+ months</option></select></label>
      <label className="text-xs font-semibold uppercase tracking-[.12em] text-black/45">Approximate budget<select name="budget" defaultValue="" className={fieldClass}><option value="">Prefer to discuss</option><option>Under USD 2,500</option><option>USD 2,500–5,000</option><option>USD 5,000–10,000</option><option>USD 10,000+</option></select></label>
      <label className="text-xs font-semibold uppercase tracking-[.12em] text-black/45 sm:col-span-2">Project description<textarea name="message" required minLength={20} maxLength={4000} rows={7} placeholder="Tell me about the problem, the users and where you are in the process." className={`${fieldClass} resize-y`} /></label>
      <div className="mt-3 flex flex-col items-start gap-5 sm:col-span-2 sm:flex-row sm:items-center">
        <button disabled={state === "sending"} className="inline-flex items-center gap-3 bg-ink px-6 py-4 text-xs font-semibold uppercase tracking-[.15em] text-white transition-colors hover:bg-orange-600 disabled:opacity-55">
          {state === "sending" ? <Loader2 className="animate-spin" size={16} /> : state === "sent" ? <Check size={16} /> : <ArrowRight size={16} />}
          {state === "sending" ? "Sending" : state === "sent" ? "Sent" : "Start the conversation"}
        </button>
        {message && <p role="status" className={`max-w-lg text-sm leading-6 ${state === "error" ? "text-red-700" : "text-black/55"}`}>{message}</p>}
      </div>
    </form>
  )
}
