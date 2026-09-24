export const brand = {
  name: "Satvik Way",
  monogram: "SW",
  tagline: "Fresh tempeh cubes for Rishikesh cafes.",
  location: "Rishikesh · Uttarakhand",
};

export const team = {
  supply: {
    role: "Supply Lead",
    phone: "8534960844",
    display: "+91 85349 60844",
    whatsapp: "918534960844",
  },
  coordinator: {
    role: "Chief Coordinator",
    phone: "9711964456",
    display: "+91 97119 64456",
    whatsapp: "919711964456",
  },
} as const;

export const shopLinks = [
  { href: "/collection", label: "All products" },
  { href: "/collection?cat=Tempeh", label: "Tempeh cubes" },
  { href: "/collection?cat=Cafe lot", label: "Cafe lots" },
  { href: "/gucchi-mushroom", label: "Gucchi mushroom" },
] as const;

export const nav = [
  { href: "/collection", label: "Shop" },
  { href: "/tempeh", label: "Why tempeh" },
  { href: "/buy-tempeh/rishikesh", label: "Buy tempeh" },
  { href: "/gucchi-mushroom", label: "Gucchi" },
  { href: "/story", label: "About" },
  { href: "/contact", label: "Order" },
] as const;
