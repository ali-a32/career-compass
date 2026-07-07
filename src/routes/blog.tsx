import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { blogPosts } from "@/data";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Career Insights | JobVerse" },
      { name: "description", content: "Fresh insights on hiring, careers, and the future of work — written by industry experts." },
      { property: "og:title", content: "Blog — JobVerse" },
      { property: "og:description", content: "Fresh insights on hiring, careers, and the future of work." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: Blog,
});

const all = [
  ...blogPosts,
  { title: "5 Signs You're Ready for a Career Change", excerpt: "The subtle signals that it's time to move on — and how to plan the jump.", category: "Career", readTime: "5 min read", color: "from-amber-500 to-orange-500" },
  { title: "Async Work: Playbook for Distributed Teams", excerpt: "How the best remote-first companies communicate, collaborate, and ship.", category: "Remote", readTime: "9 min read", color: "from-sky-500 to-cyan-500" },
  { title: "Negotiating Equity: What Actually Matters", excerpt: "Vesting, cliffs, RSUs vs options — decode the offer letter jargon.", category: "Salary", readTime: "12 min read", color: "from-fuchsia-500 to-pink-500" },
];

function Blog() {
  return (
    <>
      <PageHeader eyebrow="JobVerse blog" title="Career insights, weekly" description="Deep dives on hiring, interviews, salary, and the future of work." />
      <section className="py-16">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {all.map((p, i) => (
              <Reveal key={p.title} delay={i * 50}>
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all hover:-translate-y-1 hover:shadow-card">
                  <div className={`h-44 bg-gradient-to-br ${p.color}`} />
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="rounded-full bg-primary/10 px-2 py-0.5 font-semibold text-primary">{p.category}</span>
                      <span>· {p.readTime}</span>
                    </div>
                    <h2 className="mt-3 font-heading text-lg font-semibold text-foreground group-hover:text-primary">{p.title}</h2>
                    <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.excerpt}</p>
                    <span className="mt-4 text-sm font-medium text-primary">Read article →</span>
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
