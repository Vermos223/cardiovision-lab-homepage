import { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Enable remote images
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'web-assets.same.dev',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Leverage development tools
  typescript: {
    ignoreBuildErrors: process.env.CI === "true",
  },
  eslint: {
    ignoreDuringBuilds: process.env.CI === "true",
  },
};

export default nextConfig;
