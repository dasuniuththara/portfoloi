import { portfolioConfig } from "@/data/portfolioData";
import { Code2, Layout, Server, Rocket, Check } from "lucide-react";

export default function Services() {
  const { services } = portfolioConfig;

  const iconMap: Record<string, React.ReactNode> = {
    Code2: <Code2 className="w-6 h-6 text-cyan-400" />,
    Layout: <Layout className="w-6 h-6 text-indigo-400" />,
    Server: <Server className="w-6 h-6 text-sky-400" />,
    Rocket: <Rocket className="w-6 h-6 text-amber-400" />,
  };

  return (
    <section id="services" className="py-20 relative border-t border-slate-800/80 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-wider uppercase text-cyan-400 bg-cyan-950/50 px-3 py-1 rounded-full border border-cyan-800/50">
            Freelance Offerings
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 tracking-tight">
            How I Can Help Your Product & Business
          </h2>
          <p className="text-slate-400 mt-3 text-base sm:text-lg">
            High-caliber engineering services tailored for founders, startups, and agencies requiring dependable execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-2xl flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-800/90 border border-slate-700 flex items-center justify-center mb-6">
                  {iconMap[service.icon] || <Code2 className="w-6 h-6 text-cyan-400" />}
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <div className="pt-6 border-t border-slate-800/80">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-3">
                  Key Deliverables
                </span>
                <ul className="space-y-2">
                  {service.deliverables.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-center gap-2.5 text-sm text-slate-300">
                      <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
