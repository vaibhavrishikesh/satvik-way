export type Product = {
  slug: string;
  name: string;
  category: "Tempeh" | "Cafe lot";
  price: string;
  weight: string;
  origin: string;
  blurb: string;
  story: string;
  image: string;
  featured?: boolean;
};

const soyPack = "/products/soy-1.jpg";
const cafePack = "/products/cafe-1.jpg";

export const products: Product[] = [
  {
    slug: "classic-soy-tempeh",
    name: "Soy Tempeh Cubes",
    category: "Tempeh",
    price: "₹280",
    weight: "200 g",
    origin: "Whole soybean, 48-hour ferment",
    blurb: "Vacuum-packed raw cubes for Rishikesh cafe grills. Slice, sear, or crumble.",
    story:
      "Whole soybeans are hulled, cooked, and cultured for two days, then cut into cubes and vacuum packed. We sell them raw to Rishikesh cafes — you marinate and cook. A clean plant protein for bowls, wraps, and thalis.",
    image: soyPack,
    featured: true,
  },
  {
    slug: "cafe-tempeh-lot",
    name: "Cafe Lot Tempeh Cubes",
    category: "Cafe lot",
    price: "Ask on WhatsApp",
    weight: "Weekly case",
    origin: "Same cube, cafe quantity",
    blurb: "The pack kitchens order for the week. Rate and drop time on WhatsApp.",
    story:
      "Same raw soy tempeh cubes, packed for cafe volume. Tapovan to Ram Jhula drops. Tell us how many packs you need this week — Supply Lead replies with rate and a time.",
    image: cafePack,
    featured: true,
  },
];

export const categories = ["All", "Tempeh", "Cafe lot"] as const;

export function getProduct(slug: string) {
  return products.find((item) => item.slug === slug);
}

export const packShots = [
  { src: "/products/soy-1.jpg", alt: "Satvik Way soy tempeh pack — angle 1" },
  { src: "/products/soy-2.jpg", alt: "Satvik Way soy tempeh pack — angle 2" },
  { src: "/products/soy-3.jpg", alt: "Satvik Way soy tempeh pack — angle 3" },
] as const;

export const images = {
  hero: "/products/soy-1.jpg",
  hero2: "/products/soy-2.jpg",
  hero3: "/products/soy-3.jpg",
  craft: cafePack,
  table: "/products/promo-3-studio.jpg",
  pour: "/products/tempeh-zip-bag.jpg",
  journal: "/products/promo-2-studio.jpg",
  cooked: "/products/promo-1-wood.jpg",
  cookedSquare: "/products/promo-1-wood-square.jpg",
  zip: "/products/tempeh-zip-bag.jpg",
  promo1: "/products/promo-1-wood.jpg",
  promo2: "/products/promo-2-studio.jpg",
  promo3: "/products/promo-3-studio.jpg",
  trio: soyPack,
};

export const promos = [
  { src: "/products/promo-1-wood.jpg", alt: "Cooked Satvik Way tempeh on wood plate" },
  { src: "/products/promo-2-studio.jpg", alt: "Raw Satvik Way tempeh slab, studio" },
  { src: "/products/promo-3-studio.jpg", alt: "Vacuum-packed Satvik Way tempeh slab, studio" },
] as const;

export const gallery = [
  ...packShots,
  { src: "/products/cafe-1.jpg", alt: "Cafe-lot Satvik Way tempeh cubes" },
  { src: "/products/tempeh-zip-bag.jpg", alt: "Fresh Satvik Way tempeh in a zip bag" },
  ...promos,
];
