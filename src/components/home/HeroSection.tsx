import { Search, MapPin, Briefcase, Sparkles, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/Container";
import heroImage from "@/assets/hero-jobverse.jpg";

const trending = ["Product Designer", "React Developer", "Data Scientist", "Remote", "Marketing"];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-16 md:pb-24">
      {/* Background flourish */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute top-40 -left-40 h-[420px] w-[420px] rounded-full bg-primary/15 blur-3xl" />
      </div>

      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-semibold text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            AI-powered job matching
          </div>
          <h1 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-[64px]">
            Find your <span className="text-gradient">dream job</span> anywhere in the world
          </h1>
          <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
            Explore thousands of verified jobs from top companies. Full-time, part-time, internship,
            freelance, remote, and government opportunities — all in one place.
          </p>

          {/* Search Box */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-8 rounded-2xl border border-border bg-card p-3 shadow-card sm:rounded-full"
          >
            <div className="grid gap-2 sm:grid-cols-[1.2fr_1fr_1fr_auto] sm:items-center sm:gap-0">
              <label className="flex items-center gap-2 rounded-xl px-4 py-3 sm:rounded-l-full sm:border-r sm:border-border">
                <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Job title or keyword"
                  className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                />
              </label>
              <label className="flex items-center gap-2 rounded-xl px-4 py-3 sm:border-r sm:border-border">
                <MapPin className="h-4 w-4 shrink-0 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Location"
                  className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                />
              </label>
              <label className="flex items-center gap-2 rounded-xl px-4 py-3">
                <Briefcase className="h-4 w-4 shrink-0 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Category"
                  className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                />
              </label>
              <Button
                type="submit"
                className="rounded-xl gradient-primary py-6 text-white shadow-soft hover:opacity-95 sm:rounded-full sm:px-8"
              >
                Search
              </Button>
            </div>
          </form>

          <div className="mt-5 flex flex-wrap items-center gap-2 text-sm">
            <span className="inline-flex items-center gap-1 text-muted-foreground">
              <TrendingUp className="h-4 w-4" /> Trending:
            </span>
            {trending.map((t) => (
              <button
                key={t}
                className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-foreground/80 transition-colors hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="relative animate-fade-up" style={{ animationDelay: "150ms" }}>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 to-accent/20 shadow-card">
            <img
              src={heroImage}
              alt="Diverse professionals searching for jobs on laptops with floating job cards"
              width={1280}
              height={1024}
              className="h-auto w-full"
            />
          </div>
          {/* Floating stat card */}
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border bg-card p-4 shadow-card md:block animate-float">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-success/10 text-success">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <p className="font-heading text-lg font-bold text-foreground">12,480</p>
                <p className="text-xs text-muted-foreground">New jobs this week</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
