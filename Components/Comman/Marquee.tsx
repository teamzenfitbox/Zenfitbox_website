import { brands } from "@/Data/site";

export function Marquee() {
  const items = [...brands, ...brands];
  return (
    <section aria-label="Trusted by" className="relative overflow-hidden bg-[oklch(0.17_0.008_260)] py-10">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-linear-to-r from-black to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-linear-to-l from-black to-transparent" />
      <div className="flex w-max animate-marquee gap-16 px-8">
        {items.map((b, i) => (
          <span
            key={`${b}-${i}`}
            className="whitespace-nowrap font-display text-2xl font-bold tracking-[0.25em] text-amber-50 transition"
          >
            {b}
          </span>
        ))}
      </div>
    </section>
  );
}
