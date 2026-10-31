import { createFileRoute } from "@tanstack/react-router";
import { Plane, GraduationCap, Wrench, Phone, ArrowRight, Check, Feather, Layers, Package, BatteryCharging, Camera } from "lucide-react";
import quicksilver2s from "@/assets/quicksilver-sport-2s.jpg";
import skyClouds from "@/assets/sky-clouds.jpg";
import aeroliteAsset from "@/assets/aerolite-103.jpg.asset.json";
import challengerAsset from "@/assets/elizabeth-challenger.jpg.asset.json";
import mzAsset from "@/assets/mz-201.png.asset.json";
import magnumAsset from "@/assets/magnum-parachutes.jpg.asset.json";
import shopAsset from "@/assets/hangar-shop.jpg.asset.json";
import salesAsset from "@/assets/sales-flight.jpg.asset.json";

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
  { id: "sales", icon: Plane, title: "Aircraft Sales", text: "Inspected, pre-owned and new aircraft with transparent logs and financing guidance.", cta: "Browse aircraft", href: "#aircraft" },
  { id: "training", icon: GraduationCap, title: "Flight Training", text: "Discovery flights through Private, Instrument and Commercial ratings with certified instructors.", cta: "Book a discovery flight", href: "#contact" },
  { id: "parts", icon: Wrench, title: "Parts & Supplies", text: "Certified airframe, engine and avionics parts shipped fast, with traceable paperwork.", cta: "Request a part", href: "#parts-showcase" },
];

const aircraftLineup = [
  {
    src: challengerAsset.url,
    alt: "Young pilot in a headset at the controls of the Elizabeth Challenger",
    title: "Challenger II",
    text: "A proven two-seat favorite — economical to fly, easy to maintain, and equally at home on wheels, skis or floats. Pictured: the Elizabeth Challenger.",
  },
  {
    src: quicksilver2s,
    alt: "Quicksilver Sport 2S ultralight aircraft on a sunny grass runway",
    title: "Quicksilver Sport 2S",
    text: "The classic open-air sport flying experience — light, responsive, and backed by our factory-authorized parts support.",
  },
];

const accessories = [
  { icon: Layers, title: "Streamline strut fairings", text: "Reduce drag and pick up performance with clean, slip-on fairings." },
  { icon: Package, title: "Lightweight cargo pods", text: "Add practical storage without giving up useful load." },
  { icon: BatteryCharging, title: "Lightweight lithium batteries", text: "Crank harder and save weight with modern lithium starter batteries." },
];

const hangarPhotos = [
  { src: shopAsset.url, alt: "Technician finishing an aircraft fuselage inside the U-Fly-It hangar", caption: "Assembly & repair in our DeLand hangar", width: 222, height: 167 },
  { src: salesAsset.url, alt: "Two pilots walking around a Challenger aircraft during a sales demo", caption: "Sales walkarounds & demo flights", width: 233, height: 165 },
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
            <a href="#aircraft" className="inline-flex items-center justify-center rounded-full border border-hero-foreground/30 px-6 py-3 font-semibold">View aircraft for sale</a>
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
          {services.map(({ id, icon: Icon, title, text, cta, href }) => (
            <article key={id} id={id} className="flex scroll-mt-20 flex-col rounded-2xl border border-border bg-card p-6">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary"><Icon className="h-6 w-6" /></div>
              <h3 className="font-display text-xl font-bold">{title}</h3>
              <p className="mt-2 flex-1 text-muted-foreground">{text}</p>
              <a href={href} className="mt-6 inline-flex items-center gap-2 font-semibold text-primary">{cta} <ArrowRight className="h-4 w-4" /></a>
            </article>
          ))}
        </div>
      </section>

      <section id="aircraft" className="scroll-mt-20 bg-secondary py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Featured Aircraft</p>
          <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">Fly home in an Aerolite 103</h2>

          <article className="group mt-10 overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition duration-300 hover:shadow-lg hover:shadow-hero/10">
            <div className="grid md:grid-cols-2">
              <div className="relative min-h-64 overflow-hidden md:min-h-full">
                <img src={aeroliteAsset.url} alt="Aerolite 103 ultralight aircraft in flight" width={640} height={427} className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
              </div>
              <div className="flex flex-col justify-center p-6 md:p-10">
                <span className="inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">Factory Authorized</span>
                <h3 className="mt-4 font-display text-2xl font-bold md:text-3xl">Aerolite 103</h3>
                <p className="mt-3 text-muted-foreground">The iconic single-seat ultralight — light on the controls, light on the wallet, and pure fun in the pattern. Available factory assembled or as a quick-build kit.</p>
                <ul className="mt-5 space-y-2 text-sm">
                  {["Part 103 legal — no pilot license required", "Lightweight, easy to hangar and trailer", "Factory assembled or quick-build kit"].map((f) => (
                    <li key={f} className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {f}</li>
                  ))}
                </ul>
                <a href="#contact" className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground">Ask about the Aerolite 103 <ArrowRight className="h-4 w-4" /></a>
              </div>
            </div>
          </article>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {aircraftLineup.map(({ src, alt, title, text }) => (
              <article key={title} className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition duration-300 hover:shadow-lg hover:shadow-hero/10">
                <div className="overflow-hidden">
                  <img src={src} alt={alt} loading="lazy" className="aspect-[3/2] w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold">{title}</h3>
                  <p className="mt-2 text-muted-foreground">{text}</p>
                  <a href="#contact" className="mt-4 inline-flex items-center gap-2 font-semibold text-primary">Inquire about this aircraft <ArrowRight className="h-4 w-4" /></a>
                </div>
              </article>
            ))}
          </div>

          <div className="mx-auto mt-10 grid max-w-3xl gap-6 sm:grid-cols-2">
            {hangarPhotos.map(({ src, alt, caption, width, height }) => (
              <figure key={caption} className="group overflow-hidden rounded-2xl border border-border bg-card p-3 shadow-sm transition duration-300 hover:shadow-md">
                <div className="overflow-hidden rounded-xl">
                  <img src={src} alt={alt} width={width} height={height} loading="lazy" className="w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
                </div>
                <figcaption className="mt-3 flex items-center gap-2 px-1 pb-1 text-sm text-muted-foreground"><Camera className="h-4 w-4 shrink-0 text-primary" /> {caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="parts-showcase" className="scroll-mt-20">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Parts & Powerplants</p>
          <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">Everything your airframe needs</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition duration-300 hover:shadow-lg hover:shadow-hero/10">
              <div className="flex aspect-[4/3] items-center justify-center overflow-hidden bg-secondary p-8">
                <img src={mzAsset.url} alt="MZ 201 lightweight two-stroke aircraft engine" width={616} height={616} loading="lazy" className="max-h-full max-w-full object-contain transition duration-500 group-hover:scale-[1.03]" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-bold">MZ Engines</h3>
                <p className="mt-2 flex-1 text-muted-foreground">Reliable, lightweight two-stroke powerplants — the MZ 201 and the full series. We stock engines and spares and can help you match the right powerplant to your airframe.</p>
                <a href="#contact" className="mt-4 inline-flex items-center gap-2 font-semibold text-primary">Talk engines with us <ArrowRight className="h-4 w-4" /></a>
              </div>
            </article>
            <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition duration-300 hover:shadow-lg hover:shadow-hero/10">
              <div className="flex aspect-[4/3] items-center justify-center overflow-hidden bg-secondary p-8">
                <img src={magnumAsset.url} alt="Magnum ballistic parachute systems and rocket-deployed canisters" width={332} height={427} loading="lazy" className="max-h-full max-w-full object-contain transition duration-500 group-hover:scale-[1.03]" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-bold">Magnum Ballistic Parachutes</h3>
                <p className="mt-2 flex-1 text-muted-foreground">Whole-aircraft emergency recovery systems — when everything else has failed, the Magnum brings you and your airframe down together, safely.</p>
                <a href="#contact" className="mt-4 inline-flex items-center gap-2 font-semibold text-primary">Ask about safety systems <ArrowRight className="h-4 w-4" /></a>
              </div>
            </article>
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {accessories.map(({ icon: Icon, title, text }) => (
              <article key={title} className="rounded-2xl border border-border bg-card p-6 shadow-sm transition duration-300 hover:shadow-md">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><Icon className="h-5 w-5" /></div>
                <h3 className="mt-4 font-semibold">{title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <img src={skyClouds} alt="" aria-hidden="true" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-hero/60" />
        <div className="relative mx-auto max-w-3xl px-4 py-20 text-center text-hero-foreground md:py-28">
          <Feather className="mx-auto h-8 w-8 text-primary" />
          <blockquote className="mt-6 font-display text-2xl font-semibold leading-snug md:text-4xl">“They will soar on wings like eagles…”</blockquote>
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.3em] opacity-80">— Isaiah 40:31</p>
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
