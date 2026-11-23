"use client";

import { useState, useRef, useEffect } from "react";
import { portfolioConfig, Project } from "@/data/portfolioData";
import {
  MessageSquare,
  X,
  Send,
  Sparkles,
  Bot,
  User,
  ArrowRight,
  ExternalLink,
  ChevronDown,
  Calendar,
  Code2,
  FolderGit2
} from "lucide-react";

interface ChatMessage {
  id: string;
  sender: "bot" | "user";
  text: string;
  timestamp: string;
  actionButton?: {
    label: string;
    actionType: "project" | "calendly" | "email" | "contact";
    projectId?: string;
    url?: string;
  };
}

interface ChatbotProps {
  onSelectProject?: (project: Project) => void;
}

export default function Chatbot({ onSelectProject }: ChatbotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const initialBotMessage: ChatMessage = {
    id: "welcome-1",
    sender: "bot",
    text: `Hi there! 👋 I'm Dasuni's Portfolio AI Assistant. You can ask me anything about:
• 🎹 **Piano Playing Robot (FYP)** & 🎯 **AimPoint AI Thesis**
• 🔬 **MediLIS Clinical Analyzer Drivers** (Selectra Pro M / PKL-125)
• 👟 **SensoPath Smart Footwear** & 📦 **Workshop Inventory**
• 🎓 **Education at KDU**, 💼 **Experience**, 🛠️ **Tech Stack**, or 💰 **Freelance Availability**!`,
    timestamp: "Just now"
  };

  const [messages, setMessages] = useState<ChatMessage[]>([initialBotMessage]);

  const quickPrompts = [
    { label: "🎹 Piano Robot FYP", query: "Tell me about Dasuni's Piano Playing Robot FYP" },
    { label: "🎯 AimPoint AI (Thesis)", query: "Tell me about AimPoint AI basketball mistake detection" },
    { label: "🔬 MediLIS Analyzers", query: "Tell me about MediLIS and Selectra Pro M analyzer integration" },
    { label: "👟 SensoPath Smart Shoes", query: "Tell me about Dasuni's assistive smart footwear project" },
    { label: "📦 Workshop Inventory", query: "Tell me about Mediccon workshop inventory and barcode tracking" },
    { label: "🎓 Education & KDU", query: "Where did Dasuni study and what is her degree background?" },
    { label: "💼 Work Experience", query: "What is Dasuni's work experience at Mediccon?" },
    { label: "🛠️ Tech Stack & Skills", query: "What programming languages and frameworks does Dasuni use?" },
    { label: "💰 Rates & Availability", query: "What are Dasuni's freelance rates and turnaround timelines?" },
    { label: "📬 Contact Details", query: "How do I contact or hire Dasuni?" }
  ];

  // Auto-scroll to bottom of chat
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen, isTyping]);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
    if (!isOpen) {
      setHasUnread(false);
    }
  };

  const generateAnswer = (userQuery: string): { text: string; actionButton?: ChatMessage["actionButton"] } => {
    const q = userQuery.toLowerCase().trim();

    // 1. Greetings & Small Talk
    if (/^(hi|hello|hey|sup|good\s?(morning|afternoon|evening)|howdy|greetings|hola)\b/.test(q)) {
      return {
        text: `Hello! 👋 Great to meet you! I'm Dasuni's AI Assistant. I can tell you all about her real engineering projects, her KDU Computer Engineering degree, her technical skills in C++, Python, Next.js, and Electron, or help you discuss a project.\n\nWhat would you like to explore?`,
        actionButton: {
          label: "Explore Featured Projects",
          actionType: "contact",
          url: "#projects"
        }
      };
    }

    // 2. Who is Dasuni / Bio / About
    if (q.includes("who is dasuni") || q.includes("tell me about dasuni") || q.includes("about dasuni") || q.includes("about you") || q.includes("who are you") || q.includes("bio") || q.includes("introduce") || q.includes("background")) {
      return {
        text: `**Dasuni Uththara** (T.S. Kirindegamaarachchi) is a Full-Stack Software Engineer & Robotics Researcher from Sri Lanka:\n\n• **Education:** Bachelor of Science in Computer Engineering at General Sir John Kotelawala Defence University (KDU), Registration No. D_BCE_22_0022.\n• **Specialties:** Clinical Laboratory Systems (MediLIS), Deep Learning Pose Estimation (AimPoint AI), Assistive Robotics (Piano Playing Robot FYP), and IoT Hardware (SensoPath).\n• **Experience:** 3+ years delivering production software, medical analyzer drivers, and web applications.`,
        actionButton: {
          label: "View Contact Details",
          actionType: "contact",
          url: "#contact"
        }
      };
    }

    // 3. Education / University / KDU / Degree
    if (q.includes("kdu") || q.includes("university") || q.includes("education") || q.includes("degree") || q.includes("college") || q.includes("study") || q.includes("academic") || q.includes("kotelawala") || q.includes("d_bce_22_0022")) {
      return {
        text: `**Education & Academic Background:**\n• **Institution:** General Sir John Kotelawala Defence University (KDU), Sri Lanka\n• **Degree:** Bachelor of Science in Computer Engineering (Reg: D_BCE_22_0022)\n• **Final Year Project (FYP):** *Adaptive Robotic Assistance for Piano Playing: Enhancing Accessibility for Individuals with Disabilities and Facilitating Learning for Novices*\n• **Honours Thesis:** *AimPointAI: Real-Time Detection of Basketball Shooting Mistakes and Corrective Training Feedback Using Deep Learning and Pose Estimation* (Supervised by Dr. Kaneeka Vidanage, Faculty of Computing).`,
        actionButton: {
          label: "View FYP & Research Projects",
          actionType: "contact",
          url: "#projects"
        }
      };
    }

    // 4. Piano Playing Robot (KDU FYP)
    if (q.includes("piano") || q.includes("robot") || q.includes("robo") || q.includes("pianist") || q.includes("solenoid") || q.includes("piono") || q.includes("actuator") || q.includes("midi") || (q.includes("fyp") && (q.includes("assist") || q.includes("music")))) {
      return {
        text: `**Adaptive Robotic Assistance for Piano Playing (KDU FYP):**\n• **Assistive Key Actuation:** 8-channel 12V push-pull solenoid array with silicone contact dampeners positioned over acoustic piano keys to aid individuals with physical hand impairments.\n• **Real-Time Embedded Firmware:** Programmed in C++ for ESP32/STM32 with PWM dynamic velocity modulation (0–127 MIDI volume levels).\n• **Sub-20ms Latency:** Achieved sub-20ms key strike response from incoming MIDI note triggers to acoustic sound.\n• **LSTM Accompaniment Model:** PyTorch LSTM sequence generator that dynamically harmonizes and fills chords alongside the human player.\n• **Dual Modes:** Accessibility Assist mode for motor disabilities & Novice Tutorial mode.`,
        actionButton: {
          label: "Inspect Piano Robot Prototype",
          actionType: "project",
          projectId: "piano-robot-fyp"
        }
      };
    }

    // 5. Aim Point AI & Basketball Mistake Detection Thesis
    if (q.includes("aimpoint") || q.includes("aim point") || q.includes("aim") || q.includes("basketball") || q.includes("pose") || q.includes("shooting") || q.includes("mediapipe") || q.includes("kaneeka") || q.includes("vidanage") || q.includes("thesis") || q.includes("biomechanics")) {
      return {
        text: `**Aim Point AI (KDU Honours Thesis):**\n• **Faculty of Computing, KDU:** Supervised by Dr. Kaneeka Vidanage with a complete 170+ page thesis.\n• **33-Keypoint Pose Estimation:** Real-time markerless tracking of shooter joint kinematics (elbow, wrist, shoulder, knee, ankle) at 60 FPS using MediaPipe.\n• **Kinematic Mistake Detection:** LSTM neural network identifies technique flaws: shooting elbow flare (>15° deviation), insufficient knee flexion dip, and improper release arc.\n• **Real-Time Voice Coaching:** Sub-20ms audio-visual feedback delivering voice cues (e.g., 'Tuck shooting elbow inward') directly upon ball release.`,
        actionButton: {
          label: "Inspect Aim Point AI Prototype",
          actionType: "project",
          projectId: "aimpoint-ai"
        }
      };
    }

    // 6. MediLIS & Medical Analyzer Integration
    if (q.includes("medilis") || q.includes("lis") || q.includes("analyzer") || q.includes("selectra") || q.includes("pkl") || q.includes("astm") || q.includes("clsi") || q.includes("serialport") || q.includes("rs232") || q.includes("laboratory") || q.includes("clinic") || q.includes("blood")) {
      return {
        text: `**MediLIS (Clinical Laboratory Information System):**\n• **Analyzers Interfaced:** Direct hardware integration with **Selectra Pro M** (clinical chemistry), **PKL-125**, and Sysmex analyzers.\n• **Standards Compliance:** Custom bidirectional serial protocol drivers conforming strictly to **CLSI LIS2-A** & **ASTM 1394-97** standards with ENQ/ACK handshaking and frame checksum validation.\n• **Serial RS232 & TCP/IP:** Communicates via physical COM ports using Node.js SerialPort and network sockets.\n• **Specimen Automation:** Automated Code-128 barcode generation for sample tubes using jsbarcode.\n• **Local Database:** High-throughput zero-latency storage using \`better-sqlite3\` for patient records, normal ranges, and diagnostic billing.`,
        actionButton: {
          label: "Inspect MediLIS Prototype & Drivers",
          actionType: "project",
          projectId: "medilis"
        }
      };
    }

    // 7. SensoPath: Smart Assistive Footwear
    if (q.includes("sensopath") || q.includes("shoe") || q.includes("footwear") || q.includes("deafblind") || q.includes("blind") || q.includes("haptic") || q.includes("ultrasonic") || (q.includes("fyp") && !q.includes("piano"))) {
      return {
        text: `**SensoPath: Smart Assistive Footwear for Deafblind Individuals:**\n• **Dual Ultrasonic Range Scanning:** Dual sensors scan 0.1m to 3.5m ahead for curbs, obstacles, and sudden ground drop-offs.\n• **Bilateral Haptic Directional Motors:** Left and right micro-vibration motors translate proximity into proportional tactile pulses, guiding direction without any sound.\n• **ESP32 Firmware:** Embedded C++ with sub-25ms sensor-to-haptic alert response.\n• **BLE 5.0 GATT Telemetry:** Streams gait telemetry, obstacle alerts, and battery status to a paired smartphone.\n• **18+ Hours Battery Life:** Ultra-low-power sleep optimization for all-day navigation.`,
        actionButton: {
          label: "Inspect SensoPath Hardware Prototype",
          actionType: "project",
          projectId: "fyp-smart-shoes"
        }
      };
    }

    // 8. Mediccon Workshop Inventory & Barcode Tracker
    if (q.includes("workshop") || q.includes("inventory") || q.includes("barcode") || q.includes("gps") || q.includes("asset") || q.includes("tool") || q.includes("kotte")) {
      return {
        text: `**Mediccon Workshop Inventory System:**\n• **Hardware Barcode Scanning:** Instant input matching for physical handheld barcode scanners (<10ms lookup, e.g., WS-00124).\n• **HQ GPS Telemetry:** Interactive Leaflet map displaying precision equipment located at Mediccon Headquarters (Sri Jayawardenepura Kotte, 6.8851° N, 79.9071° E).\n• **Staff Custody Tracking:** Logs departmental assignments, return status, and active tool loans.\n• **Safe Storage Architecture:** Electron desktop framework with corrupt-proof serialization and fallback caching.`,
        actionButton: {
          label: "View Workshop Inventory Prototype",
          actionType: "project",
          projectId: "workshop-inventory"
        }
      };
    }

    // 9. Work Experience & Career at Mediccon
    if (q.includes("experience") || q.includes("work experience") || q.includes("career") || q.includes("job") || q.includes("internship") || q.includes("employment") || q.includes("history") || q.includes("mediccon")) {
      return {
        text: `**Professional Experience & Industry Work:**\n• **Mediccon Healthcare:** Lead Software & Protocol Integration Engineer. Engineered the **MediLIS** desktop analyzer integration suite (Selectra Pro M & PKL-125) and the **Workshop Inventory System** at Mediccon HQ.\n• **Freelance Full-Stack & Embedded Engineer:** 3+ years building responsive web platforms (Next.js, React, Tailwind), Electron desktop apps, and IoT hardware prototypes for international clients.\n• **Academic Researcher (KDU):** Developed the AimPointAI computer vision system and the Piano Playing Robot FYP.`,
        actionButton: {
          label: "Discuss a Project or Hire",
          actionType: "contact",
          url: "#contact"
        }
      };
    }

    // 10. Tech Stack / Skills / Programming Languages
    if (q.includes("stack") || q.includes("tech") || q.includes("skill") || q.includes("language") || q.includes("c++") || q.includes("python") || q.includes("typescript") || q.includes("react") || q.includes("next") || q.includes("electron") || q.includes("node") || q.includes("sql") || q.includes("database")) {
      return {
        text: `**Dasuni's Technical Skillset & Stack:**\n• **Languages:** C++, Embedded C, Python, TypeScript, JavaScript, SQL\n• **Frontend & UI:** React, Next.js 16 (App Router), Tailwind CSS, Lucide Icons, Recharts\n• **Desktop & Backend:** Electron, Node.js, FastAPI, Express.js, SerialPort (RS232)\n• **Healthcare & IoT:** CLSI LIS2-A, ASTM 1394, ESP32, Arduino, BLE 5.0, HC-SR04, Solenoids\n• **AI & Vision:** MediaPipe Pose (33 Landmarks), PyTorch, TensorFlow, LSTM, OpenCV\n• **Databases & DevOps:** SQLite (\`better-sqlite3\`), PostgreSQL, Prisma, Git, Docker.`,
        actionButton: {
          label: "View Complete Skills Matrix",
          actionType: "contact",
          url: "#skills"
        }
      };
    }

    // 11. All Projects Overview
    if (q.includes("project") || q.includes("portfolio") || q.includes("work") || q.includes("built") || q.includes("prototype") || q.includes("list")) {
      return {
        text: `**Dasuni's 8 Engineering Projects & Live Prototypes:**\n1. 🎹 **Piano Playing Robot (KDU FYP):** Assistive solenoid piano keys with MIDI & LSTM.\n2. 🎯 **AimPoint AI:** 33-landmark pose estimation for real-time basketball coaching.\n3. 🔬 **MediLIS:** Clinical analyzer communication hub (Selectra Pro M / PKL-125).\n4. 👟 **SensoPath Smart Footwear:** Dual ultrasonic & haptic obstacle avoidance.\n5. 📦 **Workshop Inventory:** Barcode asset checkout & Kotte HQ GPS tracking.\n6. 📊 **DevMetrics:** SaaS analytics dashboard with 42ms query response.\n7. 🛍️ **ShopSphere:** Headless e-commerce storefront with Stripe.\n8. ☁️ **CloudVault API:** Microservice auth with S3 presigned streaming.\n\nClick any project card to inspect the interactive UI/hardware prototype!`,
        actionButton: {
          label: "Scroll to Projects Section",
          actionType: "contact",
          url: "#projects"
        }
      };
    }

    // 12. Rates, Pricing, Availability & Timelines
    if (q.includes("available") || q.includes("hire") || q.includes("freelance") || q.includes("contract") || q.includes("price") || q.includes("rate") || q.includes("cost") || q.includes("budget") || q.includes("timeline") || q.includes("turnaround") || q.includes("how much")) {
      return {
        text: `**Freelance Availability & Project Engagements:**\n• **Status:** Available for freelance software engineering, clinical LIS analyzer drivers, and AI/IoT contracts.\n• **Timeline:** Standard web MVPs & portals in 1–3 weeks; analyzer drivers scheduled around hardware test access.\n• **Pricing:** Competitive milestone-based fixed project fees or hourly rates tailored to project scope.\n• **Working Style:** Async-first, weekly video sprint demos, and GitHub PR reviews.`,
        actionButton: {
          label: "Book a Discovery Call via Calendly",
          actionType: "calendly",
          url: portfolioConfig.personal.calendly
        }
      };
    }

    // 13. Resume / CV Request
    if (q.includes("resume") || q.includes("cv") || q.includes("curriculum vitae")) {
      return {
        text: `**Resume Summary — Dasuni Uththara:**\n• **Degree:** B.Sc. in Computer Engineering from KDU (Reg: D_BCE_22_0022)\n• **Core Projects:** Piano Playing Robot FYP, AimPoint AI Thesis, MediLIS Analyzer Integration, and SensoPath IoT Footwear\n• **Core Stack:** C++, Python, Next.js, Electron, RS232 ASTM/LIS2-A, SQLite\n\nWould you like to request Dasuni's full PDF resume or discuss a contract?`,
        actionButton: {
          label: "Request Full PDF Resume via Email",
          actionType: "email",
          url: `mailto:${portfolioConfig.personal.email}?subject=Resume%20Request%20-%20Dasuni%20Uththara`
        }
      };
    }

    // 14. Contact / Email / Location
    if (q.includes("contact") || q.includes("email") || q.includes("phone") || q.includes("call") || q.includes("reach") || q.includes("message") || q.includes("location") || q.includes("sri lanka") || q.includes("github") || q.includes("linkedin")) {
      return {
        text: `**Contact & Communication Details:**\n• **Email:** [${portfolioConfig.personal.email}](mailto:${portfolioConfig.personal.email})\n• **Location:** Sri Lanka (Open to worldwide remote positions)\n• **GitHub:** [${portfolioConfig.personal.github}](${portfolioConfig.personal.github})\n• **LinkedIn:** [${portfolioConfig.personal.linkedin}](${portfolioConfig.personal.linkedin})\n• **Availability:** Immediate start for qualified contracts and development sprints.`,
        actionButton: {
          label: "Open Inquiry Form",
          actionType: "contact",
          url: "#contact"
        }
      };
    }

    // 15. Why Hire Dasuni?
    if (q.includes("why hire") || q.includes("why should i hire") || q.includes("strengths") || q.includes("advantage") || q.includes("hire you")) {
      return {
        text: `**Why Hire Dasuni?**\n1. **Rare Full-Spectrum Mastery:** Connects low-level hardware (C++, ESP32, RS232, Solenoids) with cutting-edge software (Next.js 16, Electron, Python AI).\n2. **Mission-Critical Protocol Experience:** Proven record building production LIS systems running 24/7 with zero-fault CLSI LIS2-A / ASTM analyzers.\n3. **Proven Academic Rigor:** Authored complete KDU Honours Thesis on deep learning sports biomechanics and built an assistive piano robot.\n4. **End-to-End Execution:** From architecture and soldering to cloud deployment and user interfaces.`,
        actionButton: {
          label: "Discuss Your Project",
          actionType: "contact",
          url: "#contact"
        }
      };
    }

    // 16. Gratitude & Closing
    if (q.includes("thank") || q.includes("thanks") || q.includes("cool") || q.includes("awesome") || q.includes("great") || q.includes("bye") || q.includes("goodbye")) {
      return {
        text: `You're very welcome! 😊 Feel free to explore the interactive prototypes or send Dasuni an email directly at **${portfolioConfig.personal.email}** whenever you'd like to collaborate!`,
        actionButton: {
          label: "Send Dasuni an Email",
          actionType: "email",
          url: `mailto:${portfolioConfig.personal.email}`
        }
      };
    }

    // Default Fallback
    return {
      text: `Thanks for asking! I'm trained on all of Dasuni's projects, university background, and engineering skills:\n\n• Ask about **Piano Playing Robot (FYP)** or **AimPoint AI Thesis**\n• Ask about **MediLIS** and **Selectra Pro M** analyzer drivers\n• Ask about **SensoPath** smart shoes or **Workshop Inventory**\n• Ask about **KDU degree**, **Tech stack**, or **Hiring rates**!`,
      actionButton: {
        label: "Discuss a Project with Dasuni",
        actionType: "contact",
        url: "#contact"
      }
    };
  };

  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || inputValue;
    if (!text.trim()) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: text.trim(),
      timestamp: "Just now"
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputValue("");
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const { text: botReply, actionButton } = generateAnswer(userMsg.text);
      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: "bot",
        text: botReply,
        timestamp: "Just now",
        actionButton
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 450);
  };

  const handleActionButtonClick = (btn: NonNullable<ChatMessage["actionButton"]>) => {
    if (btn.actionType === "project" && btn.projectId && onSelectProject) {
      const proj = portfolioConfig.projects.find((p) => p.id === btn.projectId);
      if (proj) {
        onSelectProject(proj);
      }
    } else if (btn.url) {
      if (btn.url.startsWith("#")) {
        const el = document.querySelector(btn.url);
        el?.scrollIntoView({ behavior: "smooth" });
      } else if (btn.url.startsWith("mailto:")) {
        window.location.href = btn.url;
      } else {
        window.open(btn.url, "_blank");
      }
    }
  };

  return (
    <aside aria-label="Portfolio AI Chatbot" className="fixed bottom-6 right-6 z-40">
      {/* Floating Trigger Button */}
      {!isOpen && (
        <button
          onClick={handleToggle}
          className="relative flex items-center gap-3 px-4 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold shadow-xl shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105 active:scale-95 transition-all duration-200 group"
          aria-label="Open AI Assistant"
        >
          <div className="relative">
            <Bot className="w-5 h-5 text-white animate-pulse" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-slate-900" />
          </div>
          <div className="text-left hidden sm:block">
            <div className="text-xs font-bold leading-tight">Ask Dasuni AI</div>
            <div className="text-[10px] text-cyan-100/90 font-mono">MediLIS, AI &amp; FYP</div>
          </div>
          {hasUnread && (
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500" />
            </span>
          )}
        </button>
      )}

      {/* Expanded Chat Window */}
      {isOpen && (
        <div className="w-[92vw] sm:w-[420px] h-[550px] max-h-[85vh] bg-[#090d16] border border-cyan-800/50 rounded-2xl shadow-2xl shadow-cyan-950/60 flex flex-col overflow-hidden animate-fadeIn">
          {/* Header */}
          <div className="px-4 py-3.5 bg-gradient-to-r from-slate-900 via-[#0b1329] to-slate-900 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="relative p-2 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 text-white shadow-md shadow-cyan-500/20">
                <Bot className="w-4 h-4" />
                <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-emerald-400 ring-2 ring-slate-900" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                  <span>Dasuni AI Assistant</span>
                  <Sparkles className="w-3 h-3 text-cyan-400" />
                </h3>
                <p className="text-[10px] text-emerald-400 font-mono">
                  ● Online • Answers instantly
                </p>
              </div>
            </div>

            <button
              onClick={handleToggle}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close Chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Messages Log */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-[#070b14]/90">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {msg.sender === "bot" && (
                  <div className="w-7 h-7 rounded-lg bg-cyan-950/80 border border-cyan-800/60 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                )}

                <div
                  className={`max-w-[82%] rounded-2xl px-3.5 py-2.5 text-xs sm:text-[13px] leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-gradient-to-r from-cyan-500 to-sky-500 text-slate-950 font-medium rounded-tr-sm"
                      : "bg-slate-900/90 text-slate-200 border border-slate-800 rounded-tl-sm whitespace-pre-line"
                  }`}
                >
                  <p>{msg.text}</p>

                  {/* Interactive Embedded Action Button */}
                  {msg.actionButton && (
                    <button
                      onClick={() => handleActionButtonClick(msg.actionButton!)}
                      className="mt-2.5 w-full flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-950/70 hover:bg-cyan-900 text-cyan-300 border border-cyan-800/80 font-semibold text-xs transition-colors"
                    >
                      <span>{msg.actionButton.label}</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  )}
                </div>

                {msg.sender === "user" && (
                  <div className="w-7 h-7 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 flex items-center justify-center shrink-0 mt-0.5">
                    <User className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-center gap-2 text-slate-400 text-xs py-1">
                <div className="w-7 h-7 rounded-lg bg-cyan-950/80 border border-cyan-800/60 text-cyan-400 flex items-center justify-center shrink-0">
                  <Bot className="w-3.5 h-3.5" />
                </div>
                <div className="bg-slate-900 border border-slate-800 px-3 py-2 rounded-xl flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce" />
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompt Chips */}
          <div className="px-3 py-2 bg-[#090d16] border-t border-slate-800/80 overflow-x-auto whitespace-nowrap scrollbar-none flex gap-1.5">
            {quickPrompts.map((p, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(p.query)}
                className="px-2.5 py-1 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-cyan-800/60 text-[11px] text-slate-300 hover:text-cyan-300 transition-colors shrink-0"
              >
                {p.label}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <div className="p-3 bg-slate-900/90 border-t border-slate-800">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about MediLIS, AimPoint AI, or FYP..."
                className="flex-1 px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
              />
              <button
                type="submit"
                disabled={!inputValue.trim()}
                className="p-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 disabled:opacity-40 disabled:hover:bg-cyan-500 text-slate-950 font-bold transition-colors"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </aside>
  );
}
