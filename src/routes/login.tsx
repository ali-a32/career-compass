import { createFileRoute, Link } from "@tanstack/react-router";
import { Container } from "@/components/Container";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Login — JobVerse" },
      { name: "description", content: "Sign in to your JobVerse account to apply, save jobs, and track applications." },
      { property: "og:url", content: "/login" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/login" }],
  }),
  component: Login,
});

function Login() {
  return (
    <section className="grid min-h-[calc(100vh-80px)] place-items-center py-16">
      <Container className="max-w-md">
        <div className="rounded-3xl border border-border bg-card p-8 shadow-card sm:p-10">
          <div className="text-center">
            <span className="mx-auto grid h-12 w-12 place-items-center rounded-2xl gradient-primary shadow-glow">
              <Sparkles className="h-6 w-6 text-white" />
            </span>
            <h1 className="mt-4 font-heading text-2xl font-bold">Welcome back</h1>
            <p className="mt-1 text-sm text-muted-foreground">Sign in to continue your job search.</p>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="mt-8 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@company.com" className="rounded-xl" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="pw">Password</Label>
              <Input id="pw" type="password" placeholder="••••••••" className="rounded-xl" />
            </div>
            <Button type="submit" className="w-full rounded-full gradient-primary text-white shadow-soft">
              Sign in
            </Button>
          </form>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            New here?{" "}
            <Link to="/register" className="font-semibold text-primary hover:underline">
              Create an account
            </Link>
          </p>
        </div>
      </Container>
    </section>
  );
}
