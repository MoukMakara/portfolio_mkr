import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import HeroPortrait from "./HeroPortrait";
import Reveal from "./Reveal";
import TypingRole from "./TypingRole";
import SocialLinks from "./SocialLinks";
import TechMarquee from "./TechMarquee";
import { site } from "@/data/site";

const roles = ["Full Stack Developer", "Backend Developer", "AI Engineering Enthusiast", "Junior Software Engineer"];

// Positions are multiples of the 64px grid so beams run along grid lines,
// chosen to fall beside (not through) the text and portrait on desktop.
const beams = [
  { left: "64px", delay: "0s", duration: "7s" },
  { left: "768px", delay: "2.5s", duration: "9s" },
  { left: "1408px", delay: "1.2s", duration: "8s" },
  { left: "1856px", delay: "4s", duration: "10s" },
];

const facts = [
  { value: "B.Sc.", label: "Computer Science · RUPP" },
  { value: "810h", label: "Full-Stack training · KSHRD" },
  { value: "6", label: "Projects in this portfolio" },
];

export default function Hero() {
  return (
    <section id="home" aria-labelledby="hero-heading" className="relative overflow-hidden">
      {/* Background: top spotlight, engineering grid, and light beams travelling down grid lines */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_-5%,color-mix(in_srgb,var(--accent)_22%,transparent),transparent_70%)]" />
        <div className="bg-grid absolute inset-0" />
        {beams.map((beam) => (
          <span
            key={beam.left}
            className="absolute top-0 h-32 w-px animate-beam bg-gradient-to-b from-transparent via-accent to-transparent opacity-0"
            style={{ left: beam.left, animationDelay: beam.delay, animationDuration: beam.duration }}
          />
        ))}
      </div>

      <div className="container-page relative grid items-center gap-16 pt-32 pb-20 sm:pt-40 lg:grid-cols-[1.15fr_1fr] lg:gap-10 lg:pb-28">
        <div className="order-2 lg:order-1">
          <Reveal>
            <p className="inline-flex items-center gap-2.5 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] py-1 pr-3.5 pl-2.5 text-xs font-medium text-emerald-700 dark:text-emerald-200">
              <span className="relative flex size-2" aria-hidden="true">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
              </span>
              Open to Software Engineering Opportunities
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 id="hero-heading" className="mt-7">
              <span className="block text-lg font-medium text-muted sm:text-xl">Hello, I&apos;m</span>
              <span className="text-gradient mt-2 inline-block pb-1 text-5xl font-semibold tracking-[-0.04em] sm:text-7xl lg:text-[5.25rem] lg:leading-[1.02]">
                {site.name}
              </span>
              <span className="mt-4 flex flex-wrap items-center gap-x-3 text-2xl font-medium tracking-tight text-fg sm:text-[2rem]">
                <span className="text-muted">I&apos;m a</span>
                <TypingRole roles={roles} />
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-muted">
              I build web applications, backend systems, REST APIs, microservices, and AI-powered applications —
              mostly with{" "}
              <span className="font-medium text-fg">Java, Spring Boot, Next.js, PostgreSQL</span>, and{" "}
              <span className="font-medium text-fg">Python</span>.
            </p>
          </Reveal>

          <Reveal delay={0.24} className="mt-9 flex flex-wrap items-center gap-3">
            <Link
              href="/#projects"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-accent to-ai px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-shadow hover:shadow-xl hover:shadow-accent/35"
            >
              <span
                aria-hidden="true"
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full"
              />
              View My Projects
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-line-strong bg-fg/[0.03] px-6 py-3 text-sm font-semibold text-fg backdrop-blur transition-colors hover:border-fg/25 hover:bg-fg/[0.07]"
            >
              Contact Me
            </Link>
          </Reveal>

          <Reveal delay={0.32} className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
            <SocialLinks bordered />
            <span className="inline-flex items-center gap-1.5 text-sm text-subtle">
              <MapPin size={15} aria-hidden="true" />
              {site.location}
            </span>
          </Reveal>

          <Reveal delay={0.4}>
            <dl className="mt-12 grid max-w-lg grid-cols-3 divide-x divide-line border-t border-line pt-6">
              {facts.map((fact) => (
                <div key={fact.label} className="flex flex-col gap-1 px-4 first:pl-0">
                  <dt className="text-xs leading-snug text-subtle">{fact.label}</dt>
                  <dd className="text-gradient-accent order-first text-2xl font-bold tracking-tight">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="order-1 lg:order-2">
          <HeroPortrait />
        </Reveal>
      </div>

      <TechMarquee />
    </section>
  );
}
