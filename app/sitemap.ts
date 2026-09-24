import type { MetadataRoute } from "next";
import { products } from "@/lib/products";
import { tempehLocations } from "@/lib/seo-locations";
import { absoluteImage, siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
      images: [
        absoluteImage("/products/soy-1.jpg"),
        absoluteImage("/products/soy-2.jpg"),
        absoluteImage("/products/promo-1-wood.jpg"),
      ],
    },
    {
      url: `${siteUrl}/collection`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${siteUrl}/tempeh`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
      images: [absoluteImage("/products/promo-1-wood.jpg")],
    },
    {
      url: `${siteUrl}/guide/tempeh-rishikesh`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
      images: [
        absoluteImage("/products/promo-1-wood.jpg"),
        absoluteImage("/products/promo-2-studio.jpg"),
      ],
    },
    {
      url: `${siteUrl}/gucchi-mushroom`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/story`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/feed.xml`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.4,
    },
    {
      url: `${siteUrl}/llms.txt`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  const locationPages: MetadataRoute.Sitemap = tempehLocations.map((loc) => ({
    url: `${siteUrl}${loc.path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.92,
    images: [absoluteImage("/products/promo-1-wood.jpg")],
  }));

  const productPages: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${siteUrl}/collection/${product.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.85,
    images: [absoluteImage(product.image)],
  }));

  return [...pages, ...locationPages, ...productPages];
}
