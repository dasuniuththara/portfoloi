import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
// Set NEXT_PUBLIC_BASE_PATH if hosting on https://<username>.github.io/<repo-name>
const repoBasePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export", // Static HTML export for GitHub Pages
  images: {
    unoptimized: true, // Required for static export
  },
  basePath: repoBasePath || undefined,
  trailingSlash: true,
};

export default nextConfig;
