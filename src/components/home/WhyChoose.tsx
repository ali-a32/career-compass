import { ShieldCheck, Building2, Zap, GraduationCap } from "lucide-react";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

const features = [
  { icon: ShieldCheck, title: "Verified Jobs", desc: "Every listing is manually reviewed. Zero ghost jobs, zero scams.", color: "from-blue-500 to-indigo-500" },
  { icon: Building2, title: "Trusted Employers", desc: "25,000+ vetted companies from startups to Fortune 500.", color: "from-emerald-500 to-teal-500" },
  { icon: Zap, title: "Fast Applications", desc: "Apply to multiple roles in one click with your saved profile.", color: "from-amber-500 to-orange-500" },
  { icon: GraduationCap, title: "Career Resources", desc: "AI resume builder, interview prep, and salary insights.", color: "from-violet-500 to-purple-500" },
];

export function WhyChoose() {
  return (
    <section className="relative overflow-hidden bg-secondary py-24 text-secondary-foreground">
      <div className="pointer-events-none absolute inset-0 -z-0 opacity-30" style={{ background: "var(--gradient-hero)" }} />
      <Container className="relative">
        <SectionHeading
          eyebrow="Why JobVerse"
          title="Built for modern job seekers"
          description="Everything you need to land your next role — and nothing you don't."
          className="text-white [&_h2]:text-white [&_p]:text-white/70"
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <Reveal key={f.title} delay={i * 80}>
                <div className="group h-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10">
                  <div className={`grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br ${f.color} shadow-glow`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mt-5 font-heading text-lg font-semibold text-white">{f.title}</h3>
                  <p className="mt-2 text-sm text-white/70">{f.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
