import { PageHeading } from "@/components/page-heading"
import { ProjectList } from "@/components/project-list"
import { getPublicSiteContent } from "@/lib/content-store"
import { createPageMetadata } from "@/lib/seo"

export const metadata = createPageMetadata({
  title: "AI Engineering Projects & Case Studies",
  description: "Explore Nisal Fonseka's work across enterprise AI chatbots, academic RAG platforms, Sinhala language-model research and AI-powered commerce.",
  path: "/work",
})

export const revalidate = 300

export default async function WorkPage() {
  const { projects } = await getPublicSiteContent()
  return (
    <main className="page-shell">
      <PageHeading title="Selected work" intro="A small collection of AI systems, language research and full-stack products—presented through the problems, decisions and results that shaped them." />
      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1440px]"><ProjectList projects={projects} headingLevel="h2" /></div>
      </section>
    </main>
  )
}
