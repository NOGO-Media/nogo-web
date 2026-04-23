import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/blogg/ai-trafikledning-2026",
        destination: "/artiklar/ai-trafikledning-2026",
        permanent: true,
      },
      {
        source: "/blogg/digitalisering-akerinaring-var-borjar-man",
        destination: "/artiklar/digitalisering-akerinaring-var-borjar-man",
        permanent: true,
      },
      {
        source: "/artiklar",
        destination: "/blogg",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
