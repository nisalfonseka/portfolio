import { AchievementGrid } from "@/components/achievement-grid"
import { AchievementStory, hasGallery } from "@/components/achievement-story"
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
  const stories = achievements.filter(hasGallery)
  const milestones = achievements.filter((item) => !hasGallery(item))
  return (
    <main className="page-shell">
      <PageHeading title="Recognition" intro="A visual record of research, product milestones, hackathons, presentations and meaningful moments from the work." />
      {stories.length > 0 && (
        <section className="px-5 pt-16 sm:px-8 lg:px-12 lg:pt-24">
          <div className="mx-auto grid max-w-[1440px] gap-16 lg:gap-24">
            {stories.map((story) => <AchievementStory key={story.id} achievement={story} headingLevel="h2" />)}
          </div>
        </section>
      )}
      {milestones.length > 0 && (
        <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-[1440px]">
            {stories.length > 0 && <h2 className="mb-10 text-[11px] font-semibold uppercase tracking-[.18em] text-black/45">Milestones</h2>}
            <AchievementGrid achievements={milestones} headingLevel={stories.length > 0 ? "h3" : "h2"} />
          </div>
        </section>
      )}
    </main>
  )
}
