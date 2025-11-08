import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/anita-stanley-website' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/anita-stanley-website/' : '',
};

export default nextConfig;
