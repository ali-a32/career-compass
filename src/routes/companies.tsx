import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Search } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { Input } from "@/components/ui/input";
import { companies } from "@/data";

export const Route = createFileRoute("/companies")({
  head: () => ({
    meta: [
      { title: "Companies Hiring Now — JobVerse" },
      { name: "description", content: "Discover 25,000+ verified companies hiring on JobVerse, from startups to Fortune 500." },
      { property: "og:title", content: "Companies Hiring Now — JobVerse" },
      { property: "og:description", content: "25,000+ verified companies hiring on JobVerse." },
      { property: "og:url", content: "/companies" },
    ],
    links: [{ rel: "canonical", href: "/companies" }],
  }),
  component: Companies,
});

function Companies() {
  const all = [...companies, ...companies].map((c, i) => ({ ...c, id: i }));
  return (
    <>
      <PageHeader eyebrow="Great places to work" title="Companies" description="Explore 25,000+ verified teams hiring right now.">
        <div className="mx-auto flex max-w-md items-center gap-2 rounded-full border border-border bg-card p-2 pl-5 shadow-soft">
          <Search className="h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search companies" className="border-0 bg-transparent focus-visible:ring-0" />
        </div>
      </PageHeader>
      <section className="py-16">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {all.map((c, i) => (
              <Reveal key={c.id} delay={i * 30}>
                <Link to="/companies" className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-card">
                  <div className={`grid h-14 w-14 place-items-center rounded-2xl ${c.color} font-heading text-lg font-bold text-white`}>
                    {c.initials}
                  </div>
                  <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">{c.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{c.description}</p>
                  <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                    <span className="text-sm font-medium text-primary">{c.jobs} jobs</span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
