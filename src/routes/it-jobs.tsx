import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { JobList } from "@/components/JobList";

export const Route = createFileRoute("/it-jobs")({
  head: () => ({
    meta: [
      { title: "IT & Software Jobs — JobVerse" },
      { name: "description", content: "Software engineering, DevOps, data, and product roles from top tech companies." },
      { property: "og:title", content: "IT & Software Jobs — JobVerse" },
      { property: "og:description", content: "Software engineering, DevOps, data, and product roles from top tech companies." },
      { property: "og:url", content: "/it-jobs" },
    ],
    links: [{ rel: "canonical", href: "/it-jobs" }],
  }),
  component: () => (
    <>
      <PageHeader eyebrow="Tech careers" title="IT & Software Jobs" description="Engineering, product, design, and data roles from teams shipping at scale." />
      <JobList filter={(j) => j.category === "it"} />
    </>
  ),
});
