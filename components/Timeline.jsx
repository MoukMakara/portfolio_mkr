import Reveal from "./Reveal";

export function Timeline({ children, label }) {
  return (
    <ol aria-label={label} className="relative space-y-5">
      <span
        aria-hidden="true"
        className="absolute top-2 bottom-2 left-[11px] w-px bg-gradient-to-b from-accent/50 via-line-strong to-transparent"
      />
      {children}
    </ol>
  );
}

// `current` marks an ongoing item with a pulsing accent dot.
export function TimelineItem({ title, subtitle, period, current = false, icon: Icon, children, delay = 0, headingLevel = 3 }) {
  const Heading = `h${headingLevel}`;
  return (
    <Reveal as="li" delay={delay} className="relative pl-10">
      <span
        aria-hidden="true"
        className={`absolute top-3 left-0 flex size-[23px] items-center justify-center rounded-full border bg-bg ${
          current ? "border-accent/60 text-accent" : "border-line-strong text-muted"
        }`}
      >
        {current && <span className="absolute inset-0 animate-ping rounded-full bg-accent/20" />}
        {Icon ? <Icon size={12} /> : <span className="size-1.5 rounded-full bg-current" />}
      </span>
      <div className={`card p-5 transition-colors hover:border-line-strong ${current ? "border-accent/25" : ""}`}>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
          <div>
            <Heading className="font-semibold tracking-tight text-fg">{title}</Heading>
            {subtitle && <p className="mt-0.5 text-sm text-muted">{subtitle}</p>}
          </div>
          {period && (
            <p className="flex shrink-0 flex-wrap items-center gap-2 font-mono text-xs text-subtle">
              {period}
              {current && (
                <span className="rounded-full border border-accent/30 bg-accent/10 px-2 py-0.5 font-sans text-[11px] font-medium text-accent">
                  In progress
                </span>
              )}
            </p>
          )}
        </div>
        {children && <div className="mt-4">{children}</div>}
      </div>
    </Reveal>
  );
}
