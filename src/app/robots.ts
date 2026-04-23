import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/demo", "/api/"],
      },
      {
        userAgent: "GPTBot",
        allow: "/",
        disallow: ["/demo", "/api/"],
      },
      {
        userAgent: "ChatGPT-User",
        allow: "/",
        disallow: ["/demo", "/api/"],
      },
      {
        userAgent: "Claude-Web",
        allow: "/",
        disallow: ["/demo", "/api/"],
      },
      {
        userAgent: "CCBot",
        allow: "/",
        disallow: ["/demo", "/api/"],
      },
      {
        userAgent: "PerplexityBot",
        allow: "/",
        disallow: ["/demo", "/api/"],
      },
      {
        userAgent: "Amazonbot",
        allow: "/",
        disallow: ["/demo", "/api/"],
      },
    ],
    sitemap: "https://nogomedia.se/sitemap.xml",
  };
}
