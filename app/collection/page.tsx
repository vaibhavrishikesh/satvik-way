import Link from "next/link";
import { CollectionGrid } from "@/components/collection-grid";
import { InternalLinks } from "@/components/internal-links";
import { JsonLd } from "@/components/json-ld";
import { categories, products } from "@/lib/products";
import { breadcrumbJsonLd, pageMeta, productListJsonLd } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Shop tempeh cubes",
  description:
    "Shop Satvik Way tempeh cubes for Rishikesh cafes — vacuum-packed soy cubes and weekly cafe lots. Order on WhatsApp.",
  path: "/collection",
});

export default async function CollectionPage({
  searchParams,
}: {
  searchParams: Promise<{ cat?: string }>;
}) {
  const { cat } = await searchParams;
  const initial = categories.includes(cat as (typeof categories)[number])
    ? (cat as (typeof categories)[number])
    : "All";

  return (
    <div className="bg-cream px-4 py-12 md:px-8">
      <JsonLd data={productListJsonLd(products)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Shop", path: "/collection" },
        ])}
      />
      <div className="mx-auto max-w-7xl">
        <nav aria-label="Breadcrumb" className="mb-4 text-xs text-muted">
          <Link href="/" className="hover:text-espresso">
            Home
          </Link>
          {" / "}
          <span className="text-espresso">Shop</span>
        </nav>
        <p className="sub-title">Satvik Way shop</p>
        <h1 className="font-display mt-2 text-5xl font-semibold uppercase">Tempeh for cafes</h1>
        <p className="mt-3 max-w-xl text-muted">
          Every pack photo is branded Satvik Way. Unit prices below — WhatsApp for cafe cases. Read{" "}
          <Link href="/tempeh" className="font-semibold text-espresso underline-offset-2 hover:underline">
            why tempeh works
          </Link>{" "}
          or{" "}
          <Link href="/contact" className="font-semibold text-espresso underline-offset-2 hover:underline">
            order this week
          </Link>
          .
        </p>
        <div className="mt-10">
          <CollectionGrid key={initial} products={products} initial={initial} />
        </div>
        <InternalLinks compact exclude={["/collection"]} title="Keep exploring" />
      </div>
    </div>
  );
}
