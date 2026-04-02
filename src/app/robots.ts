import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/demo"],
      },
      {
        userAgent: "GPTBot",
        allow: "/",
        disallow: ["/demo"],
      },
      {
        userAgent: "ChatGPT-User",
        allow: "/",
        disallow: ["/demo"],
      },
      {
        userAgent: "Claude-Web",
        allow: "/",
        disallow: ["/demo"],
      },
      {
        userAgent: "CCBot",
        allow: "/",
        disallow: ["/demo"],
      },
      {
        userAgent: "PerplexityBot",
        allow: "/",
        disallow: ["/demo"],
      },
      {
        userAgent: "Amazonbot",
        allow: "/",
        disallow: ["/demo"],
      },
    ],
    sitemap: "https://nogomedia.se/sitemap.xml",
  };
}
