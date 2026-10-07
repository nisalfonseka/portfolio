import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight } from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { StructuredData } from "@/components/structured-data"
import { services } from "@/lib/content"
import { absoluteUrl, createPageMetadata, personSchemaId } from "@/lib/seo"

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = services.find((item) => item.slug === slug)
  if (!service) return { title: "Services" }
  return createPageMetadata({ title: service.title, description: service.description, path: `/services/${service.slug}` })
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const service = services.find((item) => item.slug === slug)
  if (!service) notFound()
  const canonicalUrl = absoluteUrl(`/services/${service.slug}`)
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
        areaServed: "Worldwide",
        serviceType: service.title,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
          { "@type": "ListItem", position: 2, name: "Services", item: absoluteUrl("/services") },
          { "@type": "ListItem", position: 3, name: service.title, item: canonicalUrl },
        ],
      },
    ],
  }

  return (
    <main className="page-shell">
      <StructuredData id="service-schema" data={structuredData} />
      <header className="border-b border-black/15 px-5 pb-20 pt-20 sm:px-8 lg:px-12 lg:pb-28 lg:pt-28">
        <div className="mx-auto max-w-[1440px]">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: service.title }]} />
          <h1 className="display max-w-6xl text-[clamp(4rem,11vw,10rem)] font-semibold">{service.title}</h1>
          <p className="mt-10 max-w-3xl text-lg leading-8 text-black/60">{service.description}</p>
          <Link href="/contact" className="mt-10 inline-flex items-center gap-3 bg-ink px-6 py-4 text-xs font-semibold uppercase tracking-[.15em] text-white">Discuss a project <ArrowRight size={16} /></Link>
        </div>
      </header>

      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-2">
          <div>
            <h2 className="display text-5xl font-semibold sm:text-7xl">What I can deliver</h2>
            <div className="mt-12 border-t border-black/20">
              {service.deliverables.map((item, index) => <div key={item} className="flex gap-6 border-b border-black/20 py-6"><span className="text-xs text-black/35">0{index + 1}</span><strong className="text-lg">{item}</strong></div>)}
            </div>
          </div>
          <div className="bg-ink p-8 text-white sm:p-12">
            <h2 className="display text-5xl font-semibold sm:text-7xl">A clear process</h2>
            <div className="mt-12">
              {service.process.map((item, index) => <div key={item} className="grid grid-cols-[45px_1fr] border-t border-white/20 py-6"><span className="text-xs text-white/35">0{index + 1}</span><p className="leading-7 text-white/72">{item}</p></div>)}
            </div>
          </div>
        </div>
      </section>
      <section className="border-t border-black/15 px-5 py-14 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"><p className="text-sm text-black/55">See how these capabilities come together in real systems.</p><div className="flex flex-wrap gap-5"><Link href="/work" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[.14em]">View projects <ArrowRight size={14} /></Link><Link href="/contact" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[.14em]">Discuss a project <ArrowRight size={14} /></Link></div></div>
      </section>
    </main>
  )
}
