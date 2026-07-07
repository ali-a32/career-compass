import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { Heart, Rocket, Users, Sparkles } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — JobVerse" },
      { name: "description", content: "JobVerse is on a mission to connect every professional with meaningful work — powered by AI, built on trust." },
      { property: "og:title", content: "About — JobVerse" },
      { property: "og:description", content: "Connecting every professional with meaningful work." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const values = [
  { icon: Heart, title: "Human-first", desc: "Technology amplifies people — never replaces them." },
  { icon: Rocket, title: "Bias for action", desc: "We ship, learn, and iterate faster than anyone." },
  { icon: Users, title: "Community", desc: "5M+ professionals trust us with their next move." },
  { icon: Sparkles, title: "Trust", desc: "Verified employers, transparent salaries, zero spam." },
];

function About() {
  return (
    <>
      <PageHeader eyebrow="Our story" title="Meaningful work, for everyone" description="JobVerse was founded in 2024 with a simple mission: make it radically easier to find the right job." />
      <section className="py-16">
        <Container className="max-w-3xl">
          <div className="prose prose-lg mx-auto text-foreground/80">
            <p>
              We started because we were tired of ghost jobs, opaque salary ranges, and generic listings that felt like SEO spam. We built JobVerse to be the platform we wished existed — one where every listing is real, every employer is verified, and matching is powered by understanding, not keywords.
            </p>
            <p className="mt-6">
              Today, we connect over 5 million professionals with 25,000+ companies across 50+ countries. And we're just getting started.
            </p>
          </div>
        </Container>
      </section>
      <section className="py-16">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <Reveal key={v.title} delay={i * 60}>
                  <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-soft">
                    <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 font-heading text-lg font-semibold">{v.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{v.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
