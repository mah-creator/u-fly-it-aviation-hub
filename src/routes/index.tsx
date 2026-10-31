import { createFileRoute } from "@tanstack/react-router";
import { Plane, GraduationCap, Wrench, Phone, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "U-Fly-It — Aircraft Sales, Flight Training & Parts" },
      { name: "description", content: "Buy aircraft, earn your wings, and source certified parts with U-Fly-It." },
      { property: "og:title", content: "U-Fly-It — Aircraft Sales, Flight Training & Parts" },
      { property: "og:description", content: "Buy aircraft, earn your wings, and source certified parts with U-Fly-It." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  { id: "sales", icon: Plane, title: "Aircraft Sales", text: "Inspected, pre-owned and new aircraft with transparent logs and financing guidance.", cta: "Browse aircraft" },
  { id: "training", icon: GraduationCap, title: "Flight Training", text: "Discovery flights through Private, Instrument and Commercial ratings with certified instructors.", cta: "Book a discovery flight" },
  { id: "parts", icon: Wrench, title: "Parts & Supplies", text: "Certified airframe, engine and avionics parts shipped fast, with traceable paperwork.", cta: "Request a part" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-10 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#" className="font-display text-xl font-bold tracking-tight">U‑FLY‑IT<span className="text-primary">.</span></a>
          <nav className="hidden gap-6 text-sm md:flex">
            {services.map((s) => <a key={s.id} href={`#${s.id}`} className="hover:text-primary">{s.title}</a>)}
          </nav>
          <a href="#contact" className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">Contact</a>
        </div>
      </header>

      <section className="relative overflow-hidden bg-hero text-hero-foreground">
        <div className="mx-auto max-w-6xl px-4 py-20 md:py-32">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary">Sales · Training · Parts</p>
          <h1 className="font-display text-4xl font-bold leading-tight md:text-7xl">Your runway<br />starts here.</h1>
          <p className="mt-6 max-w-xl text-base opacity-80 md:text-lg">Everything a pilot needs under one hangar roof — from your first lesson to your next aircraft.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#training" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground">Book a discovery flight <ArrowRight className="h-4 w-4" /></a>
            <a href="#sales" className="inline-flex items-center justify-center rounded-full border border-hero-foreground/30 px-6 py-3 font-semibold">View aircraft for sale</a>
          </div>
          <div className="mt-14 grid gap-3 border-t border-hero-foreground/15 pt-6 sm:grid-cols-3 sm:gap-4">
            {[
              ["Sun 'n Fun Grand Champion", "Lightplane award winner"],
              ["20+ Years Operating", "DeLand Municipal Airport (KDED)"],
              ["Factory Authorized Dealer", "Challenger · Quicksilver · Aerolite 103"],
            ].map(([n, l]) => (
              <div key={n} className="rounded-xl border border-hero-foreground/15 bg-hero-foreground/5 px-4 py-3">
                <div className="text-sm font-bold md:text-base">{n}</div>
                <div className="mt-1 text-xs opacity-70 md:text-sm">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <h2 className="font-display text-3xl font-bold md:text-4xl">What we do</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map(({ id, icon: Icon, title, text, cta }) => (
            <article key={id} id={id} className="flex scroll-mt-20 flex-col rounded-2xl border border-border bg-card p-6">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary"><Icon className="h-6 w-6" /></div>
              <h3 className="font-display text-xl font-bold">{title}</h3>
              <p className="mt-2 flex-1 text-muted-foreground">{text}</p>
              <a href="#contact" className="mt-6 inline-flex items-center gap-2 font-semibold text-primary">{cta} <ArrowRight className="h-4 w-4" /></a>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-16 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <h2 className="font-display text-3xl font-bold md:text-4xl">Ready for takeoff?</h2>
            <p className="mt-2 opacity-90">Talk to our team about aircraft, training or parts.</p>
            <div className="mt-6 space-y-1 text-sm opacity-90">
              <p>DeLand Municipal Airport · Hangar B<br />915 Biscayne Blvd, DeLand, FL 32724</p>
              <p><a href="mailto:sportplane@uflyit.com" className="underline decoration-primary-foreground/40 underline-offset-4 hover:decoration-primary-foreground">sportplane@uflyit.com</a></p>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <a href="tel:+13867384444" className="inline-flex items-center justify-center gap-2 rounded-full bg-hero px-6 py-3 font-semibold text-hero-foreground"><Phone className="h-4 w-4" /> Office (386) 738-4444</a>
              <a href="tel:+17404074491" className="inline-flex items-center justify-center gap-2 rounded-full bg-hero px-6 py-3 font-semibold text-hero-foreground"><Phone className="h-4 w-4" /> Cell (740) 407-4491</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="mx-auto max-w-6xl px-4 py-8 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} U-Fly-It · DeLand Municipal Airport, Hangar B, 915 Biscayne Blvd, DeLand, FL 32724 · <a href="tel:+13867384444" className="hover:text-primary">(386) 738-4444</a> · <a href="mailto:sportplane@uflyit.com" className="hover:text-primary">sportplane@uflyit.com</a></p>
      </footer>
    </div>
  );
}
