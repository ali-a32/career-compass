import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { JobCard } from "@/components/JobCard";
import { jobs } from "@/data";
import { Bookmark, Briefcase, Eye, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Dashboard — JobVerse" },
      { name: "description", content: "Your JobVerse dashboard: saved jobs, applications, and AI matches." },
      { name: "robots", content: "noindex" },
      { property: "og:url", content: "/dashboard" },
    ],
    links: [{ rel: "canonical", href: "/dashboard" }],
  }),
  component: Dashboard,
});

const kpis = [
  { icon: Briefcase, label: "Applications", value: "18", delta: "+3 this week" },
  { icon: Bookmark, label: "Saved jobs", value: "42", delta: "6 new matches" },
  { icon: Eye, label: "Profile views", value: "236", delta: "+18% vs last week" },
  { icon: TrendingUp, label: "AI match score", value: "92%", delta: "Top 5% of candidates" },
];

function Dashboard() {
  return (
    <section className="py-12 md:py-16">
      <Container>
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <p className="text-sm text-muted-foreground">Welcome back,</p>
            <h1 className="mt-1 font-heading text-3xl font-bold sm:text-4xl">Jane Doe</h1>
          </div>
          <div className="flex items-center gap-3 rounded-2xl border border-border bg-card p-3 pr-5 shadow-soft">
            <div className="grid h-11 w-11 place-items-center rounded-full gradient-primary font-heading font-bold text-white">JD</div>
            <div className="text-sm">
              <p className="font-semibold text-foreground">Product Designer</p>
              <p className="text-xs text-muted-foreground">Open to remote roles</p>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {kpis.map((k, i) => {
            const Icon = k.icon;
            return (
              <Reveal key={k.label} delay={i * 50}>
                <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{k.label}</span>
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                  <p className="mt-3 font-heading text-3xl font-bold text-foreground">{k.value}</p>
                  <p className="mt-1 text-xs text-success">{k.delta}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-12">
          <h2 className="mb-6 font-heading text-xl font-bold">Recommended for you</h2>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {jobs.slice(0, 6).map((j, i) => (
              <Reveal key={j.id} delay={i * 40}>
                <JobCard job={j} />
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
