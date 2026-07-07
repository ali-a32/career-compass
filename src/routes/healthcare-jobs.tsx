import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { JobList } from "@/components/JobList";

export const Route = createFileRoute("/healthcare-jobs")({
  head: () => ({
    meta: [
      { title: "Healthcare Jobs — JobVerse" },
      { name: "description", content: "Nursing, clinical, and healthcare admin roles from verified hospitals and clinics." },
      { property: "og:title", content: "Healthcare Jobs — JobVerse" },
      { property: "og:description", content: "Nursing, clinical, and healthcare admin roles from verified hospitals and clinics." },
      { property: "og:url", content: "/healthcare-jobs" },
    ],
    links: [{ rel: "canonical", href: "/healthcare-jobs" }],
  }),
  component: () => (
    <>
      <PageHeader eyebrow="Care careers" title="Healthcare Jobs" description="Roles from verified hospitals, clinics, and health systems nationwide." />
      <JobList filter={(j) => j.category === "healthcare"} />
    </>
  ),
});
