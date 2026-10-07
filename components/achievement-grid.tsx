import type { Achievement } from "@/lib/content"
import { Reveal } from "@/components/reveal"

export function AchievementGrid({ achievements, limit }: { achievements: Achievement[]; limit?: number }) {
  const items = limit ? achievements.slice(0, limit) : achievements

  return (
    <div className="grid gap-px overflow-hidden border border-black/15 bg-black/15 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item, index) => (
        <Reveal key={item.id} delay={index * 0.06} className="bg-paper">
          <article className="group h-full">
            <div className="aspect-[4/3] overflow-hidden bg-black">
              {/* Admin-managed images may come from any HTTPS image host. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.image} alt={item.imageAlt} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]" loading="lazy" />
            </div>
            <div className="p-6 sm:p-7">
              <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[.15em] text-black/45">
                <span>{item.category}</span><span>{item.year}</span>
              </div>
              <h3 className="mt-8 text-2xl font-semibold tracking-[-.04em]">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-black/55">{item.description}</p>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  )
}
