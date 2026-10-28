import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight, ArrowUpRight, Check } from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { StructuredData } from "@/components/structured-data"
import { servicePages } from "@/lib/content"
import { absoluteUrl, createPageMetadata, personSchemaId } from "@/lib/seo"

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return servicePages.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = servicePages.find((item) => item.slug === slug)
  if (!service) return { title: "Services" }
  return createPageMetadata({ title: service.seoTitle, description: service.metaDescription, path: `/services/${service.slug}` })
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const service = servicePages.find((item) => item.slug === slug)
  if (!service) notFound()
  const canonicalUrl = absoluteUrl(`/services/${service.slug}`)
  const relatedServices = service.relatedServices
    .map((relatedSlug) => servicePages.find((item) => item.slug === relatedSlug))
    .filter((item) => item !== undefined)
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${canonicalUrl}#service`,
        name: service.title,
        url: canonicalUrl,
        description: service.description,
        provider: { "@id": personSchemaId },
        areaServed: [{ "@type": "City", name: "Colombo" }, { "@type": "Country", name: "Sri Lanka" }, "Worldwide"],
        serviceType: service.title,
        audience: { "@type": "BusinessAudience", audienceType: "Small and medium-sized businesses, product teams and organizations adopting AI" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
          { "@type": "ListItem", position: 2, name: "Services", item: absoluteUrl("/services") },
          { "@type": "ListItem", position: 3, name: service.title, item: canonicalUrl },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${canonicalUrl}#faq`,
        mainEntity: service.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  }

  return (
    <main className="page-shell">
      <StructuredData id="service-schema" data={structuredData} />
      <header className="border-b border-black/15 px-5 pb-14 pt-14 sm:px-8 sm:pb-20 sm:pt-20 lg:px-12 lg:pb-24 lg:pt-24">
        <div className="mx-auto max-w-[1440px]">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: service.title }]} />
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[.14em] text-orange-700 sm:mb-6 sm:text-xs sm:tracking-[.16em]">Colombo &amp; Sri Lanka · Available worldwide</p>
          <h1 className="display max-w-6xl text-[clamp(2.25rem,6.5vw,6rem)] font-semibold">{service.heading}</h1>
          <p className="mt-7 max-w-4xl text-base leading-7 text-black/60 sm:mt-9 sm:text-lg sm:leading-8">{service.description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row">
            <Link href="/contact" className="inline-flex items-center justify-center gap-3 bg-ink px-6 py-4 text-xs font-semibold uppercase tracking-[.15em] text-white transition-colors hover:bg-orange-600">Discuss your use case <ArrowRight size={16} /></Link>
            <Link href="/work" className="inline-flex items-center justify-center gap-3 border border-black/25 px-6 py-4 text-xs font-semibold uppercase tracking-[.15em] transition-colors hover:bg-white">View relevant work <ArrowUpRight size={16} /></Link>
          </div>
        </div>
      </header>

      <section className="border-b border-black/15 px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-14">
        <div className="mx-auto grid max-w-[1440px] gap-px overflow-hidden border border-black/15 bg-black/15 md:grid-cols-3">
          {[["Best for", service.bestFor], ["Starting point", service.startingPoint], ["Delivery", service.delivery]].map(([label, copy]) => (
            <div key={label} className="bg-paper p-6 lg:p-8"><p className="text-[11px] font-semibold uppercase tracking-[.15em] text-black/40">{label}</p><p className="mt-4 text-sm leading-7 text-black/65">{copy}</p></div>
          ))}
        </div>
      </section>

      <section className="px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr]">
            <div><p className="text-xs font-semibold uppercase tracking-[.16em] text-orange-700">Where this helps</p><h2 className="mt-5 text-3xl font-semibold tracking-[-.05em] sm:text-5xl lg:text-6xl">Business problems this service is designed to solve</h2></div>
            <div className="grid gap-px border border-black/15 bg-black/15">
              {service.problems.map((problem, index) => (
                <article key={problem.title} className="grid gap-4 bg-paper p-6 sm:grid-cols-[55px_1fr] sm:p-8"><span className="text-xs font-semibold text-black/30">{String(index + 1).padStart(2, "0")}</span><div><h3 className="text-xl font-semibold tracking-[-.03em]">{problem.title}</h3><p className="mt-3 max-w-2xl text-sm leading-7 text-black/55">{problem.description}</p></div></article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-black/15 bg-white/45 px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-2">
          <div>
            <h2 className="display text-4xl font-semibold sm:text-6xl lg:text-7xl">What success can look like</h2>
            <div className="mt-12 border-t border-black/20">
              {service.outcomes.map((item) => <div key={item} className="grid grid-cols-[28px_1fr] gap-4 border-b border-black/20 py-6"><Check size={17} className="mt-1 text-orange-700" /><p className="text-base font-medium leading-7">{item}</p></div>)}
            </div>
          </div>
          <div>
            <h2 className="display text-4xl font-semibold sm:text-6xl lg:text-7xl">What I can deliver</h2>
            <div className="mt-12 border-t border-black/20">
              {service.deliverables.map((item, index) => <div key={item} className="flex gap-6 border-b border-black/20 py-6"><span className="text-xs text-black/35">{String(index + 1).padStart(2, "0")}</span><strong className="text-lg leading-7">{item}</strong></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink px-5 py-14 text-white sm:px-8 sm:py-20 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-[.8fr_1.2fr]">
          <div><p className="text-xs font-semibold uppercase tracking-[.16em] text-orange-400">A controlled path to value</p><h2 className="display mt-5 text-4xl font-semibold sm:text-6xl lg:text-7xl">From business need to working system</h2><p className="mt-7 max-w-xl text-sm leading-7 text-white/58">Each engagement is scoped around a useful result. AI quality is evaluated inside the real workflow, alongside integration, security, operating cost and the people responsible for the final decision.</p></div>
          <div>
            {service.process.map((item, index) => <div key={item} className="grid grid-cols-[38px_1fr] border-t border-white/20 py-6 sm:grid-cols-[55px_1fr] sm:py-7"><span className="text-xs text-white/35">{String(index + 1).padStart(2, "0")}</span><p className="text-base leading-7 text-white/75 sm:text-lg">{item}</p></div>)}
          </div>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[.65fr_1.35fr]">
          <div><p className="text-xs font-semibold uppercase tracking-[.16em] text-orange-700">Experience you can verify</p><h2 className="mt-5 text-3xl font-semibold tracking-[-.05em] sm:text-5xl lg:text-6xl">Why work with me</h2></div>
          <div className="grid gap-px border border-black/15 bg-black/15 sm:grid-cols-2">
            {[["300+", "active users of an AI chat platform across three SLIIT departments"], ["2,000+", "students in the planned rollout for a module-specific academic AI platform"], ["End-to-end", "AI, backend, database and frontend engineering in one delivery path"], ["Sri Lanka", "based in Malabe and available to work remotely with international teams"]].map(([value, copy]) => (
              <div key={value} className="bg-paper p-6 sm:p-8"><strong className="block text-3xl font-semibold tracking-[-.05em]">{value}</strong><p className="mt-4 text-sm leading-6 text-black/55">{copy}</p></div>
            ))}
          </div>
        </div>
        <div className="mx-auto mt-8 flex max-w-[1440px] justify-end"><Link href="/work" className="inline-flex items-center gap-2 border-b border-black pb-2 text-xs font-semibold uppercase tracking-[.14em]">Review the case studies <ArrowRight size={14} /></Link></div>
      </section>

      <section className="border-y border-black/15 bg-white/45 px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[.65fr_1.35fr]">
          <div><p className="text-xs font-semibold uppercase tracking-[.16em] text-orange-700">Frequently asked questions</p><h2 className="mt-5 text-3xl font-semibold tracking-[-.05em] sm:text-5xl lg:text-6xl">What businesses usually ask</h2></div>
          <div>
            {service.faqs.map((faq) => (
              <details key={faq.question} className="group border-t border-black/20 py-5 last:border-b sm:py-6"><summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-base font-semibold leading-7 sm:gap-6 sm:text-lg"><span>{faq.question}</span><span aria-hidden="true" className="mt-1 shrink-0 text-xl font-normal text-black/40 transition-transform group-open:rotate-45">+</span></summary><p className="max-w-3xl pt-4 text-sm leading-7 text-black/58">{faq.answer}</p></details>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1440px]">
          <h2 className="display text-[clamp(2.5rem,6vw,6rem)] font-semibold">Related services</h2>
          <div className="mt-12 grid gap-px border border-black/15 bg-black/15 md:grid-cols-3">
            {relatedServices.map((related) => (
              <Link key={related.slug} href={`/services/${related.slug}`} className="group flex min-h-64 flex-col bg-paper p-7 transition-colors hover:bg-ink hover:text-white"><ArrowUpRight className="ml-auto transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /><h3 className="mt-auto text-2xl font-semibold tracking-[-.04em]">{related.title}</h3><p className="mt-3 text-sm leading-6 opacity-55">{related.summary}</p></Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-black/15 bg-orange-600 px-5 py-14 text-white sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-[1440px] gap-8 lg:grid-cols-[1fr_auto] lg:items-end"><div><p className="text-xs font-semibold uppercase tracking-[.16em] text-white/65">No finished specification required</p><h2 className="display mt-5 max-w-4xl text-[clamp(2.5rem,6vw,6rem)] font-semibold">Tell me what is slowing the business down.</h2><p className="mt-7 max-w-2xl text-base leading-7 text-white/75">A clear description of the workflow, users and current systems is enough to start a useful conversation.</p></div><Link href="/contact" className="inline-flex items-center justify-center gap-3 bg-white px-6 py-4 text-xs font-semibold uppercase tracking-[.15em] text-black transition-colors hover:bg-ink hover:text-white">Start the conversation <ArrowRight size={16} /></Link></div>
      </section>
    </main>
  )
}
