import { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // 添加静态导出配置
  // output: 'export',
  // 添加 basePath 和 assetPrefix
  // basePath: process.env.NODE_ENV === 'production' ? '/cardiovision-lab-homepage' : '',
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/cardiovision-lab-homepage/' : '',
  // Enable remote images
  images: {
    // 添加 unoptimized 选项
    // unoptimized: true,
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