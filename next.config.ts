import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL('https://s6.imgcdn.dev/**')],
  },
  transpilePackages: ['next-mdx-remote'],
};

export default nextConfig;
