interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}
export function PageHero({ eyebrow, title, subtitle }: Props) {
  return (
    <section className="relative overflow-hidden bg-[image:var(--gradient-hero)] text-white">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_20%,white,transparent_50%)]" />
      <div className="container-page relative py-20 md:py-28 text-center">
        {eyebrow && (
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-white/80 mb-4">
            {eyebrow}
          </span>
        )}
        <h1 className="text-4xl md:text-5xl font-bold max-w-3xl mx-auto leading-tight">{title}</h1>
        {subtitle && (
          <p className="mt-5 text-base md:text-lg text-white/85 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
