import { FaGithub } from "react-icons/fa6";
import { ArrowUpRight } from "lucide-react";
import { isPlaceholder } from "@/data/site";

const sizes = {
  default: "gap-1.5 px-3.5 py-2 text-sm",
  small: "gap-1.5 px-2.5 py-1.5 text-xs",
};

function ProjectLink({ href, label, Icon, size }) {
  const base = `inline-flex items-center rounded-lg border font-medium transition-colors ${sizes[size]}`;
  if (isPlaceholder(href)) {
    return (
      <span className={`${base} cursor-default border-line text-subtle`} title={`${label} link coming soon`}>
        <Icon size={14} aria-hidden="true" />
        {label}
        <span className="font-normal opacity-80">· Coming soon</span>
      </span>
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} border-line-strong bg-fg/[0.03] text-fg hover:border-fg/25 hover:bg-fg/[0.07]`}
    >
      <Icon size={14} aria-hidden="true" />
      {label}
    </a>
  );
}

// `demoUrl: null` means the project has no demo, so no button is shown.
export default function ProjectLinks({ project, size = "default" }) {
  return (
    <div className="flex flex-wrap gap-2">
      <ProjectLink href={project.githubUrl} label="GitHub" Icon={FaGithub} size={size} />
      {project.demoUrl !== null && (
        <ProjectLink href={project.demoUrl} label="Demo" Icon={ArrowUpRight} size={size} />
      )}
    </div>
  );
}
