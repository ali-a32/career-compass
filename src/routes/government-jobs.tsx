import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { JobList } from "@/components/JobList";

export const Route = createFileRoute("/government-jobs")({
  head: () => ({
    meta: [
      { title: "Government Jobs — Public Sector Careers | JobVerse" },
      { name: "description", content: "Verified openings from federal, state, and local agencies with clear application deadlines." },
      { property: "og:title", content: "Government Jobs — JobVerse" },
      { property: "og:description", content: "Verified openings from federal, state, and local agencies." },
      { property: "og:url", content: "/government-jobs" },
    ],
    links: [{ rel: "canonical", href: "/government-jobs" }],
  }),
  component: () => (
    <>
      <PageHeader eyebrow="Public sector" title="Government Jobs" description="Official listings from federal, state, and local agencies." />
      <JobList filter={(j) => j.category === "government"} />
    </>
  ),
});
