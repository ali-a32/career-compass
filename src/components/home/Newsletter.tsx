import { Mail, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Newsletter() {
  return (
    <section className="py-20">
      <Container>
        <div className="relative overflow-hidden rounded-3xl gradient-primary p-10 text-white shadow-glow sm:p-14">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="relative grid items-center gap-8 md:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold">
                <Mail className="h-3.5 w-3.5" /> Weekly digest
              </div>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Never miss the perfect role</h2>
              <p className="mt-3 max-w-md text-white/85">
                Get curated job matches, salary insights, and career tips delivered every Monday morning.
              </p>
              <div className="mt-4 flex flex-wrap gap-4 text-sm text-white/90">
                <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4" /> No spam</span>
                <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4" /> Unsubscribe anytime</span>
              </div>
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-3 sm:flex-row"
            >
              <Input
                type="email"
                required
                placeholder="you@example.com"
                className="h-12 rounded-full border-white/30 bg-white/15 text-white placeholder:text-white/70 focus-visible:ring-white"
              />
              <Button
                type="submit"
                className="h-12 rounded-full bg-white px-8 font-semibold text-primary hover:bg-white/90"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
