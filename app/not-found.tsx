import Link from "next/link"

export default function NotFound() {
  return (
    <main className="page-shell grid min-h-screen place-items-center px-5 py-24 text-center">
      <div>
        <h1 className="display text-[clamp(5rem,18vw,14rem)] font-semibold">404</h1>
        <p className="mt-6 text-black/55">This page is outside the system.</p>
        <Link href="/" className="mt-8 inline-block border-b border-black pb-2 text-xs font-semibold uppercase tracking-[.15em]">Return home</Link>
      </div>
    </main>
  )
}
