"use client";

import { useState } from "react";
import { portfolioConfig, Project } from "@/data/portfolioData";
import { ExternalLink, Sparkles, FolderGit2, Star, CheckCircle } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export default function Projects() {
  const { projects, personal } = portfolioConfig;
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Full-Stack", "Frontend", "Backend/API", "Mobile / Tools"];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-cyan-400 bg-cyan-950/50 px-3 py-1 rounded-full border border-cyan-800/50 mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Portfolio & Repositories</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Projects & Code
            </h2>
            <p className="text-slate-400 mt-2 text-base max-w-xl">
              Explore curated production apps, open-source repositories, and client solutions I&apos;ve built across the stack.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20 font-semibold"
                    : "bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project: Project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl p-6 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 inline-flex items-center gap-1 text-[11px] font-semibold text-amber-300 bg-amber-500/10 border border-amber-500/30 px-2 py-0.5 rounded-full">
                  <Star className="w-3 h-3 fill-amber-300" />
                  <span>Featured</span>
                </div>
              )}

              <div>
                {/* Category & Tag */}
                <div className="text-xs font-mono text-cyan-400 font-medium mb-2">
                  {project.category}
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>

                {/* Tagline / Subtitle */}
                <p className="text-slate-300 text-xs font-medium mt-1 mb-3">
                  {project.tagline}
                </p>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Technical Highlights */}
                {project.highlights && project.highlights.length > 0 && (
                  <div className="mb-5 space-y-1.5">
                    {project.highlights.map((highlight, hIdx) => (
                      <div
                        key={hIdx}
                        className="flex items-start gap-2 text-xs text-slate-300"
                      >
                        <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-slate-800/90 border border-slate-700/80 text-[11px] font-mono text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>Source Code</span>
                </a>

                {project.demoUrl ? (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="text-xs text-slate-500 font-mono">CLI / Library</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Repositories Banner */}
        <div className="mt-14 p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-xl bg-slate-800 text-cyan-400 border border-slate-700">
              <GithubIcon className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">Want to explore all my public repositories?</h4>
              <p className="text-sm text-slate-400 mt-1">
                Browse through my open-source experiments, algorithms, utilities, and client boilerplates on GitHub.
              </p>
            </div>
          </div>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 transition-all shrink-0 hover:scale-105"
          >
            <span>Visit GitHub Profile</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
