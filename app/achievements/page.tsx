import type { Metadata } from "next"
import { AchievementGrid } from "@/components/achievement-grid"
import { PageHeading } from "@/components/page-heading"
import { getPublicSiteContent } from "@/lib/content-store"

export const metadata: Metadata = { title: "Recognition & Milestones", description: "Research, product and professional milestones from Nisal Fonseka's engineering work.", alternates: { canonical: "/achievements" } }
export const revalidate = 0

export default async function AchievementsPage() {
  const { achievements } = await getPublicSiteContent()
  return (
    <main className="page-shell">
      <PageHeading title="Recognition" intro="A visual record of research, product milestones, hackathons, presentations and meaningful moments from the work." />
      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24"><div className="mx-auto max-w-[1440px]"><AchievementGrid achievements={achievements} /></div></section>
    </main>
  )
}
