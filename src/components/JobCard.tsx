import { Link } from "@tanstack/react-router";
import { Bookmark, BadgeCheck, Flame, MapPin, Banknote, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Job } from "@/data";

export function JobCard({ job }: { job: Job }) {
  return (
    <article className="group relative flex flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
      <div className="flex items-start gap-4">
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 font-heading text-base font-bold text-primary">
          {job.companyInitials}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <h3 className="truncate font-heading text-lg font-semibold text-foreground">
              {job.title}
            </h3>
            {job.verified && (
              <BadgeCheck className="h-4 w-4 shrink-0 text-primary" aria-label="Verified" />
            )}
          </div>
          <p className="mt-0.5 truncate text-sm text-muted-foreground">{job.company}</p>
        </div>
        <button
          type="button"
          aria-label="Bookmark"
          className="grid h-9 w-9 shrink-0 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
        >
          <Bookmark className="h-4 w-4" />
        </button>
      </div>

      <div className="mt-5 grid gap-2 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 shrink-0" /> <span className="truncate">{job.location}</span>
        </div>
        <div className="flex items-center gap-2">
          <Banknote className="h-4 w-4 shrink-0" /> <span>{job.salary}</span>
        </div>
        <div className="flex items-center gap-2">
          <Briefcase className="h-4 w-4 shrink-0" /> <span>{job.type}</span>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {job.urgent && (
          <Badge className="rounded-full bg-destructive/10 text-destructive hover:bg-destructive/15">
            <Flame className="mr-1 h-3 w-3" /> Urgent Hiring
          </Badge>
        )}
        {job.tags.map((t) => (
          <Badge key={t} variant="secondary" className="rounded-full bg-muted text-foreground/80">
            {t}
          </Badge>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
        <span className="text-xs text-muted-foreground">Posted {job.postedAt}</span>
        <Button asChild size="sm" className="rounded-full gradient-primary text-white shadow-soft">
          <Link to="/browse-jobs">Apply Now</Link>
        </Button>
      </div>
    </article>
  );
}
