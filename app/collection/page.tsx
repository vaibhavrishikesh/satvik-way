import { CollectionGrid } from "@/components/collection-grid";
import { categories, products } from "@/lib/products";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Shop tempeh cubes",
  description:
    "Shop Satvik Way tempeh cubes for Rishikesh cafes — vacuum-packed soy cubes and weekly cafe lots.",
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
      <div className="mx-auto max-w-7xl">
        <p className="sub-title">Satvik Way shop</p>
        <h1 className="font-display mt-2 text-5xl font-semibold uppercase">Tempeh for cafes</h1>
        <p className="mt-3 max-w-xl text-muted">
          Every pack photo is branded Satvik Way. Unit prices below — WhatsApp for cafe cases.
        </p>
        <div className="mt-10">
          <CollectionGrid key={initial} products={products} initial={initial} />
        </div>
      </div>
    </div>
  );
}
