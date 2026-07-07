import { Link } from "@tanstack/react-router";
import { Globe2, Clock, ArrowRight } from "lucide-react";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { jobs } from "@/data";

export function RemoteJobsSection() {
  const remote = jobs.filter((j) => j.type === "Remote" || j.location.includes("Remote")).slice(0, 4);
  return (
    <section className="py-20">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            align="left"
            eyebrow="Work from anywhere"
            title="Remote Opportunities"
            description="Async-friendly teams hiring globally with competitive compensation."
          />
          <Button asChild variant="outline" className="rounded-full">
            <Link to="/remote-jobs">
              Browse remote <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {remote.map((j, i) => (
            <Reveal key={j.id} delay={i * 60}>
              <article className="group flex flex-col rounded-2xl border border-border bg-gradient-to-br from-card to-accent/5 p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                <div className="flex items-start gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent/15 text-accent-foreground">
                    <Globe2 className="h-6 w-6 text-primary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="truncate font-heading text-lg font-semibold text-foreground">{j.title}</h3>
                    <p className="mt-0.5 text-sm text-muted-foreground">{j.company} · {j.location}</p>
                  </div>
                  <Badge className="rounded-full bg-primary/10 text-primary hover:bg-primary/15">Remote</Badge>
                </div>
                <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                  <div>
                    <p className="text-sm font-semibold text-foreground">{j.salary}</p>
                    <p className="text-xs text-muted-foreground">Posted {j.postedAt}</p>
                  </div>
                  <Button size="sm" className="rounded-full gradient-primary text-white">Apply</Button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function GovernmentJobsSection() {
  const gov = jobs.filter((j) => j.category === "government");
  // duplicate to have a couple more visual cards
  const list = [
    ...gov,
    { id: "g2", title: "City Planner", company: "City of Seattle", location: "Seattle, WA", salary: "$82k – $98k", postedAt: "1 week ago", deadline: "Jan 15, 2027" },
    { id: "g3", title: "Public Health Officer", company: "CDC", location: "Atlanta, GA", salary: "$90k – $115k", postedAt: "3 days ago", deadline: "Dec 30, 2026" },
  ];
  return (
    <section className="py-20">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            align="left"
            eyebrow="Public sector"
            title="Government Jobs"
            description="Verified openings from federal, state, and local agencies with clear deadlines."
          />
          <Button asChild variant="outline" className="rounded-full">
            <Link to="/government-jobs">
              View all <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {list.slice(0, 3).map((j, i) => (
            <Reveal key={j.id} delay={i * 60}>
              <article className="group flex h-full flex-col rounded-2xl border-2 border-secondary/10 bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-secondary/30 hover:shadow-card">
                <Badge className="w-fit rounded-full bg-secondary text-white hover:bg-secondary">Official Listing</Badge>
                <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">{j.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{j.company}</p>
                <div className="mt-4 space-y-1.5 text-sm text-muted-foreground">
                  <p>📍 {j.location}</p>
                  <p>💰 {j.salary}</p>
                  <p className="flex items-center gap-1 text-warning">
                    <Clock className="h-3.5 w-3.5" /> Deadline: {"deadline" in j ? j.deadline : "Dec 20, 2026"}
                  </p>
                </div>
                <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-success">
                    <span className="h-1.5 w-1.5 rounded-full bg-success" /> Accepting applications
                  </span>
                  <Button size="sm" variant="outline" className="rounded-full">Details</Button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
