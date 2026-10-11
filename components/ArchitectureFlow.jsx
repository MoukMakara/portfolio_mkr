import { getTechIcon } from "@/data/techIcons";

const tones = {
  accent: { text: "text-accent", dot: "bg-accent shadow-[0_0_10px_2px_rgba(107,155,255,0.7)]" },
  ai: { text: "text-ai", dot: "bg-ai shadow-[0_0_10px_2px_rgba(167,139,250,0.7)]" },
};

// Vertical step-by-step diagram. `steps` items are strings or { label, detail, icon }.
// The icon is looked up by `icon` (or the label) in data/techIcons.js.
// A glowing dot travels down each connector to suggest data flowing through the system.
export default function ArchitectureFlow({ steps, tone = "accent", label }) {
  const colors = tones[tone];
  return (
    <ol aria-label={label} className="flex flex-col">
      {steps.map((step, index) => {
        const { label: stepLabel, detail, icon: iconName } = typeof step === "string" ? { label: step } : step;
        const icon = getTechIcon(iconName ?? stepLabel);
        return (
          <li key={stepLabel} className="flex flex-col items-center">
            {index > 0 && (
              <span aria-hidden="true" className="relative h-6 w-px bg-gradient-to-b from-line-strong to-line">
                <span
                  className={`absolute left-1/2 size-1.5 -translate-x-1/2 animate-flow rounded-full ${colors.dot}`}
                  style={{ animationDelay: `${index * 0.35}s` }}
                />
              </span>
            )}
            <div className="flex w-full items-center gap-3 rounded-xl border border-line bg-fg/[0.025] px-3.5 py-2.5 transition-colors hover:border-line-strong hover:bg-fg/[0.04]">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-line bg-bg">
                {icon ? (
                  <icon.Icon
                    aria-hidden="true"
                    className="size-4"
                    style={{ color: icon.color ?? `var(--color-${tone})` }}
                  />
                ) : (
                  <span className={`font-mono text-[11px] ${colors.text}`}>{String(index + 1).padStart(2, "0")}</span>
                )}
              </span>
              <span className="text-sm font-medium text-fg">{stepLabel}</span>
              {detail && <span className="ml-auto text-right text-xs text-subtle">{detail}</span>}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
