import { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // 静态导出配置
  output: 'export',
  // GitHub Pages 默认子路径部署，需要 basePath
  basePath: process.env.NODE_ENV === 'production' ? '/cardiovision-lab-homepage' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/cardiovision-lab-homepage/' : '',

  // Enable remote images
  images: {
    // 添加 unoptimized 选项
    unoptimized: true,
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