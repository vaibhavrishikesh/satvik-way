import Link from "next/link";
import { ProductImage } from "@/components/product-image";
import type { Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product; large?: boolean }) {
  return (
    <article className="bg-white text-center shadow-sm">
      <Link href={`/collection/${product.slug}`} className="block">
        <div className="relative aspect-square bg-cream">
          <ProductImage
            src={product.image}
            alt={product.name}
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-gold">{product.category}</p>
          <h3 className="font-display mt-1 text-xl font-semibold">{product.name}</h3>
          <p className="mt-1 text-clay">{product.price}</p>
          <p className="mt-2 text-sm text-muted">
            {product.weight} · {product.blurb}
          </p>
          <span className="mt-4 inline-block text-xs font-semibold uppercase tracking-wide text-clay">
            Order for cafe →
          </span>
        </div>
      </Link>
    </article>
  );
}
