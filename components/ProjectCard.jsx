import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import ArchitectureFlow from "./ArchitectureFlow";
import ProjectCover from "./ProjectCover";
import ProjectLinks from "./ProjectLinks";
import SpotlightCard from "./SpotlightCard";
import { TechList } from "./TechBadge";

function Meta({ project, ai }) {
  return (
    <div className="flex flex-wrap items-center gap-2 text-xs">
      <span
        className={`rounded-full border px-2.5 py-0.5 font-medium ${
          ai ? "border-ai/30 bg-ai/10 text-ai" : "border-accent/25 bg-accent/10 text-accent"
        }`}
      >
        {project.category}
      </span>
      <span className="text-subtle">{project.type}</span>
    </div>
  );
}

// The title link stretches over the whole card; action buttons sit above it with `relative z-10`.
function Title({ project, className }) {
  return (
    <h3 className={`font-semibold tracking-tight text-fg ${className}`}>
      <Link href={`/projects/${project.slug}`} className="after:absolute after:inset-0 after:z-0">
        {project.title}
      </Link>
    </h3>
  );
}

function CaseStudyArrow() {
  return (
    <span
      aria-hidden="true"
      className="flex size-9 items-center justify-center rounded-full border border-line-strong text-muted transition-all duration-300 group-hover:border-fg/30 group-hover:opacity-90 group-hover:text-bg"
    >
      <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:rotate-45" />
    </span>
  );
}

function Features({ items, ai, columns = false }) {
  return (
    <ul className={`grid gap-x-6 gap-y-2 text-sm text-muted ${columns ? "sm:grid-cols-2" : ""}`}>
      {items.map((feature) => (
        <li key={feature} className="flex gap-2.5">
          <Check size={15} className={`mt-0.5 shrink-0 ${ai ? "text-ai" : "text-accent"}`} aria-hidden="true" />
          {feature}
        </li>
      ))}
    </ul>
  );
}

const shell = "card group h-full overflow-hidden transition-all duration-300 hover:-translate-y-1";

// Variants: "hero" (top featured project), "featured", and "compact" (secondary projects).
export default function ProjectCard({ project, variant = "compact" }) {
  const ai = project.theme === "ai";

  if (variant === "hero") {
    return (
      <SpotlightCard
        as="article"
        spot="167 139 250"
        className={`${shell} grid gap-8 border-ai/25 p-6 hover:border-ai/45 sm:p-8 lg:grid-cols-[1.1fr_1fr] lg:gap-12`}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 -left-32 size-96 rounded-full bg-ai/10 blur-[100px]"
        />
        <div className="relative flex flex-col">
          <div className="flex items-start justify-between gap-4">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-accent to-ai px-3 py-1 text-xs font-semibold text-white shadow-lg shadow-ai/25">
              ★ Featured project
            </span>
            <CaseStudyArrow />
          </div>
          <div className="mt-5">
            <Meta project={project} ai />
          </div>
          <Title project={project} className="mt-4 text-3xl sm:text-4xl" />
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{project.summary}</p>
          <div className="mt-6">
            <Features items={project.features.slice(0, 8)} ai columns />
          </div>
          <TechList items={project.tech} size="sm" label={`${project.title} technologies`} className="mt-7" />
          <div className="relative z-10 mt-auto pt-8">
            <ProjectLinks project={project} />
          </div>
        </div>
        <div className="relative rounded-xl border border-line bg-bg/60 p-4 sm:p-5">
          <p className="mb-4 flex items-center justify-between font-mono text-xs tracking-widest text-subtle uppercase">
            System architecture
            <span className="flex items-center gap-1.5 normal-case tracking-normal text-ai">
              <span className="size-1.5 animate-pulse rounded-full bg-ai" /> data flow
            </span>
          </p>
          <ArchitectureFlow steps={project.architecture} tone="ai" label={`${project.title} architecture`} />
        </div>
      </SpotlightCard>
    );
  }

  const featured = variant === "featured";
  return (
    <SpotlightCard as="article" className={`${shell} flex flex-col p-3 hover:border-line-strong`}>
      <ProjectCover project={project} size={featured ? "md" : "sm"} />
      <div className="flex flex-1 flex-col p-3 pt-5 sm:p-4 sm:pt-6">
        <div className="flex items-start justify-between gap-4">
          <Meta project={project} ai={ai} />
          <CaseStudyArrow />
        </div>
        <Title project={project} className={`mt-3 ${featured ? "text-2xl" : "text-xl"}`} />
        <p className="mt-2.5 text-sm leading-relaxed text-muted sm:text-[15px]">{project.summary}</p>
        {featured && (
          <div className="mt-5">
            <Features items={project.features.slice(0, 4)} ai={ai} />
          </div>
        )}
        <TechList
          items={project.tech.slice(0, featured ? 6 : 4)}
          size="sm"
          label={`${project.title} technologies`}
          className="mt-5"
        />
        <div className="relative z-10 mt-auto pt-6">
          <ProjectLinks project={project} size="small" />
        </div>
      </div>
    </SpotlightCard>
  );
}
