// Fixed, page-wide background: drifting color orbs, a dot grid that fades toward the edges,
// and fine film grain. Pure CSS (radial gradients, no blur filters) to stay cheap to render.
export default function BackgroundFX() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-bg" />
      <div
        className="absolute -top-[20%] -left-[10%] size-[70vmax] animate-orb rounded-full"
        style={{
          opacity: "var(--orb-opacity)",
          background: "radial-gradient(circle, color-mix(in srgb, var(--accent) 35%, transparent) 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute top-[10%] -right-[20%] size-[65vmax] animate-orb rounded-full"
        style={{
          opacity: "var(--orb-opacity)",
          animationDelay: "-8s",
          background: "radial-gradient(circle, color-mix(in srgb, var(--ai) 32%, transparent) 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute -bottom-[30%] left-[20%] size-[60vmax] animate-orb rounded-full"
        style={{
          opacity: "var(--orb-opacity)",
          animationDelay: "-15s",
          background: "radial-gradient(circle, color-mix(in srgb, var(--cyan) 18%, transparent) 0%, transparent 60%)",
        }}
      />
      <div className="bg-dots absolute inset-0 [mask-image:radial-gradient(ellipse_80%_70%_at_50%_0%,black,transparent_85%)]" />
      <div className="bg-noise absolute inset-0" />
    </div>
  );
}
