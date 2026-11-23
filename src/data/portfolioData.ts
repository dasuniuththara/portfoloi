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
    name: "Alex Dev", // User can easily replace this with their actual name
    title: "Full-Stack Software Engineer & Freelancer",
    badge: "Available for New Freelance Projects",
    location: "Global / Remote",
    bio: "I build fast, scalable, and user-centric web applications. Helping startups and businesses turn ideas into production-ready software with clean code and reliable architecture.",
    yearsExperience: "3+",
    projectsCompleted: "20+",
    clientSatisfaction: "100%",
    email: "your-email@example.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
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
      description: "Pixel-perfect, responsive web interfaces with smooth animations, mobile-first design, and optimal accessibility.",
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
      githubUrl: "https://github.com/your-username/devmetrics-dashboard",
      demoUrl: "https://example.com/demo",
      featured: true,
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
      githubUrl: "https://github.com/your-username/shopsphere-ecommerce",
      demoUrl: "https://example.com/demo-shop",
      featured: true,
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
      githubUrl: "https://github.com/your-username/syncpulse-kanban",
      demoUrl: "https://example.com/demo-tasks",
      featured: true,
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
      githubUrl: "https://github.com/your-username/cloudvault-api",
      demoUrl: "https://example.com/docs",
      featured: false,
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
      githubUrl: "https://github.com/your-username/promptforge-studio",
      demoUrl: "https://example.com/demo-forge",
      featured: false,
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
      githubUrl: "https://github.com/your-username/reposcout-cli",
      demoUrl: undefined,
      featured: false,
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
      description: "I structure the database schema, API contracts, and user flows to ensure scalable, maintainable foundations.",
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
