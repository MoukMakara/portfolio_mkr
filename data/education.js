export const education = [
  {
    school: "Royal University of Phnom Penh",
    credential: "Bachelor of Computer Science",
    period: "2022 – 2026",
  },
  {
    school: "Korea Software HRD Center",
    credential: "Basic Course Full Stack Development",
    period: "2026",
    note: "14th Basic Course of the Software Experts Training Program — 810 hours, full-time.",
  },
  {
    school: "Institute of Science and Technology Development",
    credential: "Web Development Fundamental",
    period: "2021 – 2022",
  },
];

// Technical training in chronological order, showing the learning progression.
export const training = [
  {
    title: "Web Development Fundamental",
    provider: "ISTAD",
    period: "4 months",
    description:
      "Foundation training covering UX/UI design, ReactJS, Java programming, database essentials, and Git.",
    topics: ["UX/UI Design", "ReactJS", "Java", "Database Essentials", "Git"],
  },
  {
    title: "Short Course Spring Framework",
    provider: "Technical training",
    period: "3 months · 2025",
    description: "Building RESTful APIs with the Spring Framework.",
    topics: ["Spring MVC", "Spring Data JPA", "MyBatis", "REST APIs", "Basic Security", "JWT"],
  },
  {
    title: "Basic Course Full Stack Development",
    provider: "Korea Software HRD Center",
    period: "Feb 2 – Jul 9, 2026 · 810 hours",
    description:
      "Full-time course of lectures, lab research, lab practice, tests, and a group final project (SnapPOS).",
    topics: [
      "Java (J2SE, J2EE, Maven, MVC)",
      "Spring Boot",
      "MyBatis",
      "Spring Security",
      "JWT",
      "Thymeleaf",
      "Next.js",
      "PostgreSQL",
      "Linux",
      "Docker",
      "UI/UX",
      "AI coding tools",
    ],
  },
  {
    title: "Advanced Course — Spring Microservices & AI Engineering",
    provider: "Korea Software HRD Center",
    period: "Jul 20, 2026 – Present · 675 hours",
    current: true,
    description: "Advanced backend architecture and AI engineering with local LLMs.",
    topics: [],
  },
];

// Modules of the current advanced course.
export const advancedModules = [
  {
    name: "Spring Advanced",
    items: ["Spring Data JPA", "Hibernate ORM", "JUnit 5", "Mockito", "Gradle Multi-Project Build"],
  },
  {
    name: "Microservices",
    items: ["Eureka", "API Gateway", "Config Server", "OpenFeign", "Circuit Breaker", "Resilience4j"],
  },
  { name: "Security", items: ["OAuth2", "Keycloak", "SSO", "OIDC"] },
  { name: "Message Brokers", items: ["RabbitMQ", "Apache Kafka", "WebSocket"] },
  { name: "Deployment", items: ["Docker", "Docker Compose", "Distributed Tracing", "Zipkin"] },
  { name: "Spring AI", items: ["Prompt Engineering", "Embeddings", "Vector Stores", "RAG"] },
];
