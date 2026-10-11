import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SpotlightCard from "./SpotlightCard";
import { TechList } from "./TechBadge";

const ragSteps = ["Question", "Embed", "Search vector store", "Add context to prompt", "LLM answer"];

export default function SkillCard({ category }) {
  const { name, icon: Icon, description, skills, highlight } = category;
  return (
    <SpotlightCard
      as="article"
      spot={highlight ? "167 139 250" : undefined}
      className={`card group h-full overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1 sm:p-7 ${
        highlight ? "border-ai/25 hover:border-ai/45" : "hover:border-line-strong"
      }`}
    >
      {highlight && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -right-24 size-64 rounded-full bg-ai/15 blur-[80px]"
        />
      )}
      <div className="relative flex items-start justify-between gap-4">
        <span
          className={`flex size-11 items-center justify-center rounded-xl border transition-transform duration-300 group-hover:scale-105 ${
            highlight
              ? "border-ai/30 bg-gradient-to-br from-ai/25 to-accent/10 text-ai"
              : "border-line-strong bg-gradient-to-br from-fg/[0.08] to-transparent text-accent"
          }`}
        >
          <Icon size={20} aria-hidden="true" />
        </span>
        <span className="font-mono text-xs text-subtle">{String(skills.length).padStart(2, "0")} skills</span>
      </div>

      <h3 className="relative mt-5 flex flex-wrap items-center gap-2 text-lg font-semibold tracking-tight text-fg">
        {name}
        {highlight && (
          <span className="rounded-full border border-ai/30 bg-ai/10 px-2 py-0.5 text-[11px] font-medium text-ai">
            Current focus
          </span>
        )}
      </h3>
      <p className="relative mt-1.5 text-sm leading-relaxed text-muted">{description}</p>

      <TechList
        items={skills}
        tone={highlight ? "ai" : "default"}
        size="sm"
        label={`${name} technologies`}
        className="relative mt-5"
      />

      {highlight && (
        <div className="relative mt-6 rounded-xl border border-ai/15 bg-bg/50 p-4">
          <p className="mb-3 font-mono text-[11px] tracking-widest text-subtle uppercase">How RAG answers a question</p>
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-2 text-xs">
            {ragSteps.map((step, index) => (
              <li key={step} className="flex items-center gap-2">
                {index > 0 && <ArrowRight size={12} className="text-ai/60" aria-hidden="true" />}
                <span className="rounded-md border border-line bg-fg/[0.03] px-2 py-1 text-muted">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      )}
      {highlight && (
        <Link
          href="/#ai-engineering"
          className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-ai underline-offset-4 hover:underline"
        >
          See how I structure AI applications
          <ArrowRight size={15} aria-hidden="true" />
        </Link>
      )}
    </SpotlightCard>
  );
}
