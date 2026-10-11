import { getTechIcon } from "@/data/techIcons";

const tones = {
  default: "border-line bg-fg/[0.03] text-muted hover:border-line-strong hover:text-fg",
  ai: "border-ai/20 bg-ai/[0.07] text-ai dark:text-[#cfc2ff] hover:border-ai/40",
};

// Technology chip with its real logo (when one exists) in the brand color.
export default function TechBadge({ name, tone = "default", size = "md" }) {
  const icon = getTechIcon(name);
  const sizing = size === "sm" ? "gap-1.5 px-2 py-1 text-xs" : "gap-2 px-2.5 py-1.5 text-[13px]";
  return (
    <span
      className={`inline-flex items-center rounded-lg border leading-none font-medium transition-colors ${sizing} ${tones[tone]}`}
    >
      {icon && (
        <icon.Icon
          aria-hidden="true"
          className={size === "sm" ? "size-3.5 shrink-0" : "size-4 shrink-0"}
          style={{ color: icon.color ?? (tone === "ai" ? "var(--color-ai)" : "var(--color-muted)") }}
        />
      )}
      {name}
    </span>
  );
}

export function TechList({ items, tone, size, label, className = "" }) {
  return (
    <ul className={`flex flex-wrap gap-2 ${className}`} aria-label={label}>
      {items.map((item) => (
        <li key={item}>
          <TechBadge name={item} tone={tone} size={size} />
        </li>
      ))}
    </ul>
  );
}
