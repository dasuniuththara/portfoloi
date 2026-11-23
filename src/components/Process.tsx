import { portfolioConfig } from "@/data/portfolioData";
import { GitBranch, MessageSquareQuote } from "lucide-react";

export default function Process() {
  const { process, testimonials } = portfolioConfig;

  return (
    <section id="process" className="py-24 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-wider uppercase text-cyan-400 bg-cyan-950/50 px-3 py-1 rounded-full border border-cyan-800/50">
            Work Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 tracking-tight">
            How We Work Together
          </h2>
          <p className="text-slate-400 mt-3 text-base">
            A transparent, sprint-based workflow designed to eliminate guesswork, communicate clearly, and hit deadlines.
          </p>
        </div>

        {/* 4 Steps Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {process.map((stepItem, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-2xl relative flex flex-col justify-between"
            >
              <div>
                <span className="text-3xl font-extrabold font-mono text-cyan-400/40 mb-3 block">
                  {stepItem.step}
                </span>
                <h3 className="text-lg font-bold text-white mb-2">{stepItem.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {stepItem.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="pt-12 border-t border-slate-800">
          <div className="text-center max-w-xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase text-cyan-400 mb-2">
              <MessageSquareQuote className="w-4 h-4" />
              <span>Client Feedback</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              What Founders & Clients Say
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="glass-card p-6 rounded-2xl flex flex-col justify-between"
              >
                <p className="text-slate-300 text-sm leading-relaxed italic mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div>
                  <div className="font-bold text-white text-sm">{testimonial.author}</div>
                  <div className="text-xs text-cyan-400 mt-0.5">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
