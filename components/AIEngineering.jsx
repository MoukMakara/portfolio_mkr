import { Cpu, Database, FileText, Filter, Layers, Server } from "lucide-react";
import ArchitectureFlow from "./ArchitectureFlow";
import Reveal from "./Reveal";
import Section from "./Section";
import SpotlightCard from "./SpotlightCard";
import { TechList } from "./TechBadge";

const aiStack = [
  "Python",
  "FastAPI",
  "LLMs",
  "RAG",
  "NL-to-SQL",
  "OCR",
  "Embeddings",
  "Vector Stores",
  "Spring AI",
  "Ollama",
  "vLLM",
];

const applicationLayers = [
  { label: "User", detail: "Browser" },
  { label: "Next.js", detail: "UI & server rendering" },
  { label: "Spring Boot", detail: "Auth, business logic, APIs" },
  { label: "FastAPI", detail: "Python AI service" },
  { label: "AI / LLM", detail: "Local models, RAG, NL-to-SQL" },
  { label: "PostgreSQL", detail: "Application & vector data" },
];

const documentPipeline = [
  { label: "Document", detail: "Receipts, bills, CSV, Excel" },
  { label: "OCR", detail: "Text recognition" },
  { label: "Data Extraction", detail: "Structured fields" },
  { label: "Validation", detail: "Normalize & audit quality" },
  { label: "AI Analysis", detail: "LLM reasoning over clean data" },
  { label: "Financial Insight", detail: "Answers & forecasts" },
];

const principles = [
  {
    icon: Server,
    title: "AI as a service, not a script",
    text: "LLM work lives in a dedicated FastAPI service behind the Spring Boot backend, so authentication, business rules, and data ownership stay in one place.",
  },
  {
    icon: Database,
    title: "Ground the model in real data",
    text: "RAG with embeddings and vector stores, and NL-to-SQL over PostgreSQL, keep answers tied to the application's own records.",
  },
  {
    icon: Filter,
    title: "Clean inputs before reasoning",
    text: "OCR output is extracted, normalized, and validated before an LLM sees it — garbage in still means garbage out.",
  },
  {
    icon: Cpu,
    title: "Local models when data is sensitive",
    text: "Running models with Ollama or vLLM keeps private data on infrastructure you control.",
  },
];

function DiagramCard({ icon: Icon, title, caption, children }) {
  return (
    <figure className="card h-full p-5 sm:p-7">
      <div className="mb-6 flex items-center gap-3">
        <span className="flex size-9 items-center justify-center rounded-lg border border-ai/25 bg-ai/10 text-ai">
          <Icon size={17} aria-hidden="true" />
        </span>
        <h3 className="font-semibold text-fg">{title}</h3>
      </div>
      {children}
      <figcaption className="mt-5 text-sm leading-relaxed text-subtle">{caption}</figcaption>
    </figure>
  );
}

export default function AIEngineering() {
  return (
    <Section
      id="ai-engineering"
      eyebrow="Focus area"
      title={
        <>
          <span className="text-gradient-accent">AI Engineering</span>
        </>
      }
      description="Building practical AI-powered applications with modern LLM and data-processing technologies."
      className="overflow-hidden border-y border-line"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-ai/[0.07] blur-[140px]" />
        <div className="bg-grid absolute inset-0 opacity-50" />
      </div>

      <Reveal>
        <TechList items={aiStack} tone="ai" label="AI engineering technologies" />
      </Reveal>

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        <Reveal className="h-full">
          <DiagramCard
            icon={Layers}
            title="AI application architecture"
            caption="How an AI feature fits into a full-stack system: the LLM is one layer of the application, not the whole application."
          >
            <ArchitectureFlow steps={applicationLayers} tone="ai" label="AI application architecture layers" />
          </DiagramCard>
        </Reveal>
        <Reveal delay={0.08} className="h-full">
          <DiagramCard
            icon={FileText}
            title="Document intelligence pipeline"
            caption="The flow used in LedgerVision AI to turn paper and spreadsheet records into financial insight."
          >
            <ArchitectureFlow steps={documentPipeline} tone="ai" label="Document processing pipeline" />
          </DiagramCard>
        </Reveal>
      </div>

      <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {principles.map(({ icon: Icon, title, text }, index) => (
          <Reveal as="li" key={title} delay={index * 0.05}>
            <SpotlightCard spot="167 139 250" className="card h-full p-5 transition-colors hover:border-ai/30">
              <Icon size={18} className="text-ai" aria-hidden="true" />
              <h3 className="mt-4 text-sm font-semibold text-fg">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
            </SpotlightCard>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
