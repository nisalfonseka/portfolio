import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { PageHeading } from "@/components/page-heading"
import { services } from "@/lib/content"

export const metadata: Metadata = {
  title: "AI & Full-Stack Services",
  description: "AI engineering, RAG assistants, AI product development and full-stack application development.",
  alternates: { canonical: "/services" },
}

export default function ServicesPage() {
  return (
    <main className="page-shell">
      <PageHeading title="Services" intro="Focused engineering support for organizations turning complex AI or software ideas into clear, useful products." />
      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-[1440px] gap-px border border-black/15 bg-black/15 md:grid-cols-2">
          {services.map((service, index) => (
            <Link key={service.slug} href={`/services/${service.slug}`} className="group min-h-[380px] bg-paper p-7 transition-colors hover:bg-ink hover:text-white sm:p-10">
              <div className="flex items-start justify-between"><span className="text-xs font-semibold tracking-[.16em] opacity-40">0{index + 1}</span><ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></div>
              <h2 className="mt-28 text-4xl font-semibold tracking-[-.055em] sm:text-5xl">{service.title}</h2>
              <p className="mt-5 max-w-lg text-sm leading-7 opacity-55">{service.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-black/15 px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1440px]">
          <h2 className="display text-[clamp(3.5rem,8vw,8rem)] font-semibold">How I work</h2>
          <div className="mt-14 grid gap-px border border-black/15 bg-black/15 sm:grid-cols-2 lg:grid-cols-5">
            {[["01", "Understand", "Define the problem, users and desired outcome."], ["02", "Plan", "Choose the architecture and delivery path."], ["03", "Build", "Ship useful increments with visible progress."], ["04", "Validate", "Test the system, AI behavior and experience."], ["05", "Launch", "Deploy, document and hand over with clarity."]].map(([number, title, text]) => (
              <div key={number} className="bg-paper p-6"><span className="text-xs font-semibold text-black/35">{number}</span><h3 className="mt-14 text-xl font-semibold">{title}</h3><p className="mt-3 text-sm leading-6 text-black/52">{text}</p></div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
