import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { JobList } from "@/components/JobList";

export const Route = createFileRoute("/engineering-jobs")({
  head: () => ({
    meta: [
      { title: "Engineering Jobs — JobVerse" },
      { name: "description", content: "Civil, mechanical, electrical, and structural engineering roles from top firms." },
      { property: "og:title", content: "Engineering Jobs — JobVerse" },
      { property: "og:description", content: "Civil, mechanical, electrical, and structural engineering roles from top firms." },
      { property: "og:url", content: "/engineering-jobs" },
    ],
    links: [{ rel: "canonical", href: "/engineering-jobs" }],
  }),
  component: () => (
    <>
      <PageHeader eyebrow="Build the world" title="Engineering Jobs" description="Civil, mechanical, and electrical engineering roles from leading firms." />
      <JobList filter={(j) => j.category === "engineering"} />
    </>
  ),
});
