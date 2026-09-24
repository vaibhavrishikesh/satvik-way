import Link from "next/link";
import { products } from "@/lib/products";
import { internalNav } from "@/lib/seo";

type Props = {
  title?: string;
  exclude?: string[];
  compact?: boolean;
};

/** Dense internal linking block for SEO + LLM citation paths */
export function InternalLinks({
  title = "Explore Satvik Way",
  exclude = [],
  compact = false,
}: Props) {
  const productLinks = products.map((p) => ({
    href: `/collection/${p.slug}`,
    label: p.name,
    description: p.blurb,
  }));

  const areaLinks = [
    { href: "/contact", label: "Tempeh delivery Tapovan", description: "Weekly cafe drops in Tapovan" },
    { href: "/contact", label: "Tempeh Laxman Jhula", description: "Cafe supply near Laxman Jhula" },
    { href: "/contact", label: "Tempeh Ram Jhula", description: "Cafe supply near Ram Jhula" },
  ];

  const links = [
    ...internalNav.filter((item) => !exclude.includes(item.href) && item.href !== "/feed.xml"),
    ...productLinks,
    ...areaLinks,
  ].filter((item, index, arr) => arr.findIndex((x) => x.href === item.href && x.label === item.label) === index);

  return (
    <nav
      aria-label="Related pages"
      className={
        compact
          ? "border-t border-parchment pt-8"
          : "border-t border-parchment bg-ivory px-4 py-12 md:px-8"
      }
    >
      <div className={compact ? "" : "mx-auto max-w-7xl"}>
        <p className="sub-title text-sm">{title}</p>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {links.map((item) => (
            <li key={`${item.href}-${item.label}`}>
              <Link
                href={item.href}
                className="block border border-parchment bg-white p-4 transition hover:border-leaf"
              >
                <span className="font-display text-sm font-semibold uppercase text-espresso">
                  {item.label}
                </span>
                {"description" in item && item.description ? (
                  <span className="mt-1 block text-xs leading-5 text-muted">{item.description}</span>
                ) : null}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
