import { Quote, Star } from "lucide-react";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { testimonials } from "@/data";

export function Testimonials() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          eyebrow="Loved by professionals"
          title="Real stories, real hires"
          description="Hear from candidates who found their next chapter on JobVerse."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 80}>
              <figure className="relative flex h-full flex-col rounded-2xl border border-border bg-card p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                <Quote className="h-8 w-8 text-primary/20" />
                <div className="mt-3 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="h-4 w-4 fill-warning text-warning" />
                  ))}
                </div>
                <blockquote className="mt-4 text-base leading-relaxed text-foreground/90">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                  <div className={`grid h-11 w-11 shrink-0 place-items-center rounded-full ${t.color} font-heading text-sm font-semibold text-white`}>
                    {t.initials}
                  </div>
                  <div className="min-w-0">
                    <p className="truncate font-heading text-sm font-semibold text-foreground">{t.name}</p>
                    <p className="truncate text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
