import { CreditCard, Boxes, MessagesSquare, ScanText, ShoppingCart, Trophy } from "lucide-react";

// Single source of truth for project cards and /projects/[slug] detail pages.
// `cover` drives the generated card artwork (icon + gradient) until real screenshots exist.
// Fields set to null render a "Coming soon" placeholder instead of invented content.
// Replace githubUrl / demoUrl "#" placeholders with real links when available.

export const projects = [
  {
    slug: "ledgervision-ai",
    cover: { icon: ScanText, colors: ["#7c5cff", "#3b82f6"] },
    title: "LedgerVision AI",
    category: "AI + Backend + Full Stack",
    type: "Personal Project",
    featured: true,
    theme: "ai", // uses the AI accent color
    summary:
      "An AI-powered bookkeeping and financial advisory platform designed for small and medium-sized businesses.",
    overview:
      "LedgerVision AI turns unstructured financial paperwork into structured, queryable bookkeeping data. It accepts handwritten receipts, paper bills, CSV and Excel files, and other financial records, then runs them through an OCR and AI pipeline so business owners can ask questions about their finances in plain language.",
    problem:
      "Small and medium-sized businesses often keep financial records as handwritten receipts, paper bills, and scattered spreadsheets. That data is hard to consolidate, audit, and analyze without manual data entry.",
    solution:
      "A pipeline that extracts data from documents with OCR, normalizes and audits it for quality, stores it in PostgreSQL, and exposes it through a local LLM for natural-language queries, RAG-based answers, financial analysis, and forecasting.",
    inputs: ["Handwritten receipts", "Paper bills", "CSV files", "Excel files", "Financial records"],
    featuresTitle: "AI Capabilities",
    features: [
      "OCR for receipts and paper bills",
      "Structured data extraction",
      "Data normalization",
      "Data quality auditing",
      "NL-to-SQL queries over financial data",
      "RAG over business records",
      "Financial analysis",
      "Forecasting",
      "AI chatbot",
    ],
    architecture: [
      { label: "Next.js", detail: "Web client" },
      { label: "Spring Boot Microservices", detail: "Business logic & APIs", icon: "Spring Boot" },
      { label: "FastAPI", detail: "Python AI service" },
      { label: "OCR / AI Processing", detail: "Tesseract · PaddleOCR" },
      { label: "Local LLM", detail: "Qwen served with vLLM", icon: "Qwen" },
      { label: "PostgreSQL", detail: "Financial data store" },
    ],
    tech: [
      "Next.js",
      "Spring Boot",
      "FastAPI",
      "Python",
      "PostgreSQL",
      "Qwen",
      "vLLM",
      "Tesseract",
      "PaddleOCR",
      "Docker",
    ],
    role: null,
    challenges: [
      "Document quality varies widely, so extracted values pass through normalization and data-quality auditing before they are used for analysis.",
      "Running the LLM locally (Qwen on vLLM) keeps financial records off third-party AI APIs.",
      "Splitting the system into Spring Boot services and a Python FastAPI service keeps business logic and AI processing independently deployable.",
    ],
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    slug: "snappos",
    cover: { icon: ShoppingCart, colors: ["#10b981", "#0ea5e9"] },
    title: "SnapPOS",
    category: "Full Stack + POS + Inventory + AI",
    type: "Group Final Project · KSHRD Basic Course",
    featured: true,
    summary:
      "A browser-based point of sale and inventory management platform for small and medium businesses, with multi-branch stock visibility and KHQR payments.",
    overview:
      "SnapPOS is a browser-based point of sale and inventory management platform designed for small and medium businesses. It provides stock visibility across multiple branches and ships with a PWA so staff can update stock directly from their phones.",
    problem:
      "Businesses with more than one branch need an accurate, shared view of stock, and staff need a quick way to record supplier deliveries and transfers as they happen.",
    solution:
      "A Spring Boot backend and Next.js frontend backed by PostgreSQL, plus a PWA that lets staff update stock from their phone when receiving supplier deliveries or confirming stock transfers between branches. Sales payments are supported through BAKONG KHQR, and an AI assistant supports the business.",
    features: [
      "Point of sale",
      "Inventory management",
      "Multi-branch stock visibility",
      "Stock updates from a mobile PWA",
      "Supplier delivery receiving",
      "Stock transfer confirmation between branches",
      "BAKONG KHQR payment integration",
      "AI assistant for business",
    ],
    architecture: [
      { label: "Next.js + PWA", detail: "POS web app & staff mobile app", icon: "Next.js" },
      { label: "Spring Boot", detail: "REST API & business logic" },
      { label: "PostgreSQL", detail: "Stock, sales & branch data" },
    ],
    integrations: ["BAKONG KHQR payments", "AI assistant"],
    tech: ["Spring Boot", "Next.js", "PostgreSQL", "PWA", "BAKONG KHQR"],
    role: "Team member on the group final project of the Korea Software HRD Center Basic Course.",
    challenges: null,
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    slug: "hrd-community",
    cover: { icon: MessagesSquare, colors: ["#3b82f6", "#06b6d4"] },
    title: "HRD Community",
    category: "Full Stack",
    type: "HRD Coding Challenge · 36-hour group project",
    featured: true,
    summary:
      "A collaborative Q&A platform where students ask questions and instructors verify, grade, and give feedback on answers.",
    overview:
      "HRD Community was built during a 1.5-day (36-hour) intensive full-stack development competition. It is a collaborative Q&A platform designed for students to learn and for instructors to verify answers.",
    problem:
      "Students need a place to ask technical questions and share code, and instructors need a way to confirm which answers are correct and give feedback.",
    solution:
      "A Q&A platform where users ask questions, post answers with code snippets, and upvote the best responses. Instructors can grade answers with a score from 5 to 10 and leave feedback.",
    features: [
      "Ask questions",
      "Post answers with code snippets",
      "Upvote the best answers",
      "Instructor grading (scores from 5 to 10)",
      "Instructor feedback on answers",
    ],
    architecture: [
      { label: "Next.js", detail: "Web client" },
      { label: "Spring Boot", detail: "REST API" },
      { label: "PostgreSQL", detail: "Questions, answers & grades" },
    ],
    tech: ["Spring Boot", "Next.js", "PostgreSQL"],
    role: "Team member in the HRD Coding Challenge full-stack competition.",
    challenges: [
      "Delivered under a strict deadline: the full platform was built within a 36-hour competition.",
      "Required strong teamwork to design, build, and submit the final project to GitHub on time.",
    ],
    recognition:
      "Recognized for successful participation in the Coding Challenge (6–7 April) for developing a full-stack platform within 36 hours.",
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    slug: "sporthub",
    cover: { icon: Trophy, colors: ["#f97316", "#eab308"] },
    title: "SportHub",
    category: "Full Stack",
    type: "Group Final Project · ISTAD",
    featured: false,
    summary:
      "A sports platform for finding local clubs, browsing events, booking tickets, and reading sports news and guides.",
    overview:
      "SportHub is a website for everything about sports. It helps users find local sports clubs, view club details, check sports events and book tickets, and stay up to date with sports news.",
    problem:
      "Information about local sports clubs, events, and rules is spread across many sources, which makes it hard for people to get involved.",
    solution:
      "One platform that lets users search clubs by location or sport type, browse events and book tickets, read daily sports news, and learn the history and rules of different sports.",
    features: [
      "Find local sports clubs",
      "Club details",
      "Search by location",
      "Search by sport type",
      "Sports events",
      "Ticket booking",
      "Daily sports news",
      "Sports guide with history and rules",
    ],
    architecture: [
      { label: "Next.js", detail: "Web client" },
      { label: "Spring Boot", detail: "REST API" },
      { label: "PostgreSQL", detail: "Clubs, events & bookings" },
    ],
    tech: ["Spring Boot", "Next.js", "PostgreSQL"],
    role: "Team member on the ISTAD group final project.",
    challenges: null,
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    slug: "spring-microservices",
    cover: { icon: Boxes, colors: ["#6db33f", "#14b8a6"] },
    title: "Spring Microservices",
    category: "Backend / Architecture",
    type: "Advanced Course Learning Project",
    featured: false,
    summary:
      "A hands-on microservices system exploring service discovery, gateways, resilient service-to-service calls, messaging, and distributed tracing.",
    overview:
      "A technical learning project from the Korea Software HRD Center Advanced Course. It applies Spring Cloud patterns to a set of independently deployable Spring Boot services, run together with Docker.",
    problem:
      "As a backend grows into multiple services, they need to find each other, share configuration, tolerate failures, communicate asynchronously, and remain observable.",
    solution:
      "A Spring Cloud setup where services register with Eureka, load configuration from a Config Server, receive traffic through an API Gateway, call each other via OpenFeign protected by Resilience4j circuit breakers, exchange events over RabbitMQ and Kafka, and report traces to Zipkin.",
    featuresTitle: "Concepts Covered",
    concepts: [
      {
        name: "Service discovery",
        detail: "Services register with Eureka and locate each other by name instead of hard-coded hosts.",
      },
      {
        name: "API Gateway",
        detail: "A single entry point that routes client requests to the right service.",
      },
      {
        name: "Centralized configuration",
        detail: "Config Server provides externalized configuration to every service.",
      },
      {
        name: "Service-to-service communication",
        detail: "Declarative HTTP clients with OpenFeign for synchronous calls.",
      },
      {
        name: "Circuit breaker",
        detail: "Resilience4j stops cascading failures when a downstream service is unavailable.",
      },
      {
        name: "Message-based communication",
        detail: "Asynchronous events with RabbitMQ and Apache Kafka to decouple services.",
      },
      {
        name: "Distributed tracing",
        detail: "Zipkin follows a single request as it travels across services.",
      },
    ],
    features: [
      "Service discovery",
      "API Gateway routing",
      "Service-to-service communication",
      "Circuit breaker",
      "Message-based communication",
      "Distributed tracing",
    ],
    architecture: [
      { label: "Client", detail: "HTTP requests" },
      { label: "API Gateway", detail: "Routing" },
      { label: "Spring Boot Services", detail: "Eureka · Config Server", icon: "Spring Boot" },
      { label: "OpenFeign + Resilience4j", detail: "Sync calls with circuit breaker", icon: "OpenFeign" },
      { label: "RabbitMQ / Kafka", detail: "Async events", icon: "RabbitMQ" },
      { label: "Zipkin", detail: "Distributed tracing" },
    ],
    tech: [
      "Spring Boot",
      "Spring Cloud",
      "Eureka",
      "API Gateway",
      "Config Server",
      "OpenFeign",
      "Resilience4j",
      "RabbitMQ",
      "Apache Kafka",
      "Docker",
      "Zipkin",
    ],
    role: null,
    challenges: null,
    githubUrl: "#",
    demoUrl: null,
  },
  {
    slug: "visa-payment",
    cover: { icon: CreditCard, colors: ["#6366f1", "#0ea5e9"] },
    title: "Visa Payment Simulator",
    category: "Backend / Payment Simulation",
    type: "Personal Project",
    featured: false,
    summary:
      "A backend-focused payment simulation system designed to demonstrate a card payment transaction workflow.",
    overview:
      "A personal backend project that simulates the lifecycle of a card payment, from the payment request through validation and authorization to a final transaction status. It is a simulation for learning purposes and does not process real card payments.",
    problem:
      "Card payment flows involve several steps and states that are hard to understand without seeing them end to end.",
    solution:
      "A Spring Boot REST API that models each step of a card transaction and records its status and history in PostgreSQL.",
    featuresTitle: "Planned Features",
    features: [
      "Payment request",
      "Card validation",
      "Transaction processing",
      "Authorization simulation",
      "Transaction status",
      "Payment history",
      "REST API",
    ],
    architecture: [
      { label: "REST Client", detail: "Payment request" },
      { label: "Spring Boot", detail: "Validation & authorization simulation" },
      { label: "PostgreSQL", detail: "Transactions & history" },
    ],
    tech: ["Java", "Spring Boot", "PostgreSQL", "REST API", "Docker"],
    role: null,
    challenges: null,
    githubUrl: "#",
    demoUrl: null,
  },
];

export function getProject(slug) {
  return projects.find((project) => project.slug === slug);
}
