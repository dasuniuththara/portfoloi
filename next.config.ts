import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
// GitHub Pages path: https://dasuniuththara.github.io/portfoloi/
const repoBasePath = process.env.NEXT_PUBLIC_BASE_PATH || (isProd ? "/portfoloi" : "");

const nextConfig: NextConfig = {
  output: "export", // Static HTML export for GitHub Pages
  images: {
    unoptimized: true, // Required for static export
  },
  basePath: repoBasePath || undefined,
  trailingSlash: true,
};

export default nextConfig;
