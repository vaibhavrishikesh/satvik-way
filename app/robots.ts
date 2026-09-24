import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";

/** Allow search + AI/LLM crawlers; point to sitemap, RSS, and llms.txt */
export default function robots(): MetadataRoute.Robots {
  const allowAll = {
    allow: "/",
  };

  return {
    rules: [
      {
        userAgent: "*",
        ...allowAll,
      },
      // Generative / answer-engine crawlers
      { userAgent: "GPTBot", ...allowAll },
      { userAgent: "ChatGPT-User", ...allowAll },
      { userAgent: "Google-Extended", ...allowAll },
      { userAgent: "GoogleOther", ...allowAll },
      { userAgent: "anthropic-ai", ...allowAll },
      { userAgent: "ClaudeBot", ...allowAll },
      { userAgent: "Claude-Web", ...allowAll },
      { userAgent: "PerplexityBot", ...allowAll },
      { userAgent: "Applebot-Extended", ...allowAll },
      { userAgent: "Bytespider", ...allowAll },
      { userAgent: "CCBot", ...allowAll },
      { userAgent: "cohere-ai", ...allowAll },
      { userAgent: "meta-externalagent", ...allowAll },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
