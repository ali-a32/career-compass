import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { companies } from "@/data";

export function PopularCompanies() {
  return (
    <section className="py-20">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            align="left"
            eyebrow="Great places to work"
            title="Popular Companies"
            description="Discover teams hiring right now."
          />
          <Button asChild variant="ghost" className="rounded-full">
            <Link to="/companies">
              View all companies <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {companies.map((c, i) => (
            <Reveal key={c.name} delay={i * 50}>
              <Link
                to="/companies"
                className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-card"
              >
                <div className={`grid h-12 w-12 place-items-center rounded-xl ${c.color} font-heading text-base font-bold text-white`}>
                  {c.initials}
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">{c.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{c.description}</p>
                <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                  <span className="text-sm font-medium text-primary">{c.jobs} open jobs</span>
                  <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
