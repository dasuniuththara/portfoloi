"use client";

import { useEffect, useState } from "react";
import { Project, getAssetPath } from "@/data/portfolioData";
import {
  X,
  ExternalLink,
  CheckCircle,
  Cpu,
  Layers,
  BarChart3,
  Clock,
  UserCheck,
  Eye,
  Sparkles,
  ArrowRight,
  ShieldAlert,
  Lightbulb
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [activeTab, setActiveTab] = useState<"prototype" | "contribution" | "architecture">("prototype");

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      {/* Backdrop overlay */}
      <div
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-[#0b1120] border border-cyan-800/40 rounded-2xl shadow-2xl shadow-cyan-950/50 overflow-hidden z-10">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#0f172a]/90 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-cyan-950/80 text-cyan-400 border border-cyan-800/60">
              {project.category}
            </span>
            <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight truncate max-w-md">
              {project.title}
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center border-b border-slate-800 bg-[#0b1329] px-6 gap-2">
          <button
            onClick={() => setActiveTab("prototype")}
            className={`flex items-center gap-2 py-3 px-3 text-xs sm:text-sm font-semibold border-b-2 transition-all ${
              activeTab === "prototype"
                ? "border-cyan-400 text-cyan-400"
                : "border-transparent text-slate-400 hover:text-slate-200"
            }`}
          >
            <Eye className="w-4 h-4" />
            <span>UI Prototype & Visuals</span>
          </button>

          <button
            onClick={() => setActiveTab("contribution")}
            className={`flex items-center gap-2 py-3 px-3 text-xs sm:text-sm font-semibold border-b-2 transition-all ${
              activeTab === "contribution"
                ? "border-cyan-400 text-cyan-400"
                : "border-transparent text-slate-400 hover:text-slate-200"
            }`}
          >
            <UserCheck className="w-4 h-4" />
            <span>What I Did in This Project</span>
          </button>

          <button
            onClick={() => setActiveTab("architecture")}
            className={`flex items-center gap-2 py-3 px-3 text-xs sm:text-sm font-semibold border-b-2 transition-all ${
              activeTab === "architecture"
                ? "border-cyan-400 text-cyan-400"
                : "border-transparent text-slate-400 hover:text-slate-200"
            }`}
          >
            <Cpu className="w-4 h-4" />
            <span>Architecture & Impact</span>
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* TAB 1: PROTOTYPE PREVIEW */}
          {activeTab === "prototype" && (
            <div className="space-y-6 animate-fadeIn">
              {/* Interactive Prototype Frame */}
              <div className="rounded-xl overflow-hidden border border-slate-700/80 bg-slate-950 shadow-inner group relative">
                <div className="bg-slate-900 px-4 py-2 flex items-center justify-between border-b border-slate-800">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="text-xs font-mono text-slate-400 ml-2">
                      {project.title.toLowerCase().replace(/\s+/g, "-")}.prototype.preview
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-cyan-400 font-medium">
                    ● High-Fidelity UI Prototype
                  </span>
                </div>

                <div className="p-3 sm:p-5 flex items-center justify-center bg-[#070b14]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={getAssetPath(project.prototypeImage)}
                    alt={`${project.title} Prototype Screen`}
                    className="w-full max-h-[460px] object-contain rounded-lg shadow-xl"
                  />
                </div>
              </div>

              {/* Prototype Summary & Context */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-1">
                    <UserCheck className="w-3.5 h-3.5 text-cyan-400" />
                    <span>My Role</span>
                  </div>
                  <div className="text-sm font-bold text-white">{project.role}</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-1">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Timeline & Sprint</span>
                  </div>
                  <div className="text-sm font-bold text-white">{project.timeline}</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-1">
                    <Layers className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Context / Client</span>
                  </div>
                  <div className="text-sm font-bold text-white">{project.clientOrContext}</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-800/40 text-slate-300 text-sm leading-relaxed">
                <p className="font-semibold text-cyan-300 mb-1">💡 Prototype Focus:</p>
                {project.tagline}
              </div>
            </div>
          )}

          {/* TAB 2: WHAT I DID & CONTRIBUTIONS */}
          {activeTab === "contribution" && (
            <div className="space-y-6 animate-fadeIn">
              {/* Problem vs Solution Callout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-900/40">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-400 mb-2">
                    <ShieldAlert className="w-4 h-4" />
                    <span>The Challenge & Problem</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-900/40">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">
                    <Lightbulb className="w-4 h-4" />
                    <span>Engineered Solution</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* My Exact Contributions Breakdown */}
              <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800">
                <h3 className="text-sm font-bold uppercase tracking-wider text-cyan-400 mb-4 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  <span>My Specific Hands-On Contributions</span>
                </h3>

                <div className="space-y-3.5">
                  {project.whatIDid.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-slate-200">
                      <div className="w-5 h-5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5 text-xs font-mono font-bold">
                        {idx + 1}
                      </div>
                      <p className="leading-relaxed">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: ARCHITECTURE & IMPACT */}
          {activeTab === "architecture" && (
            <div className="space-y-6 animate-fadeIn">
              {/* Quantitative Metrics */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-cyan-400" />
                  <span>Quantified Business & Technical Impact</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {project.keyMetrics.map((metric, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-start gap-2.5"
                    >
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-medium text-slate-200">
                        {metric}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Architectural Decisions */}
              <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800">
                <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-3 flex items-center gap-2">
                  <Cpu className="w-4 h-4" />
                  <span>System Architecture & Technologies</span>
                </h3>
                <div className="space-y-2.5">
                  {project.architecture.map((arch, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <span className="text-indigo-400 font-mono">▸</span>
                      <span>{arch}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Matrix Tags */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Tech Stack Applied
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-lg bg-slate-800 border border-slate-700 text-xs font-mono font-medium text-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div className="px-6 py-4 bg-[#0f172a] border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 hover:text-white border border-slate-700 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub Repo</span>
            </a>

            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            )}
          </div>

          <a
            href="#contact"
            onClick={onClose}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-cyan-400 hover:text-cyan-300"
          >
            <span>Need a similar solution? Discuss with me</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
