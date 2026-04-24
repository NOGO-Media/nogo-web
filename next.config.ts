import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  {
    key: "Content-Security-Policy",
    value: [
      "base-uri 'self'",
      "frame-ancestors 'self'",
      "object-src 'none'",
      "form-action 'self'",
      "upgrade-insecure-requests",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
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
      { source: "/om", destination: "/om-oss", permanent: true },
      { source: "/tjanster", destination: "/losningar", permanent: true },
      { source: "/prismodell", destination: "/kontakt", permanent: true },
      { source: "/begrepp", destination: "/", permanent: true },
      {
        source: "/losningar/logistik-transport",
        destination: "/losningar/ruttoptimering",
        permanent: true,
      },
      {
        source: "/losningar/kontor-administration",
        destination: "/losningar/automatisk-orderhantering",
        permanent: true,
      },
      {
        source: "/losningar/tillverkning-industri",
        destination: "/losningar",
        permanent: true,
      },
      { source: "/branscher/:path*", destination: "/losningar", permanent: true },
      { source: "/regioner/:path*", destination: "/", permanent: true },
      {
        source: "/blogg/valja-forsta-dispatchflode",
        destination: "/blogg",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
