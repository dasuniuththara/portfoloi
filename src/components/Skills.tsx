import { portfolioConfig } from "@/data/portfolioData";
import { Cpu, Layers } from "lucide-react";

export default function Skills() {
  const { skillCategories } = portfolioConfig;

  return (
    <section id="skills" className="py-20 relative bg-slate-950/50 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-cyan-400 bg-cyan-950/50 px-3 py-1 rounded-full border border-cyan-800/50 mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Proficiencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            The Tech Stack Behind My Work
          </h2>
          <p className="text-slate-400 mt-3 text-base">
            Modern, battle-tested technologies and architectural tools used to deliver production-grade applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="glass-card p-6 rounded-2xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-slate-800">
                  <Layers className="w-4 h-4 text-cyan-400" />
                  <h3 className="font-bold text-base text-white">{category.title}</h3>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-center justify-between text-sm py-1.5 px-2.5 rounded-lg bg-slate-900/60 border border-slate-800/60"
                    >
                      <span className="font-medium text-slate-200 text-xs sm:text-sm">
                        {skill.name}
                      </span>
                      {skill.level && (
                        <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-slate-800 text-cyan-400 border border-slate-700">
                          {skill.level}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
