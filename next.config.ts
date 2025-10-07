import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {

  images: {
     domains: ["avatars.githubusercontent.com"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        pathname: '/**',  
      },
    ],
  },

  
    webpack: ( config, { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }) => {
    return config
  },
};

export default nextConfig;

