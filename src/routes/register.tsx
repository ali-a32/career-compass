import { createFileRoute, Link } from "@tanstack/react-router";
import { Container } from "@/components/Container";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export const Route = createFileRoute("/register")({
  head: () => ({
    meta: [
      { title: "Create Account — JobVerse" },
      { name: "description", content: "Join JobVerse to unlock AI job matching, save searches, and apply in one click." },
      { property: "og:url", content: "/register" },
    ],
    links: [{ rel: "canonical", href: "/register" }],
  }),
  component: Register,
});

function Register() {
  return (
    <section className="grid min-h-[calc(100vh-80px)] place-items-center py-16">
      <Container className="max-w-md">
        <div className="rounded-3xl border border-border bg-card p-8 shadow-card sm:p-10">
          <div className="text-center">
            <span className="mx-auto grid h-12 w-12 place-items-center rounded-2xl gradient-primary shadow-glow">
              <Sparkles className="h-6 w-6 text-white" />
            </span>
            <h1 className="mt-4 font-heading text-2xl font-bold">Join JobVerse</h1>
            <p className="mt-1 text-sm text-muted-foreground">Create your free account in 30 seconds.</p>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="mt-8 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="fn">First name</Label>
                <Input id="fn" placeholder="Jane" className="rounded-xl" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="ln">Last name</Label>
                <Input id="ln" placeholder="Doe" className="rounded-xl" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Work email</Label>
              <Input id="email" type="email" placeholder="you@company.com" className="rounded-xl" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="pw">Password</Label>
              <Input id="pw" type="password" placeholder="At least 8 characters" className="rounded-xl" />
            </div>
            <Button type="submit" className="w-full rounded-full gradient-primary text-white shadow-soft">
              Create account
            </Button>
          </form>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link to="/login" className="font-semibold text-primary hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </Container>
    </section>
  );
}
