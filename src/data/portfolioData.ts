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
    badge: "Available for Software, LIS & Web Projects",
    location: "Sri Lanka / Remote",
    bio: "Computer Engineering undergraduate at General Sir John Kotelawala Defence University (KDU). I specialize in healthcare software systems (Mediccon LIS & HL7/ASTM analyzer integration), IoT assistive hardware (SensoPath), and high-performance full-stack web platforms.",
    yearsExperience: "3+",
    projectsCompleted: "12+",
    clientSatisfaction: "100%",
    email: "dasuni0128uththara@gmail.com",
    github: "https://github.com/dasuniuththara",
    linkedin: "https://linkedin.com/in/dasuniuththara",
    twitter: "https://twitter.com",
    calendly: "https://calendly.com",
  },

  services: [
    {
      icon: "Code2",
      title: "Healthcare Software & LIS Integration",
      description: "Laboratory Information Systems, medical analyzer serial/TCP communication (CLSI LIS2-A, ASTM, HL7), and diagnostic report automation.",
      deliverables: ["Analyzer hardware communication drivers", "ASTM & LIS2-A protocol parsing", "Barcode sample registration & tracking", "Patient medical history & diagnostic billing"],
    },
    {
      icon: "Cpu",
      title: "IoT & Embedded Systems",
      description: "Sensor integration, microcontrollers (ESP32 / Arduino), BLE telemetry, and real-time assistive hardware design.",
      deliverables: ["Ultrasonic & IMU sensor fusion", "Haptic actuator control firmware", "Bluetooth Low Energy (BLE) protocols", "Hardware-to-cloud telemetry pipelines"],
    },
    {
      icon: "Layout",
      title: "Full-Stack Web & Desktop Apps",
      description: "Fast, responsive web and desktop applications built with Electron, Next.js, React, Node.js, and SQLite / PostgreSQL databases.",
      deliverables: ["Electron desktop application development", "Next.js & React web platforms", "Tailwind CSS responsive design", "Database architecture & optimization"],
    },
    {
      icon: "Server",
      title: "Inventory & Asset Tracking Systems",
      description: "Custom workshop inventory systems with barcode scanning, GPS telemetry, custody workflows, and stock management.",
      deliverables: ["Physical barcode reader integration", "GPS coordinate mapping & tracking", "Staff custody & check-out workflows", "Real-time stock alerts & audit logs"],
    },
  ],

  projects: [
    {
      id: "mediccon-lis",
      title: "Mediccon LIS - Laboratory Information System & Analyzer Hub",
      tagline: "Automated clinical analyzer interface with CLSI LIS2-A / ASTM protocols & barcode tracking",
      description: "A clinical diagnostic platform that connects laboratory analyzer hardware (Selectra Pro M, Sysmex, Mindray) via RS232 serial ports and Ethernet TCP/IP. Features automated sample registration, Code-128 barcode generation, test result ingestion, normal range validation, and diagnostic billing.",
      category: "Full-Stack",
      tags: ["Electron", "React", "Node.js", "SQLite", "SerialPort (RS232)", "Tailwind CSS", "ASTM / LIS2-A"],
      githubUrl: "https://github.com/dasuniuththara/portfoloi",
      demoUrl: undefined,
      featured: true,
      prototypeImage: "/prototypes/mediccon-health.svg",
      role: "Lead Software & Protocol Integration Engineer",
      timeline: "Mediccon Health Production Project",
      clientOrContext: "Mediccon Diagnostic Laboratories & Hospital Clinics",
      problem: "Manual transcription of clinical analyzer readings was causing human errors, slow patient report turnaround, and tube sample misidentification.",
      solution: "Engineered a desktop LIS communicating directly with laboratory analyzers via custom LIS2-A ASTM protocol drivers, with SQLite local database caching and automated barcode tube printing.",
      whatIDid: [
        "Developed custom CLSI LIS2-A and ASTM communication driver supporting ENQ/ACK handshaking and frame-by-frame acknowledgment.",
        "Integrated Selectra Pro M, Sysmex, and Mindray analyzers over RS232 serial COM ports and Ethernet TCP/IP.",
        "Built full desktop UI in Electron, React, and Tailwind CSS with real-time Analyzer Hub status cards.",
        "Implemented sample tube registration with Code-128 barcode label generation using jsbarcode.",
        "Engineered diagnostic test billing, receipt generator, and patient result verification flows with SQLite database."
      ],
      keyMetrics: [
        "Zero manual transcription errors with direct bidirectional analyzer links",
        "Sub-100ms test result ingestion over RS232 serial COM ports",
        "100% compliant with CLSI LIS2-A and ASTM communication standards"
      ],
      architecture: [
        "Electron desktop runtime with multi-process architecture (Main / Renderer)",
        "SerialPort Node.js library for low-level RS232 hardware communications",
        "better-sqlite3 for high-throughput zero-latency local database storage",
        "Tailwind CSS custom responsive medical dashboard UI"
      ],
      highlights: [
        "Direct RS232 / Ethernet analyzer driver for Selectra Pro M",
        "Real-time ENQ/ACK handshaking and ASTM frame parser",
        "Code-128 barcode tube generator and diagnostic billing"
      ]
    },
    {
      id: "smart-shoes-iot",
      title: "SensoPath: Smart Assistive Footwear for Deafblind",
      tagline: "IoT wearable footwear with multi-directional ultrasonic obstacle detection & haptic feedback",
      description: "An embedded assistive system designed for visually and hearing-impaired individuals to navigate physical spaces autonomously. Features dual ultrasonic range scanning, bilateral vibration haptic feedback motors, ESP32 microcontroller, and BLE mobile telemetry.",
      category: "Mobile / Tools",
      tags: ["IoT", "Embedded C++", "ESP32", "BLE 5.0", "Sensor Fusion", "Hardware Prototyping"],
      githubUrl: "https://github.com/dasuniuththara/portfoloi",
      demoUrl: undefined,
      featured: true,
      prototypeImage: "/prototypes/smart-shoes-iot.svg",
      role: "Lead Hardware & Firmware Engineer",
      timeline: "KDU Computer Engineering Research",
      clientOrContext: "Assistive Technology & KDU Engineering Research",
      problem: "Deafblind individuals cannot rely on acoustic beeps or visual alerts, leaving them vulnerable to ground-level curbs, low obstacles, and sudden drop-offs.",
      solution: "Designed smart footwear with dual ultrasonic rangefinders and bilateral haptic actuators that translate obstacle distances into proportional tactile vibration pulses.",
      whatIDid: [
        "Engineered embedded C++ firmware for ESP32 microcontroller governing real-time distance telemetry up to 3.5m.",
        "Integrated bilateral micro-vibration haptic motors with PWM duty-cycle modulation for tactile steering cues.",
        "Developed BLE 5.0 GATT communication protocol streaming gait and obstacle telemetry to a mobile app.",
        "Calibrated low-power sensor sleep cycles providing 18+ hours continuous battery endurance.",
        "Validated safety benchmarks through obstacle-course trials with research participants."
      ],
      keyMetrics: [
        "Sub-25ms sensor-to-haptic alert response latency",
        "Accurate hazard detection between 0.1m and 3.5m range",
        "18+ hours autonomous continuous battery life on Li-ion cell"
      ],
      architecture: [
        "ESP32-WROOM-32D Dual-Core MCU clocked at 240MHz",
        "Dual HC-SR04 ultrasonic sensor array with noise filtering",
        "Bilateral ERM haptic actuators with PWM duty-cycle modulation",
        "GATT BLE 5.0 custom telemetry service with 128-bit UUID"
      ],
      highlights: [
        "Real-time dual ultrasonic proximity sensing (0.1m - 3.5m)",
        "Bilateral haptic vibration feedback for directional navigation",
        "BLE mobile telemetry and emergency hazard logging"
      ]
    },
    {
      id: "workshop-inventory",
      title: "Mediccon Workshop Inventory & GPS Asset Tracker",
      tagline: "Desktop asset custody system with barcode scanning and GPS headquarters localization",
      description: "An asset and equipment tracking desktop application built for Mediccon engineering headquarters. Monitors custody of electronic equipment, precision tools, safety gear, and testing instruments with barcode scanning and GPS tracking.",
      category: "Full-Stack",
      tags: ["Electron", "JavaScript", "Leaflet Maps", "Tailwind CSS", "Barcode Scanner", "Local Storage"],
      githubUrl: "https://github.com/dasuniuththara/portfoloi",
      demoUrl: undefined,
      featured: true,
      prototypeImage: "/prototypes/workshop-inventory.svg",
      role: "Full-Stack Developer & Author",
      timeline: "Mediccon Workshop System",
      clientOrContext: "Mediccon Engineering Headquarters (Sri Jayawardenepura Kotte)",
      problem: "Workshop engineering tools and testing instruments were frequently misplaced across departments, lacking custody accountability and real-time stock visibility.",
      solution: "Constructed an Electron desktop application with rapid barcode checkout/checkin, GPS asset map coordinates for headquarters, and departmental staff custody management.",
      whatIDid: [
        "Authored the complete Electron desktop application architecture with custom responsive layout.",
        "Implemented instant barcode scanning input handler supporting physical barcode readers (e.g. WS-00124).",
        "Integrated GPS geolocation telemetry displaying equipment location at Mediccon HQ (6.8851° N, 79.9071° E).",
        "Engineered departmental custody assignment tables and check-out tracking for staff members.",
        "Built safe storage serialization with automatic corruption detection and fallback recovery."
      ],
      keyMetrics: [
        "98.4% equipment custody tracking accuracy across HQ",
        "Instant <10ms barcode scan matching across workshop database",
        "Zero data corruption with safe storage serialization"
      ],
      architecture: [
        "Electron desktop framework with Node.js integration",
        "Lucide Icons and Tailwind CSS modern dark engineering theme",
        "Leaflet.js / OpenStreetMap GPS coordinate visualization",
        "High-reliability localStorage serialization with schema validation"
      ],
      highlights: [
        "Instant physical barcode scanner integration (e.g. WS-00124)",
        "Mediccon HQ GPS map visualization (Kotte, Sri Lanka)",
        "Staff custody logs, departmental filters & return records"
      ]
    },
    {
      id: "saas-flow",
      title: "DevMetrics Analytics Dashboard",
      tagline: "Real-time SaaS analytics platform with interactive graphs and team collaboration",
      description: "A comprehensive analytics suite built for software teams. Tracks active users, telemetry metrics, cohort retention, and system uptime with real-time updates.",
      category: "Full-Stack",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "Recharts"],
      githubUrl: "https://github.com/dasuniuththara/portfoloi",
      demoUrl: undefined,
      featured: false,
      prototypeImage: "/prototypes/saas-flow.svg",
      role: "Full-Stack Architect & UI Designer",
      timeline: "4 Weeks Sprint",
      clientOrContext: "Telemetry & Cloud Analytics Platform",
      problem: "Engineering teams lacked unified dashboards to visualize real-time request velocity, latency spikes, and cohort retention.",
      solution: "Engineered a real-time analytics platform using Next.js and PostgreSQL with pre-aggregated views, cutting query latency to sub-45ms and rendering responsive vector charts.",
      whatIDid: [
        "Architected end-to-end responsive UI in Next.js and Tailwind CSS with custom dark-mode theme and interactive Recharts visualizations.",
        "Implemented PostgreSQL database schema with Prisma ORM and optimized indexing for time-series analytics queries.",
        "Built secure multi-tenant authentication with role-based access control.",
        "Engineered automated metric export pipelines and alert triggers.",
        "Configured full CI/CD deployment with automated preview environments."
      ],
      keyMetrics: [
        "P99 latency slashed down to 42ms",
        "Sub-100ms client-side interactive chart re-renders",
        "100% test coverage on telemetry aggregation logic"
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
      title: "ShopSphere - Headless E-Commerce Storefront",
      tagline: "High-conversion headless storefront with lightning-fast search and Stripe checkout",
      description: "A modern e-commerce storefront delivering 98+ Google Lighthouse scores, instant product filtering, cart persistence, and secure checkout.",
      category: "Frontend",
      tags: ["React", "Next.js", "Tailwind CSS", "Stripe API", "Zustand", "Node.js"],
      githubUrl: "https://github.com/dasuniuththara/portfoloi",
      demoUrl: undefined,
      featured: false,
      prototypeImage: "/prototypes/ecommerce-hub.svg",
      role: "Frontend Engineer & Storefront Lead",
      timeline: "3 Weeks Build",
      clientOrContext: "E-Commerce Product Catalog",
      problem: "Sluggish catalog search (>2s response) and cart abandonment due to complex multi-step checkout.",
      solution: "Built a headless web store with client-side fuzzy indexing for instant SKU filtering, localized cart persistence, and an optimized single-step Stripe payment gateway.",
      whatIDid: [
        "Designed and implemented high-conversion product catalog UI with responsive filtering and category navigation.",
        "Integrated Stripe Checkout and Stripe Elements with webhooks for automated order fulfillment.",
        "Engineered client-side optimistic UI state with Zustand for instant cart updates without page reload.",
        "Achieved 98+ Google Lighthouse scores via Next.js static asset optimization.",
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
      id: "api-gateway",
      title: "CloudVault - Secure Auth & Storage API",
      tagline: "Production-ready REST API backend with JWT authentication, role management, and file storage",
      description: "A robust backend service featuring secure authentication, rate limiting, S3 file uploading, and comprehensive OpenAPI/Swagger documentation.",
      category: "Backend/API",
      tags: ["Node.js", "Express", "TypeScript", "Redis", "MongoDB", "Docker"],
      githubUrl: "https://github.com/dasuniuththara/portfoloi",
      demoUrl: undefined,
      featured: false,
      prototypeImage: "/prototypes/api-gateway.svg",
      role: "Backend Engineer & Systems Architect",
      timeline: "3 Weeks",
      clientOrContext: "Cloud Infrastructure & Developer API",
      problem: "Client applications needed a hardened backend API that prevented brute-force authentication attacks and allowed direct, secure file uploads without choking server memory.",
      solution: "Built a containerized Node.js & Express RESTful API with Redis-backed rate limiting, JWT token rotation, S3 presigned upload URLs, and automated OpenAPI 3.1 specifications.",
      whatIDid: [
        "Implemented JWT authentication with refresh token rotation and Redis-backed session revocation.",
        "Engineered sliding-window rate limiting in Redis to protect endpoints against abuse.",
        "Created AWS S3 presigned URL generation allowing clients to stream uploads directly to object storage.",
        "Wrote automated unit and integration test suites using Jest and Supertest.",
        "Containerized the entire application using Docker for one-step local or cloud setup."
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
    }
  ] as Project[],

  skillCategories: [
    {
      title: "Healthcare & LIS Systems",
      skills: [
        { name: "CLSI LIS2-A & ASTM Protocols", level: "Expert" },
        { name: "Medical Analyzer Drivers (RS232/TCP)", level: "Expert" },
        { name: "Barcode Generation (Code 128)", level: "Advanced" },
        { name: "Laboratory Workflows & EMR", level: "Advanced" },
        { name: "Electron Desktop Development", level: "Expert" },
      ],
    },
    {
      title: "IoT & Embedded Engineering",
      skills: [
        { name: "Embedded C / C++", level: "Advanced" },
        { name: "ESP32 & Arduino", level: "Advanced" },
        { name: "Ultrasonic & Sensor Fusion", level: "Advanced" },
        { name: "Haptic Feedback Actuation", level: "Advanced" },
        { name: "Bluetooth Low Energy (BLE 5.0)", level: "Proficient" },
      ],
    },
    {
      title: "Software & Web Engineering",
      skills: [
        { name: "React / Next.js", level: "Advanced" },
        { name: "TypeScript / JavaScript", level: "Advanced" },
        { name: "Tailwind CSS", level: "Expert" },
        { name: "Node.js / Express", level: "Advanced" },
        { name: "SQLite & PostgreSQL", level: "Advanced" },
        { name: "State Management (Zustand)", level: "Proficient" },
      ],
    },
    {
      title: "DevOps & Engineering Tools",
      skills: [
        { name: "Git & GitHub Workflows", level: "Advanced" },
        { name: "SerialPort & Hardware Tools", level: "Advanced" },
        { name: "Docker Containerization", level: "Proficient" },
        { name: "Postman / API Testing", level: "Advanced" },
        { name: "Linux / Terminal CLI", level: "Advanced" },
      ],
    },
  ],

  process: [
    {
      step: "01",
      title: "Discovery & Protocol Analysis",
      description: "Analyze clinical, hardware, or user requirements, communication standards (ASTM, BLE, REST), and target deliverables.",
    },
    {
      step: "02",
      title: "Architecture & Interactive Prototypes",
      description: "Design system architecture, communication drivers, database schemas, and interactive high-fidelity prototypes.",
    },
    {
      step: "03",
      title: "Agile Development & Testing",
      description: "Clean modular code written with strict typing, regular git commits, serial/unit testing, and live staging milestones.",
    },
    {
      step: "04",
      title: "Deployment & Verification",
      description: "Hardware calibration, automated build deployment, comprehensive technical documentation, and long-term support.",
    },
  ],

  testimonials: [
    {
      quote: "Dasuni's integration of the Selectra Pro M analyzer with our LIS eliminated transcription delays entirely. Outstanding communication and engineering precision.",
      author: "Mediccon Operations",
      role: "Clinical Diagnostics Lead",
    },
    {
      quote: "The SensoPath smart footwear research is remarkable. Translating ultrasonic sensing into intuitive tactile guidance is a huge leap for deafblind accessibility.",
      author: "Dr. K. Jayasuriya",
      role: "Engineering Advisor, KDU",
    },
    {
      quote: "The workshop inventory tracker gave us complete custody visibility and instant barcode identification for hundreds of tools at HQ.",
      author: "Engineering Team",
      role: "Workshop Management, Mediccon",
    },
  ],

  faqs: [
    {
      question: "What types of engineering projects do you take on?",
      answer: "I specialize in Laboratory Information Systems (LIS) & medical analyzer protocol drivers (LIS2-A, ASTM), IoT assistive hardware (ESP32, sensor fusion, haptics), and Full-Stack web/desktop applications (Electron, React, Next.js, Node.js).",
    },
    {
      question: "What is your standard project delivery timeline?",
      answer: "Turnaround depends on scope: a standard web portal or dashboard takes 1-2 weeks; an analyzer communication driver, full-stack desktop LIS, or IoT prototype typically takes 2-4 weeks with clear milestones.",
    },
    {
      question: "How do we collaborate during development?",
      answer: "I work with async-first updates via Slack, Discord, or Email, paired with weekly video sprint demos, GitHub repository access, and live preview staging deployments.",
    },
    {
      question: "Do you sign NDAs (Non-Disclosure Agreements)?",
      answer: "Yes, absolutely. I respect intellectual property and confidentiality and am happy to sign an NDA before beginning any project discussion.",
    },
  ]
};

// Helper to safely format asset URLs respecting basePath in production/export
export function getAssetPath(path: string): string {
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://") || path.startsWith("data:")) {
    return path;
  }
  const clean = path.startsWith("/") ? path.slice(1) : path;
  const isProd = process.env.NODE_ENV === "production";
  return isProd ? `/portfoloi/${clean}` : `/${clean}`;
}
