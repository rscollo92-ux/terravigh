type SectionTitleProps = {
  overline?: string;
  title: string;
  subtitle?: string;
};

export function SectionTitle({ overline, title, subtitle }: SectionTitleProps) {
  return (
    <div className="max-w-3xl space-y-4">
      {overline ? (
        <p className="text-xs uppercase tracking-[0.22em] text-sage-700/85">{overline}</p>
      ) : null}
      <h2 className="font-serif text-3xl text-ink md:text-4xl">{title}</h2>
      {subtitle ? <p className="text-base leading-relaxed text-ink/80 md:text-lg">{subtitle}</p> : null}
    </div>
  );
}
