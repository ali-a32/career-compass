import { Link } from "@tanstack/react-router";
import {
  Code2, Megaphone, Stethoscope, HardHat, GraduationCap, Banknote,
  Landmark, Headphones, Hammer, Globe2, ArrowRight,
} from "lucide-react";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { categories } from "@/data";

const iconMap = {
  Code2, Megaphone, Stethoscope, HardHat, GraduationCap, Banknote,
  Landmark, Headphones, Hammer, Globe2,
} as const;

export function FeaturedCategories() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          eyebrow="Browse by field"
          title="Featured Categories"
          description="Explore opportunities across industries. From tech to healthcare, find roles that match your ambition."
        />
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-5 lg:grid-cols-5">
          {categories.map((c, i) => {
            const Icon = iconMap[c.icon as keyof typeof iconMap] ?? Code2;
            return (
              <Reveal key={c.name} delay={i * 40}>
                <Link
                  to={`/${c.slug}` as string}
                  className="group flex h-full flex-col items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-card"
                >
                  <div className={`grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br ${c.color} text-white shadow-soft`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-heading text-base font-semibold text-foreground">{c.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{c.jobs.toLocaleString()} jobs</p>
                  </div>
                  <span className="mt-auto inline-flex items-center gap-1 text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                    View jobs <ArrowRight className="h-3 w-3" />
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
