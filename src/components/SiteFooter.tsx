import { Link } from "@tanstack/react-router";
import { Sparkles, Twitter, Linkedin, Facebook, Instagram, Youtube } from "lucide-react";
import { Container } from "./Container";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const cols = [
  {
    title: "For Job Seekers",
    links: [
      { label: "Browse Jobs", to: "/browse-jobs" },
      { label: "Remote Jobs", to: "/remote-jobs" },
      { label: "Internships", to: "/internships" },
      { label: "Dashboard", to: "/dashboard" },
    ],
  },
  {
    title: "Categories",
    links: [
      { label: "IT Jobs", to: "/it-jobs" },
      { label: "Healthcare", to: "/healthcare-jobs" },
      { label: "Engineering", to: "/engineering-jobs" },
      { label: "Government", to: "/government-jobs" },
      { label: "Freelance", to: "/freelance-jobs" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Career Advice", to: "/career-advice" },
      { label: "Salary Guide", to: "/salary-guide" },
      { label: "Blog", to: "/blog" },
      { label: "Companies", to: "/companies" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "Employers", to: "/employers" },
      { label: "Contact", to: "/contact" },
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary text-secondary-foreground">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2.6fr]">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <span className="grid h-10 w-10 place-items-center rounded-xl gradient-primary">
                <Sparkles className="h-5 w-5 text-white" />
              </span>
              <span className="font-heading text-2xl font-bold">JobVerse</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-secondary-foreground/70">
              The AI-powered job portal connecting talent with verified employers across 50+ countries.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-6 flex max-w-md gap-2"
            >
              <Input
                type="email"
                placeholder="you@company.com"
                className="rounded-full border-white/15 bg-white/5 text-white placeholder:text-white/50 focus-visible:ring-accent"
              />
              <Button type="submit" className="rounded-full gradient-primary text-white">
                Subscribe
              </Button>
            </form>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {cols.map((c) => (
              <div key={c.title}>
                <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-white">
                  {c.title}
                </h4>
                <ul className="mt-4 space-y-3 text-sm">
                  {c.links.map((l) => (
                    <li key={l.to}>
                      <Link to={l.to} className="text-secondary-foreground/70 transition-colors hover:text-white">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-secondary-foreground/60">
            © {new Date().getFullYear()} JobVerse. All rights reserved. · Privacy · Terms · Cookies
          </p>
          <div className="flex items-center gap-3">
            {[Twitter, Linkedin, Facebook, Instagram, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-white/40 hover:text-white"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
