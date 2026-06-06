import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Eye, Globe2, BadgeCheck } from "lucide-react";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How It Works — Risk-Free China Sourcing Process | SinoBridge" },
      { name: "description", content: "Step-by-step China sourcing process: inquiry, sourcing, 20% advance, purchase, inspection, shipping, delivery and final 80% payment." },
      { property: "og:title", content: "How It Works — SinoBridge" },
      { property: "og:description", content: "A transparent 10-step procurement process built around buyer safety." },
      { property: "og:url", content: "/how-it-works" },
    ],
    links: [{ rel: "canonical", href: "/how-it-works" }],
  }),
  component: HowItWorks,
});

const steps = [
  { t: "Client submits inquiry", d: "Tell us the product, target price, quantity and destination country." },
  { t: "Requirement analysis", d: "We review specifications, suggest improvements and confirm feasibility." },
  { t: "Supplier sourcing in China", d: "We brief multiple verified factories and shortlist the best fit." },
  { t: "Quotation & approval", d: "You receive a detailed quote with pricing, MOQ, lead time and terms." },
  { t: "20% advance payment", d: "A small deposit starts the order — your remaining 80% is fully protected." },
  { t: "Product purchase in China", d: "We place the order using our own capital and oversee production." },
  { t: "Quality inspection", d: "Independent QC team inspects the goods before any shipment leaves the factory." },
  { t: "International shipping", d: "Sea, air or door-to-door logistics arranged with full document handling." },
  { t: "Final delivery", d: "Goods arrive at your warehouse, inspected and ready to sell." },
  { t: "Remaining 80% payment", d: "You release the balance only after successful delivery." },
];

const why = [
  { icon: ShieldCheck, t: "Reduces buyer risk", d: "You never pay the full amount upfront for goods you haven't received." },
  { icon: BadgeCheck, t: "Ensures quality control", d: "Independent inspection before shipment means no surprises on arrival." },
  { icon: Globe2, t: "Builds international trust", d: "Our financial involvement aligns our interests with yours." },
  { icon: Eye, t: "Full transparency", d: "Every step is documented, photographed and reported back to you." },
];

function HowItWorks() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="How It Works"
        title="A transparent 10-step process from inquiry to delivery"
        subtitle="Designed to remove every common risk of buying from overseas — and built around real financial commitment from our side."
      />

      <section className="py-20">
        <div className="container-page max-w-4xl">
          <ol className="relative border-l-2 border-border space-y-8 pl-8">
            {steps.map((s, i) => (
              <li key={s.t} className="relative">
                <span className="absolute -left-[2.6rem] grid h-10 w-10 place-items-center rounded-full bg-[image:var(--gradient-primary)] text-primary-foreground font-bold shadow-[var(--shadow-card)]">
                  {i + 1}
                </span>
                <div className="rounded-2xl border border-border bg-card p-6 hover:shadow-[var(--shadow-card)] transition-shadow">
                  <h3 className="text-lg font-bold">{s.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-20 bg-[image:var(--gradient-subtle)]">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Why this works</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">A model designed around buyer safety</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {why.map((w) => (
              <div key={w.t} className="rounded-2xl bg-card border border-border p-6 text-center">
                <div className="grid h-12 w-12 mx-auto place-items-center rounded-xl bg-[image:var(--gradient-primary)] text-primary-foreground">
                  <w.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-bold">{w.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{w.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-[image:var(--gradient-primary)] h-12 px-7"><Link to="/contact">Start Your Order</Link></Button>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
