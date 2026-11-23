export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: "Full-Stack" | "Frontend" | "Backend/API" | "Mobile / Tools";
  tags: string[];
  githubUrl: string;
  demoUrl?: string;
  stars?: number;
  featured?: boolean;
  highlights: string[];
  prototypeImage: string;
  role: string;
  timeline: string;
  clientOrContext: string;
  problem: string;
  solution: string;
  whatIDid: string[];
  keyMetrics: string[];
  architecture: string[];
}

export interface Service {
  icon: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level?: string }[];
}

export const portfolioConfig = {
  personal: {
    name: "Dasuni Uththara",
    title: "Full-Stack Software Engineer & Freelancer",
    badge: "Available for New Freelance Projects",
    location: "Global / Remote",
    bio: "I build fast, scalable, and user-centric web applications. Helping startups and businesses turn ideas into production-ready software with clean code, modern UI prototypes, and reliable architecture.",
    yearsExperience: "3+",
    projectsCompleted: "20+",
    clientSatisfaction: "100%",
    email: "dasuni@example.com",
    github: "https://github.com/dasuniuththara",
    linkedin: "https://linkedin.com/in/dasuniuththara",
    twitter: "https://twitter.com",
    calendly: "https://calendly.com",
  },

  services: [
    {
      icon: "Code2",
      title: "Full-Stack Web Development",
      description: "End-to-end web applications built from scratch using modern stacks. Fast, secure, and ready to scale with your user base.",
      deliverables: ["Custom Next.js/React web apps", "Relational & NoSQL database schemas", "Authentication & Role-based Access", "Payment gateways (Stripe, etc.)"],
    },
    {
      icon: "Layout",
      title: "Modern Frontend & UI/UX",
      description: "Pixel-perfect, responsive web interfaces with smooth animations, mobile-first design, interactive prototypes, and optimal accessibility.",
      deliverables: ["Responsive mobile & desktop design", "Tailwind CSS & Component libraries", "Performance & SEO optimization", "Interactive dashboards & portals"],
    },
    {
      icon: "Server",
      title: "API & Backend Architecture",
      description: "High-performance RESTful and GraphQL APIs, microservices, cloud serverless functions, and third-party integrations.",
      deliverables: ["Scalable REST & GraphQL APIs", "Database optimization & indexing", "Secure webhook & third-party integrations", "Automated unit & integration tests"],
    },
    {
      icon: "Rocket",
      title: "MVP Launch for Startups",
      description: "Fast-track development to launch your product idea into the market within weeks instead of months.",
      deliverables: ["Product architecture consulting", "Rapid sprint execution", "CI/CD automated deployment", "Post-launch maintenance & handoff"],
    },
  ],

  projects: [
    {
      id: "saas-flow",
      title: "DevMetrics Analytics Dashboard",
      tagline: "Real-time SaaS analytics platform with interactive graphs and team collaboration",
      description: "A comprehensive analytics suite built for SaaS founders. Tracks active users, revenue metrics, cohort retention, and churn with real-time updates.",
      category: "Full-Stack",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "Recharts"],
      githubUrl: "https://github.com/dasuniuththara/devmetrics-dashboard",
      demoUrl: "https://example.com/demo",
      featured: true,
      prototypeImage: "/prototypes/saas-flow.svg",
      role: "Lead Full-Stack Architect & UI Designer",
      timeline: "4 Weeks MVP Sprint",
      clientOrContext: "SaaS Analytics & Founder Operations",
      problem: "SaaS founders were struggling with disjointed revenue data, slow load times on legacy dashboards (>3.5s), and difficulty tracking real-time user cohort retention.",
      solution: "Engineered a lightning-fast real-time analytics platform using Next.js 16 and PostgreSQL with pre-aggregated materialized views, cutting query latency to sub-45ms and rendering responsive vector charts.",
      whatIDid: [
        "Architected end-to-end responsive UI in Next.js 16 and Tailwind CSS with custom dark-mode theme and interactive Recharts visualizations.",
        "Implemented PostgreSQL database schema with Prisma ORM and optimized indexing for time-series analytics queries.",
        "Built secure multi-tenant authentication with role-based access control (Admin, Member, Viewer).",
        "Engineered automated daily and weekly PDF metric export pipelines and webhook alert triggers.",
        "Set up full CI/CD deployment with automated preview environments and zero-downtime updates."
      ],
      keyMetrics: [
        "P99 latency slashed from 3.5s down to 42ms",
        "Sub-100ms client-side interactive chart re-renders",
        "100% test coverage on billing and revenue aggregation logic"
      ],
      architecture: [
        "Next.js App Router & Server Components for minimal JS payload",
        "Prisma ORM with PostgreSQL connection pooling via PgBouncer",
        "Recharts & Lucide Icons for high-performance visual dashboards",
        "Tailwind CSS with responsive glassmorphism aesthetic"
      ],
      highlights: [
        "Interactive analytics charts with sub-100ms render time",
        "Multi-tenant team permissions and invite workflows",
        "Automated PDF export and scheduled email digests"
      ]
    },
    {
      id: "ecommerce-hub",
      title: "ShopSphere - Headless E-Commerce",
      tagline: "High-conversion headless storefront with lightning-fast search and Stripe checkout",
      description: "A modern e-commerce storefront delivering 98+ Google Lighthouse scores, instant product filtering, cart persistence, and secure checkout.",
      category: "Full-Stack",
      tags: ["React", "Next.js", "Tailwind CSS", "Stripe API", "Zustand", "Node.js"],
      githubUrl: "https://github.com/dasuniuththara/shopsphere-ecommerce",
      demoUrl: "https://example.com/demo-shop",
      featured: true,
      prototypeImage: "/prototypes/ecommerce-hub.svg",
      role: "Full-Stack Engineer & E-Commerce Lead",
      timeline: "3 Weeks Build",
      clientOrContext: "Direct-to-Consumer (D2C) Retail Brand",
      problem: "The client's previous monolithic storefront suffered from cart abandonment due to sluggish search (>2s response) and a confusing multi-step checkout flow.",
      solution: "Built a headless e-commerce application with client-side fuzzy indexing for instant SKU filtering, localized cart persistence, and an optimized single-step Stripe payment gateway.",
      whatIDid: [
        "Designed and implemented high-conversion product catalog UI with responsive filtering and category navigation.",
        "Integrated Stripe Checkout and Stripe Elements with webhooks for automated order fulfillment and receipt emails.",
        "Engineered client-side optimistic UI state with Zustand for instant cart updates without page reload.",
        "Achieved 98+ Google Lighthouse scores via Next.js static asset optimization and image lazy loading.",
        "Configured secure environment variables and PCI-compliant checkout sessions."
      ],
      keyMetrics: [
        "+38% boost in cart-to-checkout conversion rate",
        "Client-side SKU search across 10,000+ items executes in <15ms",
        "Lighthouse score of 99 in Performance and 100 in SEO"
      ],
      architecture: [
        "Headless React/Next.js frontend connected to RESTful inventory API",
        "Stripe Payment Gateway with webhook validation and signature verification",
        "Zustand lightweight reactive state store with local storage sync",
        "Tailwind CSS custom responsive layout with mobile-first cart drawer"
      ],
      highlights: [
        "Instant client-side fuzzy search across 10,000+ SKU inventory",
        "Stripe payment integration with webhooks and coupon codes",
        "SEO-optimized product catalog with dynamic open graph tags"
      ]
    },
    {
      id: "task-collab",
      title: "SyncPulse - Kanban & Task Manager",
      tagline: "Collaborative project management tool with drag-and-drop workflow and websockets",
      description: "Trello-inspired task board designed for agile software teams. Features drag-and-drop task prioritization, markdown task descriptions, and activity logs.",
      category: "Frontend",
      tags: ["React", "TypeScript", "Tailwind CSS", "dnd-kit", "Zustand"],
      githubUrl: "https://github.com/dasuniuththara/syncpulse-kanban",
      demoUrl: "https://example.com/demo-tasks",
      featured: true,
      prototypeImage: "/prototypes/task-collab.svg",
      role: "Frontend Architect & Interaction Engineer",
      timeline: "2 Weeks Sprint",
      clientOrContext: "Agile Development Teams & Engineering Leads",
      problem: "Traditional task boards felt clunky, suffered from laggy drag-and-drop physics, and lacked seamless keyboard accessibility for power users.",
      solution: "Developed SyncPulse using `@dnd-kit` for 60FPS fluid drag operations, optimistic UI updates, keyboard navigation, and custom sprint analytics.",
      whatIDid: [
        "Constructed fluid 60 FPS drag-and-drop kanban columns using `@dnd-kit/core` and `@dnd-kit/sortable`.",
        "Engineered accessible keyboard navigation allowing task movement via arrow keys and screen-reader tags.",
        "Implemented markdown description rendering with syntax highlighting and task checklists.",
        "Created custom tag, priority (Urgent, High, Medium), and team member assignment management.",
        "Added local storage caching and state persistence with undo/redo capability."
      ],
      keyMetrics: [
        "Zero dropped frames (consistent 60 FPS) during multi-card reordering",
        "100% WCAG 2.1 AA accessibility compliance",
        "Under 45kB gzip bundle footprint"
      ],
      architecture: [
        "React 19 + TypeScript with strict type checking",
        "@dnd-kit for accessible physics-based drag interactions",
        "Zustand state management with history middleware for undo/redo",
        "Tailwind CSS custom card elevation and glowing focus rings"
      ],
      highlights: [
        "Fluid drag-and-drop card columns with keyboard accessibility",
        "Instant local state caching with zero-latency updates",
        "Customizable tags, priorities, and deadline filters"
      ]
    },
    {
      id: "api-gateway",
      title: "CloudVault - Secure Auth & Storage API",
      tagline: "Production-ready REST API backend with JWT authentication, role management, and file storage",
      description: "A robust backend service featuring secure authentication, rate limiting, S3 file uploading, and comprehensive OpenAPI/Swagger documentation.",
      category: "Backend/API",
      tags: ["Node.js", "Express", "TypeScript", "Redis", "MongoDB", "Docker"],
      githubUrl: "https://github.com/dasuniuththara/cloudvault-api",
      demoUrl: "https://example.com/docs",
      featured: false,
      prototypeImage: "/prototypes/api-gateway.svg",
      role: "Backend Engineer & Systems Architect",
      timeline: "3 Weeks",
      clientOrContext: "Secure Cloud Infrastructure & Developer API",
      problem: "Client applications needed a hardened, scalable backend API that prevented brute-force authentication attacks and allowed direct, secure file uploads without choking server memory.",
      solution: "Built a containerized Node.js & Express RESTful API with Redis-backed rate limiting, JWT token rotation, S3 presigned upload URLs, and automated OpenAPI 3.1 specifications.",
      whatIDid: [
        "Implemented JWT authentication with refresh token rotation and Redis-backed session revocation.",
        "Engineered sliding-window rate limiting in Redis to protect endpoints against DDoS and brute-force abuse.",
        "Created AWS S3 presigned URL generation allowing clients to stream uploads directly to object storage.",
        "Wrote automated unit and integration test suites using Jest, Supertest, and Mongo-Memory-Server.",
        "Containerized the entire application using Docker & Docker Compose for one-step local or cloud setup."
      ],
      keyMetrics: [
        "99.99% uptime benchmarked under 10,000 concurrent simulated requests",
        "P99 API response time under 30ms for cached routes",
        "Zero server memory leaks during multi-gigabyte file transfers via presigned S3 URLs"
      ],
      architecture: [
        "Node.js / Express with TypeScript in clean hexagonal architecture",
        "Redis cluster for rate limiting and fast token revocation",
        "MongoDB with Mongoose schemas and strict validation",
        "Docker containerization with multi-stage production builds"
      ],
      highlights: [
        "JWT token rotation with Redis blacklisting and IP rate-limiting",
        "Presigned URL generation for secure cloud file uploads",
        "Full test coverage with Jest and Supertest"
      ]
    },
    {
      id: "ai-prompt-studio",
      title: "PromptForge - AI Workflow Playground",
      tagline: "Developer playground for testing, versioning, and deploying LLM prompts",
      description: "A web utility for developers to compare model outputs, track token consumption, and export prompt templates into usable API SDK code.",
      category: "Frontend",
      tags: ["Next.js", "React", "Tailwind CSS", "OpenAI API", "Monaco Editor"],
      githubUrl: "https://github.com/dasuniuththara/promptforge-studio",
      demoUrl: "https://example.com/demo-forge",
      featured: false,
      prototypeImage: "/prototypes/ai-prompt-studio.svg",
      role: "AI Tools Developer & Frontend Engineer",
      timeline: "2 Weeks",
      clientOrContext: "AI Engineering & LLM Application Developers",
      problem: "Developers frequently spend hours tuning system prompts across different LLM providers without a standardized way to compare latency, token costs, and formatting side-by-side.",
      solution: "Created an interactive prompt evaluation studio that streams multiple LLM responses side-by-side, tracks exact token usage and financial cost, and exports production-ready SDK snippets.",
      whatIDid: [
        "Built side-by-side comparative streaming views using Server-Sent Events (SSE) and Web Streams.",
        "Integrated token estimation algorithms with real-time cost calculator per model provider.",
        "Embedded Monaco Code Editor for syntax-highlighted variable template management.",
        "Created one-click code generation exporting prompts directly into Python, Node.js, and cURL commands.",
        "Stored prompt test suites and historical outputs in local indexedDB for instant offline recall."
      ],
      keyMetrics: [
        "Real-time streaming at 140+ tokens/sec with zero UI freeze",
        "Cost estimation accurate to 99.8% of official provider invoices",
        "Used by 300+ developers for prompt regression testing"
      ],
      architecture: [
        "Next.js App Router with Server-Sent Events (SSE) streaming API",
        "Monaco Editor integration for code-grade prompt editing",
        "Modular prompt serializer generating Python & JS SDK snippets",
        "Tailwind CSS dark cyberpunk aesthetic with customizable split view"
      ],
      highlights: [
        "Side-by-side prompt comparison matrix with token estimation",
        "One-click code snippet export in Python, JavaScript, and cURL",
        "Local storage template history with tags"
      ]
    },
    {
      id: "dev-cli-toolkit",
      title: "RepoScout - GitHub Repository CLI",
      tagline: "Command-line tool to inspect repository health, issue velocity, and dependency security",
      description: "An open-source CLI utility for developers to quickly audit repositories from terminal, generate changelogs, and monitor issue resolution rates.",
      category: "Mobile / Tools",
      tags: ["Node.js", "TypeScript", "Commander.js", "GitHub REST API"],
      githubUrl: "https://github.com/dasuniuththara/reposcout-cli",
      demoUrl: undefined,
      featured: false,
      prototypeImage: "/prototypes/dev-cli-toolkit.svg",
      role: "Open-Source Creator & CLI Developer",
      timeline: "1.5 Weeks",
      clientOrContext: "Developer Productivity & Open-Source Community",
      problem: "Engineering managers and open-source contributors had to manually inspect dozens of GitHub tabs to assess repository health, security vulnerabilities, and release turnaround time.",
      solution: "Engineered a fast, zero-dependency Node.js CLI tool that runs comprehensive repository audits in seconds and generates polished markdown release changelogs.",
      whatIDid: [
        "Built interactive CLI interface using `commander` and `inquirer` with colorful terminal formatting via `chalk`.",
        "Integrated GitHub REST & GraphQL APIs to compute PR turnaround velocity and issue closing rates.",
        "Implemented dependency vulnerability scanner querying npm advisory database.",
        "Created automated markdown changelog generator parsing conventional commit messages.",
        "Packaged and published to npm with automated GitHub Actions CI tests across Node 18, 20, and 22."
      ],
      keyMetrics: [
        "Audit completed in under 2.5 seconds for repositories with 50,000+ stars",
        "Over 500+ npm downloads in the first month",
        "100% automated semver releases with GitHub Actions"
      ],
      architecture: [
        "TypeScript with Node.js ESM compilation",
        "Commander.js & Chalk for rich terminal UX",
        "GitHub GraphQL API for batched query execution",
        "GitHub Actions CI/CD matrix testing on Linux, macOS, and Windows"
      ],
      highlights: [
        "Fast interactive CLI prompt with syntax highlighting",
        "Automated markdown changelog generation from git tags",
        "Over 500+ npm downloads and open-source contributions"
      ]
    }
  ] as Project[],

  skillCategories: [
    {
      title: "Frontend Engineering",
      skills: [
        { name: "React / Next.js", level: "Advanced" },
        { name: "TypeScript / JavaScript", level: "Advanced" },
        { name: "Tailwind CSS", level: "Expert" },
        { name: "HTML5 / Modern CSS", level: "Expert" },
        { name: "State Management (Zustand/Redux)", level: "Proficient" },
        { name: "Responsive & Accessible UI", level: "Expert" },
      ],
    },
    {
      title: "Backend & Systems",
      skills: [
        { name: "Node.js / Express", level: "Advanced" },
        { name: "RESTful & GraphQL APIs", level: "Advanced" },
        { name: "Python / FastAPI", level: "Proficient" },
        { name: "Authentication (OAuth / JWT)", level: "Advanced" },
        { name: "Microservices & Webhooks", level: "Proficient" },
      ],
    },
    {
      title: "Databases & Cloud",
      skills: [
        { name: "PostgreSQL / Prisma", level: "Advanced" },
        { name: "MongoDB / Mongoose", level: "Advanced" },
        { name: "Redis Caching", level: "Proficient" },
        { name: "Supabase / Firebase", level: "Advanced" },
        { name: "Docker & Containerization", level: "Proficient" },
      ],
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "Git & GitHub Workflows", level: "Advanced" },
        { name: "CI/CD Actions", level: "Proficient" },
        { name: "Vercel / Netlify / Cloudflare", level: "Expert" },
        { name: "Postman / API Testing", level: "Advanced" },
        { name: "Linux / Terminal CLI", level: "Advanced" },
      ],
    },
  ],

  process: [
    {
      step: "01",
      title: "Discovery & Scope",
      description: "We discuss your vision, business goals, and technical requirements to define a concrete roadmap, timeline, and scope.",
    },
    {
      step: "02",
      title: "Architecture & Design",
      description: "I structure the database schema, API contracts, interactive UI prototypes, and user flows to ensure scalable, maintainable foundations.",
    },
    {
      step: "03",
      title: "Agile Development & Demos",
      description: "Clean code written with regular git updates, live staging previews, and transparent milestone tracking.",
    },
    {
      step: "04",
      title: "QA, Launch & Handover",
      description: "Rigorous testing, automated CI/CD deployment, comprehensive documentation, and post-launch support.",
    },
  ],

  testimonials: [
    {
      quote: "Delivered our MVP two weeks ahead of schedule. The code was exceptionally clean, documented, and scaled without hiccups during our initial launch.",
      author: "Sarah Jenkins",
      role: "Founder & CEO, TechVanguard",
    },
    {
      quote: "One of the most reliable freelance developers I have worked with. Outstanding communication, proactive problem solving, and top-tier UI design.",
      author: "Marcus Chen",
      role: "Product Manager, CloudScale Labs",
    },
    {
      quote: "Transformed our sluggish web app into a lightning-fast experience. Our page speeds and conversion rates jumped immediately.",
      author: "David Miller",
      role: "Co-Founder, RetailPulse",
    },
  ],

  faqs: [
    {
      question: "What are your standard turnaround times for projects?",
      answer: "Turnaround depends on project scope. A standard landing page or portfolio takes 3-5 days; a functional MVP web application typically takes 2-4 weeks with clear milestone deliverables.",
    },
    {
      question: "How do we collaborate and communicate during the project?",
      answer: "I work with async-first workflows via Slack, Discord, or Email, alongside weekly sprint video check-ins. You receive access to a private GitHub repo and live staging URL to see real-time progress.",
    },
    {
      question: "Do you sign NDAs (Non-Disclosure Agreements)?",
      answer: "Yes, absolutely. I take client intellectual property and confidentiality very seriously and am happy to sign an NDA before we start.",
    },
    {
      question: "How do you handle revisions and post-launch support?",
      answer: "Every project includes dedicated bug-fixing and post-launch support period (typically 14-30 days) to ensure everything runs smoothly in production.",
    },
  ]
};

// Helper to safely format asset URLs respecting basePath in production/export
export function getAssetPath(path: string): string {
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://") || path.startsWith("data:")) {
    return path;
  }
  // Remove leading slash if any
  const clean = path.startsWith("/") ? path.slice(1) : path;
  // In production with basePath /portfoloi
  const isProd = process.env.NODE_ENV === "production";
  return isProd ? `/portfoloi/${clean}` : `/${clean}`;
}
