import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { ProductCard } from "@/components/product-card";
import { ProductImage } from "@/components/product-image";
import { TempehGuide } from "@/components/tempeh-guide";
import { brand } from "@/lib/brand";
import { getProduct, products } from "@/lib/products";
import { breadcrumbJsonLd, pageMeta, pageUrl, productJsonLd } from "@/lib/seo";
import { productOrderMessage, supplyWa } from "@/lib/whatsapp";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Tempeh" };
  return {
    ...pageMeta({
      title: product.name,
      description: `${product.blurb} ${product.origin}. ${product.weight} from ${brand.name}, Rishikesh.`,
      path: `/collection/${product.slug}`,
      image: product.image,
    }),
    openGraph: {
      type: "website",
      url: pageUrl(`/collection/${product.slug}`),
      title: `${product.name} · ${brand.name}`,
      description: product.blurb,
      images: [{ url: product.image, alt: `${product.name} — Satvik Way` }],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const others = products.filter((item) => item.slug !== product.slug);

  return (
    <div className="bg-cream px-4 py-12 md:px-8">
      <JsonLd data={productJsonLd(product)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Shop", path: "/collection" },
          { name: product.name, path: `/collection/${product.slug}` },
        ])}
      />
      <div className="mx-auto grid max-w-7xl items-start gap-10 md:grid-cols-2">
        <div className="relative aspect-square overflow-hidden bg-cream">
          <ProductImage src={product.image} alt={product.name} priority sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
        </div>
        <div className="md:pt-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-gold">{product.category}</p>
          <h1 className="font-display mt-2 text-4xl font-semibold uppercase md:text-5xl">{product.name}</h1>
          <p className="mt-4 text-muted">{product.origin}</p>
          <p className="mt-8 text-3xl text-clay">{product.price}</p>
          <p className="mt-1 text-sm text-muted">{product.weight}</p>
          <p className="mt-6 max-w-md leading-8 text-muted">{product.story}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={supplyWa(productOrderMessage(product.name))}
              target="_blank"
              rel="noopener noreferrer"
              className="theme-btn"
            >
              Order on WhatsApp
            </a>
            <Link href="/contact" className="theme-btn-two">
              Full order form
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-20 max-w-7xl border-t border-parchment pt-16">
        <TempehGuide compact />
        <Link href="/tempeh" className="mt-6 inline-block text-sm font-semibold uppercase text-clay">
          Full tempeh guide
        </Link>
      </div>

      {others.length ? (
        <div className="mx-auto mt-20 max-w-7xl">
          <h2 className="font-display text-3xl font-semibold uppercase">Also for cafes</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {others.map((item) => (
              <ProductCard key={item.slug} product={item} />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
