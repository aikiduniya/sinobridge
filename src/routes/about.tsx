import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import { Target, Eye, Award, ShieldCheck, Handshake, CheckCircle2 } from "lucide-react";
import factoryImg from "@/assets/factory.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — China SourceLink China Sourcing Agency" },
      { name: "description", content: "Professional China sourcing and procurement agency helping global businesses import products safely and efficiently from China." },
      { property: "og:title", content: "About Us — China SourceLink" },
      { property: "og:description", content: "Our mission, vision and commitment to risk-free China trade." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const differentiators = [
  { icon: ShieldCheck, title: "Risk-Free Payment Model", desc: "Our 20/80 payment structure protects your capital at every stage." },
  { icon: Handshake, title: "Transparent Pricing", desc: "Flat 10% service fee. No commissions, no kickbacks, no hidden charges." },
  { icon: Award, title: "Real Financial Involvement", desc: "We buy with our own capital — our interests are 100% aligned with yours." },
  { icon: ShieldCheck, title: "Supplier Verification", desc: "Strict factory audits, business licence checks, on-site verification." },
  { icon: Target, title: "End-to-End Procurement", desc: "One partner for sourcing, QC, shipping and customs documentation." },
];

const commitments = [
  "Honesty in every deal",
  "Quality in every product",
  "Trust in every transaction",
  "Long-term business relationships",
];

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About China SourceLink"
        title="Professional China sourcing & procurement, built on trust"
        subtitle="We help global businesses import products safely and efficiently from China through a transparent, risk-free model."
      />

      <section className="py-20">
        <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
          <img src={factoryImg} alt="Modern Chinese manufacturing facility" loading="lazy" width={1280} height={800} className="rounded-2xl shadow-[var(--shadow-card)] aspect-[4/3] object-cover" />
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Who we are</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              China SourceLink is a China-based sourcing and procurement agency serving clients from the USA, Europe, Asia and the Middle East. Our local team combines deep manufacturing know-how with international business standards, removing the language, cultural and logistical barriers that make China sourcing risky for foreign buyers.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We've spent more than a decade building a verified supplier network and refining a buying model that puts your safety first. When you work with us, you get a single accountable partner from first inquiry to final delivery.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[image:var(--gradient-subtle)]">
        <div className="container-page grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-card border border-border p-8">
            <Target className="h-9 w-9 text-primary" />
            <h3 className="mt-4 text-xl font-bold">Our Mission</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              To simplify China sourcing for international businesses with trust and transparency — turning a complex global supply chain into a service that simply works.
            </p>
          </div>
          <div className="rounded-2xl bg-card border border-border p-8">
            <Eye className="h-9 w-9 text-primary" />
            <h3 className="mt-4 text-xl font-bold">Our Vision</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              To become a leading global sourcing partner for China trade solutions, recognised for our integrity, our supplier network and the long-term partnerships we build.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">What Makes Us Different</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">A model built around your safety</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((d) => (
              <div key={d.title} className="rounded-2xl border border-border bg-card p-6 hover:shadow-[var(--shadow-card)] transition-shadow">
                <d.icon className="h-8 w-8 text-primary" />
                <h3 className="mt-4 text-lg font-semibold">{d.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[oklch(0.22_0.06_250)] text-white">
        <div className="container-page max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[oklch(0.85_0.12_75)]">Our Commitment</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">The principles we trade by</h2>
          <ul className="mt-10 grid sm:grid-cols-2 gap-4 text-left">
            {commitments.map((c) => (
              <li key={c} className="flex gap-3 rounded-xl bg-white/5 border border-white/10 p-5">
                <CheckCircle2 className="h-5 w-5 text-[oklch(0.85_0.12_75)] shrink-0" />
                <span className="font-medium">{c}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <Button asChild size="lg" className="bg-[oklch(0.85_0.12_75)] hover:bg-[oklch(0.78_0.13_75)] text-[oklch(0.22_0.08_60)] font-semibold h-12 px-6">
              <Link to="/contact">Work With Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
