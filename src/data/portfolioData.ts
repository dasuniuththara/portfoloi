export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: "Full-Stack" | "Frontend" | "Backend/API" | "Mobile / Tools" | "AI / ML";
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
    badge: "Available for Software, LIS, AI & IoT Projects",
    location: "Sri Lanka / Remote",
    bio: "Software Engineering graduate at General Sir John Kotelawala Defence University (KDU). Creator of AimPointAI (KDU Honours Thesis: Deep Learning Pose Estimation for Sports Biomechanics), MediLIS (Clinical Laboratory Analyzer System with CLSI LIS2-A / ASTM protocols for Selectra Pro M & PKL-125), Piano Playing Robot (KDU FYP: Adaptive Robotic Assistive Solenoid Actuator), and SensoPath (IoT Assistive Footwear for Deafblind individuals).",
    yearsExperience: "3+",
    projectsCompleted: "15+",
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
      title: "Clinical LIS & Medical Analyzer Integration",
      description: "Laboratory Information Systems, medical analyzer serial/TCP communication (CLSI LIS2-A, ASTM 1394), and diagnostic report automation.",
      deliverables: ["Selectra Pro M & PKL-125 drivers", "ASTM & LIS2-A protocol parsing", "Barcode sample registration & tracking", "Patient medical history & diagnostic billing"],
    },
    {
      icon: "Cpu",
      title: "AimPointAI & Deep Learning Pose Estimation",
      description: "Real-time sports biomechanics tracking, 33-keypoint MediaPipe pose estimation, LSTM temporal sequence modeling, and automated corrective coaching feedback.",
      deliverables: ["Real-time video inference pipelines", "Sub-20ms MediaPipe pose extraction", "Joint angle kinematic analysis (elbow, knee, release)", "Audio-visual mistake detection & feedback"],
    },
    {
      icon: "Server",
      title: "FYP & IoT Embedded Systems",
      description: "Sensor integration, microcontrollers (ESP32 / Arduino), BLE telemetry, and real-time assistive hardware design.",
      deliverables: ["Ultrasonic & IMU sensor fusion", "Haptic actuator control firmware", "Bluetooth Low Energy (BLE) protocols", "Hardware-to-cloud telemetry pipelines"],
    },
    {
      icon: "Layout",
      title: "Full-Stack Web & Desktop Apps",
      description: "Fast, responsive web and desktop applications built with Electron, Next.js, React, Node.js, and SQLite / PostgreSQL databases.",
      deliverables: ["Electron desktop application development", "Next.js & React web platforms", "Tailwind CSS responsive design", "Database architecture & optimization"],
    },
  ],

  projects: [
    {
      id: "aimpoint-ai",
      title: "Aim Point AI — Real-Time Basketball Mistake Detection & Pose Feedback",
      tagline: "KDU Final Year Thesis: Deep learning & MediaPipe pose estimation for real-time sports biomechanics",
      description: "Final Year Thesis project for B.Sc. (Hons) in Software Engineering at General Sir John Kotelawala Defence University (KDU), supervised by Dr. Kaneeka Vidanage. An AI system that performs real-time markerless pose estimation on basketball shooters, calculates joint biomechanics (elbow flare, knee flexion, release angle), detects shooting form mistakes, and generates instant audio-visual corrective coaching feedback.",
      category: "AI / ML",
      tags: ["Aim Point AI", "FYP (KDU)", "Deep Learning", "MediaPipe Pose", "LSTM", "FastAPI", "React Native", "Sports Biomechanics", "Python"],
      githubUrl: "https://github.com/dasuniuththara/portfoloi",
      demoUrl: undefined,
      featured: true,
      prototypeImage: "/prototypes/aimpoint-ai.svg",
      role: "Sole Researcher & Software Engineer (KDU Honours Thesis)",
      timeline: "Final Year Project (2026)",
      clientOrContext: "KDU Faculty of Computing • Supervised by Dr. Kaneeka Vidanage",
      problem: "Athletes and coaches lack affordable, accessible tools to measure shooting mechanics in real time without costly marker-based multi-camera motion capture lab systems.",
      solution: "Engineered AimPointAI using 33-keypoint MediaPipe Pose estimation and LSTM recurrent neural networks to track joint angles, identify shooting flaws (such as elbow flare or improper knee dip), and deliver sub-20ms corrective feedback.",
      whatIDid: [
        "Authored the complete 170+ page honours thesis and system architecture under the supervision of Dr. Kaneeka Vidanage.",
        "Integrated Google MediaPipe 33-landmark pose estimation to track shooting kinematics (elbow, shoulder, wrist, hip, knee, ankle).",
        "Trained LSTM recurrent neural networks on temporal keypoint sequences to classify shot phases and detect technique mistakes.",
        "Programmed trigonometric kinematic joint angle calculations (e.g. elbow flare angle, knee flexion dip, release trajectory arc).",
        "Engineered instant audio-visual coaching feedback delivering voice cues (e.g. 'Tuck shooting elbow inward') right upon ball release.",
        "Built modular backend API with FastAPI / Python and mobile cross-platform interface."
      ],
      keyMetrics: [
        "Sub-20ms real-time pose extraction and angle computation (60 FPS)",
        "Over 92% accuracy in detecting elbow flare, improper jump dip, and release angles",
        "Full 170+ page academic thesis presented to Faculty of Computing, KDU"
      ],
      architecture: [
        "Google MediaPipe Pose Landmark Pipeline (33 3D Spatial Landmarks)",
        "PyTorch / TensorFlow LSTM temporal sequence mistake classification model",
        "FastAPI high-throughput asynchronous Python inference server",
        "React Native / Expo cross-platform mobile frontend with real-time HUD"
      ],
      highlights: [
        "Real-time 33-keypoint skeleton pose estimation and kinematic angle tracking",
        "Instant mistake detection: elbow flare, knee dip, and release trajectory",
        "Automated audio-visual coaching cues delivered in under 20ms"
      ]
    },
    {
      id: "piano-robot-fyp",
      title: "FYP: Adaptive Robotic Assistance for Piano Playing",
      tagline: "KDU Final Year Project: Robotic piano assistant enhancing accessibility for individuals with disabilities",
      description: "Final Year Project (FYP) for Bachelor of Computer Engineering at General Sir John Kotelawala Defence University (KDU), Registration No. D_BCE_22_0022. An adaptive robotic piano playing system combining multi-actuator solenoid key strikers, real-time MIDI parsing, and LSTM musical accompaniment models to assist motor-impaired individuals.",
      category: "Mobile / Tools",
      tags: ["FYP (KDU)", "Robotics", "Embedded C++", "Microcontrollers", "MIDI Protocol", "LSTM Music Gen", "Assistive Tech", "Kinematics"],
      githubUrl: "https://github.com/dasuniuththara/portfoloi",
      demoUrl: undefined,
      featured: true,
      prototypeImage: "/prototypes/piano-robot.svg",
      role: "Lead Robotics & Embedded Software Engineer (KDU FYP)",
      timeline: "KDU Final Year Project (2026)",
      clientOrContext: "KDU Faculty of Computing & Engineering • Assistive Robotics",
      problem: "Individuals with upper-limb motor disabilities, tremor disorders, or missing digits face insurmountable physical barriers when playing acoustic pianos without adaptive physical accompaniment.",
      solution: "Engineered an adaptive robotic key striker array governed by an ESP32 microcontroller and real-time LSTM accompaniment model that dynamically strikes acoustic piano keys to harmonize with human keystrokes in real time.",
      whatIDid: [
        "Designed and fabricated the overhead multi-actuator solenoid gantry calibrated for standard acoustic piano key pitch and travel distance.",
        "Programmed embedded C++ firmware for PWM strike velocity modulation (0-127 dynamics from pianissimo to fortissimo).",
        "Developed real-time MIDI event parser interpreting note-on/off signals, timing clocks, and tempo fluctuations.",
        "Trained an LSTM predictive accompaniment model that dynamically generates harmonic chords matching player melody.",
        "Conducted acoustic latency tests, achieving sub-20ms strike response from MIDI signal to acoustic sound output."
      ],
      keyMetrics: [
        "Sub-20ms key strike response from MIDI trigger to acoustic sound",
        "Full 0-127 MIDI dynamic velocity control for expressive acoustic volume",
        "Dual Accessibility Assist and Novice Tutorial playing modes"
      ],
      architecture: [
        "ESP32 / STM32 microcontroller with high-current MOSFET driver array",
        "Low-noise 12V push-pull solenoid actuators with silicone contact dampeners",
        "MIDI 1.0 / USB-MIDI asynchronous communication protocol parser",
        "PyTorch LSTM musical sequence generation engine for real-time chord filling"
      ],
      highlights: [
        "Robotic solenoid actuation array for acoustic piano keys",
        "Real-time MIDI harmonic chord fill for motor-impaired players",
        "Sub-20ms acoustic response with dynamic velocity control"
      ]
    },
    {
      id: "medilis",
      title: "MediLIS — Clinical Laboratory Information System & Analyzer Hub",
      tagline: "Medical analyzer interface supporting CLSI LIS2-A / ASTM protocols, barcode tracking & billing",
      description: "A production-grade Laboratory Information System built for diagnostic laboratories and hospital clinics. Connects automated clinical chemistry and hematology analyzers (Selectra Pro M, PKL-125, Sysmex) via RS232 serial COM ports and Ethernet TCP/IP. Features automated specimen registration, Code-128 barcode generation, real-time result ingestion, normal range validation, and diagnostic billing.",
      category: "Full-Stack",
      tags: ["Healthcare LIS", "Electron", "React", "better-sqlite3", "SerialPort (RS232)", "Tailwind CSS", "ASTM / LIS2-A"],
      githubUrl: "https://github.com/dasuniuththara/portfoloi",
      demoUrl: undefined,
      featured: true,
      prototypeImage: "/prototypes/medilis-analyzer.svg",
      role: "Lead Software & Protocol Integration Engineer",
      timeline: "Mediccon Health Production Project",
      clientOrContext: "Mediccon Diagnostic Laboratories & Hospital Clinics",
      problem: "Manual transcription of clinical analyzer readings caused human errors, delayed urgent patient test reports, and caused tube misidentification.",
      solution: "Engineered a desktop LIS communicating directly with laboratory analyzers via custom bidirectional LIS2-A ASTM protocol drivers, with SQLite local database caching and automated barcode tube printing.",
      whatIDid: [
        "Architected custom CLSI LIS2-A and ASTM 1394 protocol drivers with ENQ/ACK handshaking and frame-by-frame validation.",
        "Integrated Selectra Pro M, PKL-125, and Sysmex analyzers over RS232 serial COM ports and Ethernet TCP/IP.",
        "Built responsive desktop UI in Electron, React, and Tailwind CSS with real-time Analyzer Hub cards and status indicators.",
        "Engineered patient sample registration with automated Code-128 barcode label generation using jsbarcode.",
        "Implemented diagnostic billing, receipt generation, and patient result verification with better-sqlite3."
      ],
      keyMetrics: [
        "Zero transcription errors with direct bidirectional analyzer serial links",
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
        "Direct RS232 / Ethernet analyzer driver for Selectra Pro M & PKL-125",
        "Real-time ENQ/ACK handshaking and ASTM frame parser",
        "Code-128 barcode tube generator and diagnostic billing"
      ]
    },
    {
      id: "fyp-smart-shoes",
      title: "SensoPath: Smart Assistive Footwear for Deafblind Individuals",
      tagline: "IoT wearable footwear with multi-directional ultrasonic obstacle detection & haptic feedback",
      description: "An embedded hardware-software assistive system designed for visually and hearing-impaired individuals to navigate physical environments autonomously. Features dual ultrasonic range scanning, bilateral vibration haptic feedback motors, ESP32 microcontroller, and BLE mobile telemetry.",
      category: "Mobile / Tools",
      tags: ["IoT", "Embedded C++", "ESP32", "BLE 5.0", "Sensor Fusion", "Haptics", "KDU Research"],
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
        "Conducted empirical obstacle-avoidance test trials with assistive research participants."
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
      title: "Clinical LIS & Protocols",
      skills: [
        { name: "CLSI LIS2-A & ASTM 1394", level: "Expert" },
        { name: "Selectra Pro M & PKL-125 Drivers", level: "Expert" },
        { name: "SerialPort (RS232) & TCP/IP", level: "Expert" },
        { name: "Barcode Generation (Code 128)", level: "Advanced" },
        { name: "Electron Desktop Applications", level: "Expert" },
      ],
    },
    {
      title: "AimPointAI & Computer Vision",
      skills: [
        { name: "MediaPipe 33-Pose Landmark Pipeline", level: "Expert" },
        { name: "LSTM Temporal Sequence Models", level: "Advanced" },
        { name: "Sports Biomechanics Kinematics", level: "Advanced" },
        { name: "FastAPI High-Speed Inference", level: "Advanced" },
        { name: "PyTorch & OpenCV", level: "Advanced" },
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
        { name: "better-sqlite3 & PostgreSQL", level: "Advanced" },
        { name: "State Management (Zustand)", level: "Proficient" },
      ],
    },
  ],

  process: [
    {
      step: "01",
      title: "Discovery & Protocol Analysis",
      description: "Analyze clinical, AI vision, hardware, or user requirements, communication standards (ASTM, LIS2-A, BLE, RTSP), and target deliverables.",
    },
    {
      step: "02",
      title: "Architecture & Interactive Prototypes",
      description: "Design system architecture, communication drivers, neural pipelines, database schemas, and interactive high-fidelity prototypes.",
    },
    {
      step: "03",
      title: "Agile Development & Testing",
      description: "Clean modular code written with strict typing, regular git commits, serial/inference benchmarks, and live staging milestones.",
    },
    {
      step: "04",
      title: "Deployment & Verification",
      description: "Hardware calibration, automated build deployment, comprehensive technical documentation, and long-term support.",
    },
  ],

  testimonials: [
    {
      quote: "Dasuni's integration of the Selectra Pro M analyzer with MediLIS eliminated transcription delays entirely. Outstanding communication and engineering precision.",
      author: "Mediccon Operations",
      role: "Clinical Diagnostics Lead",
    },
    {
      quote: "AimPointAI's real-time kinematic pose estimation and automated shooting mistake feedback represents outstanding research in deep learning sports analytics.",
      author: "Dr. Kaneeka Vidanage",
      role: "Thesis Supervisor, Faculty of Computing, KDU",
    },
    {
      quote: "The SensoPath smart footwear research is remarkable. Translating ultrasonic sensing into intuitive tactile guidance is a huge leap for deafblind accessibility.",
      author: "Engineering Department",
      role: "KDU Engineering Research",
    },
  ],

  faqs: [
    {
      question: "What types of engineering projects do you take on?",
      answer: "I specialize in Laboratory Information Systems (MediLIS) & medical analyzer protocol drivers (Selectra Pro M, PKL-125, CLSI LIS2-A, ASTM 1394), AimPointAI deep learning computer vision & sports biomechanics, and IoT assistive hardware (SensoPath, ESP32, sensor fusion).",
    },
    {
      question: "What is your standard project delivery timeline?",
      answer: "Turnaround depends on scope: a standard web portal or dashboard takes 1-2 weeks; an analyzer communication driver, AimPointAI vision model, or IoT prototype typically takes 2-4 weeks with clear milestones.",
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
