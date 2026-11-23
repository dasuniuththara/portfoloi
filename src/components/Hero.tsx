"use client";

import { portfolioConfig } from "@/data/portfolioData";
import { ArrowRight, ExternalLink, Sparkles, CheckCircle2, Eye, Bot, ShieldCheck, Zap } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

interface HeroProps {
  onOpenFeatured?: () => void;
}

export default function Hero({ onOpenFeatured }: HeroProps) {
  const { personal } = portfolioConfig;

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background glowing gradients */}
      <div className="gradient-blob bg-cyan-500 w-96 h-96 -top-20 -left-20" />
      <div className="gradient-blob bg-indigo-600 w-96 h-96 top-40 right-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          {/* Status Badge & Prototype Callout */}
          <div className="flex flex-wrap items-center gap-2.5 mb-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{personal.badge}</span>
            </div>

            <a
              href="#projects"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-950/60 border border-cyan-800/60 text-cyan-300 hover:bg-cyan-900 transition-colors"
            >
              <Eye className="w-3.5 h-3.5 text-cyan-400" />
              <span>7 High-Fidelity UI, AI &amp; Hardware Prototypes</span>
            </a>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight sm:leading-tight">
            Engineering MediLIS, AimPoint AI &amp; Intelligent Systems for the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
              Modern World
            </span>
          </h1>

          {/* Subtitle / Bio */}
          <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl">
            Hi, I&apos;m <span className="font-semibold text-white">{personal.name}</span>. {personal.bio}
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-400 to-cyan-300 hover:from-cyan-300 hover:to-sky-200 shadow-lg shadow-cyan-500/25 transition-all hover:scale-105 active:scale-95"
            >
              <span>Discuss a Project</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 transition-all hover:text-white"
            >
              <Eye className="w-4 h-4 text-cyan-400" />
              <span>Inspect Projects &amp; Prototypes</span>
            </a>

            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 p-3.5 rounded-xl text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 transition-all"
              title="GitHub Profile"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
          </div>

          {/* Key Freelance Metrics & Trust Indicators */}
          <div className="mt-14 pt-8 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div className="flex flex-col">
              <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300">
                {personal.projectsCompleted}
              </span>
              <span className="text-xs sm:text-sm text-slate-400 mt-1">Live Apps &amp; Repos</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">
                {personal.yearsExperience}
              </span>
              <span className="text-xs sm:text-sm text-slate-400 mt-1">Years Engineering</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                {personal.clientSatisfaction}
              </span>
              <span className="text-xs sm:text-sm text-slate-400 mt-1">Client Satisfaction</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                7/7
              </span>
              <span className="text-xs sm:text-sm text-slate-400 mt-1">Full UI, AI &amp; IoT Prototypes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
