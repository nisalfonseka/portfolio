export function PageHeading({ title, intro, compact = false }: { title: string; intro: string; compact?: boolean }) {
  return (
    <section className="border-b border-black/15 px-5 pb-16 pt-20 sm:px-8 lg:px-12 lg:pb-24 lg:pt-28">
      <div className="mx-auto max-w-[1440px]">
        <h1 className={`display max-w-6xl font-semibold ${compact ? "text-[clamp(3.6rem,10vw,9rem)]" : "text-[clamp(4rem,12vw,11rem)]"}`}>{title}</h1>
        <p className="mt-10 max-w-2xl text-base leading-7 text-black/60 sm:text-lg">{intro}</p>
      </div>
    </section>
  )
}
