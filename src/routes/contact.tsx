import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/Container";
import { Mail, Phone, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — JobVerse" },
      { name: "description", content: "Get in touch with the JobVerse team. We usually reply within one business day." },
      { property: "og:title", content: "Contact — JobVerse" },
      { property: "og:description", content: "Get in touch with the JobVerse team." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHeader eyebrow="Get in touch" title="We'd love to hear from you" description="Questions, feedback, or partnership ideas — reach out and we'll respond within one business day." />
      <section className="py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
            <div className="space-y-4">
              {[
                { icon: Mail, label: "Email", value: "hello@jobverse.com" },
                { icon: Phone, label: "Phone", value: "+1 (555) 010-2024" },
                { icon: MapPin, label: "Office", value: "500 Terry Francois St, San Francisco, CA" },
              ].map((c) => {
                const Icon = c.icon;
                return (
                  <div key={c.label} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft">
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{c.label}</p>
                      <p className="font-heading text-base font-semibold text-foreground">{c.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="rounded-3xl border border-border bg-card p-8 shadow-card"
            >
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
              <div className="mt-4 space-y-2">
                <Label htmlFor="em">Email</Label>
                <Input id="em" type="email" placeholder="you@company.com" className="rounded-xl" />
              </div>
              <div className="mt-4 space-y-2">
                <Label htmlFor="msg">Message</Label>
                <Textarea id="msg" rows={5} placeholder="How can we help?" className="rounded-xl" />
              </div>
              <Button type="submit" className="mt-6 w-full rounded-full gradient-primary text-white sm:w-auto sm:px-10">
                Send message
              </Button>
            </form>
          </div>
        </Container>
      </section>
    </>
  );
}
