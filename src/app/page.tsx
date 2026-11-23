"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ProjectModal from "@/components/ProjectModal";
import Chatbot from "@/components/Chatbot";
import { Project } from "@/data/portfolioData";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Hero onOpenFeatured={() => {
          const el = document.getElementById("projects");
          el?.scrollIntoView({ behavior: "smooth" });
        }} />
        <Services />
        <Projects onOpenModal={(project) => setSelectedProject(project)} />
        <Skills />
        <Process />
        <Contact />
      </main>
      <Footer />

      {/* Interactive Modal for Prototype and "What I Did" Deep Dive */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Interactive AI Chatbot */}
      <Chatbot
        onSelectProject={(project) => setSelectedProject(project)}
      />
    </div>
  );
}
