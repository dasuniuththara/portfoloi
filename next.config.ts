import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Static HTML export for GitHub Pages
  images: {
    unoptimized: true, // Required for static export
  },
  basePath: "/portfoloi",
  assetPrefix: "/portfoloi",
  trailingSlash: true,
};

export default nextConfig;
