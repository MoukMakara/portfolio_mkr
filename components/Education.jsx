import { BookOpen, GraduationCap } from "lucide-react";
import Section from "./Section";
import { TechList } from "./TechBadge";
import { Timeline, TimelineItem } from "./Timeline";
import { advancedModules, education, training } from "@/data/education";

function SubHeading({ icon: Icon, children }) {
  return (
    <h3 className="mb-6 flex items-center gap-2 font-mono text-xs tracking-widest text-subtle uppercase">
      <Icon size={14} className="text-accent" aria-hidden="true" />
      {children}
    </h3>
  );
}

export default function Education() {
  return (
    <Section
      id="education"
      eyebrow="Education & Training"
      title={
        <>
          Always <span className="text-gradient-accent">learning</span>
        </>
      }
      description="A steady progression from web fundamentals to Spring, full-stack development, and now microservices and AI engineering."
    >
      <div className="grid gap-14 lg:grid-cols-[1fr_1.4fr] lg:gap-12">
        <div>
          <SubHeading icon={GraduationCap}>Education</SubHeading>
          <Timeline label="Education">
            {education.map((item, index) => (
              <TimelineItem
                key={item.school}
                title={item.school}
                subtitle={item.credential}
                period={item.period}
                icon={GraduationCap}
                delay={index * 0.05}
                headingLevel={4}
              >
                {item.note && <p className="text-sm text-subtle">{item.note}</p>}
              </TimelineItem>
            ))}
          </Timeline>
        </div>

        <div>
          <SubHeading icon={BookOpen}>Training progression</SubHeading>
          <Timeline label="Technical training">
            {training.map((item, index) => (
              <TimelineItem
                key={item.title}
                title={item.title}
                subtitle={item.provider}
                period={item.period}
                current={item.current}
                delay={index * 0.05}
                headingLevel={4}
              >
                <p className="text-sm leading-relaxed text-muted">{item.description}</p>
                {item.topics.length > 0 && (
                  <TechList items={item.topics} size="sm" label={`${item.title} topics`} className="mt-4" />
                )}
                {item.current && (
                  <ul className="mt-4 grid gap-2.5 sm:grid-cols-2" aria-label="Advanced course modules">
                    {advancedModules.map((module) => (
                      <li key={module.name} className="rounded-xl border border-line bg-fg/[0.02] p-3.5">
                        <h5
                          className={`text-sm font-medium ${module.name === "Spring AI" ? "text-ai" : "text-fg"}`}
                        >
                          {module.name}
                        </h5>
                        <p className="mt-1 text-xs leading-relaxed text-muted">{module.items.join(" · ")}</p>
                      </li>
                    ))}
                  </ul>
                )}
              </TimelineItem>
            ))}
          </Timeline>
        </div>
      </div>
    </Section>
  );
}
