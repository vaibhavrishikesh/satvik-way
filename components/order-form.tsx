"use client";

import { useState } from "react";
import { products } from "@/lib/products";
import { orderMessage, supplyWa } from "@/lib/whatsapp";

const areas = [
  "Tapovan",
  "Laxman Jhula",
  "Ram Jhula",
  "Swarg Ashram",
  "Badrinath Road",
  "Other Rishikesh",
];

const field = "rounded-xl border border-parchment bg-white px-3 py-3 text-base outline-none";

export function OrderForm() {
  const [items, setItems] = useState<string[]>([]);

  return (
    <form
      className="grid gap-5 rounded-2xl bg-white p-6 shadow-sm"
      onSubmit={(event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const href = supplyWa(
          orderMessage({
            cafe: String(data.get("cafe") || ""),
            person: String(data.get("person") || ""),
            phone: String(data.get("phone") || ""),
            area: String(data.get("area") || ""),
            items: items.join(", "),
            note: String(data.get("note") || ""),
          }),
        );
        window.open(href, "_blank", "noopener,noreferrer");
      }}
    >
      <label className="grid gap-2 text-sm">
        Cafe / kitchen name
        <input required name="cafe" className={field} placeholder="Your cafe in Rishikesh" />
      </label>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm">
          Your name
          <input required name="person" className={field} />
        </label>
        <label className="grid gap-2 text-sm">
          Phone
          <input required name="phone" type="tel" className={field} placeholder="WhatsApp number" />
        </label>
      </div>
      <label className="grid gap-2 text-sm">
        Area
        <select name="area" required className={field}>
          {areas.map((area) => (
            <option key={area} value={area}>
              {area}
            </option>
          ))}
        </select>
      </label>
      <fieldset>
        <legend className="text-sm">Raw products</legend>
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          {products.map((product) => (
            <label key={product.slug} className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                className="accent-gold"
                checked={items.includes(product.name)}
                onChange={() =>
                  setItems((current) =>
                    current.includes(product.name)
                      ? current.filter((name) => name !== product.name)
                      : [...current, product.name],
                  )
                }
              />
              {product.name}
            </label>
          ))}
        </div>
      </fieldset>
      <label className="grid gap-2 text-sm">
        Quantity / note
        <textarea
          name="note"
          rows={3}
          className={field}
          placeholder="e.g. 10 soy cubes, 2 cafe lots, weekly drop"
        />
      </label>
      <button type="submit" className="rounded-full bg-gold px-6 py-3 text-sm text-white">
        Send order on WhatsApp
      </button>
    </form>
  );
}
