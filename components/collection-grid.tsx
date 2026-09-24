"use client";

import { useState } from "react";
import { ProductCard } from "@/components/product-card";
import { categories, type Product } from "@/lib/products";

export function CollectionGrid({
  products,
  initial = "All",
}: {
  products: Product[];
  initial?: (typeof categories)[number];
}) {
  const [active, setActive] = useState<(typeof categories)[number]>(initial);
  const visible =
    active === "All" ? products : products.filter((item) => item.category === active);

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            className={`rounded-full px-4 py-2 text-sm ${
              active === category ? "bg-espresso text-white" : "bg-cream text-ink"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  );
}
