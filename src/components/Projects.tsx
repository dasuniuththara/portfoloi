"use client";

import { useState, useMemo } from "react";
import { portfolioConfig, Project, getAssetPath } from "@/data/portfolioData";
import {
  ExternalLink,
  Sparkles,
  FolderGit2,
  Star,
  CheckCircle,
  Eye,
  Search,
  UserCheck,
  Layers,
  ArrowRight
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";

interface ProjectsProps {
  onOpenModal: (project: Project) => void;
}

export default function Projects({ onOpenModal }: ProjectsProps) {
  const { projects } = portfolioConfig;
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = ["All", "Full-Stack", "Frontend", "Backend/API", "Mobile / Tools"];

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: projects.length };
    categories.forEach((cat) => {
      if (cat !== "All") {
        counts[cat] = projects.filter((p) => p.category === cat).length;
      }
    });
    return counts;
  }, [projects]);

  // Filtered and searched projects
  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const matchesCategory =
        selectedCategory === "All" || p.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q)) ||
        p.role.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [projects, selectedCategory, searchQuery]);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="gradient-blob bg-cyan-600/10 w-96 h-96 -top-20 left-1/4" />
      <div className="gradient-blob bg-indigo-600/10 w-96 h-96 bottom-10 right-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-cyan-400 bg-cyan-950/60 px-3.5 py-1.5 rounded-full border border-cyan-800/60 mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Full Project Showcase &amp; Prototypes</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Work, Code &amp; UI Prototypes
            </h2>
            <p className="text-slate-400 mt-2 text-base max-w-2xl">
              Inspect interactive UI prototypes, architecture decisions, and exact hands-on contributions across all production applications, IoT assistive hardware, and software packages.
            </p>
          </div>

          {/* Quick search input */}
          <div className="mt-6 md:mt-0 relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by tech or keyword..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-slate-800/80">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 ${
                selectedCategory === cat
                  ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/25"
                  : "bg-slate-900/90 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800"
              }`}
            >
              <span>{cat}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                  selectedCategory === cat
                    ? "bg-slate-950/20 text-slate-950 font-bold"
                    : "bg-slate-800 text-slate-400"
                }`}
              >
                {categoryCounts[cat] || 0}
              </span>
            </button>
          ))}
        </div>

        {/* Empty Search State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-slate-900/30 rounded-2xl border border-slate-800">
            <p className="text-slate-400 text-sm">No projects matched your search for &quot;{searchQuery}&quot;.</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="mt-4 px-4 py-2 rounded-lg text-xs font-semibold text-cyan-400 bg-cyan-950/60 border border-cyan-800/60 hover:bg-cyan-900"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProjects.map((project: Project) => {
            const hasRealExternalDemo =
              project.demoUrl && !project.demoUrl.includes("example.com");

            return (
              <div
                key={project.id}
                className="glass-card rounded-2xl flex flex-col justify-between group relative overflow-hidden border border-slate-800 hover:border-cyan-500/50 transition-all duration-300"
              >
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-3.5 right-3.5 z-20 inline-flex items-center gap-1 text-[10px] font-bold text-amber-300 bg-amber-500/20 backdrop-blur-md border border-amber-500/40 px-2.5 py-1 rounded-full shadow-md">
                    <Star className="w-3 h-3 fill-amber-300" />
                    <span>Featured</span>
                  </div>
                )}

                {/* CARD TOP: Prototype Image Frame with Quick-Inspect Overlay */}
                <div
                  onClick={() => onOpenModal(project)}
                  className="relative h-52 w-full overflow-hidden bg-slate-950 border-b border-slate-800/80 cursor-pointer group/thumb"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={getAssetPath(project.prototypeImage)}
                    alt={`${project.title} Prototype`}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/thumb:scale-105"
                  />

                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120] via-transparent to-transparent opacity-60" />

                  {/* Hover Reveal Action Pill */}
                  <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover/thumb:opacity-100 backdrop-blur-xs transition-opacity flex items-center justify-center p-4">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-slate-950 bg-cyan-400 shadow-lg shadow-cyan-500/30 transform translate-y-2 group-hover/thumb:translate-y-0 transition-all">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Inspect Prototype &amp; Contributions</span>
                    </span>
                  </div>

                  {/* Corner Category Tag */}
                  <div className="absolute bottom-2.5 left-3.5 z-10">
                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-slate-900/90 text-cyan-400 border border-cyan-800/60 backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* CARD MIDDLE: Content & Contributions */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Title & Tagline */}
                    <h3
                      onClick={() => onOpenModal(project)}
                      className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors cursor-pointer"
                    >
                      {project.title}
                    </h3>

                    <p className="text-slate-400 text-xs font-medium mt-1 mb-3 line-clamp-2">
                      {project.tagline}
                    </p>

                    {/* Role & Timeline Badge */}
                    <div className="flex items-center gap-2 text-[11px] text-slate-400 font-mono mb-4 pb-3 border-b border-slate-800/70">
                      <UserCheck className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span className="text-slate-300 truncate">{project.role}</span>
                    </div>

                    {/* "What I Did" Highlights (Top 2) */}
                    <div className="mb-4 space-y-2">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Key Contribution:
                      </div>
                      {project.whatIDid.slice(0, 2).map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="line-clamp-2">{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded bg-slate-800/90 border border-slate-700/80 text-[10px] font-mono text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="px-1.5 py-0.5 text-[10px] font-mono text-slate-500">
                          +{project.tags.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Primary Card Actions */}
                  <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-2">
                    <button
                      onClick={() => onOpenModal(project)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-cyan-400 bg-cyan-950/60 hover:bg-cyan-900 border border-cyan-800/60 transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Prototype</span>
                    </button>

                    <div className="flex items-center gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                        title="GitHub Repository"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>

                      {hasRealExternalDemo && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-800 transition-colors"
                          title="Live Preview"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-slate-900 to-indigo-950/40 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold text-white">Looking for custom architecture, web platforms, or IoT prototyping?</h3>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">
              I build production-grade web systems, assistive hardware prototypes, and scalable backends with clean code and rigorous engineering.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors shrink-0"
          >
            <span>Inquire About Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
