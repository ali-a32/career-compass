import { Apple, Play, Smartphone } from "lucide-react";
import { Container } from "@/components/Container";

export function MobileAppPromo() {
  return (
    <section className="py-20">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary/5 via-card to-accent/10 p-8 shadow-card sm:p-14">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                <Smartphone className="h-3.5 w-3.5" /> Mobile app
              </div>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Job hunting, right in your pocket
              </h2>
              <p className="mt-4 max-w-lg text-muted-foreground">
                Get instant alerts for matching roles, one-tap apply, and interview reminders. Available on iOS and Android.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#" className="inline-flex items-center gap-3 rounded-2xl bg-secondary px-5 py-3 text-secondary-foreground shadow-soft transition-transform hover:scale-105">
                  <Apple className="h-7 w-7" />
                  <div className="text-left">
                    <p className="text-[10px] leading-none opacity-70">Download on the</p>
                    <p className="font-heading text-base font-semibold leading-tight">App Store</p>
                  </div>
                </a>
                <a href="#" className="inline-flex items-center gap-3 rounded-2xl bg-secondary px-5 py-3 text-secondary-foreground shadow-soft transition-transform hover:scale-105">
                  <Play className="h-7 w-7" />
                  <div className="text-left">
                    <p className="text-[10px] leading-none opacity-70">Get it on</p>
                    <p className="font-heading text-base font-semibold leading-tight">Google Play</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="relative mx-auto flex items-center justify-center">
              <div className="relative h-[400px] w-[220px] rounded-[40px] border-[10px] border-secondary bg-gradient-to-br from-primary to-accent shadow-glow animate-float">
                <div className="absolute left-1/2 top-2 h-4 w-20 -translate-x-1/2 rounded-full bg-secondary" />
                <div className="flex h-full flex-col items-center justify-center gap-3 p-4 text-white">
                  <Smartphone className="h-12 w-12 opacity-80" />
                  <p className="font-heading text-lg font-bold">JobVerse</p>
                  <p className="text-center text-xs opacity-80">Your dream job, one swipe away</p>
                </div>
              </div>
              <div className="absolute -right-2 top-8 hidden rounded-2xl border border-border bg-card p-3 shadow-card sm:block">
                <p className="text-xs font-semibold text-foreground">🔔 3 new matches</p>
              </div>
              <div className="absolute -left-2 bottom-10 hidden rounded-2xl border border-border bg-card p-3 shadow-card sm:block">
                <p className="text-xs font-semibold text-foreground">✅ Interview scheduled</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
