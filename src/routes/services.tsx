import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import {
  Search, ShieldCheck, Handshake, ClipboardCheck, Package, Ship, Boxes, ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — China Sourcing, Inspection & Shipping | SinoBridge" },
      { name: "description", content: "Full China procurement services: sourcing, supplier verification, negotiation, quality inspection, order management and global shipping." },
      { property: "og:title", content: "Services — SinoBridge" },
      { property: "og:description", content: "End-to-end procurement: sourcing, verification, QC and logistics." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Search, title: "Product Sourcing from China", desc: "We identify the best-fit manufacturers for your product, brief multiple factories and shortlist serious, capable suppliers." },
  { icon: ShieldCheck, title: "Supplier Verification & Factory Audit", desc: "Business licence checks, on-site visits, production capacity review and reference checks to confirm legitimacy and capability." },
  { icon: Handshake, title: "Price Negotiation with Manufacturers", desc: "Our local team negotiates pricing, payment terms, MOQ, samples and lead times directly in Mandarin." },
  { icon: ClipboardCheck, title: "Product Quality Inspection & Testing", desc: "Pre-production, in-line and pre-shipment inspections with photo/video reports. Lab testing arranged on request." },
  { icon: Package, title: "Procurement & Order Management", desc: "Purchase orders, production tracking, sample approvals and full document handling — all coordinated for you." },
  { icon: Ship, title: "Shipping & Logistics Coordination", desc: "Sea, air, express and door-to-door delivery. Customs documents prepared, freight forwarders coordinated, ETAs tracked." },
  { icon: Boxes, title: "End-to-End Buying Service", desc: "One trusted partner from first inquiry to final delivery — no need to manage suppliers, forwarders or inspectors yourself." },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Our Services"
        title="A complete China procurement service under one roof"
        subtitle="From the first product brief to the final container at your warehouse — we handle every step with full transparency."
      />

      <section className="py-20">
        <div className="container-page">
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((s, i) => (
              <div key={s.title} className="rounded-2xl border border-border bg-card p-7 hover:shadow-[var(--shadow-card)] hover:border-primary/40 transition-all">
                <div className="flex items-center gap-4">
                  <div className="grid h-14 w-14 place-items-center rounded-xl bg-[image:var(--gradient-primary)] text-primary-foreground">
                    <s.icon className="h-7 w-7" />
                  </div>
                  <span className="text-xs font-semibold text-muted-foreground">SERVICE 0{i + 1}</span>
                </div>
                <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[image:var(--gradient-hero)] text-white">
        <div className="container-page text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Not sure which service you need?</h2>
          <p className="mt-3 text-white/85 max-w-xl mx-auto">Share your product idea — we'll recommend the right scope and a transparent quote.</p>
          <Button asChild size="lg" className="mt-7 h-12 px-7 bg-[oklch(0.85_0.12_75)] hover:bg-[oklch(0.78_0.13_75)] text-[oklch(0.22_0.08_60)] font-semibold">
            <Link to="/contact">Get a Free Quote <ArrowRight className="h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </SiteLayout>
  );
}
