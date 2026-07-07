import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Sparkles } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/employers")({
  head: () => ({
    meta: [
      { title: "For Employers — Hire Top Talent | JobVerse" },
      { name: "description", content: "Post jobs, source candidates, and hire faster with JobVerse's AI-powered employer platform." },
      { property: "og:title", content: "For Employers — JobVerse" },
      { property: "og:description", content: "Hire top talent 3x faster with AI-powered sourcing." },
      { property: "og:url", content: "/employers" },
    ],
    links: [{ rel: "canonical", href: "/employers" }],
  }),
  component: Employers,
});

const plans = [
  {
    name: "Starter",
    price: "$0",
    period: "forever",
    description: "Perfect for trying out JobVerse.",
    features: ["1 active job post", "Basic candidate filters", "Standard listing", "Email support"],
    cta: "Get started",
    featured: false,
  },
  {
    name: "Growth",
    price: "$149",
    period: "per month",
    description: "Best for growing teams hiring regularly.",
    features: ["10 active job posts", "AI candidate matching", "Featured placement", "Applicant tracking", "Priority support"],
    cta: "Start free trial",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "annual",
    description: "For high-volume hiring across teams.",
    features: ["Unlimited job posts", "Dedicated success manager", "API & ATS integrations", "SSO & advanced security", "SLA guarantees"],
    cta: "Contact sales",
    featured: false,
  },
];

function Employers() {
  return (
    <>
      <PageHeader
        eyebrow="For employers"
        title="Hire top talent, 3x faster"
        description="Post a role in minutes and let our AI surface the best-fit candidates from a network of 5M+ professionals."
      >
        <div className="flex flex-wrap justify-center gap-3">
          <Button asChild className="rounded-full gradient-primary text-white shadow-soft">
            <Link to="/register">Post a Job</Link>
          </Button>
          <Button asChild variant="outline" className="rounded-full">
            <Link to="/contact">Talk to sales</Link>
          </Button>
        </div>
      </PageHeader>

      <section className="py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Simple, transparent pricing</h2>
            <p className="mt-3 text-muted-foreground">Only pay for what you need. Cancel anytime.</p>
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {plans.map((p, i) => (
              <Reveal key={p.name} delay={i * 80}>
                <div className={`relative flex h-full flex-col rounded-3xl border p-8 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card ${p.featured ? "border-primary bg-gradient-to-br from-primary/5 to-accent/10 shadow-glow" : "border-border bg-card"}`}>
                  {p.featured && (
                    <div className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full gradient-primary px-3 py-1 text-xs font-semibold text-white shadow-soft">
                      <Sparkles className="h-3 w-3" /> Most popular
                    </div>
                  )}
                  <h3 className="font-heading text-xl font-bold text-foreground">{p.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="font-heading text-4xl font-bold text-foreground">{p.price}</span>
                    <span className="text-sm text-muted-foreground">/ {p.period}</span>
                  </div>
                  <ul className="mt-6 flex-1 space-y-3 text-sm">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span className="text-foreground/80">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className={`mt-8 rounded-full ${p.featured ? "gradient-primary text-white" : ""}`} variant={p.featured ? "default" : "outline"}>
                    <Link to="/register">{p.cta}</Link>
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
