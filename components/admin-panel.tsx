"use client"

import { FormEvent, useEffect, useState } from "react"
import { ArrowDown, ArrowUp, Check, FileUp, ImagePlus, Loader2, LogOut, Mail, Plus, Save, Send, Trash2 } from "lucide-react"
import type { Achievement, GalleryImage, Inquiry, Project, Publication, SiteContent } from "@/lib/content"

type Tab = "projects" | "achievements" | "publications" | "inquiries" | "email"
type ListTab = "projects" | "achievements" | "publications"
type ListItem = Project | Achievement | Publication

const listLabels: Record<ListTab, string> = { projects: "project", achievements: "achievement", publications: "publication" }

type EmailDraft = {
  recipientName: string
  recipientEmail: string
  subject: string
  message: string
}

const field = "mt-2 w-full border border-black/20 bg-white px-3 py-2.5 text-sm outline-none focus:border-black"
const label = "block text-[10px] font-semibold uppercase tracking-[.13em] text-black/45"

const emptyProject = (number: number): Project => ({
  slug: `new-project-${Date.now()}`,
  number: String(number).padStart(2, "0"),
  title: "New project",
  summary: "A concise explanation of the work and why it matters.",
  description: "Describe the product, the context and the engineering scope in a little more detail.",
  category: "Product Engineering",
  tags: ["Next.js"],
  metric: "01",
  metricLabel: "key result",
  role: "AI Engineer · Full-Stack Developer",
  timeline: "2026",
  status: "Active",
  problem: "Describe the real problem that needed to be solved and who experienced it.",
  approach: "Explain the architecture and implementation approach chosen for the project.",
  decisions: ["Explain one important engineering decision."],
  results: ["State one honest, measurable or observable result."],
  image: "/images/work-ai-assistant.svg",
  externalUrl: "",
  repoUrl: "",
  showOnHome: false,
})

const emptyAchievement = (): Achievement => ({
  id: `achievement-${Date.now()}`,
  title: "New milestone",
  year: "2026",
  category: "Achievement",
  description: "Describe why this milestone matters.",
  image: "/images/achievement-engineering.svg",
  imageAlt: "Achievement image",
  gallery: [],
  location: "",
  link: "",
})

const emptyPublication = (): Publication => ({
  id: `publication-${Date.now()}`,
  title: "New publication",
  authors: "Nisal Fonseka",
  venue: "",
  year: "2026",
  type: "Conference paper",
  status: "Under review",
  abstract: "",
  url: "",
  pdf: "",
  doi: "",
})

const itemKey = (item: ListItem) => ("slug" in item ? item.slug : item.id)

function ImageField({ value, onChange, title = "Image", kind = "image" }: { value: string; onChange: (value: string) => void; title?: string; kind?: "image" | "pdf" }) {
  const [uploading, setUploading] = useState(false)
  const [preview, setPreview] = useState("")
  const previewUrl = preview || (value.startsWith("neon:") ? `/api/admin/media?key=${encodeURIComponent(value)}` : value)
  const isPdf = kind === "pdf"

  async function upload(file?: File) {
    if (!file) return
    setUploading(true)
    const body = new FormData()
    body.append("file", file)
    try {
      const response = await fetch("/api/admin/upload", { method: "POST", body })
      const data = (await response.json()) as { key?: string; url?: string; message?: string }
      if (!response.ok || !data.key) throw new Error(data.message || "Upload failed")
      onChange(data.key)
      setPreview(data.url || "")
    } catch (error) {
      window.alert(error instanceof Error ? error.message : "Upload failed")
    } finally {
      setUploading(false)
    }
  }

  return (
    <div>
      <span className={label}>{title}</span>
      <div className={`mt-2 grid gap-3 ${isPdf ? "" : "sm:grid-cols-[160px_1fr]"}`}>
        {!isPdf && (
          <div className="aspect-[4/3] overflow-hidden border border-black/15 bg-black/5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            {previewUrl ? <img src={previewUrl} alt="Current content preview" className="h-full w-full object-cover" /> : null}
          </div>
        )}
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <label className="inline-flex cursor-pointer items-center gap-2 border border-black/25 bg-white px-4 py-3 text-xs font-semibold uppercase tracking-[.12em]">
              {uploading ? <Loader2 className="animate-spin" size={15} /> : isPdf ? <FileUp size={15} /> : <ImagePlus size={15} />}
              {uploading ? "Uploading" : "Upload to Neon"}
              <input type="file" accept={isPdf ? "application/pdf" : "image/*"} className="hidden" disabled={uploading} onChange={(event) => upload(event.target.files?.[0])} />
            </label>
            {isPdf && previewUrl && <a href={previewUrl} target="_blank" rel="noreferrer" className="text-xs font-semibold underline underline-offset-4">Open current PDF</a>}
          </div>
          <input value={value} onChange={(event) => { onChange(event.target.value); setPreview("") }} className={field} placeholder={isPdf ? "https://…/paper.pdf or neon:…" : "/image.svg, https://… or neon:…"} />
          <p className="mt-2 text-[11px] leading-5 text-black/45">Uploads are private in Neon (max 8 MB). The public site receives a temporary signed URL.</p>
        </div>
      </div>
    </div>
  )
}

function ProjectEditor({ project, update }: { project: Project; update: (project: Project) => void }) {
  const set = <K extends keyof Project>(key: K, value: Project[K]) => update({ ...project, [key]: value })
  const lines = (value: string) => value.split("\n").map((item) => item.trim()).filter(Boolean)

  return (
    <div className="grid gap-6">
      <label className="flex cursor-pointer items-center gap-3 border border-black/15 bg-white px-4 py-3 text-sm font-medium">
        <input type="checkbox" checked={project.showOnHome !== false} onChange={(e) => set("showOnHome", e.target.checked)} className="size-4 accent-black" />
        Show on home page
        <span className="ml-auto text-xs font-normal text-black/45">Always listed on /work</span>
      </label>
      <div className="grid gap-5 sm:grid-cols-2"><label className={label}>Title<input value={project.title} onChange={(e) => set("title", e.target.value)} className={field} /></label><label className={label}>Slug<input value={project.slug} onChange={(e) => set("slug", e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""))} className={field} /></label></div>
      <label className={label}>Summary<textarea value={project.summary} onChange={(e) => set("summary", e.target.value)} rows={2} className={field} /></label>
      <label className={label}>Description<textarea value={project.description} onChange={(e) => set("description", e.target.value)} rows={3} className={field} /></label>
      <div className="grid gap-5 sm:grid-cols-3"><label className={label}>Number<input value={project.number} onChange={(e) => set("number", e.target.value)} className={field} /></label><label className={label}>Category<input value={project.category} onChange={(e) => set("category", e.target.value)} className={field} /></label><label className={label}>Status<input value={project.status} onChange={(e) => set("status", e.target.value)} className={field} /></label></div>
      <div className="grid gap-5 sm:grid-cols-2"><label className={label}>Role<input value={project.role} onChange={(e) => set("role", e.target.value)} className={field} /></label><label className={label}>Timeline<input value={project.timeline} onChange={(e) => set("timeline", e.target.value)} className={field} /></label></div>
      <div className="grid gap-5 sm:grid-cols-2"><label className={label}>Metric<input value={project.metric} onChange={(e) => set("metric", e.target.value)} className={field} /></label><label className={label}>Metric label<input value={project.metricLabel} onChange={(e) => set("metricLabel", e.target.value)} className={field} /></label></div>
      <label className={label}>Tags, comma separated<input value={project.tags.join(", ")} onChange={(e) => set("tags", e.target.value.split(",").map((item) => item.trim()).filter(Boolean))} className={field} /></label>
      <ImageField value={project.image} onChange={(value) => set("image", value)} />
      <label className={label}>Problem<textarea value={project.problem} onChange={(e) => set("problem", e.target.value)} rows={4} className={field} /></label>
      <label className={label}>Approach<textarea value={project.approach} onChange={(e) => set("approach", e.target.value)} rows={4} className={field} /></label>
      <label className={label}>Engineering decisions, one per line<textarea value={project.decisions.join("\n")} onChange={(e) => set("decisions", lines(e.target.value))} rows={5} className={field} /></label>
      <label className={label}>Results, one per line<textarea value={project.results.join("\n")} onChange={(e) => set("results", lines(e.target.value))} rows={5} className={field} /></label>
      <div className="grid gap-5 sm:grid-cols-2"><label className={label}>Live URL<input value={project.externalUrl || ""} onChange={(e) => set("externalUrl", e.target.value)} className={field} /></label><label className={label}>Repository URL<input value={project.repoUrl || ""} onChange={(e) => set("repoUrl", e.target.value)} className={field} /></label></div>
    </div>
  )
}

function AchievementEditor({ achievement, update }: { achievement: Achievement; update: (achievement: Achievement) => void }) {
  const set = <K extends keyof Achievement>(key: K, value: Achievement[K]) => update({ ...achievement, [key]: value })
  return (
    <div className="grid gap-6">
      <div className="grid gap-5 sm:grid-cols-2"><label className={label}>Title<input value={achievement.title} onChange={(e) => set("title", e.target.value)} className={field} /></label><label className={label}>ID<input value={achievement.id} onChange={(e) => set("id", e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""))} className={field} /></label></div>
      <div className="grid gap-5 sm:grid-cols-2"><label className={label}>Category<input value={achievement.category} onChange={(e) => set("category", e.target.value)} className={field} /></label><label className={label}>Year<input value={achievement.year} onChange={(e) => set("year", e.target.value)} className={field} /></label></div>
      <label className={label}>Description<textarea value={achievement.description} onChange={(e) => set("description", e.target.value)} rows={4} className={field} /></label>
      <div className="grid gap-5 sm:grid-cols-2"><label className={label}>Location, optional<input value={achievement.location || ""} onChange={(e) => set("location", e.target.value)} className={field} placeholder="SLT Auditorium, Colombo" /></label><label className={label}>Link, optional<input value={achievement.link || ""} onChange={(e) => set("link", e.target.value)} className={field} placeholder="https://…" /></label></div>
      <ImageField title="Cover image" value={achievement.image} onChange={(value) => set("image", value)} />
      <label className={label}>Cover image alternative text<input value={achievement.imageAlt} onChange={(e) => set("imageAlt", e.target.value)} className={field} /></label>
      <GalleryEditor gallery={achievement.gallery ?? []} update={(gallery) => set("gallery", gallery)} />
    </div>
  )
}

function GalleryEditor({ gallery, update }: { gallery: GalleryImage[]; update: (gallery: GalleryImage[]) => void }) {
  const setItem = (index: number, item: GalleryImage) => update(gallery.map((entry, position) => position === index ? item : entry))
  const move = (index: number, direction: -1 | 1) => {
    const target = index + direction
    if (target < 0 || target >= gallery.length) return
    const next = [...gallery]
    ;[next[index], next[target]] = [next[target], next[index]]
    update(next)
  }

  return (
    <div className="border-t border-black/15 pt-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold tracking-[-.03em]">Photo gallery</h3>
          <p className="mt-1 text-xs leading-5 text-black/45">Add event photos to show this as a featured story with a photo viewer. Leave empty for a standard card.</p>
        </div>
        <button type="button" onClick={() => update([...gallery, { image: "", alt: "" }])} className="inline-flex shrink-0 items-center gap-2 bg-ink px-3 py-2.5 text-xs font-semibold text-white"><Plus size={14} /> Add photo</button>
      </div>
      <div className="mt-5 grid gap-4">
        {gallery.map((item, index) => (
          <div key={index} className="border border-black/15 bg-white p-4">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-[10px] font-semibold uppercase tracking-[.13em] text-black/45">Photo {index + 1}</span>
              <div className="flex gap-2">
                <button type="button" onClick={() => move(index, -1)} className="grid size-8 place-items-center border border-black/15" aria-label="Move photo up"><ArrowUp size={13} /></button>
                <button type="button" onClick={() => move(index, 1)} className="grid size-8 place-items-center border border-black/15" aria-label="Move photo down"><ArrowDown size={13} /></button>
                <button type="button" onClick={() => update(gallery.filter((_, position) => position !== index))} className="grid size-8 place-items-center border border-black/15 text-red-700" aria-label="Remove photo"><Trash2 size={13} /></button>
              </div>
            </div>
            <ImageField title="Photo" value={item.image} onChange={(image) => setItem(index, { ...item, image })} />
            <label className={`${label} mt-4`}>Caption / alternative text<input value={item.alt} onChange={(e) => setItem(index, { ...item, alt: e.target.value })} className={field} placeholder="Describe who and what is in the photo" /></label>
          </div>
        ))}
      </div>
    </div>
  )
}

function PublicationEditor({ publication, update }: { publication: Publication; update: (publication: Publication) => void }) {
  const set = <K extends keyof Publication>(key: K, value: Publication[K]) => update({ ...publication, [key]: value })
  return (
    <div className="grid gap-6">
      <label className={label}>Title<textarea value={publication.title} onChange={(e) => set("title", e.target.value)} rows={2} className={field} /></label>
      <div className="grid gap-5 sm:grid-cols-[1fr_200px]"><label className={label}>Authors, comma separated<input value={publication.authors} onChange={(e) => set("authors", e.target.value)} className={field} placeholder="Nisal Fonseka, Co-author Name" /></label><label className={label}>ID<input value={publication.id} onChange={(e) => set("id", e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""))} className={field} /></label></div>
      <label className={label}>Venue — journal, conference or repository<input value={publication.venue} onChange={(e) => set("venue", e.target.value)} className={field} placeholder="Proceedings of …" /></label>
      <div className="grid gap-5 sm:grid-cols-3">
        <label className={label}>Year<input value={publication.year} onChange={(e) => set("year", e.target.value)} className={field} /></label>
        <label className={label}>Type<input list="publication-types" value={publication.type} onChange={(e) => set("type", e.target.value)} className={field} /></label>
        <label className={label}>Status<input list="publication-statuses" value={publication.status} onChange={(e) => set("status", e.target.value)} className={field} /></label>
      </div>
      <datalist id="publication-types">{["Journal article", "Conference paper", "Workshop paper", "Preprint", "Thesis", "Book chapter", "Poster"].map((item) => <option key={item} value={item} />)}</datalist>
      <datalist id="publication-statuses">{["Published", "Accepted", "Under review", "Preprint", "In preparation"].map((item) => <option key={item} value={item} />)}</datalist>
      <label className={label}>Abstract<textarea value={publication.abstract} onChange={(e) => set("abstract", e.target.value)} rows={7} className={field} /></label>
      <div className="grid gap-5 sm:grid-cols-2"><label className={label}>Paper URL<input value={publication.url || ""} onChange={(e) => set("url", e.target.value)} className={field} placeholder="https://…" /></label><label className={label}>DOI<input value={publication.doi || ""} onChange={(e) => set("doi", e.target.value)} className={field} placeholder="10.xxxx/xxxxx" /></label></div>
      <ImageField title="PDF, optional" kind="pdf" value={publication.pdf || ""} onChange={(value) => set("pdf", value)} />
    </div>
  )
}

function EmailComposer({ draft, update }: { draft: EmailDraft; update: (draft: EmailDraft) => void }) {
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState("")

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSending(true)
    setSent(false)
    setError("")

    try {
      const response = await fetch("/api/admin/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(draft),
      })
      const data = await response.json() as { message?: string }
      if (!response.ok) throw new Error(data.message || "Could not send this email.")
      setSent(true)
    } catch (emailError) {
      setError(emailError instanceof Error ? emailError.message : "Could not send this email.")
    } finally {
      setSending(false)
    }
  }

  const set = (key: keyof EmailDraft, value: string) => {
    setSent(false)
    update({ ...draft, [key]: value })
  }

  return (
    <section className="mt-8 max-w-4xl border border-black/15 bg-[#f7f5ef] p-5 sm:p-8">
      <div className="border-b border-black/15 pb-6">
        <h2 className="text-2xl font-semibold tracking-[-.04em]">Send client email</h2>
        <p className="mt-2 text-sm leading-6 text-black/50">Transactional email sent through Brevo as Nisal Fonseka &lt;hello@nisalfonseka.com&gt;.</p>
      </div>
      <form onSubmit={submit} className="mt-7 grid gap-6">
        <div className="grid gap-5 sm:grid-cols-2">
          <label className={label}>Client name<input value={draft.recipientName} onChange={(event) => set("recipientName", event.target.value)} maxLength={100} className={field} placeholder="Optional" /></label>
          <label className={label}>Client email<input value={draft.recipientEmail} onChange={(event) => set("recipientEmail", event.target.value)} type="email" required maxLength={160} className={field} placeholder="client@example.com" /></label>
        </div>
        <label className={label}>Subject<input value={draft.subject} onChange={(event) => set("subject", event.target.value)} required minLength={2} maxLength={200} className={field} placeholder="Project follow-up" /></label>
        <label className={label}>Message<textarea value={draft.message} onChange={(event) => set("message", event.target.value)} required minLength={2} maxLength={12000} rows={13} className={field} placeholder={"Hi,\n\nThank you for getting in touch...\n\nBest,\nNisal"} /></label>
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <button disabled={sending} className="inline-flex items-center gap-2 bg-ink px-5 py-3 text-xs font-semibold uppercase tracking-[.12em] text-white disabled:opacity-50">
            {sending ? <Loader2 className="animate-spin" size={15} /> : sent ? <Check size={15} /> : <Send size={15} />}
            {sending ? "Sending" : sent ? "Email sent" : "Send email"}
          </button>
          {error && <p role="alert" className="text-sm text-red-700">{error}</p>}
          {sent && <p role="status" className="text-sm text-emerald-700">Brevo accepted the email for delivery.</p>}
        </div>
      </form>
    </section>
  )
}

export function AdminPanel() {
  const [loading, setLoading] = useState(true)
  const [authenticated, setAuthenticated] = useState(false)
  const [configured, setConfigured] = useState(true)
  const [content, setContent] = useState<SiteContent | null>(null)
  const [inquiries, setInquiries] = useState<Inquiry[]>([])
  const [tab, setTab] = useState<Tab>("projects")
  const [selected, setSelected] = useState(0)
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)
  const [error, setError] = useState("")
  const [emailDraft, setEmailDraft] = useState<EmailDraft>({ recipientName: "", recipientEmail: "", subject: "", message: "" })
  const isListTab = tab === "projects" || tab === "achievements" || tab === "publications"

  async function load() {
    const session = await fetch("/api/admin/session", { cache: "no-store" }).then((response) => response.json()) as { authenticated: boolean; configured: boolean }
    setAuthenticated(session.authenticated)
    setConfigured(session.configured)
    if (session.authenticated) {
      const [site, inbox] = await Promise.all([fetch("/api/admin/content", { cache: "no-store" }), fetch("/api/admin/inquiries", { cache: "no-store" })])
      setContent(await site.json())
      setInquiries(await inbox.json())
    }
    setLoading(false)
  }

  useEffect(() => {
    // Initial data is external state loaded from the authenticated admin APIs.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    void load()
  }, [])

  async function login(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError("")
    const password = String(new FormData(event.currentTarget).get("password") || "")
    const response = await fetch("/api/admin/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ password }) })
    const data = await response.json() as { message?: string }
    if (!response.ok) return setError(data.message || "Could not sign in.")
    setLoading(true)
    await load()
  }

  async function save() {
    if (!content) return
    setSaving(true); setSaved(false); setError("")
    const response = await fetch("/api/admin/content", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(content) })
    const data = await response.json() as { message?: string }
    setSaving(false)
    if (!response.ok) return setError(data.message || "Could not save.")
    setSaved(true)
    setTimeout(() => setSaved(false), 2500)
  }

  async function logout() { await fetch("/api/admin/logout", { method: "POST" }); setAuthenticated(false); setContent(null) }

  function move(direction: -1 | 1) {
    if (!content || !isListTab) return
    const list = [...content[tab]] as ListItem[]
    const target = selected + direction
    if (target < 0 || target >= list.length) return
    ;[list[selected], list[target]] = [list[target], list[selected]]
    setContent({ ...content, [tab]: list })
    setSelected(target)
  }

  function addItem() {
    if (!content || !isListTab) return
    const item = tab === "projects" ? emptyProject(content.projects.length + 1) : tab === "achievements" ? emptyAchievement() : emptyPublication()
    setContent({ ...content, [tab]: [...content[tab], item] })
    setSelected(content[tab].length)
  }

  function removeItem() {
    if (!content || !isListTab || !window.confirm("Delete this item?")) return
    setContent({ ...content, [tab]: (content[tab] as ListItem[]).filter((_, index) => index !== selected) })
    setSelected(Math.max(0, selected - 1))
  }

  if (loading) return <div className="grid min-h-[70vh] place-items-center"><Loader2 className="animate-spin" /></div>

  if (!authenticated) return (
    <section className="mx-auto max-w-md px-5 py-24">
      <h1 className="text-4xl font-semibold tracking-[-.055em]">Portfolio admin</h1>
      <p className="mt-4 text-sm leading-6 text-black/55">Manage selected work, recognition, publications and project inquiries.</p>
      {!configured && <p className="mt-5 border border-orange-300 bg-orange-50 p-4 text-sm text-orange-900">Add ADMIN_PASSWORD and AUTH_SECRET to `.env` and Vercel first.</p>}
      <form onSubmit={login} className="mt-10"><label className={label}>Password<input name="password" type="password" required className={field} /></label><button disabled={!configured} className="mt-5 w-full bg-ink px-5 py-3 text-xs font-semibold uppercase tracking-[.14em] text-white disabled:opacity-40">Sign in</button>{error && <p className="mt-4 text-sm text-red-700">{error}</p>}</form>
    </section>
  )

  if (!content) return null
  const items: ListItem[] = isListTab ? content[tab] : []

  return (
    <div className="mx-auto max-w-[1500px] px-5 py-12 sm:px-8 lg:px-12">
      <header className="flex flex-col gap-6 border-b border-black/15 pb-8 sm:flex-row sm:items-end sm:justify-between"><div><h1 className="text-4xl font-semibold tracking-[-.055em]">Portfolio admin</h1><p className="mt-2 text-sm text-black/50">Neon Postgres · private Neon Object Storage</p></div><div className="flex gap-3"><button onClick={save} disabled={saving} className="inline-flex items-center gap-2 bg-ink px-5 py-3 text-xs font-semibold uppercase tracking-[.12em] text-white">{saving ? <Loader2 className="animate-spin" size={15} /> : saved ? <Check size={15} /> : <Save size={15} />}{saving ? "Saving" : saved ? "Saved" : "Save changes"}</button><button onClick={logout} className="grid size-10 place-items-center border border-black/20 bg-white" aria-label="Sign out"><LogOut size={16} /></button></div></header>
      {error && <p className="mt-5 border border-red-200 bg-red-50 p-4 text-sm text-red-700">{error}</p>}
      <nav className="mt-8 flex gap-2 overflow-x-auto">{(["projects", "achievements", "publications", "inquiries", "email"] as Tab[]).map((item) => <button key={item} onClick={() => { setTab(item); setSelected(0) }} className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-[.12em] ${tab === item ? "bg-ink text-white" : "border border-black/15 bg-white"}`}>{item === "email" && <Mail size={14} />}{item}</button>)}</nav>

      {tab === "email" ? (
        <EmailComposer draft={emailDraft} update={setEmailDraft} />
      ) : tab === "inquiries" ? (
        <div className="mt-8 grid gap-4">{inquiries.length ? inquiries.map((inquiry) => <article key={inquiry.id} className="border border-black/15 bg-white p-6"><div className="flex flex-col justify-between gap-2 sm:flex-row"><h2 className="text-xl font-semibold">{inquiry.name} · {inquiry.service}</h2><time className="text-xs text-black/40">{new Date(inquiry.createdAt).toLocaleString()}</time></div><p className="mt-2 text-sm text-black/55">{inquiry.email}</p><p className="mt-5 whitespace-pre-wrap text-sm leading-7">{inquiry.message}</p><button onClick={() => { setEmailDraft({ recipientName: inquiry.name, recipientEmail: inquiry.email, subject: `Re: ${inquiry.service} enquiry`, message: `Hi ${inquiry.name.split(" ")[0]},\n\nThank you for reaching out about your ${inquiry.service.toLowerCase()} project.\n\n\n\nBest,\nNisal` }); setTab("email") }} className="mt-6 inline-flex items-center gap-2 border border-black/20 px-4 py-2.5 text-xs font-semibold uppercase tracking-[.12em]"><Mail size={14} /> Reply by email</button></article>) : <p className="py-20 text-center text-black/45">No inquiries yet.</p>}</div>
      ) : (
        <div className="mt-8 grid gap-6 lg:grid-cols-[300px_1fr]">
          <aside className="h-fit border border-black/15 bg-white p-3 lg:sticky lg:top-24">
            <div className="mb-3 flex gap-2"><button onClick={addItem} className="inline-flex flex-1 items-center justify-center gap-2 bg-ink px-3 py-2.5 text-xs font-semibold text-white"><Plus size={14} /> Add</button><button onClick={() => move(-1)} className="grid size-9 place-items-center border border-black/15"><ArrowUp size={14} /></button><button onClick={() => move(1)} className="grid size-9 place-items-center border border-black/15"><ArrowDown size={14} /></button></div>
            <div className="max-h-[60vh] overflow-y-auto" data-lenis-prevent>{items.length ? null : <p className="px-3 py-6 text-center text-xs text-black/45">Nothing here yet. Use Add to create one.</p>}{items.map((item, index) => <button key={itemKey(item)} onClick={() => setSelected(index)} className={`flex w-full items-center justify-between gap-3 border-t border-black/10 px-3 py-3 text-left text-sm ${selected === index ? "bg-black/5 font-semibold" : ""}`}><span>{item.title}</span>{"slug" in item && item.showOnHome !== false && <span className="shrink-0 bg-ink px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-[.1em] text-white">Home</span>}</button>)}</div>
          </aside>
          <section className="border border-black/15 bg-[#f7f5ef] p-5 sm:p-8">
            <div className="mb-8 flex items-center justify-between border-b border-black/15 pb-5"><h2 className="text-2xl font-semibold tracking-[-.04em]">Edit {isListTab ? listLabels[tab] : ""}</h2><button onClick={removeItem} disabled={!items[selected]} className="inline-flex items-center gap-2 text-xs font-semibold text-red-700"><Trash2 size={14} /> Delete</button></div>
            {tab === "projects" && content.projects[selected] && <ProjectEditor project={content.projects[selected]} update={(project) => setContent({ ...content, projects: content.projects.map((item, index) => index === selected ? project : item) })} />}
            {tab === "achievements" && content.achievements[selected] && <AchievementEditor achievement={content.achievements[selected]} update={(achievement) => setContent({ ...content, achievements: content.achievements.map((item, index) => index === selected ? achievement : item) })} />}
            {tab === "publications" && content.publications[selected] && <PublicationEditor publication={content.publications[selected]} update={(publication) => setContent({ ...content, publications: content.publications.map((item, index) => index === selected ? publication : item) })} />}
          </section>
        </div>
      )}
    </div>
  )
}
