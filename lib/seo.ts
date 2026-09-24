import type { Metadata } from "next";
import { brand, team } from "@/lib/brand";
import type { Product } from "@/lib/products";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://www.satvikway.com";

export const siteDescription =
  "Satvik Way supplies fresh vacuum-packed soy tempeh cubes to cafes in Rishikesh. Wholesale cafe lots, WhatsApp ordering, and weekly drops from Tapovan to Laxman Jhula and Ram Jhula.";

export const defaultOgImage = "/products/soy-1.jpg";

export const siteKeywords = [
  "Satvik Way",
  "tempeh Rishikesh",
  "tempeh cubes Rishikesh",
  "buy tempeh Rishikesh",
  "Rishikesh cafe supply",
  "tempeh wholesale Uttarakhand",
  "soy tempeh cubes",
  "vacuum packed tempeh India",
  "cafe tempeh supplier",
  "WhatsApp tempeh order",
  "Tapovan cafe food supply",
  "Laxman Jhula tempeh",
  "Ram Jhula cafe supplier",
  "plant protein Rishikesh",
  "raw tempeh for cafes",
] as const;

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
  const img = image || defaultOgImage;
  return {
    title,
    description,
    keywords: [...siteKeywords],
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: `${title} · ${brand.name}`,
      description,
      siteName: brand.name,
      locale: "en_IN",
      images: [{ url: img, width: 1200, height: 1200, alt: `${title} — ${brand.name}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} · ${brand.name}`,
      description,
      images: [img],
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
    "@id": `${siteUrl}/#organization`,
    name: brand.name,
    legalName: brand.name,
    url: siteUrl,
    logo: pageUrl("/apple-icon"),
    image: pageUrl(defaultOgImage),
    telephone: [team.supply.display, team.coordinator.display],
    email: undefined,
    description: siteDescription,
    foundingLocation: { "@type": "Place", name: "Rishikesh, Uttarakhand, India" },
    areaServed: [
      { "@type": "City", name: "Rishikesh" },
      { "@type": "AdministrativeArea", name: "Uttarakhand" },
    ],
    brand: { "@type": "Brand", name: brand.name, slogan: brand.tagline },
    sameAs: [],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        telephone: team.supply.display,
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
      },
    ],
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "FoodEstablishment"],
    "@id": `${siteUrl}/#localbusiness`,
    name: brand.name,
    description: siteDescription,
    url: siteUrl,
    image: pageUrl(defaultOgImage),
    telephone: team.supply.display,
    priceRange: "₹₹",
    servesCuisine: "Tempeh",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Rishikesh",
      addressRegion: "Uttarakhand",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 30.0869,
      longitude: 78.2676,
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: { "@type": "GeoCoordinates", latitude: 30.0869, longitude: 78.2676 },
      geoRadius: "25000",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "19:00",
    },
    parentOrganization: { "@id": `${siteUrl}/#organization` },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: brand.name,
    url: siteUrl,
    description: siteDescription,
    inLanguage: "en-IN",
    publisher: { "@id": `${siteUrl}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}/collection?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function productJsonLd(product: Product) {
  const price = priceNumber(product.price);
  const offers: Record<string, unknown> = {
    "@type": "Offer",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    url: pageUrl(`/collection/${product.slug}`),
    seller: { "@id": `${siteUrl}/#organization` },
    itemCondition: "https://schema.org/NewCondition",
  };
  if (Number.isFinite(price) && price > 0) {
    offers.price = price;
  } else {
    offers.priceSpecification = {
      "@type": "PriceSpecification",
      priceCurrency: "INR",
      description: "Ask on WhatsApp for cafe lot rates",
    };
  }

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.story,
    image: [pageUrl(product.image)],
    sku: product.slug,
    brand: { "@type": "Brand", name: brand.name },
    category: `Food › Tempeh › ${product.category}`,
    material: "Soybean",
    offers,
  };
}

export function productListJsonLd(items: Product[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${brand.name} tempeh products`,
    description: "Vacuum-packed soy tempeh cubes and cafe lots for Rishikesh kitchens.",
    numberOfItems: items.length,
    itemListElement: items.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: pageUrl(`/collection/${product.slug}`),
      name: product.name,
      image: pageUrl(product.image),
    })),
  };
}

export function faqJsonLd() {
  const faqs = [
    {
      q: "What is tempeh?",
      a: "Tempeh is a fermented bean cake. Satvik Way sells vacuum-packed soy cubes, raw, to Rishikesh cafes. Nutty, firm, and high in protein.",
    },
    {
      q: "How do cafes cook Satvik Way tempeh?",
      a: "It arrives raw. Slice or cube, marinate if you like, then sauté 5–7 minutes, bake, steam, or crumble into a masala.",
    },
    {
      q: "How do I order tempeh in Rishikesh?",
      a: "Use the order form or WhatsApp the Supply Lead. Share cafe name, area, and quantity. We drop weekly in Rishikesh.",
    },
    {
      q: "Do you deliver to Tapovan, Laxman Jhula, and Ram Jhula?",
      a: "Yes. Satvik Way drops vacuum-packed tempeh packs weekly across Tapovan, Laxman Jhula, and Ram Jhula cafe areas.",
    },
  ];

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
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
