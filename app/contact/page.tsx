import { OrderForm } from "@/components/order-form";
import { ProductImage } from "@/components/product-image";
import { WhatsAppPeople } from "@/components/whatsapp-links";
import { brand, team } from "@/lib/brand";
import { images } from "@/lib/products";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Order for your cafe",
  description: `Order Satvik Way tempeh cubes for your Rishikesh cafe. WhatsApp Supply Lead ${team.supply.display}.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="bg-cream px-4 py-12 md:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
        <div>
          <p className="sub-title">WhatsApp order</p>
          <h1 className="font-display mt-2 text-5xl font-semibold uppercase">Cafe order</h1>
          <p className="mt-4 max-w-md leading-8 text-muted">
            We are not a cafe. We supply tempeh cubes in Rishikesh. This form opens
            WhatsApp to the Supply Lead.
          </p>
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
    </div>
  );
}
