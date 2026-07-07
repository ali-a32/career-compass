import {
  FileText, MessageSquare, BookOpen, Calculator, Newspaper, ArrowRight,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { resources } from "@/data";

const iconMap = { FileText, MessageSquare, BookOpen, Calculator, Newspaper } as const;

export function CareerResources() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          eyebrow="Level up"
          title="Career Resources"
          description="Free tools and guides to accelerate your career."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {resources.map((r, i) => {
            const Icon = iconMap[r.icon as keyof typeof iconMap];
            return (
              <Reveal key={r.title} delay={i * 60}>
                <Link
                  to="/career-advice"
                  className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-card"
                >
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-heading text-base font-semibold text-foreground">{r.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{r.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-primary">
                    Explore <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
