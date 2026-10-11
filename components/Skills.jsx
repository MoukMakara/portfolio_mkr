import Reveal from "./Reveal";
import Section from "./Section";
import SkillCard from "./SkillCard";
import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title={
        <>
          A toolkit built around <span className="text-gradient-accent">backend &amp; AI</span>
        </>
      }
      description="Grouped by how I use them — from Spring Boot APIs and relational data to microservices and LLM-powered features."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, index) => (
          <Reveal
            key={category.name}
            delay={(index % 3) * 0.06}
            className={category.wide ? "lg:col-span-2" : undefined}
          >
            <SkillCard category={category} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
