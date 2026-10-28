import Link from "next/link"
import { ArrowRight, ArrowUpRight, MessageCircle } from "lucide-react"
import { StructuredData } from "@/components/structured-data"
import { businessAiServices, services, servicePages, type ServiceDetail } from "@/lib/content"
import { whatsappUrl } from "@/lib/contact"
import { absoluteUrl, createPageMetadata } from "@/lib/seo"

export const metadata = createPageMetadata({
  title: "Freelance AI Services in Colombo, Sri Lanka",
  description: "Freelance AI consulting, development, agents, chatbots, automation and custom AI solutions for businesses in Colombo, across Sri Lanka and worldwide.",
  path: "/services",
})

const serviceGuide = [
  ["You need to decide where AI can create value", "AI Consulting for Businesses", "/services/ai-consulting-sri-lanka"],
  ["You need a complete custom AI application", "Custom AI Development", "/services/ai-development-sri-lanka"],
  ["A multi-step task should use approved tools", "AI Agent Development", "/services/ai-agent-development-sri-lanka"],
  ["Customers or staff need quick answers", "AI Chatbot Development", "/services/ai-chatbot-development-sri-lanka"],
  ["Your team repeats an information-heavy workflow", "AI Automation", "/services/ai-automation-sri-lanka"],
  ["You want AI inside software you already use", "AI Integration", "/services/ai-integration-sri-lanka"],
  ["People need answers from your documents", "RAG & Knowledge Assistants", "/services/rag-ai-assistant-development-sri-lanka"],
  ["Your team needs one focused internal utility", "Custom AI Tools", "/services/custom-ai-tools-sri-lanka"],
  ["Staff need help while staying in control", "AI Copilot Development", "/services/ai-copilot-development-sri-lanka"],
  ["You are creating a new AI-enabled product", "AI Product Development", "/services/ai-product-development-sri-lanka"],
]

function ServiceGrid({ items }: { items: ServiceDetail[] }) {
  return (
    <div className="grid gap-px overflow-hidden border border-black/15 bg-black/15 md:grid-cols-2">
      {items.map((service, index) => (
        <Link key={service.slug} href={`/services/${service.slug}`} className="group flex min-h-[300px] flex-col bg-paper p-6 transition-colors hover:bg-ink hover:text-white sm:min-h-[350px] sm:p-8 lg:min-h-[390px] lg:p-10">
          <div className="flex items-start justify-between"><span className="text-xs font-semibold tracking-[.16em] opacity-40">{String(index + 1).padStart(2, "0")}</span><ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></div>
          <div className="mt-auto pt-20">
            <h3 className="text-3xl font-semibold tracking-[-.05em] sm:text-4xl lg:text-5xl">{service.title}</h3>
            <p className="mt-5 max-w-lg text-sm leading-7 opacity-55">{service.summary}</p>
            <p className="mt-6 text-[11px] font-semibold uppercase tracking-[.14em] opacity-60">Explore this service</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default function ServicesPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Freelance AI consulting and development services by Nisal Fonseka",
    url: absoluteUrl("/services"),
    description: "Freelance AI consulting, development, agents, chatbots, automation, integration and AI product services for businesses in Colombo, Sri Lanka and worldwide.",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: servicePages.map((service, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: service.title,
        url: absoluteUrl(`/services/${service.slug}`),
      })),
    },
  }

  return (
    <main className="page-shell">
      <StructuredData id="services-collection-schema" data={structuredData} />
      <header className="border-b border-black/15 px-5 pb-14 pt-16 sm:px-8 sm:pb-20 sm:pt-20 lg:px-12 lg:pb-24 lg:pt-28">
        <div className="mx-auto max-w-[1440px]">
          <h1 className="display max-w-5xl text-[clamp(2.5rem,7vw,7rem)] font-semibold">Freelance AI services for businesses</h1>
          <p className="mt-7 max-w-2xl text-sm leading-7 text-black/60 sm:mt-9 sm:text-lg">Simple, practical AI consulting and development for businesses in Colombo, across Sri Lanka and worldwide, from the right idea to working software.</p>
        </div>
      </header>

      <section className="px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-10 grid gap-6 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <h2 className="display text-[clamp(2.5rem,6vw,6rem)] font-semibold">Adopt AI with a clear business case</h2>
            <p className="max-w-2xl text-base leading-7 text-black/58 lg:justify-self-end">Start with the business problem, the people doing the work and the systems already in place. The right first project may be a small automation, an integration into existing software or a custom product, not AI for its own sake.</p>
          </div>
          <ServiceGrid items={businessAiServices} />
        </div>
      </section>

      <section className="border-y border-black/15 bg-white/45 px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-10 lg:grid-cols-[.65fr_1.35fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[.16em] text-orange-700">Choose your starting point</p>
              <h2 className="mt-5 text-3xl font-semibold tracking-[-.05em] sm:text-5xl lg:text-6xl">What do you need AI to improve?</h2>
            </div>
            <div className="overflow-hidden border border-black/15">
              {serviceGuide.map(([need, service, href]) => (
                <Link key={href} href={href} className="group grid gap-3 border-b border-black/15 bg-paper p-5 last:border-b-0 sm:grid-cols-[1fr_1fr_auto] sm:items-center sm:p-6">
                  <span className="text-sm leading-6 text-black/55">{need}</span>
                  <strong className="text-sm leading-6">{service}</strong>
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-10 grid gap-6 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <h2 className="display text-[clamp(2.5rem,6vw,6rem)] font-semibold">Engineering and product delivery</h2>
            <p className="max-w-2xl text-base leading-7 text-black/58 lg:justify-self-end">When the opportunity is clear, I can design and build the complete solution across AI, backend, data and user experience.</p>
          </div>
          <ServiceGrid items={services} />
        </div>
      </section>

      <section className="border-t border-black/15 px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1440px]">
          <h2 className="display text-[clamp(2.5rem,6vw,6rem)] font-semibold">How I work</h2>
          <div className="mt-14 grid gap-px border border-black/15 bg-black/15 sm:grid-cols-2 lg:grid-cols-5">
            {[["01", "Understand", "Define the business problem, users and desired result."], ["02", "Prioritize", "Choose a valuable use case that can be tested responsibly."], ["03", "Build", "Ship a focused implementation with visible progress."], ["04", "Validate", "Measure quality, workflow impact, risk and operating cost."], ["05", "Integrate", "Deploy, document and hand over with clear ownership."]].map(([number, title, copy]) => (
              <div key={number} className="bg-paper p-6"><span className="text-xs font-semibold text-black/35">{number}</span><h3 className="mt-14 text-xl font-semibold">{title}</h3><p className="mt-3 text-sm leading-6 text-black/52">{copy}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink px-5 py-14 text-white sm:px-8 sm:py-20 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div><p className="text-xs font-semibold uppercase tracking-[.16em] text-orange-400">Sri Lanka · Remote worldwide</p><h2 className="display mt-5 max-w-4xl text-[clamp(2.5rem,6vw,6rem)] font-semibold">Start with the business problem.</h2><p className="mt-7 max-w-2xl text-base leading-7 text-white/60">You do not need a finished AI specification. Bring the workflow, bottleneck or product opportunity, and I can help determine the most practical next step.</p></div>
          <div className="flex flex-col gap-3 sm:flex-row"><Link href="/contact" className="inline-flex items-center justify-center gap-3 bg-white px-6 py-4 text-xs font-semibold uppercase tracking-[.15em] text-black transition-colors hover:bg-orange-500 hover:text-white">Discuss your use case <ArrowRight size={16} /></Link><a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-3 bg-[#25D366] px-6 py-4 text-xs font-semibold uppercase tracking-[.15em] text-[#092b16] transition-colors hover:bg-[#31e572]"><MessageCircle size={16} /> WhatsApp</a></div>
        </div>
      </section>
    </main>
  )
}
