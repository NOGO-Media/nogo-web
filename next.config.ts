import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/blogg/ai-trafikledning-2026",
        destination: "/artiklar/ai-trafikledning-2026",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
