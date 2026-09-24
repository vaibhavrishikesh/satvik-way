import type { MetadataRoute } from "next";
import { products } from "@/lib/products";
import { siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages: MetadataRoute.Sitemap = [
    { url: siteUrl, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/collection`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteUrl}/tempeh`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/story`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/contact`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
  ];

  const productPages = products.map((product) => ({
    url: `${siteUrl}/collection/${product.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...pages, ...productPages];
}
