import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/site/Layout";
import { InquiryForm } from "@/components/site/InquiryForm";
import {
  CheckCircle2, Globe2, Award, Zap, BadgePercent, ArrowRight, Star, Factory,
  Cpu, Shirt, Wrench, UtensilsCrossed, Car, Settings2,
  ShieldCheck, Handshake, Boxes, ChevronLeft, ChevronRight,
} from "lucide-react";
import heroImg from "@/assets/hero-port.jpg";
import factoryImg from "@/assets/factory.jpg";
import inspectionImg from "@/assets/inspection.jpg";
import { services } from "@/data/services";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "China SourceLink — Trusted China Sourcing & Procurement Agency" },
      { name: "description", content: "Source products & branded goods from China with full trust. Supplier verification, quality inspection, negotiation & global shipping. Risk-free 20/80 payment model." },
      { property: "og:title", content: "China SourceLink — Trusted China Sourcing & Procurement Agency" },
      { property: "og:description", content: "End-to-end China sourcing — generic and branded products. Risk-free buying. Transparent 10% service fee." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const industries = [
  { icon: Cpu, label: "Electronics" },
  { icon: Shirt, label: "Textiles & Garments" },
  { icon: Wrench, label: "Machinery & Industrial" },
  { icon: UtensilsCrossed, label: "Home & Kitchen" },
  { icon: Car, label: "Automotive Parts" },
  { icon: Settings2, label: "Custom Manufacturing" },
];

const why = [
  { icon: ShieldCheck, title: "Verified Supplier Network", desc: "Vetted manufacturers across all major Chinese hubs." },
  { icon: Handshake, title: "Strong Negotiation Power", desc: "Local team, native language, factory-direct pricing." },
  { icon: Award, title: "Quality Guaranteed", desc: "Independent inspection before any payment is released." },
  { icon: ShieldCheck, title: "Risk-Free Buying Model", desc: "Only 20% advance — pay the rest after delivery." },
  { icon: Boxes, title: "End-to-End Management", desc: "Sourcing, QC, shipping, customs — all in one place." },
  { icon: Zap, title: "Fast Global Response", desc: "12–24h response, English-speaking account managers." },
];

const brandNames = [
  "Nike", "Adidas", "Puma", "Apple", "Samsung", "Xiaomi", "Sony", "HP", "Dell", "Zara",
];

const steps = [
  "20% advance to start",
  "We purchase with our own capital",
  "Quality inspection before shipment",
  "Safe international shipping",
  "Remaining 80% after delivery",
];

const testimonials = [
  { name: "Michael R.", role: "Importer, USA", text: "The 20/80 payment model gave us total peace of mind. Shipment arrived inspected and on schedule." },
  { name: "Sara K.", role: "Retail Chain, UAE", text: "China SourceLink negotiated 18% below our previous costs and handled every customs document." },
  { name: "Lukas H.", role: "E-commerce, Germany", text: "Professional, transparent and fast. They feel like an extension of our own team in China." },
];

const faqs = [
  { q: "How does the 20/80 payment model work?", a: "You pay a 20% advance to initiate the order. We use our own capital to buy goods in China and only release shipment after our quality inspection passes. The remaining 80% is paid after delivery to your country." },
  { q: "Can you source branded or licensed products?", a: "Yes. Alongside generic products, we help clients source branded goods, licensed merchandise and OEM/ODM products through authorised channels and verified factories." },
  { q: "What is your service fee?", a: "A flat, transparent 10% of the total order value covers sourcing, supplier verification, negotiation, inspection coordination and risk management. There are no hidden charges." },
  { q: "Which countries do you serve?", a: "We serve clients globally with a strong focus on the USA, Europe, the Middle East and the rest of Asia." },
  { q: "Can you handle small or trial orders?", a: "Yes. We work with both first-time importers placing trial orders and established companies scaling production." },
];

function Home() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="China shipping port with cargo containers" className="h-full w-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-[image:var(--gradient-hero)] opacity-90" />
        </div>
        <div className="container-page relative py-24 md:py-32 text-white">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.78_0.13_75)]" />
              Trusted by 500+ global importers
            </span>
            <h1 className="mt-5 text-4xl md:text-6xl font-bold leading-[1.05]">
              Your Trusted China Sourcing & <span className="text-[oklch(0.85_0.12_75)]">Global Procurement</span> Partner
            </h1>
            <p className="mt-6 text-lg text-white/85 max-w-2xl leading-relaxed">
              We help global businesses source generic <span className="font-semibold text-white">and branded products</span> directly from China — with full inspection, negotiation, transparency and end-to-end support.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="h-12 px-6 bg-[oklch(0.78_0.13_75)] hover:bg-[oklch(0.72_0.13_75)] text-[oklch(0.22_0.08_60)] font-semibold">
                <Link to="/contact">Get Free Quote <ArrowRight className="h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 px-6 bg-white/10 border-white/30 text-white hover:bg-white/20">
                <Link to="/how-it-works">Start Sourcing Today</Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="h-12 px-6 text-white hover:bg-white/10">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl">
              {[
                ["500+", "Global Clients"],
                ["12+ yrs", "China Experience"],
                ["1,200+", "Verified Suppliers"],
                ["35+", "Countries Served"],
              ].map(([n, l]) => (
                <div key={l}>
                  <div className="text-2xl md:text-3xl font-bold text-white">{n}</div>
                  <div className="text-xs uppercase tracking-wider text-white/70 mt-1">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY US (moved up, replaces about intro) */}
      <section className="py-20 bg-background">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Why Choose Us</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">Global standards, China expertise</h2>
            <p className="mt-4 text-muted-foreground">Six reasons international buyers choose us as their long-term sourcing partner in China.</p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {why.map((w) => (
              <div key={w.title} className="rounded-2xl border border-border bg-card p-6 hover:border-primary/40 hover:shadow-[var(--shadow-card)] transition-all">
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-[image:var(--gradient-primary)] text-primary-foreground">
                  <w.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{w.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES SLIDER */}
      <ServicesSlider />

      {/* BRANDED PRODUCTS */}
      <section className="py-20 bg-background">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Branded & OEM Sourcing</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">We source branded products too</h2>
            <p className="mt-4 text-muted-foreground">
              Need authentic branded goods, licensed merchandise or OEM/ODM products? We work with authorised distributors and verified factories to source the brand-name items your customers ask for.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {brandNames.map((b) => (
              <div
                key={b}
                className="rounded-xl border border-border bg-card px-4 py-6 text-center text-lg font-display font-bold tracking-tight text-foreground/80 hover:text-primary hover:border-primary/40 transition-colors"
              >
                {b}
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-muted-foreground">
            Brand names shown are trademarks of their respective owners and are referenced only to illustrate categories of products we have helped clients source.
          </p>
        </div>
      </section>

      {/* TRUSTED BUYING MODEL */}
      <section className="py-20 bg-[oklch(0.22_0.06_250)] text-white">
        <div className="container-page grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[oklch(0.85_0.12_75)]">Trusted Buying Model</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold leading-tight">
              Buy from China with <span className="text-[oklch(0.85_0.12_75)]">full trust</span> & zero risk
            </h2>
            <p className="mt-5 text-white/80 leading-relaxed">
              Our unique payment and inspection model removes every common risk of buying from overseas. We put our own capital on the line so you don't have to.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-3">
              <Stat big="20%" small="Advance to start order" />
              <Stat big="80%" small="Paid after delivery" />
              <Stat big="100%" small="Inspected before shipment" />
              <Stat big="10%" small="Flat transparent service fee" />
            </div>
          </div>
          <ol className="relative space-y-5">
            {steps.map((s, i) => (
              <li key={s} className="flex gap-4 bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[oklch(0.85_0.12_75)] text-[oklch(0.22_0.08_60)] font-bold">{i + 1}</div>
                <div className="font-medium">{s}</div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* SERVICE FEE */}
      <section className="py-20 bg-background">
        <div className="container-page max-w-4xl">
          <div className="rounded-3xl border border-border bg-card p-10 md:p-14 shadow-[var(--shadow-card)] text-center">
            <BadgePercent className="h-12 w-12 mx-auto text-primary" />
            <h2 className="mt-5 text-3xl md:text-4xl font-bold">Transparent 10% service fee</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              A flat 10% on total order value covers sourcing, negotiation, inspection, coordination, and risk management. No hidden charges, no commissions from suppliers — ever.
            </p>
            <div className="mt-8 grid sm:grid-cols-3 gap-4 text-sm">
              {["Sourcing & Negotiation", "Quality Inspection", "End-to-end Coordination"].map((t) => (
                <div key={t} className="rounded-xl bg-secondary px-4 py-3 font-medium">{t}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-20 bg-[image:var(--gradient-subtle)]">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Industries</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">Industries we serve</h2>
          </div>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((i) => (
              <div key={i.label} className="rounded-xl border border-border bg-card px-4 py-6 text-center hover:border-primary/40 hover:shadow-[var(--shadow-card)] transition-all">
                <i.icon className="h-7 w-7 mx-auto text-primary" />
                <div className="mt-3 text-sm font-medium">{i.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT US (moved below industries) */}
      <section className="py-20 bg-background">
        <div className="container-page grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">About Us</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">A China-based partner you can finally trust</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              We are a China-based sourcing and procurement company helping international clients connect with verified manufacturers across China. From supplier selection to final delivery, our team manages the full process so you can buy with confidence — for both generic and branded product lines.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {[
                "Local team in China with international standards",
                "Risk-free 20/80 payment model with full transparency",
                "On-the-ground inspection on every order",
              ].map((t) => (
                <li key={t} className="flex gap-3"><CheckCircle2 className="h-5 w-5 text-[var(--color-success)] shrink-0" /> {t}</li>
              ))}
            </ul>
            <div className="mt-8">
              <Button asChild className="bg-[image:var(--gradient-primary)]"><Link to="/about">Learn About Us <ArrowRight className="h-4 w-4" /></Link></Button>
            </div>
          </div>
          <div className="relative">
            <img src={factoryImg} alt="Verified Chinese factory production line" loading="lazy" width={1280} height={800} className="rounded-2xl shadow-[var(--shadow-card)] aspect-[4/3] object-cover" />
            <div className="absolute -bottom-6 -left-6 hidden md:flex bg-white rounded-xl p-4 shadow-[var(--shadow-elegant)] items-center gap-3 border border-border">
              <div className="grid h-12 w-12 place-items-center rounded-lg bg-[image:var(--gradient-primary)] text-white"><Factory className="h-6 w-6" /></div>
              <div>
                <div className="font-bold">1,200+ Factories</div>
                <div className="text-xs text-muted-foreground">Audited & verified</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-[image:var(--gradient-subtle)]">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Client Voices</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">Trusted by importers worldwide</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="rounded-2xl bg-card border border-border p-7 shadow-[var(--shadow-card)]">
                <div className="flex gap-0.5 text-[oklch(0.78_0.13_75)]">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <blockquote className="mt-4 text-sm leading-relaxed text-foreground">"{t.text}"</blockquote>
                <figcaption className="mt-5 text-sm">
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-muted-foreground">{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-background">
        <div className="container-page max-w-3xl">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">FAQ</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">Frequently asked questions</h2>
          </div>
          <div className="mt-10 space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-xl border border-border bg-card p-5 open:shadow-[var(--shadow-card)]">
                <summary className="cursor-pointer list-none flex items-center justify-between font-semibold">
                  {f.q}
                  <span className="text-primary transition-transform group-open:rotate-45 text-xl leading-none">+</span>
                </summary>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + QUICK FORM */}
      <section className="py-20 bg-[image:var(--gradient-hero)] text-white">
        <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Globe2 className="h-10 w-10 text-[oklch(0.85_0.12_75)]" />
            <h2 className="mt-4 text-3xl md:text-4xl font-bold leading-tight">
              Start your China sourcing journey today with a trusted global partner.
            </h2>
            <p className="mt-4 text-white/85">Get a free, no-obligation quote within 24 hours.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-[oklch(0.78_0.13_75)] hover:bg-[oklch(0.72_0.13_75)] text-[oklch(0.22_0.08_60)] font-semibold h-12 px-6">
                <Link to="/contact">Get Quote Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 h-12 px-6">
                <Link to="/contact">Contact Our Team</Link>
              </Button>
            </div>
            <img src={inspectionImg} alt="Quality inspector checking goods" loading="lazy" width={1280} height={800} className="mt-10 rounded-2xl object-cover aspect-[16/9] hidden lg:block" />
          </div>
          <div className="rounded-2xl bg-white p-7 md:p-9 text-foreground shadow-[var(--shadow-elegant)]">
            <h3 className="text-xl font-bold">Request a Free Quote</h3>
            <p className="text-sm text-muted-foreground mt-1">Tell us about your product and we'll respond within 12–24 hours.</p>
            <div className="mt-6"><InquiryForm compact /></div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function ServicesSlider() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(0);
  const visible = 3;
  const total = services.length;
  const maxPage = Math.max(0, Math.ceil(total / visible) - 1);

  const scrollTo = (p: number) => {
    const next = Math.max(0, Math.min(maxPage, p));
    setPage(next);
    const track = trackRef.current;
    if (!track) return;
    const child = track.children[next * visible] as HTMLElement | undefined;
    if (child) track.scrollTo({ left: child.offsetLeft - track.offsetLeft, behavior: "smooth" });
  };

  return (
    <section className="py-20 bg-[image:var(--gradient-subtle)]">
      <div className="container-page">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Services</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">Everything you need to buy from China</h2>
            <p className="mt-4 text-muted-foreground">A complete procurement service — from finding the right factory to delivering containers at your door.</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => scrollTo(page - 1)}
              disabled={page === 0}
              aria-label="Previous services"
              className="grid h-11 w-11 place-items-center rounded-full border border-border bg-card hover:bg-secondary disabled:opacity-40 disabled:cursor-not-allowed transition"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scrollTo(page + 1)}
              disabled={page >= maxPage}
              aria-label="Next services"
              className="grid h-11 w-11 place-items-center rounded-full border border-border bg-card hover:bg-secondary disabled:opacity-40 disabled:cursor-not-allowed transition"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="mt-10 flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 -mx-4 px-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {services.map((s) => (
            <Link
              key={s.slug}
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="group snap-start shrink-0 w-[85%] sm:w-[48%] lg:w-[calc((100%-3rem)/3)] rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/40 hover:shadow-[var(--shadow-card)] transition-all flex flex-col"
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  width={1280}
                  height={800}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 grid h-10 w-10 place-items-center rounded-lg bg-white/95 text-primary shadow">
                  <s.icon className="h-5 w-5" />
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{s.short}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                  Learn more <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            {Array.from({ length: maxPage + 1 }).map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => scrollTo(i)}
                className={`h-2 rounded-full transition-all ${i === page ? "w-8 bg-primary" : "w-2 bg-border"}`}
              />
            ))}
          </div>
          <Button asChild variant="outline" size="lg">
            <Link to="/services">View All Services <ArrowRight className="h-4 w-4" /></Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function Stat({ big, small }: { big: string; small: string }) {
  return (
    <div className="rounded-xl bg-white/5 border border-white/10 px-5 py-4">
      <div className="text-2xl font-bold text-[oklch(0.85_0.12_75)]">{big}</div>
      <div className="text-xs text-white/75 mt-1">{small}</div>
    </div>
  );
}
