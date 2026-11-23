import { portfolioConfig } from "@/data/portfolioData";
import { Code } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/Icons";

export default function Footer() {
  const { personal } = portfolioConfig;

  return (
    <footer className="border-t border-slate-800 bg-[#060911] py-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-cyan-500 text-slate-950">
              <Code className="w-4 h-4" />
            </div>
            <span className="font-mono font-bold text-white text-sm">
              &lt;{personal.name} /&gt;
            </span>
            <span className="text-xs text-slate-500 ml-2">
              © {new Date().getFullYear()} • Freelance Software Engineer
            </span>
          </div>

          <div className="flex items-center gap-5 text-sm">
            <a
              href="#services"
              className="hover:text-cyan-400 transition-colors"
            >
              Services
            </a>
            <a
              href="#projects"
              className="hover:text-cyan-400 transition-colors"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="hover:text-cyan-400 transition-colors"
            >
              Stack
            </a>
            <a
              href="#contact"
              className="hover:text-cyan-400 transition-colors"
            >
              Contact
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={personal.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
              title="Twitter"
            >
              <TwitterIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
