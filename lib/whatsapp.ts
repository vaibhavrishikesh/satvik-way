import { team } from "@/lib/brand";

export function waLink(phone: string, text?: string) {
  const url = new URL(`https://wa.me/${phone}`);
  if (text) url.searchParams.set("text", text);
  return url.toString();
}

export function orderMessage(fields: {
  cafe: string;
  person: string;
  phone: string;
  area: string;
  items: string;
  note: string;
}) {
  return [
    "Satvik Way — cafe order",
    `Cafe: ${fields.cafe}`,
    `Name: ${fields.person}`,
    `Phone: ${fields.phone}`,
    `Area: ${fields.area}`,
    `Items: ${fields.items || "to discuss"}`,
    fields.note ? `Note: ${fields.note}` : "",
  ]
    .filter(Boolean)
    .join("\n");
}

export function productOrderMessage(productName: string) {
  return `Satvik Way — cafe order\nProduct: ${productName}\nPlease share cafe rate and this week's availability.`;
}

export const supplyWa = (text?: string) => waLink(team.supply.whatsapp, text);
export const coordinatorWa = (text?: string) => waLink(team.coordinator.whatsapp, text);
