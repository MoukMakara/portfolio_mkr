import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { Mail } from "lucide-react";
import { isPlaceholder, site } from "@/data/site";

export const socialItems = [
  { label: "GitHub", href: site.socials.github, Icon: FaGithub },
  { label: "LinkedIn", href: site.socials.linkedin, Icon: FaLinkedin },
  { label: "Email", href: `mailto:${site.email}`, Icon: Mail },
];

// Icon-only social links. Placeholder ("#") links are announced as "coming soon".
export default function SocialLinks({ include = ["GitHub", "LinkedIn", "Email"], className = "", bordered = false }) {
  return (
    <ul className={`flex items-center gap-1.5 ${className}`}>
      {socialItems
        .filter((item) => include.includes(item.label))
        .map(({ label, href, Icon }) => {
          const pending = isPlaceholder(href);
          const external = href.startsWith("http");
          return (
            <li key={label}>
              <a
                href={href}
                aria-label={pending ? `${label} (link coming soon)` : label}
                title={pending ? `${label} — coming soon` : label}
                {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                className={`inline-flex size-9 items-center justify-center rounded-lg text-muted transition-all hover:text-fg ${
                  bordered ? "border border-line bg-fg/[0.03] hover:-translate-y-0.5 hover:border-line-strong" : "hover:bg-fg/5"
                }`}
              >
                <Icon size={17} aria-hidden="true" />
              </a>
            </li>
          );
        })}
    </ul>
  );
}
