# 🚀 Developer & Freelancer Portfolio

A modern, high-converting portfolio website built with **Next.js 16**, **Tailwind CSS**, and **TypeScript**, configured for **100% free static hosting on GitHub Pages**.

Designed specifically for developers looking to showcase their code repositories, attract freelance clients, and stand out in the tech and developer community.

---

## 🌟 Key Features

- **💼 Freelance-Ready Hero & Offerings**: Highlight your services (Full-Stack, Frontend, API & Backend, MVPs) and client deliverables.
- **📂 Curated Projects & Repos Showcase**:
  - Filter by category: *All*, *Full-Stack*, *Frontend*, *Backend/API*, *Mobile / Tools*.
  - Rich project cards with key metrics, tech stack tags, live demo links, and GitHub repo links.
  - One-click banner linking to your full GitHub profile.
- **⚡ Tech Stack Matrix**: Categorized proficiencies (Frontend, Backend, Databases & Cloud, DevOps).
- **🔄 Transparent Work Methodology**: 4-step agile sprint process (Discovery, Architecture, Sprint Execution, QA & Launch) to build trust with clients.
- **💬 Social Proof**: Testimonials and client feedback cards.
- **📬 Inquiries & Contact Form**: Client inquiry form with budget/project-type selector, direct email link, and Calendly call booking.
- **🤖 GitHub Pages Automated Deployment**: Includes `.github/workflows/deploy.yml` for automated CI/CD builds on push to `main`.

---

## 🛠️ Quick Start (Local Development)

To run the portfolio on your local machine:

```bash
# Navigate to the project directory
cd developer-portfolio

# Start the development server
npm run dev
```

Open your browser and visit: `http://localhost:3000`

---

## ✏️ How to Customize Your Portfolio

All your personal details, repositories, and services are centralized in **one single file**:

📁 `src/data/portfolioData.ts`

### 1. Update Personal Info & Social Links:
```typescript
personal: {
  name: "Your Name",
  title: "Full-Stack Software Engineer & Freelancer",
  bio: "Your personalized bio...",
  email: "your-email@example.com",
  github: "https://github.com/your-username",
  linkedin: "https://linkedin.com/in/your-profile",
  calendly: "https://calendly.com/your-handle",
}
```

### 2. Add or Edit Your Projects:
```typescript
projects: [
  {
    id: "your-project-id",
    title: "Your Project Name",
    tagline: "Short 1-line impact statement",
    description: "Detailed description of what you built and the problems solved.",
    category: "Full-Stack", // "Full-Stack" | "Frontend" | "Backend/API" | "Mobile / Tools"
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    githubUrl: "https://github.com/your-username/your-repo",
    demoUrl: "https://your-demo-url.com", // Optional
    featured: true,
    highlights: [
      "Key technical achievement 1",
      "Key technical achievement 2",
    ],
  },
  // Add more projects as needed...
]
```

---

## 🌐 Deploying to GitHub Pages (Step-by-Step)

### Step 1: Create a GitHub Repository
1. Go to [GitHub](https://github.com/new) and create a new repository (e.g. `portfolio` or `<your-username>.github.io`).

### Step 2: Push Your Code
From the project folder, run:

```bash
git add .
git commit -m "feat: initial freelancer portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo-name>.git
git push -u origin main
```

### Step 3: Enable GitHub Pages in Repository Settings
1. On GitHub, go to your repository's **Settings** tab.
2. Click **Pages** in the left sidebar.
3. Under **Build and deployment** -> **Source**, select **GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` will automatically build and deploy your site!

> **Note for Project Subpaths**: If your repository name is NOT `<username>.github.io` (e.g., your site is hosted at `https://<username>.github.io/portfolio/`), set an environment variable or repository secret `NEXT_PUBLIC_BASE_PATH=/portfolio` in GitHub Actions.

---

## 📦 Tech Stack
- **Framework**: Next.js 16 (App Router, Static HTML Export)
- **Styling**: Tailwind CSS
- **Icons**: Lucide Icons & Custom SVG Brand Icons
- **Language**: TypeScript
