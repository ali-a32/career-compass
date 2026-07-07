import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { JobList } from "@/components/JobList";

export const Route = createFileRoute("/remote-jobs")({
  head: () => ({
    meta: [
      { title: "Remote Jobs — Work From Anywhere | JobVerse" },
      { name: "description", content: "Discover fully remote roles from async-friendly teams hiring globally." },
      { property: "og:title", content: "Remote Jobs — Work From Anywhere" },
      { property: "og:description", content: "Discover fully remote roles from async-friendly teams hiring globally." },
      { property: "og:url", content: "/remote-jobs" },
    ],
    links: [{ rel: "canonical", href: "/remote-jobs" }],
  }),
  component: () => (
    <>
      <PageHeader
        eyebrow="Work from anywhere"
        title="Remote Jobs"
        description="Async-friendly teams hiring globally with competitive compensation and full flexibility."
      />
      <JobList filter={(j) => j.type === "Remote" || j.location.toLowerCase().includes("remote")} />
    </>
  ),
});
