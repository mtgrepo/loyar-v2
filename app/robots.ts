import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/payment",
          "/payment-success",
          "/kbz-pwa",
          "/test",
          "/driver/",
          "/user/",
          "/home",
        ],
      },
      // Explicitly allow AI search / LLM crawlers (ChatGPT, Claude, Perplexity, Google AI)
      {
        userAgent: ["GPTBot", "ChatGPT-User", "ClaudeBot", "PerplexityBot", "Google-Extended"],
        allow: ["/", "/llms.txt", "/about", "/services"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
