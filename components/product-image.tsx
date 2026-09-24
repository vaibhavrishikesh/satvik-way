import Image from "next/image";

export function ProductImage({
  src,
  alt,
  priority = false,
  sizes,
  className = "object-cover",
}: {
  src: string;
  alt: string;
  priority?: boolean;
  sizes: string;
  className?: string;
}) {
  return (
    <Image
      src={src}
      alt={`${alt} — Satvik Way tempeh, Rishikesh cafe supply`}
      fill
      priority={priority}
      sizes={sizes}
      className={className}
    />
  );
}
