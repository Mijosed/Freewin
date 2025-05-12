import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  optimizeFonts: true,
  images: {
    domains: ['images.unsplash.com'],
  },
};

export default nextConfig;
