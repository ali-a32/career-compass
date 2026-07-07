import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { JobList } from "@/components/JobList";

export const Route = createFileRoute("/freelance-jobs")({
  head: () => ({
    meta: [
      { title: "Freelance Jobs — Independent Work | JobVerse" },
      { name: "description", content: "Contract and freelance opportunities for independent professionals." },
      { property: "og:title", content: "Freelance Jobs — JobVerse" },
      { property: "og:description", content: "Contract and freelance opportunities for independent professionals." },
      { property: "og:url", content: "/freelance-jobs" },
    ],
    links: [{ rel: "canonical", href: "/freelance-jobs" }],
  }),
  component: () => (
    <>
      <PageHeader eyebrow="Work your way" title="Freelance Jobs" description="Contract, project-based, and freelance gigs for independent pros." />
      <JobList filter={(j) => j.type === "Freelance" || j.type === "Contract"} />
    </>
  ),
});
