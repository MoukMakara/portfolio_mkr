import { getTechIcon } from "@/data/techIcons";

const stack = [
  "Java",
  "Spring Boot",
  "Spring Security",
  "Next.js",
  "React",
  "PostgreSQL",
  "MySQL",
  "Python",
  "FastAPI",
  "Docker",
  "Apache Kafka",
  "RabbitMQ",
  "Keycloak",
  "Ollama",
  "Tailwind CSS",
  "Kotlin",
  "Android",
  "Git",
];

function Row({ hidden = false }) {
  return (
    <ul className="flex shrink-0 items-center gap-10 pr-10" aria-hidden={hidden || undefined}>
      {stack.map((name) => {
        const { Icon, color } = getTechIcon(name);
        return (
          <li key={name} className="flex items-center gap-2.5 text-sm font-medium whitespace-nowrap text-muted">
            <Icon aria-hidden="true" className="size-5" style={{ color }} />
            {name}
          </li>
        );
      })}
    </ul>
  );
}

// Infinite logo strip. The list is rendered twice and translated -50% for a seamless loop.
export default function TechMarquee() {
  return (
    <div className="border-y border-line bg-surface/40">
      <div className="container-page flex flex-col items-center gap-4 py-6 md:flex-row md:gap-8">
        <p className="shrink-0 font-mono text-xs tracking-widest text-subtle uppercase">Tech I work with</p>
        <div className="mask-fade-x group relative w-full overflow-hidden">
          <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
            <Row />
            <Row hidden />
          </div>
        </div>
      </div>
    </div>
  );
}
