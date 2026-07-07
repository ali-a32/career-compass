import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { blogPosts, resources } from "@/data";
import { FileText, MessageSquare, BookOpen, Calculator, Newspaper } from "lucide-react";

const iconMap = { FileText, MessageSquare, BookOpen, Calculator, Newspaper } as const;

export const Route = createFileRoute("/career-advice")({
  head: () => ({
    meta: [
      { title: "Career Advice — Expert Guides | JobVerse" },
      { name: "description", content: "Resume tips, interview prep, and career playbooks written by industry experts." },
      { property: "og:title", content: "Career Advice — JobVerse" },
      { property: "og:description", content: "Resume tips, interview prep, and career playbooks." },
      { property: "og:url", content: "/career-advice" },
    ],
    links: [{ rel: "canonical", href: "/career-advice" }],
  }),
  component: CareerAdvice,
});

function CareerAdvice() {
  return (
    <>
      <PageHeader eyebrow="Grow your career" title="Career Advice" description="Guides, tools, and playbooks to help you land — and thrive in — your next role." />
      <section className="py-16">
        <Container>
          <h2 className="mb-8 font-heading text-2xl font-bold">Free tools</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {resources.map((r, i) => {
              const Icon = iconMap[r.icon as keyof typeof iconMap];
              return (
                <Reveal key={r.title} delay={i * 50}>
                  <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card">
                    <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 font-heading text-base font-semibold">{r.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{r.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <h2 className="mb-8 mt-16 font-heading text-2xl font-bold">Latest articles</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((p, i) => (
              <Reveal key={p.title} delay={i * 60}>
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all hover:-translate-y-1 hover:shadow-card">
                  <div className={`h-40 bg-gradient-to-br ${p.color}`} />
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="rounded-full bg-primary/10 px-2 py-0.5 font-semibold text-primary">{p.category}</span>
                      <span>· {p.readTime}</span>
                    </div>
                    <h3 className="mt-3 font-heading text-lg font-semibold text-foreground group-hover:text-primary">{p.title}</h3>
                    <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.excerpt}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
