import Image from "next/image";
import { GraduationCap, Sparkles } from "lucide-react";
import { getTechIcon } from "@/data/techIcons";

// Logos that float around the portrait; positions are percentages of the frame.
const orbit = [
  { name: "Spring Boot", className: "top-[6%] left-[2%]", delay: "0s" },
  { name: "Next.js", className: "top-[2%] right-[10%]", delay: "-1.5s" },
  { name: "Python", className: "top-[38%] -right-[3%]", delay: "-3s" },
  { name: "PostgreSQL", className: "bottom-[24%] -left-[4%]", delay: "-2.2s" },
  { name: "Docker", className: "bottom-[10%] right-[2%]", delay: "-4s" },
  { name: "FastAPI", className: "top-[40%] -left-[6%]", delay: "-5s" },
];

function FloatingLogo({ name, className, delay }) {
  const { Icon, color } = getTechIcon(name);
  return (
    <div
      className={`absolute z-20 animate-float ${className}`}
      style={{ animationDelay: delay }}
      title={name}
    >
      <div className="flex size-11 items-center justify-center rounded-xl border border-fg/10 bg-surface/80 shadow-xl shadow-shade backdrop-blur-md sm:size-12">
        <Icon aria-hidden="true" className="size-5 sm:size-6" style={{ color }} />
      </div>
    </div>
  );
}

export default function HeroPortrait() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[min(440px,82vw)]">
      {/* Glow */}
      <div aria-hidden="true" className="absolute inset-[8%] rounded-full bg-accent/30 blur-[70px]" />
      <div aria-hidden="true" className="absolute inset-[20%] translate-x-[18%] rounded-full bg-ai/25 blur-[60px]" />

      {/* Rotating gradient ring */}
      <div aria-hidden="true" className="absolute inset-[3%] rounded-full p-[1.5px]">
        <div className="absolute inset-0 animate-spin-slow rounded-full bg-[conic-gradient(from_0deg,transparent_0%,rgba(107,155,255,0.9)_20%,rgba(167,139,250,0.9)_35%,transparent_50%,transparent_100%)]" />
        <div className="absolute inset-[1.5px] rounded-full bg-surface" />
      </div>

      {/* Disc behind the portrait */}
      <div
        aria-hidden="true"
        className="absolute inset-[7%] overflow-hidden rounded-full bg-[radial-gradient(circle_at_50%_35%,color-mix(in_srgb,var(--accent)_38%,var(--surface))_0%,color-mix(in_srgb,var(--ai)_14%,var(--surface-2))_50%,var(--surface)_78%)]"
      >
        <div className="bg-grid absolute inset-0 opacity-60" />
      </div>

      {/* Portrait: clipped to the disc at the bottom, head rises above it */}
      <div className="absolute inset-x-[7%] top-[-6%] bottom-[7%] z-10 overflow-hidden rounded-b-full">
        <Image
          src="/images/mouk-makara-portrait.webp"
          alt="Portrait of Mouk Makara"
          fill
          priority
          sizes="(min-width: 1024px) 440px, 82vw"
          className="object-cover object-top"
        />
      </div>

      {orbit.map((item) => (
        <FloatingLogo key={item.name} {...item} />
      ))}

      {/* Info cards */}
      <div className="absolute -bottom-[2%] left-1/2 z-30 w-max -translate-x-1/2">
        <div className="flex items-center gap-3 rounded-2xl border border-fg/10 bg-surface/85 px-4 py-2.5 shadow-2xl shadow-shade backdrop-blur-xl">
          <span className="flex size-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent/30 to-ai/30 text-fg">
            <Sparkles size={15} aria-hidden="true" />
          </span>
          <div className="text-left leading-tight">
            <p className="text-xs text-subtle">Currently studying</p>
            <p className="text-sm font-medium text-fg">Spring Microservices &amp; AI</p>
          </div>
        </div>
      </div>
      <div className="absolute top-[18%] -right-[6%] z-30 hidden sm:block">
        <div className="flex items-center gap-2 rounded-xl border border-fg/10 bg-surface/85 px-3 py-2 shadow-xl shadow-shade backdrop-blur-xl">
          <GraduationCap size={15} className="text-accent" aria-hidden="true" />
          <span className="text-xs font-medium text-fg">B.Sc. Computer Science</span>
        </div>
      </div>
    </div>
  );
}
