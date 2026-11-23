import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export", // Static HTML export for GitHub Pages
  images: {
    unoptimized: true, // Required for static export
  },
  basePath: isProd ? "/portfoloi" : "",
  assetPrefix: isProd ? "/portfoloi" : undefined,
  trailingSlash: true,
};

export default nextConfig;
