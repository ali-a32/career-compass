import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { TrendingUp } from "lucide-react";

export const Route = createFileRoute("/salary-guide")({
  head: () => ({
    meta: [
      { title: "Salary Guide — Know Your Worth | JobVerse" },
      { name: "description", content: "Real-time salary data across roles, industries, and cities. Negotiate with confidence." },
      { property: "og:title", content: "Salary Guide — JobVerse" },
      { property: "og:description", content: "Real-time salary data across roles, industries, and cities." },
      { property: "og:url", content: "/salary-guide" },
    ],
    links: [{ rel: "canonical", href: "/salary-guide" }],
  }),
  component: SalaryGuide,
});

const salaries = [
  { role: "Software Engineer", median: "$135,000", range: "$95k – $210k", trend: "+6.2%" },
  { role: "Product Manager", median: "$148,000", range: "$110k – $220k", trend: "+4.8%" },
  { role: "Product Designer", median: "$125,000", range: "$85k – $180k", trend: "+5.1%" },
  { role: "Data Scientist", median: "$142,000", range: "$100k – $205k", trend: "+7.3%" },
  { role: "Registered Nurse", median: "$82,000", range: "$65k – $115k", trend: "+3.9%" },
  { role: "Marketing Manager", median: "$98,000", range: "$70k – $155k", trend: "+2.4%" },
  { role: "Civil Engineer", median: "$92,000", range: "$70k – $135k", trend: "+2.1%" },
  { role: "Financial Analyst", median: "$88,000", range: "$65k – $130k", trend: "+3.2%" },
];

function SalaryGuide() {
  return (
    <>
      <PageHeader eyebrow="Know your worth" title="Salary Guide" description="Real-time compensation data from thousands of verified offers." />
      <section className="py-16">
        <Container>
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
            <div className="hidden grid-cols-[2fr_1fr_1.5fr_1fr] gap-4 border-b border-border bg-muted/50 px-6 py-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground md:grid">
              <span>Role</span><span>Median</span><span>Range</span><span>YoY Change</span>
            </div>
            {salaries.map((s, i) => (
              <Reveal key={s.role} delay={i * 30}>
                <div className="grid gap-2 border-b border-border px-6 py-5 last:border-0 hover:bg-muted/30 md:grid-cols-[2fr_1fr_1.5fr_1fr] md:items-center md:gap-4">
                  <span className="font-heading text-base font-semibold text-foreground">{s.role}</span>
                  <span className="text-sm text-foreground/80"><span className="md:hidden text-muted-foreground">Median: </span>{s.median}</span>
                  <span className="text-sm text-muted-foreground">{s.range}</span>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-success">
                    <TrendingUp className="h-3.5 w-3.5" /> {s.trend}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
