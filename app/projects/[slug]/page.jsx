import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Award, Check, ImageIcon } from "lucide-react";
import ArchitectureFlow from "@/components/ArchitectureFlow";
import ProjectCover from "@/components/ProjectCover";
import ProjectLinks from "@/components/ProjectLinks";
import { TechList } from "@/components/TechBadge";
import { getProject, projects } from "@/data/projects";

// Only the slugs in data/projects.js exist; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: { title: `${project.title} | Mouk Makara`, description: project.summary },
  };
}

function Block({ title, children }) {
  return (
    <section className="border-t border-line py-10 first:border-t-0 first:pt-0">
      <h2 className="mb-5 flex items-center gap-3 text-xl font-semibold tracking-tight text-fg">
        <span aria-hidden="true" className="h-5 w-1 rounded-full bg-gradient-to-b from-accent to-ai" />
        {title}
      </h2>
      {children}
    </section>
  );
}

function ComingSoon({ children = "Details coming soon." }) {
  return <p className="rounded-xl border border-dashed border-line-strong px-4 py-3 text-sm text-subtle">{children}</p>;
}

function BulletList({ items, tone = "text-accent" }) {
  return (
    <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="flex gap-3 leading-relaxed text-muted">
          <Check size={17} aria-hidden="true" className={`mt-1 shrink-0 ${tone}`} />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.indexOf(project);
  const next = projects[(index + 1) % projects.length];
  const isAI = project.theme === "ai";
  const dot = isAI ? "text-ai" : "text-accent";

  return (
    <article className="relative">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[600px] overflow-hidden">
        <div className="bg-grid absolute inset-0" />
        <div
          className="absolute -top-40 left-1/4 h-[480px] w-[640px] rounded-full blur-[130px]"
          style={{ background: `${project.cover.colors[0]}26` }}
        />
      </div>
      <div className="container-page pt-28 pb-24 sm:pt-36">
      <Link
        href="/#projects"
        className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-fg"
      >
        <ArrowLeft size={15} aria-hidden="true" />
        Back to projects
      </Link>

      <header className="mt-8 grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span
              className={`rounded-full border px-2.5 py-0.5 font-medium ${
                isAI ? "border-ai/30 bg-ai/10 text-ai" : "border-accent/25 bg-accent/10 text-accent"
              }`}
            >
              {project.category}
            </span>
            <span className="text-subtle">{project.type}</span>
          </div>
          <h1 className="text-gradient mt-5 inline-block pb-1 text-4xl font-semibold tracking-[-0.03em] sm:text-6xl">
            {project.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">{project.summary}</p>
          <div className="mt-8">
            <ProjectLinks project={project} />
          </div>
        </div>
        <div className="group card p-3">
          <ProjectCover project={project} size="lg" />
        </div>
      </header>

      <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_20rem] lg:gap-16">
        <div className="min-w-0">
          <Block title="Overview">
            <p className="leading-relaxed text-muted">{project.overview}</p>
            {project.inputs && (
              <div className="mt-5">
                <p className="mb-2 text-sm font-medium text-fg">Supported inputs</p>
                <TechList items={project.inputs} size="sm" label="Supported inputs" />
              </div>
            )}
          </Block>

          <Block title="Problem">
            <p className="leading-relaxed text-muted">{project.problem}</p>
          </Block>

          <Block title="Solution">
            <p className="leading-relaxed text-muted">{project.solution}</p>
          </Block>

          <Block title={project.featuresTitle || "Key Features"}>
            {project.concepts ? (
              <dl className="grid gap-4 sm:grid-cols-2">
                {project.concepts.map((concept) => (
                  <div key={concept.name} className="card p-4">
                    <dt className="text-sm font-medium text-fg">{concept.name}</dt>
                    <dd className="mt-1.5 text-sm leading-relaxed text-muted">{concept.detail}</dd>
                  </div>
                ))}
              </dl>
            ) : (
              <BulletList items={project.features} tone={dot} />
            )}
          </Block>

          <Block title="Architecture">
            <div className="max-w-lg">
              <ArchitectureFlow
                steps={project.architecture}
                tone={isAI ? "ai" : "accent"}
                label={`${project.title} architecture`}
              />
            </div>
            {project.integrations && (
              <p className="mt-5 text-sm text-muted">
                <span className="text-fg">Integrations:</span> {project.integrations.join(" · ")}
              </p>
            )}
          </Block>

          <Block title="My Role">
            {project.role ? <p className="leading-relaxed text-muted">{project.role}</p> : <ComingSoon />}
          </Block>

          <Block title="Challenges">
            {project.challenges ? <BulletList items={project.challenges} tone={dot} /> : <ComingSoon />}
            {project.recognition && (
              <p className="mt-6 flex gap-3 rounded-xl border border-amber-300/20 bg-amber-300/[0.05] px-4 py-3.5 text-sm text-muted">
                <Award size={18} className="mt-0.5 shrink-0 text-amber-600 dark:text-amber-300" aria-hidden="true" />
                {project.recognition}
              </p>
            )}
          </Block>

          <Block title="Screenshots">
            <ul className="grid gap-4 sm:grid-cols-2">
              {[1, 2].map((n) => (
                <li
                  key={n}
                  className="flex aspect-video flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-line-strong bg-fg/[0.02] text-subtle"
                >
                  <ImageIcon size={22} aria-hidden="true" />
                  <span className="text-sm">Screenshot coming soon</span>
                </li>
              ))}
            </ul>
          </Block>
        </div>

        <aside className="lg:sticky lg:top-28 lg:self-start">
          <div className="card space-y-6 p-6">
            <div>
              <h2 className="mb-3 font-mono text-xs tracking-widest text-subtle uppercase">Technology Stack</h2>
              <TechList items={project.tech} size="sm" label={`${project.title} technologies`} />
            </div>
            <div className="border-t border-line pt-6">
              <h2 className="mb-3 font-mono text-xs tracking-widest text-subtle uppercase">Project type</h2>
              <p className="text-sm text-muted">{project.type}</p>
            </div>
            <div className="border-t border-line pt-6">
              <h2 className="mb-3 font-mono text-xs tracking-widest text-subtle uppercase">Links</h2>
              <ProjectLinks project={project} />
            </div>
          </div>
        </aside>
      </div>

      <nav aria-label="Next project" className="mt-16 border-t border-line pt-10">
        <Link
          href={`/projects/${next.slug}`}
          className="card group flex items-center justify-between gap-6 p-6 transition-colors hover:border-line-strong"
        >
          <div>
            <p className="text-sm text-subtle">Next project</p>
            <p className="mt-1 text-xl font-semibold tracking-tight text-fg">{next.title}</p>
          </div>
          <ArrowRight
            size={20}
            className="shrink-0 text-muted transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          />
        </Link>
      </nav>
      </div>
    </article>
  );
}
