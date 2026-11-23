import type { Metadata } from "next";
import "./globals.css";
import { portfolioConfig } from "@/data/portfolioData";

export const metadata: Metadata = {
  title: `${portfolioConfig.personal.name} | ${portfolioConfig.personal.title}`,
  description: portfolioConfig.personal.bio,
  keywords: [
    "Full-Stack Developer",
    "Freelance Software Engineer",
    "Next.js Developer",
    "React Developer",
    "Web Development Services",
    "Hire Freelance Programmer",
    "Software Portfolio",
    "GitHub Repositories"
  ],
  authors: [{ name: portfolioConfig.personal.name }],
  openGraph: {
    title: `${portfolioConfig.personal.name} | Portfolio & Freelance Services`,
    description: portfolioConfig.personal.bio,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen flex flex-col bg-[#090d16] text-slate-100 antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
        {children}
      </body>
    </html>
  );
}
