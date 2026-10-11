import {
  SiAndroid,
  SiApachekafka,
  SiApachemaven,
  SiBootstrap,
  SiCodeigniter,
  SiCss,
  SiDocker,
  SiFastapi,
  SiFigma,
  SiGit,
  SiGithub,
  SiGitlab,
  SiGradle,
  SiHibernate,
  SiHtml5,
  SiIntellijidea,
  SiJavascript,
  SiJquery,
  SiJsonwebtokens,
  SiJunit5,
  SiKeycloak,
  SiKotlin,
  SiLaravel,
  SiLinux,
  SiMysql,
  SiNextdotjs,
  SiOllama,
  SiOpenid,
  SiPaddlepaddle,
  SiPhp,
  SiPostgresql,
  SiPostman,
  SiPwa,
  SiPython,
  SiQwen,
  SiRabbitmq,
  SiReact,
  SiSpring,
  SiSpringboot,
  SiSpringsecurity,
  SiSwagger,
  SiTailwindcss,
  SiThymeleaf,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";
import { TbApi } from "react-icons/tb";
import {
  Activity,
  Binary,
  Boxes,
  BrainCircuit,
  Cable,
  Cpu,
  Database,
  DatabaseZap,
  FileSearch,
  FlaskConical,
  Gauge,
  KeyRound,
  Layers,
  MessageSquareText,
  Network,
  PenTool,
  QrCode,
  Radar,
  ScanText,
  Settings2,
  ShieldAlert,
  Table2,
  Users,
  User,
  FileText,
  ShieldCheck,
  TrendingUp,
  Monitor,
  Sparkles,
  Waypoints,
  Zap,
} from "lucide-react";

// Brand logos (react-icons / Simple Icons) with their brand colors.
// Concepts without a logo use a generic Lucide icon and the neutral color (`null`).
// Black brand logos (e.g. Next.js, GitHub) use the theme foreground color so they stay visible in both themes.
const FG = "var(--color-fg)";

const icons = {
  // Languages & frontend
  Java: [FaJava, "#f89820"],
  JavaScript: [SiJavascript, "#f7df1e"],
  Python: [SiPython, "#4b8bbe"],
  PHP: [SiPhp, "#8892bf"],
  Kotlin: [SiKotlin, "#a97bff"],
  HTML: [SiHtml5, "#e34f26"],
  CSS: [SiCss, "#663399"],
  React: [SiReact, "#61dafb"],
  ReactJS: [SiReact, "#61dafb"],
  "Next.js": [SiNextdotjs, FG],
  "Tailwind CSS": [SiTailwindcss, "#38bdf8"],
  Bootstrap: [SiBootstrap, "#8c5cf6"],
  jQuery: [SiJquery, "#4a9fdb"],
  Thymeleaf: [SiThymeleaf, "#3fa34d"],

  // Spring & backend
  Spring: [SiSpring, "#6db33f"],
  "Spring Boot": [SiSpringboot, "#6db33f"],
  "Spring MVC": [SiSpring, "#6db33f"],
  "Spring Data JPA": [SiSpring, "#6db33f"],
  "Spring Cloud": [SiSpring, "#6db33f"],
  "Spring AI": [SiSpring, "#6db33f"],
  "Spring Security": [SiSpringsecurity, "#6db33f"],
  "Hibernate ORM": [SiHibernate, "#bcae79"],
  MyBatis: [Database, null],
  "RESTful APIs": [TbApi, null],
  "REST APIs": [TbApi, null],
  "REST API": [TbApi, null],
  "REST API Integration": [TbApi, null],
  JWT: [SiJsonwebtokens, "#d63aff"],
  Laravel: [SiLaravel, "#ff2d20"],
  CodeIgniter: [SiCodeigniter, "#ef4223"],
  FastAPI: [SiFastapi, "#009688"],
  MVC: [Layers, null],
  "JUnit 5": [SiJunit5, "#25a162"],
  Mockito: [FlaskConical, null],
  "Gradle Multi-Project Build": [SiGradle, FG],
  Maven: [SiApachemaven, "#c71a36"],

  // Microservices
  Microservices: [Boxes, null],
  Eureka: [Radar, null],
  "API Gateway": [Waypoints, null],
  "Config Server": [Settings2, null],
  OpenFeign: [Cable, null],
  "Circuit Breaker": [ShieldAlert, null],
  Resilience4j: [Zap, null],
  "Distributed Tracing": [Activity, null],
  Zipkin: [Activity, null],

  // Security
  OAuth2: [KeyRound, null],
  Keycloak: [SiKeycloak, "#4d9fdc"],
  OIDC: [SiOpenid, "#f78c40"],
  "Single Sign-On (SSO)": [Users, null],
  SSO: [Users, null],

  // Messaging
  RabbitMQ: [SiRabbitmq, "#ff6600"],
  "Apache Kafka": [SiApachekafka, FG],
  WebSocket: [Cable, null],

  // Databases
  PostgreSQL: [SiPostgresql, "#5a8be0"],
  MySQL: [SiMysql, "#4a9cc9"],
  SQL: [Database, null],
  "Database Design": [Table2, null],
  "Data Modeling": [Network, null],

  // AI
  "Prompt Engineering": [MessageSquareText, null],
  Embeddings: [Binary, null],
  "Vector Stores": [DatabaseZap, null],
  RAG: [FileSearch, null],
  "Large Language Models": [BrainCircuit, null],
  LLMs: [BrainCircuit, null],
  "Local LLMs": [Cpu, null],
  Ollama: [SiOllama, FG],
  vLLM: [Gauge, null],
  "NL-to-SQL": [DatabaseZap, null],
  OCR: [ScanText, null],
  Qwen: [SiQwen, "#8b7cf6"],
  Tesseract: [ScanText, null],
  PaddleOCR: [SiPaddlepaddle, "#3c63f6"],

  // Mobile
  Android: [SiAndroid, "#3ddc84"],
  "Android SDK": [SiAndroid, "#3ddc84"],

  // DevOps & tools
  Docker: [SiDocker, "#2496ed"],
  "Docker Compose": [SiDocker, "#2496ed"],
  Git: [SiGit, "#f05032"],
  GitHub: [SiGithub, FG],
  GitLab: [SiGitlab, "#fc6d26"],
  Linux: [SiLinux, "#fcc624"],
  Postman: [SiPostman, "#ff6c37"],
  "Swagger / OpenAPI": [SiSwagger, "#85ea2d"],
  "IntelliJ IDEA": [SiIntellijidea, FG],
  "VS Code": [VscVscode, "#3b9cf2"],
  PWA: [SiPwa, "#a28bf5"],
  "BAKONG KHQR": [QrCode, null],

  // Training topics
  "Java (J2SE, J2EE, Maven, MVC)": [FaJava, "#f89820"],
  "Basic Security": [KeyRound, null],
  "Database Essentials": [Database, null],
  "UI/UX": [PenTool, null],
  "AI coding tools": [Sparkles, null],

  // Architecture-diagram steps
  User: [User, null],
  Client: [Monitor, null],
  "REST Client": [Monitor, null],
  Document: [FileText, null],
  "Data Extraction": [Table2, null],
  Validation: [ShieldCheck, null],
  "AI Analysis": [BrainCircuit, null],
  "AI / LLM": [BrainCircuit, null],
  "Local LLM": [Cpu, null],
  "OCR / AI Processing": [ScanText, null],
  "Financial Insight": [TrendingUp, null],

  // Design
  Figma: [SiFigma, "#f24e1e"],
  "UX/UI Design": [PenTool, null],
};

export function getTechIcon(name) {
  const entry = icons[name];
  if (!entry) return null;
  const [Icon, color] = entry;
  return { Icon, color };
}
