import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { JobList } from "@/components/JobList";

export const Route = createFileRoute("/internships")({
  head: () => ({
    meta: [
      { title: "Internships — Kickstart Your Career | JobVerse" },
      { name: "description", content: "Paid internship opportunities from top companies. Great for students and recent grads." },
      { property: "og:title", content: "Internships — JobVerse" },
      { property: "og:description", content: "Paid internships from top companies." },
      { property: "og:url", content: "/internships" },
    ],
    links: [{ rel: "canonical", href: "/internships" }],
  }),
  component: () => (
    <>
      <PageHeader eyebrow="Early career" title="Internships" description="Paid opportunities to learn from the best. Great for students and career switchers." />
      <JobList filter={(j) => j.type === "Internship"} />
    </>
  ),
});
