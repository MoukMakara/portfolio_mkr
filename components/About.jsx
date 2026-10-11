import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BrainCircuit,
  Database,
  LayoutPanelTop,
  Mail,
  MapPin,
  Quote,
  Route,
  Sparkles,
  Server,
  Smartphone,
} from "lucide-react";
import CodeWindow from "./CodeWindow";
import CountUp from "./CountUp";
import Reveal from "./Reveal";
import Section from "./Section";
import SocialLinks from "./SocialLinks";
import SpotlightCard from "./SpotlightCard";
import { getTechIcon } from "@/data/techIcons";
import { engineeringFocus } from "@/data/skills";
import { interests, journey, stats, story } from "@/data/about";
import { site } from "@/data/site";

const focusIcons = {
  Backend: Server,
  Frontend: LayoutPanelTop,
  AI: BrainCircuit,
  Database: Database,
  Mobile: Smartphone,
};

function TileLabel({ icon: Icon, children }) {
  return (
    <p className="flex items-center gap-2 font-mono text-[11px] tracking-widest text-subtle uppercase">
      <Icon size={13} className="text-accent" aria-hidden="true" />
      {children}
    </p>
  );
}

function StoryTile() {
  return (
    <SpotlightCard className="card flex h-full flex-col overflow-hidden p-6 sm:p-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-24 size-72 rounded-full bg-accent/10 blur-[90px]"
      />
      <Quote size={30} className="relative text-accent/40" aria-hidden="true" />
      <p className="relative mt-4 text-2xl leading-snug font-semibold tracking-tight text-balance text-fg sm:text-[1.75rem]">
        I build <span className="text-gradient-accent">reliable backends</span>, clean full-stack apps, and{" "}
        <span className="text-gradient-accent">practical AI features</span> that fit real architecture.
      </p>
      <div className="relative mt-6 space-y-4 text-[15px] leading-relaxed text-muted sm:text-base">
        {story.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <div className="relative mt-auto pt-8">
        <h3 className="mb-3 text-sm font-medium text-fg">What I&apos;m interested in</h3>
        <ul className="flex flex-wrap gap-2">
          {interests.map(({ label, icon: Icon }) => (
            <li
              key={label}
              className="inline-flex items-center gap-1.5 rounded-full border border-line bg-fg/[0.03] px-3 py-1.5 text-sm text-muted transition-colors hover:border-accent/40 hover:text-fg"
            >
              <Icon size={14} className="text-accent" aria-hidden="true" />
              {label}
            </li>
          ))}
        </ul>
      </div>
    </SpotlightCard>
  );
}

function ProfileTile() {
  return (
    <div className="card group flex h-full flex-col overflow-hidden">
      <div className="relative h-72 overflow-hidden sm:h-80">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(90%_80%_at_50%_100%,color-mix(in_srgb,var(--accent)_35%,transparent),transparent_70%),radial-gradient(60%_60%_at_85%_10%,color-mix(in_srgb,var(--ai)_25%,transparent),transparent_70%)]"
        />
        <div aria-hidden="true" className="bg-grid absolute inset-0" />
        {/* Sized by height and anchored to the bottom so head and shoulders show, like a studio cutout. */}
        <Image
          src="/images/mouk-makara-portrait.webp"
          alt="Mouk Makara"
          width={1050}
          height={1346}
          sizes="300px"
          className="absolute bottom-0 left-1/2 h-[96%] w-auto max-w-none -translate-x-1/2 origin-bottom transition-transform duration-700 group-hover:scale-[1.03]"
        />
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-surface to-transparent" />
        <span className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-surface/80 px-3 py-1 text-xs font-medium text-emerald-700 backdrop-blur-md dark:text-emerald-200">
          <span className="relative flex size-2" aria-hidden="true">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
          </span>
          Open to work
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6 pt-2">
        <h3 className="text-gradient inline-block self-start text-2xl font-semibold tracking-tight">{site.name}</h3>
        <p className="mt-1 text-sm font-medium text-accent">{site.title}</p>
        <ul className="mt-4 space-y-2 text-sm text-muted">
          <li className="flex items-center gap-2">
            <MapPin size={15} className="shrink-0 text-subtle" aria-hidden="true" />
            {site.location}
          </li>
          <li className="flex items-center gap-2">
            <Mail size={15} className="shrink-0 text-subtle" aria-hidden="true" />
            <a href={`mailto:${site.email}`} className="truncate hover:text-fg">
              {site.email}
            </a>
          </li>
          <li className="flex items-start gap-2">
            <Sparkles size={15} className="mt-0.5 shrink-0 text-ai" aria-hidden="true" />
            <span>
              Currently studying <span className="text-fg">Spring Microservices &amp; AI Engineering</span>
            </span>
          </li>
        </ul>
        <div className="mt-auto flex items-center justify-between gap-3 pt-6">
          <Link
            href="/#contact"
            className="group/btn inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-accent to-ai px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-accent/25 transition-shadow hover:shadow-lg hover:shadow-accent/35"
          >
            Get in touch
            <ArrowRight size={15} className="transition-transform group-hover/btn:translate-x-0.5" aria-hidden="true" />
          </Link>
          <SocialLinks include={["GitHub", "LinkedIn"]} bordered />
        </div>
      </div>
    </div>
  );
}

function StatTile({ stat }) {
  return (
    <SpotlightCard className="card h-full p-4 transition-colors hover:border-line-strong sm:p-6">
      <p className="text-gradient-accent inline-block text-3xl font-bold tracking-tight sm:text-[2.6rem]">
        <CountUp to={stat.value} suffix={stat.suffix} />
      </p>
      <p className="mt-2 text-sm font-medium text-fg sm:text-base">{stat.label}</p>
      <p className="mt-1 text-xs leading-relaxed text-subtle">{stat.detail}</p>
    </SpotlightCard>
  );
}

function JourneyTile() {
  return (
    <div className="card h-full p-6 sm:p-7">
      <TileLabel icon={Route}>My journey</TileLabel>
      <ol className="relative mt-6">
        <span
          aria-hidden="true"
          className="absolute top-2 bottom-2 left-[5px] w-px bg-gradient-to-b from-line-strong via-accent/50 to-ai"
        />
        {journey.map((step) => (
          <li key={`${step.year}-${step.title}`} className="relative grid grid-cols-[1fr] gap-0.5 pb-5 pl-7 last:pb-0">
            <span
              aria-hidden="true"
              className={`absolute top-1.5 left-0 size-[11px] rounded-full border-2 ${
                step.current ? "border-ai bg-ai" : "border-line-strong bg-surface"
              }`}
            >
              {step.current && <span className="absolute inset-0 animate-ping rounded-full bg-ai/60" />}
            </span>
            <span className={`font-mono text-xs ${step.current ? "text-ai" : "text-accent"}`}>{step.year}</span>
            <span className="text-sm font-medium text-fg">{step.title}</span>
            <span className="text-xs text-subtle">{step.place}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

function FocusStrip() {
  return (
    <div className="card overflow-hidden">
      <div className="grid divide-y divide-line sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-5 lg:divide-x">
        {engineeringFocus.map(({ area, items }) => {
          const Icon = focusIcons[area];
          const isAI = area === "AI";
          return (
            <div key={area} className="p-5 transition-colors hover:bg-fg/[0.02]">
              <p className="flex items-center gap-2 text-sm font-semibold text-fg">
                <span
                  className={`flex size-7 items-center justify-center rounded-lg ${
                    isAI ? "bg-ai/15 text-ai" : "bg-accent/12 text-accent"
                  }`}
                >
                  <Icon size={14} aria-hidden="true" />
                </span>
                {area}
              </p>
              <ul className="mt-3.5 flex flex-wrap gap-x-3 gap-y-2">
                {items.map((item) => {
                  const icon = getTechIcon(item);
                  return (
                    <li key={item} className="flex items-center gap-1.5 text-xs text-muted">
                      {icon && (
                        <icon.Icon
                          aria-hidden="true"
                          className="size-3.5 shrink-0"
                          style={{ color: icon.color ?? "var(--color-subtle)" }}
                        />
                      )}
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="About me"
      title={
        <>
          Get to know <span className="text-gradient-accent">the developer</span>
        </>
      }
      description="A Computer Science graduate with full-stack training, hands-on work experience, and a growing focus on microservices and AI engineering."
    >
      <div className="grid gap-4 lg:grid-cols-12">
        <Reveal className="min-w-0 lg:col-span-7">
          <StoryTile />
        </Reveal>
        <Reveal delay={0.08} className="min-w-0 lg:col-span-5">
          <ProfileTile />
        </Reveal>

        <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:col-span-12 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal as="li" key={stat.label} delay={index * 0.06}>
              <StatTile stat={stat} />
            </Reveal>
          ))}
        </ul>

        <Reveal className="min-w-0 lg:col-span-5">
          <JourneyTile />
        </Reveal>
        <Reveal delay={0.08} className="min-w-0 lg:col-span-7">
          <div className="flex h-full flex-col justify-center">
            <CodeWindow />
          </div>
        </Reveal>

        <Reveal className="min-w-0 lg:col-span-12">
          <FocusStrip />
        </Reveal>
      </div>
    </Section>
  );
}
