export type ProjectStatus = "ACTIVE" | "COMPLETED" | "EXPERIMENTAL";

export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  status: ProjectStatus;
  technologies: string[];
  github: string;
}

export const projects: Project[] = [
  {
    id: "agrotech",
    number: "001",
    title: "AGROTECH",
    category: "IOT / CLOUD / SOFTWARE",
    description:
      "Multidisciplinary agricultural technology platform developed for the FIAP Oracle Challenge, integrating IoT, backend services, databases, mobile applications and intelligent data processing.",
    status: "COMPLETED",
    technologies: ["JAVA", ".NET", "PYTHON", "TYPESCRIPT", "ORACLE", "IoT"],
    github: "https://github.com/challenge-oracle-2tdspr",
  },

  {
    id: "digital-bank-api",
    number: "002",
    title: "DIGITAL BANK API",
    category: "BACKEND / MESSAGING",
    description:
      "Digital banking backend built with ASP.NET Core, Oracle and RabbitMQ, including asynchronous processing, observability and automated integration tests.",
    status: "COMPLETED",
    technologies: [
      ".NET 8",
      "ASP.NET CORE",
      "ORACLE",
      "RABBITMQ",
      "OPENTELEMETRY",
      "SERILOG",
      "DOCKER",
      "XUNIT",
    ],
    github:
      "https://github.com/ruan-gaspar/Projeto-Banco-API-Mensageria-ASP.NETCore",
  },

  {
    id: "livraria-api",
    number: "003",
    title: "LIVRARIA API",
    category: "BACKEND / DISTRIBUTED SYSTEMS",
    description:
      "REST API for a library system with Oracle persistence, Entity Framework Core and asynchronous messaging through RabbitMQ consumers.",
    status: "COMPLETED",
    technologies: [
      ".NET 9",
      "ASP.NET CORE",
      "ORACLE",
      "EF CORE",
      "RABBITMQ",
      "DOCKER",
      "SWAGGER",
    ],
    github: "https://github.com/ruan-gaspar/dotnet-projetos-2026",
  },

  {
    id: "java-advanced",
    number: "004",
    title: "JAVA ADVANCED",
    category: "JAVA / BACKEND",
    description:
      "Collection of Java and Angular projects developed during the FIAP Java Advanced program, exploring backend development, APIs, application architecture and integration concepts.",
    status: "COMPLETED",
    technologies: ["JAVA", "SPRING", "ANGULAR", "REST API", "DATABASE"],
    github: "https://github.com/ruan-gaspar/java-advanced",
  },
];
