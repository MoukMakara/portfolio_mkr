import { Briefcase, CalendarDays, CheckCircle2 } from "lucide-react";
import Reveal from "./Reveal";
import Section from "./Section";
import SpotlightCard from "./SpotlightCard";
import { TechList } from "./TechBadge";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title={
        <>
          Where I&apos;ve <span className="text-gradient-accent">worked</span>
        </>
      }
    >
      <div className="space-y-5">
        {experience.map((job) => (
          <Reveal key={`${job.company}-${job.role}`}>
            <SpotlightCard
              as="article"
              className="card grid gap-8 overflow-hidden p-6 transition-colors hover:border-line-strong sm:p-8 md:grid-cols-[17rem_1fr] md:gap-12"
            >
              <header>
                <div className="flex items-center gap-3">
                  <span className="flex size-12 items-center justify-center rounded-xl border border-line-strong bg-gradient-to-br from-accent/20 to-ai/10 text-accent">
                    <Briefcase size={20} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-semibold text-fg">{job.company}</p>
                    <p className="text-xs text-subtle">Employment</p>
                  </div>
                </div>
                <h3 className="mt-6 text-xl font-semibold tracking-tight text-fg">{job.role}</h3>
                <p className="mt-3 inline-flex items-center gap-2 rounded-lg border border-line bg-fg/[0.03] px-2.5 py-1 text-xs text-muted">
                  <CalendarDays size={13} aria-hidden="true" />
                  {job.period}
                </p>
                <p className="mt-2 font-mono text-xs text-subtle">{job.duration}</p>
              </header>
              <div>
                <p className="leading-relaxed text-muted">{job.summary}</p>
                <ul className="mt-6 grid gap-3">
                  {job.responsibilities.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted">
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <TechList
                  items={job.tech}
                  size="sm"
                  label={`Technologies used at ${job.company}`}
                  className="mt-7 border-t border-line pt-6"
                />
              </div>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
