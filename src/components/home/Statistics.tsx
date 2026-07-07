import { Container } from "@/components/Container";
import { useReveal, useCountUp } from "@/hooks/use-reveal";
import { stats } from "@/data";

function StatItem({ value, suffix, label, short }: { value: number; suffix: string; label: string; short?: string }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const n = useCountUp(value, 1800, visible);
  const display = short
    ? visible
      ? short
      : "0+"
    : n.toLocaleString() + suffix;
  return (
    <div ref={ref} className="text-center">
      <p className="font-heading text-4xl font-bold text-white sm:text-5xl md:text-6xl">
        {display}
      </p>
      <p className="mt-2 text-sm font-medium uppercase tracking-wider text-white/70">{label}</p>
    </div>
  );
}

export function Statistics() {
  return (
    <section className="py-20">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-secondary p-10 shadow-glow sm:p-14">
          <div className="pointer-events-none absolute inset-0 opacity-40" style={{ background: "var(--gradient-hero)" }} />
          <div className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <StatItem key={s.label} {...s} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
