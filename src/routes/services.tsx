import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import { ArrowRight } from "lucide-react";

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

function ServicesPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Our Services"
        title="A complete China procurement service under one roof"
        subtitle="From the first product brief to the final container at your warehouse — explore each service in detail."
      />

      <section className="py-20">
        <div className="container-page">
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="group rounded-2xl bg-card border border-border overflow-hidden hover:shadow-[var(--shadow-card)] hover:border-primary/40 transition-all flex flex-col"
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
                  <div className="absolute top-4 left-4 grid h-11 w-11 place-items-center rounded-xl bg-white/95 text-primary shadow-md">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <span className="absolute top-4 right-4 text-xs font-semibold text-white bg-black/40 backdrop-blur px-2 py-1 rounded">
                    0{i + 1}
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{s.short}</p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                    View details <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
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
