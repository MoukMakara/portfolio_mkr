import Reveal from "./Reveal";

// Shared section wrapper: consistent spacing, anchor id, and heading block.
// `title` can be a string or JSX (e.g. with a gradient span).
export default function Section({ id, eyebrow, title, description, children, className = "", align = "left" }) {
  const headingId = `${id}-heading`;
  const centered = align === "center";
  return (
    <section id={id} aria-labelledby={headingId} className={`relative py-24 sm:py-32 ${className}`}>
      <div className="container-page">
        <Reveal className={`mb-14 max-w-2xl sm:mb-16 ${centered ? "mx-auto text-center" : ""}`}>
          {eyebrow && (
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-line bg-fg/[0.03] px-3 py-1 text-xs font-medium text-muted">
              <span aria-hidden="true" className="size-1.5 rounded-full bg-gradient-to-r from-accent to-ai" />
              {eyebrow}
            </p>
          )}
          <h2
            id={headingId}
            className="text-gradient pb-1 text-3xl font-semibold tracking-[-0.03em] text-balance sm:text-[2.75rem] sm:leading-[1.1]"
          >
            {title}
          </h2>
          {description && (
            <p className="mt-5 text-base leading-relaxed text-pretty text-muted sm:text-lg">{description}</p>
          )}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
