"use client";

import { useState } from "react";
import { siteFaqs } from "@/lib/seo";

export function FaqList() {
  const [open, setOpen] = useState(0);
  const faqs = siteFaqs;

  return (
    <div className="divide-y divide-parchment">
      {faqs.map((item, index) => (
        <div key={item.q} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
          <button
            type="button"
            className="flex w-full items-center justify-between py-4 text-left text-lg"
            onClick={() => setOpen(open === index ? -1 : index)}
            aria-expanded={open === index}
            itemProp="name"
          >
            {item.q}
            <span className="text-gold">{open === index ? "–" : "+"}</span>
          </button>
          {open === index ? (
            <p
              className="pb-4 text-sm leading-7 text-muted"
              itemScope
              itemProp="acceptedAnswer"
              itemType="https://schema.org/Answer"
            >
              <span itemProp="text">{item.a}</span>
            </p>
          ) : null}
        </div>
      ))}
    </div>
  );
}
