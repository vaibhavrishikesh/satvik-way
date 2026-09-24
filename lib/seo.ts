import type { Metadata } from "next";
import { brand, team } from "@/lib/brand";
import type { Product } from "@/lib/products";
import { products } from "@/lib/products";
import { tempehGuide } from "@/lib/tempeh-guide";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://satvik-way.vercel.app";

export const siteDescription =
  "Satvik Way supplies fresh vacuum-packed soy tempeh cubes to cafes in Rishikesh. Wholesale cafe lots, WhatsApp ordering, and weekly drops from Tapovan to Laxman Jhula and Ram Jhula.";

export const defaultOgImage = "/products/soy-1.jpg";

export const siteKeywords = [
  "Satvik Way",
  "tempeh Rishikesh",
  "tempeh cubes Rishikesh",
  "buy tempeh Rishikesh",
  "buy tempeh in Rishikesh",
  "buy tempeh in Dehradun",
  "buy tempeh in Haridwar",
  "buy tempeh in Uttarakhand",
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
  "tempeh nutrition",
  "fermented soy protein India",
  "vegetarian cafe supplier Rishikesh",
  "Gucchi mushroom",
  "Gucci mushroom",
  "Gucchi mushroom Uttarakhand",
  "buy Gucchi mushroom",
] as const;

/** Shared FAQs — used in UI schema + RSS + llms.txt */
export const siteFaqs = [
  {
    q: "What is Satvik Way?",
    a: "Satvik Way is a Rishikesh cafe supplier of vacuum-packed raw soy tempeh cubes. We do not run a cafe — we ferment, cube, pack, and drop weekly to kitchens from Tapovan to Ram Jhula.",
  },
  {
    q: "What is tempeh?",
    a: "Tempeh is a fermented bean cake. Satvik Way sells vacuum-packed soy cubes, raw, to Rishikesh cafes. Nutty, firm, and high in protein — about 20 g protein per 100 g.",
  },
  {
    q: "How do cafes cook Satvik Way tempeh?",
    a: "It arrives raw. Slice or cube, marinate if you like, then sauté 5–7 minutes, bake, steam, or crumble into a masala, bowl, wrap, or thali.",
  },
  {
    q: "How do I order tempeh in Rishikesh?",
    a: `Use the order form at ${siteUrl}/contact or WhatsApp Supply Lead ${team.supply.display}. Share cafe name, area, and quantity. We drop weekly in Rishikesh.`,
  },
  {
    q: "Do you deliver to Tapovan, Laxman Jhula, and Ram Jhula?",
    a: "Yes. Satvik Way drops vacuum-packed tempeh packs weekly across Tapovan, Laxman Jhula, and Ram Jhula cafe areas.",
  },
  {
    q: "What products does Satvik Way sell?",
    a: "Two SKUs: Soy Tempeh Cubes (200 g packs) and Cafe Lot Tempeh Cubes (weekly case rates on WhatsApp).",
  },
] as const;

export const internalNav = [
  { href: "/", label: "Home", description: "Satvik Way Rishikesh tempeh cafe supply" },
  { href: "/collection", label: "Shop tempeh", description: "All tempeh products for cafes" },
  { href: "/collection/classic-soy-tempeh", label: "Soy Tempeh Cubes", description: "200 g vacuum-packed soy cubes" },
  { href: "/collection/cafe-tempeh-lot", label: "Cafe Lot", description: "Weekly case tempeh for kitchens" },
  { href: "/tempeh", label: "Why tempeh", description: "Nutrition, taste, and cooking guide" },
  {
    href: "/guide/tempeh-rishikesh",
    label: "Tempeh Rishikesh guide",
    description: "2,000-word cafe wholesale pillar",
  },
  {
    href: "/buy-tempeh/rishikesh",
    label: "Buy tempeh in Rishikesh",
    description: "Rishikesh cafe wholesale landing",
  },
  {
    href: "/buy-tempeh/dehradun",
    label: "Buy tempeh in Dehradun",
    description: "Dehradun cafe tempeh supply",
  },
  {
    href: "/buy-tempeh/haridwar",
    label: "Buy tempeh in Haridwar",
    description: "Haridwar vegetarian cafe supply",
  },
  {
    href: "/buy-tempeh/uttarakhand",
    label: "Buy tempeh in Uttarakhand",
    description: "State-wide cafe tempeh wholesale",
  },
  {
    href: "/gucchi-mushroom",
    label: "Gucchi mushroom",
    description: "Seasonal Gucci / morel for cafes",
  },
  { href: "/story", label: "About Satvik Way", description: "Rishikesh supplier story" },
  { href: "/contact", label: "Order on WhatsApp", description: "Cafe order form and contacts" },
  { href: "/feed.xml", label: "RSS feed", description: "Product and guide updates" },
] as const;

export function pageUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}

export function absoluteImage(path: string) {
  return pageUrl(path.startsWith("/") ? path : `/${path}`);
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
    authors: [{ name: brand.name, url: siteUrl }],
    creator: brand.name,
    publisher: brand.name,
    category: "food",
    alternates: {
      canonical: url,
      types: {
        "application/rss+xml": pageUrl("/feed.xml"),
      },
    },
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
    other: {
      "geo.region": "IN-UK",
      "geo.placename": "Rishikesh",
      "geo.position": "30.0869;78.2676",
      ICBM: "30.0869, 78.2676",
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
    logo: {
      "@type": "ImageObject",
      url: pageUrl("/apple-icon"),
    },
    image: absoluteImage(defaultOgImage),
    telephone: [team.supply.display, team.coordinator.display],
    description: siteDescription,
    slogan: brand.tagline,
    foundingLocation: {
      "@type": "Place",
      name: "Rishikesh, Uttarakhand, India",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Rishikesh",
        addressRegion: "Uttarakhand",
        addressCountry: "IN",
      },
    },
    areaServed: [
      { "@type": "City", name: "Rishikesh" },
      { "@type": "AdministrativeArea", name: "Uttarakhand" },
      { "@type": "Country", name: "India" },
    ],
    brand: { "@type": "Brand", "@id": `${siteUrl}/#brand`, name: brand.name, slogan: brand.tagline },
    knowsAbout: [
      "tempeh",
      "soy tempeh cubes",
      "cafe wholesale food supply",
      "Rishikesh food service",
      "plant-based protein",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        telephone: team.supply.display,
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
        contactOption: "TollFree",
      },
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        telephone: team.coordinator.display,
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
      },
    ],
    sameAs: ["https://github.com/vaibhavrishikesh/satvik-way", "https://satvik-way.vercel.app"],
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "FoodEstablishment", "Store"],
    "@id": `${siteUrl}/#localbusiness`,
    name: brand.name,
    description: siteDescription,
    url: siteUrl,
    image: [absoluteImage(defaultOgImage), absoluteImage("/products/soy-2.jpg"), absoluteImage("/products/promo-1-wood.jpg")],
    telephone: team.supply.display,
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, UPI, Bank Transfer",
    servesCuisine: ["Tempeh", "Plant-based", "Vegetarian"],
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
    hasMap: "https://www.google.com/maps/search/?api=1&query=Rishikesh+Uttarakhand",
    areaServed: [
      { "@type": "Place", name: "Tapovan, Rishikesh" },
      { "@type": "Place", name: "Laxman Jhula, Rishikesh" },
      { "@type": "Place", name: "Ram Jhula, Rishikesh" },
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "19:00",
    },
    parentOrganization: { "@id": `${siteUrl}/#organization` },
    makesOffer: products.map((product) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Product",
        name: product.name,
        url: pageUrl(`/collection/${product.slug}`),
      },
      url: pageUrl(`/collection/${product.slug}`),
    })),
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
    inLanguage: ["en-IN", "hi-IN"],
    publisher: { "@id": `${siteUrl}/#organization` },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", ".sub-title", "#faq"],
    },
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
    shippingDetails: {
      "@type": "OfferShippingDetails",
      shippingDestination: {
        "@type": "DefinedRegion",
        addressCountry: "IN",
        addressRegion: ["UK"],
      },
      deliveryTime: {
        "@type": "ShippingDeliveryTime",
        handlingTime: {
          "@type": "QuantitativeValue",
          minValue: 0,
          maxValue: 2,
          unitCode: "DAY",
        },
      },
    },
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
    "@id": `${pageUrl(`/collection/${product.slug}`)}#product`,
    name: product.name,
    description: product.story,
    image: [absoluteImage(product.image)],
    sku: product.slug,
    mpn: product.slug,
    brand: { "@type": "Brand", name: brand.name },
    category: `Food › Tempeh › ${product.category}`,
    material: "Soybean",
    additionalProperty: [
      { "@type": "PropertyValue", name: "Weight", value: product.weight },
      { "@type": "PropertyValue", name: "Origin", value: product.origin },
      { "@type": "PropertyValue", name: "Form", value: "Vacuum-packed raw cubes" },
    ],
    nutrition: {
      "@type": "NutritionInformation",
      calories: "195 calories",
      proteinContent: "20 g",
      carbohydrateContent: "8 g",
      fatContent: "11 g",
      sodiumContent: "14 mg",
      servingSize: "100 g",
    },
    offers,
    isRelatedTo: [
      { "@type": "WebPage", name: "Why tempeh", url: pageUrl("/tempeh") },
      { "@type": "WebPage", name: "Order", url: pageUrl("/contact") },
    ],
  };
}

export function productListJsonLd(items: Product[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${siteUrl}/collection#itemlist`,
    name: `${brand.name} tempeh products`,
    description: "Vacuum-packed soy tempeh cubes and cafe lots for Rishikesh kitchens.",
    numberOfItems: items.length,
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    itemListElement: items.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: pageUrl(`/collection/${product.slug}`),
      name: product.name,
      image: absoluteImage(product.image),
      item: { "@id": `${pageUrl(`/collection/${product.slug}`)}#product` },
    })),
  };
}

export function faqJsonLd(faqs = siteFaqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${siteUrl}/#faq`,
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function howToCookJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": `${siteUrl}/tempeh#howto`,
    name: "How to cook Satvik Way tempeh cubes",
    description: "Simple cafe method for vacuum-packed raw soy tempeh cubes from Satvik Way, Rishikesh.",
    totalTime: "PT15M",
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "INR",
      value: "280",
    },
    supply: [
      { "@type": "HowToSupply", name: "Satvik Way soy tempeh cubes" },
      { "@type": "HowToSupply", name: "Oil or marinade" },
    ],
    tool: [{ "@type": "HowToTool", name: "Skillet or grill" }],
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Open the pack",
        text: "Open the vacuum pack of Satvik Way soy tempeh cubes.",
        url: pageUrl("/tempeh"),
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Slice or keep cubed",
        text: "Slice, halve, or keep cubes whole depending on the plate.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Marinate (optional)",
        text: "Marinate for deeper flavour if the menu needs it.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Cook 5–7 minutes",
        text: "Sauté, bake, steam, or crumble into masala for 5–7 minutes until hot and lightly browned.",
      },
    ],
    about: { "@type": "Thing", name: "Tempeh" },
  };
}

export function serviceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteUrl}/#service`,
    name: "Rishikesh cafe tempeh supply",
    serviceType: "Wholesale food supply",
    provider: { "@id": `${siteUrl}/#organization` },
    areaServed: ["Rishikesh", "Tapovan", "Laxman Jhula", "Ram Jhula"],
    description:
      "Weekly vacuum-packed soy tempeh cube drops for cafes and kitchens in Rishikesh, ordered on WhatsApp.",
    url: pageUrl("/contact"),
    offers: {
      "@type": "Offer",
      url: pageUrl("/contact"),
      availability: "https://schema.org/InStock",
    },
  };
}

export function articleGuideJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${siteUrl}/tempeh#article`,
    headline: "Why tempeh works for Rishikesh cafes",
    description: tempehGuide.intro,
    author: { "@id": `${siteUrl}/#organization` },
    publisher: { "@id": `${siteUrl}/#organization` },
    mainEntityOfPage: pageUrl("/tempeh"),
    image: absoluteImage(defaultOgImage),
    about: ["tempeh", "soy protein", "cafe menus", "Rishikesh"],
    keywords: siteKeywords.join(", "),
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "article p"],
    },
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

/** Graph for homepage — org/website live in root layout to avoid duplicates */
export function homeGraphJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      localBusinessJsonLd(),
      serviceJsonLd(),
      productListJsonLd(products),
      faqJsonLd(),
      breadcrumbJsonLd([{ name: "Home", path: "/" }]),
    ].map(({ ["@context"]: _c, ...rest }) => rest),
  };
}
