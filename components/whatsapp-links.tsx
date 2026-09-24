import { team } from "@/lib/brand";
import { coordinatorWa, supplyWa } from "@/lib/whatsapp";

export function WhatsAppPeople({ light = false }: { light?: boolean }) {
  const tone = light ? "text-muted hover:text-espresso" : "text-parchment/80 hover:text-gold-light";

  return (
    <ul className="space-y-4">
      <li>
        <p className="text-[10px] tracking-[0.2em] uppercase text-gold">{team.supply.role}</p>
        <a
          href={supplyWa("Satvik Way — cafe order")}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-1 block text-lg ${tone}`}
        >
          {team.supply.display}
        </a>
      </li>
      <li>
        <p className="text-[10px] tracking-[0.2em] uppercase text-gold">{team.coordinator.role}</p>
        <a
          href={coordinatorWa("Satvik Way — cafe / accounts")}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-1 block text-lg ${tone}`}
        >
          {team.coordinator.display}
        </a>
      </li>
    </ul>
  );
}
