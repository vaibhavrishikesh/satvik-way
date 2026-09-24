import Link from "next/link";
import { WhatsAppPeople } from "@/components/whatsapp-links";
import { brand, nav, shopLinks } from "@/lib/brand";
import { products } from "@/lib/products";

const areas = [
  { href: "/contact", label: "Tapovan drops" },
  { href: "/contact", label: "Laxman Jhula" },
  { href: "/contact", label: "Ram Jhula" },
];

const guides = [
  { href: "/tempeh", label: "Why tempeh" },
  { href: "/guide/tempeh-rishikesh", label: "Tempeh Rishikesh guide" },
  { href: "/buy-tempeh/rishikesh", label: "Buy tempeh Rishikesh" },
  { href: "/buy-tempeh/dehradun", label: "Buy tempeh Dehradun" },
  { href: "/buy-tempeh/haridwar", label: "Buy tempeh Haridwar" },
  { href: "/buy-tempeh/uttarakhand", label: "Buy tempeh Uttarakhand" },
  { href: "/gucchi-mushroom", label: "Gucchi mushroom" },
  { href: "/story", label: "About Satvik Way" },
  { href: "/feed.xml", label: "RSS feed" },
  { href: "/llms.txt", label: "llms.txt" },
];

export function SiteFooter() {
  return (
    <footer className="bg-espresso text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 md:grid-cols-5 md:px-8">
        <div className="sm:col-span-2">
          <p className="font-display text-3xl font-semibold uppercase">{brand.name}</p>
          <p className="mt-3 max-w-sm text-sm leading-7 text-white/70">
            Fresh tempeh cubes for Rishikesh cafes. We do not run a cafe — we supply raw packs to
            kitchens from Tapovan to Ram Jhula.
          </p>
          <p className="mt-4 text-xs text-white/50">
            <Link href="/sitemap.xml" className="hover:text-white">
              Sitemap
            </Link>
            {" · "}
            <Link href="/robots.txt" className="hover:text-white">
              Robots
            </Link>
            {" · "}
            <Link href="/feed.xml" className="hover:text-white">
              RSS
            </Link>
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <p className="mb-1 font-semibold uppercase tracking-wide">Explore</p>
          <Link href="/" className="text-white/70 hover:text-white">
            Home
          </Link>
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-white/70 hover:text-white">
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <p className="mb-1 font-semibold uppercase tracking-wide">Products</p>
          {shopLinks.map((item) => (
            <Link key={item.href} href={item.href} className="text-white/70 hover:text-white">
              {item.label}
            </Link>
          ))}
          {products.map((product) => (
            <Link
              key={product.slug}
              href={`/collection/${product.slug}`}
              className="text-white/70 hover:text-white"
            >
              {product.name}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <p className="mb-1 font-semibold uppercase tracking-wide">Guides & areas</p>
          {guides.map((item) => (
            <Link key={item.href + item.label} href={item.href} className="text-white/70 hover:text-white">
              {item.label}
            </Link>
          ))}
          {areas.map((item) => (
            <Link key={item.label} href={item.href} className="text-white/70 hover:text-white">
              {item.label}
            </Link>
          ))}
          <div className="mt-4">
            <WhatsAppPeople />
          </div>
        </div>
      </div>
      <p className="border-t border-white/10 px-4 py-5 text-center text-xs text-white/50">
        © {new Date().getFullYear()} {brand.name} · Cafe supplier, Rishikesh · Tempeh wholesale Uttarakhand
      </p>
    </footer>
  );
}
