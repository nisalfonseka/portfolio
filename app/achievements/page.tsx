import { AchievementGrid } from "@/components/achievement-grid"
import { PageHeading } from "@/components/page-heading"
import { getPublicSiteContent } from "@/lib/content-store"
import { createPageMetadata } from "@/lib/seo"

export const metadata = createPageMetadata({
  title: "AI Engineering Achievements & Research Milestones",
  description: "Verified milestones from Nisal Fonseka's AI engineering work, including student adoption, Sinhala datasets and grammar-correction research results.",
  path: "/achievements",
})
export const revalidate = 300

export default async function AchievementsPage() {
  const { achievements } = await getPublicSiteContent()
  return (
    <main className="page-shell">
      <PageHeading title="Recognition" intro="A visual record of research, product milestones, hackathons, presentations and meaningful moments from the work." />
      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24"><div className="mx-auto max-w-[1440px]"><AchievementGrid achievements={achievements} headingLevel="h2" /></div></section>
    </main>
  )
}
