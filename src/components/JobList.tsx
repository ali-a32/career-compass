import { JobCard } from "./JobCard";
import { Reveal } from "./Reveal";
import { Container } from "./Container";
import { jobs as allJobs, type Job } from "@/data";

export function JobList({
  filter,
  extras = [],
}: {
  filter?: (j: Job) => boolean;
  extras?: Job[];
}) {
  const list = [...(filter ? allJobs.filter(filter) : allJobs), ...extras];
  return (
    <section className="py-16">
      <Container>
        {list.length === 0 ? (
          <p className="rounded-2xl border border-dashed border-border bg-card p-10 text-center text-muted-foreground">
            No jobs match this filter yet — check back soon.
          </p>
        ) : (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {list.map((j, i) => (
              <Reveal key={j.id} delay={i * 40}>
                <JobCard job={j} />
              </Reveal>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
