import type { Metadata } from "next";
import { brand, team } from "@/lib/brand";
import type { Product } from "@/lib/products";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://www.satvikway.com";

export const siteDescription =
  "Satvik Way supplies vacuum-packed tempeh cubes to cafes in Rishikesh. Order online, confirm on WhatsApp. Weekly drops from Tapovan to Ram Jhula.";

export const defaultOgImage = "/products/soy-1.jpg";

export function pageUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}

export function pageMeta({
  title,
  description,
  path,
  image,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  const url = pageUrl(path);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: `${title} · ${brand.name}`,
      description,
      siteName: brand.name,
      locale: "en_IN",
      images: [{ url: image || defaultOgImage, width: 1400, height: 900, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} · ${brand.name}`,
      description,
      images: [image || defaultOgImage],
    },
  };
}

export function priceNumber(price: string) {
  return Number(price.replace(/[^\d]/g, ""));
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: brand.name,
    url: siteUrl,
    logo: pageUrl("/apple-icon"),
    image: pageUrl(defaultOgImage),
    telephone: [team.supply.display, team.coordinator.display],
    description: siteDescription,
    areaServed: { "@type": "City", name: "Rishikesh" },
    brand: { "@type": "Brand", name: brand.name },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: brand.name,
    url: siteUrl,
    description: siteDescription,
    inLanguage: "en-IN",
    publisher: { "@type": "Organization", name: brand.name },
  };
}

export function productJsonLd(product: Product) {
  const price = priceNumber(product.price);
  const offers: Record<string, unknown> = {
    "@type": "Offer",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    url: pageUrl(`/collection/${product.slug}`),
  };
  if (Number.isFinite(price) && price > 0) {
    offers.price = price;
  }

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.story,
    image: pageUrl(product.image),
    brand: { "@type": "Brand", name: brand.name },
    category: `Tempeh · ${product.category}`,
    offers,
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: pageUrl(item.path),
    })),
  };
}
