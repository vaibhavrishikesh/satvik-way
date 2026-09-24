import Link from "next/link";
import { InternalLinks } from "@/components/internal-links";
import { JsonLd } from "@/components/json-ld";
import { OrderForm } from "@/components/order-form";
import { ProductImage } from "@/components/product-image";
import { WhatsAppPeople } from "@/components/whatsapp-links";
import { brand, team } from "@/lib/brand";
import { images, products } from "@/lib/products";
import { breadcrumbJsonLd, pageMeta, pageUrl, serviceJsonLd } from "@/lib/seo";

const contactDescription = `Order Satvik Way tempeh cubes for your Rishikesh cafe. WhatsApp Supply Lead ${team.supply.display}. Weekly drops Tapovan to Ram Jhula.`;

export const metadata = pageMeta({
  title: "Order for your cafe",
  description: contactDescription,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="bg-cream px-4 py-12 md:px-8">
      <JsonLd data={serviceJsonLd()} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Order", path: "/contact" },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Order Satvik Way tempeh",
          description: contactDescription,
          url: pageUrl("/contact"),
        }}
      />
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
        <div>
          <nav aria-label="Breadcrumb" className="mb-4 text-xs text-muted">
            <Link href="/" className="hover:text-espresso">
              Home
            </Link>
            {" / "}
            <span className="text-espresso">Order</span>
          </nav>
          <p className="sub-title">WhatsApp order</p>
          <h1 className="font-display mt-2 text-4xl font-semibold uppercase sm:text-5xl">Cafe order</h1>
          <p className="mt-4 max-w-md leading-8 text-muted">
            We are not a cafe. We supply{" "}
            <Link href="/collection" className="font-semibold text-espresso underline-offset-2 hover:underline">
              tempeh cubes
            </Link>{" "}
            in Rishikesh. This form opens WhatsApp to the Supply Lead. New to tempeh? Read{" "}
            <Link href="/tempeh" className="font-semibold text-espresso underline-offset-2 hover:underline">
              why it works on cafe menus
            </Link>
            .
          </p>
          <ul className="mt-4 space-y-1 text-sm text-muted">
            {products.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/collection/${p.slug}`}
                  className="font-semibold text-espresso underline-offset-2 hover:underline"
                >
                  {p.name}
                </Link>
                {" — "}
                {p.price}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <WhatsAppPeople light />
          </div>
          <p className="mt-8 text-sm text-muted">{brand.location}</p>
          <div className="relative mt-8 aspect-[4/5] overflow-hidden bg-white">
            <ProductImage src={images.promo3} alt="Satvik Way raw tempeh pack" sizes="50vw" />
          </div>
        </div>
        <OrderForm />
      </div>
      <div className="mx-auto mt-16 max-w-6xl">
        <InternalLinks compact exclude={["/contact"]} title="Before you order" />
      </div>
    </div>
  );
}
