import { Fragment } from "react";

// IDE-style card. Tokens are hand-colored to avoid shipping a syntax highlighter.

const fields = [
  ["name", '"Mouk Makara"'],
  ["role", '"Full Stack Developer"'],
  ["location", '"Phnom Penh, Cambodia"'],
  ["backend", ["Java", "Spring Boot", "Microservices"]],
  ["frontend", ["React", "Next.js"]],
  ["ai", ["Python", "FastAPI", "RAG", "LLMs"]],
  ["database", ["PostgreSQL", "MySQL"]],
  ["openToWork", "true"],
];

function Value({ value }) {
  if (value === "true") return <span className="text-[#f78c6c]">true</span>;
  if (!Array.isArray(value)) return <span className="text-[#a5d6a7]">{value}</span>;
  return (
    <>
      <span className="text-subtle">[</span>
      {value.map((item, index) => (
        <span key={item}>
          <span className="text-[#a5d6a7]">&quot;{item}&quot;</span>
          {index < value.length - 1 && <span className="text-subtle">, </span>}
        </span>
      ))}
      <span className="text-subtle">]</span>
    </>
  );
}

export default function CodeWindow() {
  const lines = [
    <Fragment key="open">
      <span className="text-ai">const</span> <span className="text-accent">developer</span>{" "}
      <span className="text-subtle">=</span> <span className="text-subtle">{"{"}</span>
    </Fragment>,
    ...fields.map(([key, value]) => (
      <Fragment key={key}>
        {"  "}
        <span className="text-[#e2e4ea]">{key}</span>
        <span className="text-subtle">: </span>
        <Value value={value} />
        <span className="text-subtle">,</span>
      </Fragment>
    )),
    <span key="close" className="text-subtle">
      {"};"}
    </span>,
    "",
    <Fragment key="export">
      <span className="text-ai">export default</span> <span className="text-accent">developer</span>
      <span className="text-subtle">;</span>
    </Fragment>,
  ];

  return (
    // data-theme="dark" keeps the editor dark in both site themes.
    <figure data-theme="dark" className="relative">
      <div aria-hidden="true" className="absolute -inset-px rounded-2xl bg-gradient-to-br from-accent/40 via-transparent to-ai/40 opacity-60" />
      <div className="relative overflow-hidden rounded-2xl bg-[#0b0d12] shadow-2xl shadow-black/60">
        <div className="flex items-center gap-2 border-b border-line bg-white/[0.02] px-4 py-3">
          <span className="size-3 rounded-full bg-[#ff5f57]/80" aria-hidden="true" />
          <span className="size-3 rounded-full bg-[#febc2e]/80" aria-hidden="true" />
          <span className="size-3 rounded-full bg-[#28c840]/80" aria-hidden="true" />
          <figcaption className="ml-3 rounded-md border border-line bg-white/[0.03] px-2.5 py-0.5 font-mono text-xs text-muted">
            developer.js
          </figcaption>
        </div>
        <pre className="overflow-x-auto py-4 font-mono text-[12px] leading-6 sm:text-[13px]">
          <code className="grid">
            {lines.map((line, index) => (
              <span key={index} className="flex pr-5">
                <span aria-hidden="true" className="w-10 shrink-0 pr-4 text-right text-subtle/50 select-none">
                  {index + 1}
                </span>
                <span>{line}</span>
              </span>
            ))}
          </code>
        </pre>
      </div>
    </figure>
  );
}
