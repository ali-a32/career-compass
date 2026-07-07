import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { JobList } from "@/components/JobList";

export const Route = createFileRoute("/browse-jobs")({
  head: () => ({
    meta: [
      { title: "Browse Jobs — JobVerse" },
      { name: "description", content: "Search thousands of verified job listings across every industry and location." },
      { property: "og:title", content: "Browse Jobs — JobVerse" },
      { property: "og:description", content: "Search thousands of verified job listings across every industry and location." },
      { property: "og:url", content: "/browse-jobs" },
    ],
    links: [{ rel: "canonical", href: "/browse-jobs" }],
  }),
  component: BrowseJobs,
});

function BrowseJobs() {
  return (
    <>
      <PageHeader
        eyebrow="All openings"
        title="Browse Jobs"
        description="Every verified listing on JobVerse — filtered by relevance, updated hourly."
      />
      <JobList />
    </>
  );
}
