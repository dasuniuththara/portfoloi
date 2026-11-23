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
    text: `Hi there! 👋 I'm Dasuni's Portfolio AI Assistant. You can ask me about Dasuni's technical experience, recent project prototypes, freelance availability, or how to get in touch!`,
    timestamp: "Just now"
  };

  const [messages, setMessages] = useState<ChatMessage[]>([initialBotMessage]);

  const quickPrompts = [
    { label: "🚀 Top Projects & Prototypes", query: "Tell me about Dasuni's top projects and prototypes" },
    { label: "💻 Tech Stack & Skills", query: "What technologies and stack does Dasuni use?" },
    { label: "🔍 What did you do on DevMetrics?", query: "What did Dasuni do in DevMetrics dashboard?" },
    { label: "🛍️ ShopSphere E-Commerce", query: "Tell me about ShopSphere and what was built" },
    { label: "💼 Freelance & Availability", query: "Is Dasuni available for freelance projects?" },
    { label: "📅 Book a Call", query: "How do I schedule a call or hire Dasuni?" }
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

    // 1. DevMetrics Project
    if (q.includes("devmetrics") || q.includes("metrics") || q.includes("saas")) {
      const proj = portfolioConfig.projects.find((p) => p.id === "saas-flow");
      return {
        text: `In **DevMetrics Analytics Dashboard**, Dasuni architected an end-to-end real-time SaaS platform. Key work included:\n• Slashing P99 query latency from 3.5s to 42ms with PostgreSQL materialized views\n• Building high-frequency vector charts with sub-100ms render speeds\n• Implementing multi-tenant role permissions & automated PDF reporting digests.`,
        actionButton: {
          label: "Inspect DevMetrics Prototype & Details",
          actionType: "project",
          projectId: "saas-flow"
        }
      };
    }

    // 2. ShopSphere E-Commerce Project
    if (q.includes("shopsphere") || q.includes("shop") || q.includes("ecommerce") || q.includes("e-commerce") || q.includes("store")) {
      return {
        text: `On **ShopSphere**, Dasuni engineered a high-conversion headless e-commerce store:\n• Client-side fuzzy search across 10,000+ SKUs with <15ms response\n• Seamless Stripe Checkout with secure webhook verification\n• Achieved 98+ Google Lighthouse scores and +38% cart-to-checkout conversion.`,
        actionButton: {
          label: "View ShopSphere Prototype & Work",
          actionType: "project",
          projectId: "ecommerce-hub"
        }
      };
    }

    // 3. SyncPulse Kanban Project
    if (q.includes("syncpulse") || q.includes("kanban") || q.includes("task") || q.includes("drag")) {
      return {
        text: `For **SyncPulse**, Dasuni built an agile task manager featuring:\n• 60 FPS fluid drag-and-drop physics with keyboard accessibility via @dnd-kit\n• Sub-10ms conflict resolution and optimistic state caching with Zustand\n• Markdown task descriptions with custom priority and sprint metrics.`,
        actionButton: {
          label: "View SyncPulse Prototype",
          actionType: "project",
          projectId: "task-collab"
        }
      };
    }

    // 4. CloudVault Backend API
    if (q.includes("cloudvault") || q.includes("api") || q.includes("backend") || q.includes("storage")) {
      return {
        text: `On **CloudVault API**, Dasuni designed a production-ready microservice backend:\n• JWT authentication with token rotation & Redis rate-limiting\n• S3 presigned upload URLs for high-throughput zero-memory file streaming\n• 99.99% uptime with OpenAPI 3.1 Swagger docs and complete Jest/Supertest suites.`,
        actionButton: {
          label: "View CloudVault API Prototype",
          actionType: "project",
          projectId: "api-gateway"
        }
      };
    }

    // 5. PromptForge AI Studio
    if (q.includes("promptforge") || q.includes("prompt") || q.includes("ai") || q.includes("llm")) {
      return {
        text: `In **PromptForge Studio**, Dasuni created an LLM playground for engineers:\n• Side-by-side comparative model response streaming (Claude 3.5 Sonnet vs GPT-4o)\n• Real-time token counter and provider pricing calculator\n• Monaco Code Editor with one-click SDK export in Python, JavaScript, and cURL.`,
        actionButton: {
          label: "Inspect PromptForge Prototype",
          actionType: "project",
          projectId: "ai-prompt-studio"
        }
      };
    }

    // 6. RepoScout CLI
    if (q.includes("reposcout") || q.includes("cli") || q.includes("terminal") || q.includes("tool")) {
      return {
        text: `Dasuni developed **RepoScout**, an open-source GitHub audit CLI:\n• Full repository health and vulnerability audit in under 2.5 seconds\n• Automated semver changelog generator from conventional git commit messages\n• Over 500+ npm downloads and GitHub Actions multi-OS CI testing.`,
        actionButton: {
          label: "View RepoScout Prototype",
          actionType: "project",
          projectId: "dev-cli-toolkit"
        }
      };
    }

    // 7. All Projects Overview
    if (q.includes("project") || q.includes("portfolio") || q.includes("work") || q.includes("built") || q.includes("prototypes")) {
      return {
        text: `Dasuni has built 6 featured full-stack applications & tools with interactive UI prototypes:\n1. **DevMetrics** (SaaS Analytics Dashboard)\n2. **ShopSphere** (Headless E-Commerce + Stripe)\n3. **SyncPulse** (Agile Drag & Drop Kanban)\n4. **CloudVault** (Secure Auth & S3 Storage API)\n5. **PromptForge** (Side-by-Side LLM Studio)\n6. **RepoScout** (GitHub Health & Changelog CLI)\n\nClick on any project card above to view the full UI prototype and exact technical contributions!`,
        actionButton: {
          label: "Scroll to Projects Section",
          actionType: "contact",
          url: "#projects"
        }
      };
    }

    // 8. Tech Stack / Skills
    if (q.includes("stack") || q.includes("tech") || q.includes("skill") || q.includes("react") || q.includes("next") || q.includes("node") || q.includes("python") || q.includes("database")) {
      return {
        text: `Dasuni's core technical stack includes:\n• **Frontend:** Next.js 16, React 19, TypeScript, Tailwind CSS, Zustand\n• **Backend:** Node.js, Express, Python (FastAPI), REST & GraphQL APIs\n• **Databases & Cloud:** PostgreSQL (Prisma), MongoDB, Redis, Docker, Supabase, Vercel\n• **Engineering:** Clean Architecture, Automated Testing (Jest), CI/CD Actions, WCAG Accessibility.`,
        actionButton: {
          label: "Explore Tech Stack Matrix",
          actionType: "contact",
          url: "#skills"
        }
      };
    }

    // 9. Availability / Hire / Freelance / Pricing
    if (q.includes("available") || q.includes("hire") || q.includes("freelance") || q.includes("contract") || q.includes("price") || q.includes("rate") || q.includes("cost") || q.includes("turnaround")) {
      return {
        text: `Yes! Dasuni is currently **available for new freelance contracts, MVP builds, and engineering roles**.\n\n• **Standard MVPs:** 2 to 4 weeks delivery with weekly sprint demos\n• **Landing Pages & Portfolios:** 3 to 5 days\n• **Agile Communication:** Async-first via Slack/Discord, weekly syncs, NDA guaranteed.`,
        actionButton: {
          label: "Book a Discovery Call via Calendly",
          actionType: "calendly",
          url: portfolioConfig.personal.calendly
        }
      };
    }

    // 10. Contact / Call / Email
    if (q.includes("contact") || q.includes("email") || q.includes("call") || q.includes("meeting") || q.includes("reach") || q.includes("schedule")) {
      return {
        text: `You can reach Dasuni directly via:\n• **Email:** ${portfolioConfig.personal.email}\n• **Calendly:** Instant video call booking\n• **LinkedIn:** ${portfolioConfig.personal.linkedin}\n• **GitHub:** ${portfolioConfig.personal.github}`,
        actionButton: {
          label: "Open Inquiry Form",
          actionType: "contact",
          url: "#contact"
        }
      };
    }

    // Default Fallback
    return {
      text: `Thanks for asking! Dasuni is a Full-Stack Software Engineer specializing in modern Next.js/React applications, high-performance backends, and responsive UI design with clean architecture.\n\nWould you like to explore Dasuni's project prototypes, check out the tech stack, or discuss a freelance project?`,
      actionButton: {
        label: "Discuss a Project",
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
            <div className="text-[10px] text-cyan-100/90 font-mono">Prototypes &amp; Info</div>
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
                placeholder="Ask about projects, prototypes, or stack..."
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
