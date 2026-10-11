import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";
import Section from "./Section";
import { projects } from "@/data/projects";

export default function Projects() {
  const [lead, ...featured] = projects.filter((project) => project.featured);
  const secondary = projects.filter((project) => !project.featured);

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title={
        <>
          Things I&apos;ve <span className="text-gradient-accent">built</span>
        </>
      }
      description="Personal, training, and team projects — from AI document processing to POS systems and microservices."
    >
      <div className="space-y-5">
        <Reveal>
          <ProjectCard project={lead} variant="hero" />
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2">
          {featured.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.06} className="h-full">
              <ProjectCard project={project} variant="featured" />
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal className="mt-16 mb-6 flex items-center justify-between gap-4">
        <h3 className="font-mono text-xs tracking-widest text-subtle uppercase">More projects</h3>
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-fg"
        >
          View all
          <ArrowRight size={15} aria-hidden="true" />
        </Link>
      </Reveal>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {secondary.map((project, index) => (
          <Reveal key={project.slug} delay={index * 0.06} className="h-full">
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
