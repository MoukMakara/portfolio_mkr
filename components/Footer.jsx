import Link from "next/link";
import SocialLinks from "./SocialLinks";
import { site } from "@/data/site";

const footerLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="relative mt-8 border-t border-line">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"
      />
      <div className="container-page grid gap-10 py-14 md:grid-cols-[1.6fr_1fr_auto] md:gap-16">
        <div>
          <div className="flex items-center gap-2.5">
            <span
              aria-hidden="true"
              className="flex size-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-ai font-mono text-xs font-bold text-white"
            >
              MM
            </span>
            <p className="font-semibold tracking-tight text-fg">{site.name}</p>
          </div>
          <p className="mt-3 text-sm text-muted">{site.title}</p>
          <p className="mt-1 text-sm text-subtle">{site.focus.join(" • ")}</p>
        </div>
        <nav aria-label="Footer">
          <h2 className="mb-4 font-mono text-xs tracking-widest text-subtle uppercase">Navigate</h2>
          <ul className="grid grid-cols-2 gap-x-8 gap-y-2.5 text-sm">
            {footerLinks.map(({ id, label }) => (
              <li key={id}>
                <Link href={`/#${id}`} className="text-muted transition-colors hover:text-fg">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h2 className="mb-4 font-mono text-xs tracking-widest text-subtle uppercase">Connect</h2>
          <SocialLinks bordered />
        </div>
      </div>
      <div className="border-t border-line">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {site.name}. All rights reserved.</p>
          <p>Built with Next.js &amp; Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
