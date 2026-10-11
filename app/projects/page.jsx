import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Projects",
  description:
    "Projects by Mouk Makara: LedgerVision AI, SnapPOS, HRD Community, SportHub, Spring Microservices, and a Visa Payment Simulator.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <div className="container-page pt-32 pb-24 sm:pt-40">
      <Reveal className="mb-12 max-w-2xl">
        <p className="mb-3 font-mono text-xs tracking-widest text-accent uppercase">Projects</p>
        <h1 className="text-4xl font-semibold tracking-[-0.03em] text-fg sm:text-6xl">
          All <span className="text-gradient-accent">projects</span>
        </h1>
        <p className="mt-4 text-lg text-muted">
          Personal, training, and team projects across backend, full-stack, and AI engineering.
        </p>
      </Reveal>
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal key={project.slug} delay={(index % 2) * 0.05} className="h-full">
            <ProjectCard project={project} variant={project.featured ? "featured" : "compact"} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
