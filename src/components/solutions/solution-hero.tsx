export function SolutionHero({
  headline,
  description,
}: {
  headline: string;
  description: string;
}) {
  return (
    <section className="bg-ink py-24 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-xs font-medium tracking-[0.28em] text-gold-500 uppercase">
            Soluções
          </p>
          <h1 className="mt-4 text-4xl leading-tight font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {headline}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
