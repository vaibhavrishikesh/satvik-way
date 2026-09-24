"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What is tempeh?",
    a: "Tempeh is a fermented bean cake. We sell vacuum-packed soy cubes, raw, to Rishikesh cafes. Nutty, firm, high in protein. Other ferments — ask WhatsApp that week.",
  },
  {
    q: "How do cafes cook it?",
    a: "It arrives raw. Slice or cube, marinate if you like, then sauté 5–7 minutes, bake, steam, or crumble into a masala. It holds on the pan better than tofu.",
  },
  {
    q: "What does it taste like?",
    a: "Mild, earthy, and nutty. It soaks up marinade and spice, so it works in Indian, Asian, and cafe bowls.",
  },
  {
    q: "Is it better than tofu or paneer?",
    a: "Tempeh is made from whole beans, not soy milk or dairy. It usually has more protein than tofu and less fat than paneer, plus fibre from the ferment. Taste and use are different — we sell it as a kitchen ingredient, not a ready snack.",
  },
  {
    q: "How do I order?",
    a: "Use the order form or WhatsApp the Supply Lead. Tell us cafe name, area, and quantity. We drop weekly in Rishikesh.",
  },
];

export function FaqList() {
  const [open, setOpen] = useState(0);

  return (
    <div className="divide-y divide-parchment">
      {faqs.map((item, index) => (
        <div key={item.q}>
          <button
            type="button"
            className="flex w-full items-center justify-between py-4 text-left text-lg"
            onClick={() => setOpen(open === index ? -1 : index)}
            aria-expanded={open === index}
          >
            {item.q}
            <span className="text-gold">{open === index ? "–" : "+"}</span>
          </button>
          {open === index ? <p className="pb-4 text-sm leading-7 text-muted">{item.a}</p> : null}
        </div>
      ))}
    </div>
  );
}
