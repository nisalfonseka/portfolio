import type { Metadata } from "next"
import { PageHeading } from "@/components/page-heading"
import { ProjectList } from "@/components/project-list"
import { getPublicSiteContent } from "@/lib/content-store"

export const metadata: Metadata = {
  title: "Selected Work",
  description: "Selected AI engineering, research and full-stack product work by Nisal Fonseka.",
  alternates: { canonical: "/work" },
}

export const revalidate = 0

export default async function WorkPage() {
  const { projects } = await getPublicSiteContent()
  return (
    <main className="page-shell">
      <PageHeading title="Selected work" intro="A small collection of AI systems, language research and full-stack products—presented through the problems, decisions and results that shaped them." />
      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1440px]"><ProjectList projects={projects} /></div>
      </section>
    </main>
  )
}
