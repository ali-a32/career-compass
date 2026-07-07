import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { JobCard } from "@/components/JobCard";
import { Button } from "@/components/ui/button";
import { jobs } from "@/data";

export function FeaturedJobs() {
  const featured = jobs.slice(0, 6);
  return (
    <section className="py-20">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            align="left"
            eyebrow="Handpicked for you"
            title="Featured Jobs"
            description="Fresh openings from verified employers, updated every hour."
          />
          <Button asChild variant="ghost" className="rounded-full">
            <Link to="/browse-jobs">
              View all jobs <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((j, i) => (
            <Reveal key={j.id} delay={i * 60}>
              <JobCard job={j} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
