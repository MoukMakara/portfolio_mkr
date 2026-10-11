import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { Mail, MapPin } from "lucide-react";
import ContactForm from "./ContactForm";
import Reveal from "./Reveal";
import Section from "./Section";
import { displayUrl, isPlaceholder, site } from "@/data/site";

const channels = [
  { label: "Email", value: site.email, href: `mailto:${site.email}`, Icon: Mail },
  { label: "GitHub", href: site.socials.github, Icon: FaGithub },
  { label: "LinkedIn", href: site.socials.linkedin, Icon: FaLinkedin },
  { label: "Location", value: site.location, Icon: MapPin },
];

function ChannelValue({ href, value }) {
  if (!href) return <span className="text-fg">{value}</span>;
  if (isPlaceholder(href)) return <span className="text-fg">Link coming soon</span>;
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      className="text-fg underline-offset-4 hover:text-accent hover:underline"
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
    >
      {external ? displayUrl(href) : value}
    </a>
  );
}

export default function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title={
        <>
          Let&apos;s Build <span className="text-gradient-accent">Something Together</span>
        </>
      }
      description="I'm interested in software engineering opportunities, backend development, full-stack development, and AI-powered applications."
    >
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-line-strong">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute -top-40 -left-20 size-[28rem] rounded-full bg-accent/15 blur-[120px]" />
            <div className="absolute -right-20 -bottom-40 size-[28rem] rounded-full bg-ai/15 blur-[120px]" />
          </div>
          <div className="relative grid gap-px bg-line lg:grid-cols-[1fr_1.4fr]">
            <div className="flex flex-col bg-surface/95 p-6 sm:p-8">
              <h3 className="text-xl font-semibold tracking-tight text-fg">Get in touch</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Email is the best way to reach me, or use the form to start a message.
              </p>
              <ul className="mt-8 space-y-3">
                {channels.map(({ label, value, href, Icon }) => (
                  <li
                    key={label}
                    className="flex items-center gap-4 rounded-xl border border-line bg-fg/[0.02] p-3.5 transition-colors hover:border-line-strong"
                  >
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-accent/20 to-ai/15 text-fg">
                      <Icon size={17} aria-hidden="true" />
                    </span>
                    <div className="min-w-0 text-sm">
                      <p className="text-xs text-subtle">{label}</p>
                      <p className="truncate">
                        <ChannelValue href={href} value={value} />
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-surface/90 p-6 sm:p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
