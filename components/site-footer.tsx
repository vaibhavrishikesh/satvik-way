import Link from "next/link";
import { WhatsAppPeople } from "@/components/whatsapp-links";
import { brand, nav } from "@/lib/brand";

export function SiteFooter() {
  return (
    <footer className="bg-espresso text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4 md:px-8">
        <div className="md:col-span-2">
          <p className="font-display text-3xl font-semibold uppercase">{brand.name}</p>
          <p className="mt-3 max-w-sm text-sm leading-7 text-white/70">
            Fresh tempeh cubes for Rishikesh cafes. We do not run a cafe — we supply raw packs to
            kitchens from Tapovan to Ram Jhula.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <p className="mb-1 font-semibold uppercase tracking-wide">Explore</p>
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-white/70 hover:text-white">
              {item.label}
            </Link>
          ))}
        </div>
        <WhatsAppPeople />
      </div>
      <p className="border-t border-white/10 px-4 py-5 text-center text-xs text-white/50">
        © {new Date().getFullYear()} {brand.name} · Cafe supplier, Rishikesh
      </p>
    </footer>
  );
}
