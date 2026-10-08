import { ArrowUpRight, MapPin } from "lucide-react"
import type { Achievement } from "@/lib/content"
import { AchievementGallery } from "@/components/achievement-gallery"
import { Reveal } from "@/components/reveal"

export function hasGallery(achievement: Achievement) {
  return Boolean(achievement.gallery?.length)
}

export function AchievementStory({ achievement, headingLevel = "h3", maxTiles }: { achievement: Achievement; headingLevel?: "h2" | "h3"; maxTiles?: number }) {
  const Heading = headingLevel
  const images = [{ image: achievement.image, alt: achievement.imageAlt }, ...(achievement.gallery ?? [])]

  return (
    <article className="grid gap-10 border-t border-black/20 pt-10 lg:grid-cols-[minmax(0,.75fr)_minmax(0,1.6fr)] lg:gap-14">
      <Reveal className="lg:sticky lg:top-28 lg:self-start">
        <div className="flex flex-wrap items-center justify-between gap-3 text-[10px] font-semibold uppercase tracking-[.15em] text-black/45">
          <span>{achievement.category}</span><span>{achievement.year}</span>
        </div>
        <Heading className="mt-8 text-3xl font-semibold leading-[1.05] tracking-[-.045em] sm:text-4xl">{achievement.title}</Heading>
        {achievement.location && <p className="mt-4 flex items-center gap-2 text-sm font-medium"><MapPin size={15} className="text-orange-600" />{achievement.location}</p>}
        <p className="mt-6 max-w-md text-sm leading-7 text-black/58">{achievement.description}</p>
        {achievement.link && (
          <a href={achievement.link} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 border-b border-black pb-2 text-xs font-semibold uppercase tracking-[.15em]">Read more <ArrowUpRight size={15} /></a>
        )}
      </Reveal>
      <Reveal delay={0.08}>
        <AchievementGallery images={images} maxTiles={maxTiles} />
      </Reveal>
    </article>
  )
}
