import { getTechIcon } from "@/data/techIcons";

// Generated artwork for a project: brand-tinted gradient, grid, project icon, and tech logos.
// Used in place of screenshots until real ones are added.
export default function ProjectCover({ project, size = "md", className = "" }) {
  const { icon: Icon, colors } = project.cover;
  const [from, to] = colors;
  const logos = project.tech.map(getTechIcon).filter(Boolean).slice(0, size === "lg" ? 6 : 4);
  const heights = { sm: "h-32", md: "h-48", lg: "h-56 sm:h-72" };

  return (
    <div
      aria-hidden="true"
      className={`relative isolate overflow-hidden rounded-xl border border-fg/[0.06] ${heights[size]} ${className}`}
      style={{
        background: `radial-gradient(120% 90% at 15% 0%, ${from}38, transparent 60%), radial-gradient(100% 90% at 100% 100%, ${to}30, transparent 55%), var(--surface-2)`,
      }}
    >
      <div className="bg-grid absolute inset-0 opacity-70" />
      <div
        className="absolute top-1/2 left-1/2 size-40 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[60px]"
        style={{ background: `${from}40` }}
      />

      <div className={`absolute inset-x-0 top-0 flex items-center justify-center ${size === "sm" ? "bottom-11" : "bottom-10"}`}>
        <div
          className={`flex items-center justify-center rounded-2xl border border-fg/15 shadow-2xl backdrop-blur-md transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3 ${size === "sm" ? "size-12" : "size-16 sm:size-[4.5rem]"}`}
          style={{ background: `linear-gradient(135deg, ${from}55, ${to}35)`, boxShadow: `0 20px 50px -12px ${from}80` }}
        >
          <Icon className={size === "sm" ? "size-6 text-white" : "size-7 text-white sm:size-8"} />
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 flex justify-center gap-2 p-3">
        {logos.map(({ Icon: Logo, color }, index) => (
          <span
            key={index}
            className="flex size-8 items-center justify-center rounded-lg border border-fg/10 bg-surface/70 backdrop-blur-md transition-transform duration-500 group-hover:-translate-y-1"
            style={{ transitionDelay: `${index * 40}ms` }}
          >
            <Logo className="size-4" style={{ color: color ?? "var(--color-muted)" }} />
          </span>
        ))}
      </div>
    </div>
  );
}
