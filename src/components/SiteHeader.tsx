import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader } from "@/components/ui/sheet";
import { Container } from "./Container";
import { cn } from "@/lib/utils";

const nav = [
  { label: "Browse Jobs", to: "/browse-jobs" },
  { label: "Companies", to: "/companies" },
  { label: "Career Advice", to: "/career-advice" },
  { label: "Salary Guide", to: "/salary-guide" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled ? "glass shadow-soft" : "bg-transparent"
      )}
    >
      <Container className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-3 md:py-4 lg:grid-cols-[auto_1fr_auto]">
        <Link to="/" className="flex min-w-0 items-center gap-2">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl gradient-primary shadow-glow">
            <Sparkles className="h-5 w-5 text-white" />
          </span>
          <span className="truncate font-heading text-xl font-bold tracking-tight text-foreground">
            JobVerse
          </span>
        </Link>

        <nav className="hidden lg:flex lg:items-center lg:justify-center lg:gap-1">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeProps={{ className: "text-primary bg-primary/5" }}
              className="rounded-full px-4 py-2 text-sm font-medium text-foreground/70 transition-colors hover:bg-muted hover:text-foreground"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button asChild variant="ghost" className="rounded-full">
            <Link to="/employers">Post a Job</Link>
          </Button>
          <Button asChild variant="ghost" className="rounded-full">
            <Link to="/login">Login</Link>
          </Button>
          <Button asChild className="rounded-full gradient-primary text-white shadow-soft hover:opacity-95">
            <Link to="/register">Register</Link>
          </Button>
        </div>

        <div className="lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85%] max-w-sm">
              <SheetHeader>
                <SheetTitle className="font-heading">JobVerse</SheetTitle>
              </SheetHeader>
              <nav className="mt-6 flex flex-col gap-1">
                {nav.map((n) => (
                  <Link
                    key={n.to}
                    to={n.to}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-4 py-3 text-base font-medium text-foreground/80 hover:bg-muted"
                  >
                    {n.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-6 flex flex-col gap-2">
                <Button asChild variant="outline" className="rounded-full" onClick={() => setOpen(false)}>
                  <Link to="/employers">Post a Job</Link>
                </Button>
                <Button asChild variant="ghost" className="rounded-full" onClick={() => setOpen(false)}>
                  <Link to="/login">Login</Link>
                </Button>
                <Button asChild className="rounded-full gradient-primary text-white" onClick={() => setOpen(false)}>
                  <Link to="/register">Register</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  );
}
