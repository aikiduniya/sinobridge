import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { Button } from "@/components/ui/button";
import { InquiryForm } from "@/components/site/InquiryForm";
import { services, getService, type ServiceItem } from "@/data/services";
import { ArrowRight, ArrowLeft, CheckCircle2, Sparkles } from "lucide-react";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.service;
    const title = s ? `${s.title} — China SourceLink` : "Service — China SourceLink";
    const desc = s?.short ?? "China sourcing service detail.";
    const url = s ? `https://chinasourcelink.com/services/${s.slug}` : "https://chinasourcelink.com/services";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { name: "keywords", content: s ? `${s.title.toLowerCase()}, China sourcing, ${s.slug.replace(/-/g, " ")}, China procurement, import from China` : "China sourcing" },
        { property: "og:type", content: "article" },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:url", content: url },
        { property: "og:image", content: s?.image ?? "" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: s ? [{ rel: "canonical", href: url }] : [],
      scripts: s
        ? [
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Service",
                name: s.title,
                description: s.intro,
                provider: { "@type": "Organization", name: "China SourceLink", url: "https://chinasourcelink.com/" },
                areaServed: "Worldwide",
                url,
              }),
            },
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: "https://chinasourcelink.com/" },
                  { "@type": "ListItem", position: 2, name: "Services", item: "https://chinasourcelink.com/services" },
                  { "@type": "ListItem", position: 3, name: s.title, item: url },
                ],
              }),
            },
          ]
        : [],
    };
  },
  notFoundComponent: () => (
    <SiteLayout>
      <div className="container-page py-24 text-center">
        <h1 className="text-3xl font-bold">Service not found</h1>
        <p className="mt-3 text-muted-foreground">The service you're looking for doesn't exist.</p>
        <Button asChild className="mt-6"><Link to="/services">Back to Services</Link></Button>
      </div>
    </SiteLayout>
  ),
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service: s } = Route.useLoaderData() as { service: ServiceItem };
  const others = services.filter((x) => x.slug !== s.slug).slice(0, 3);

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[image:var(--gradient-hero)] text-white">
        <div className="container-page py-16 md:py-20 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <Link to="/services" className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white">
              <ArrowLeft className="h-4 w-4" /> All Services
            </Link>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-medium">
              <s.icon className="h-3.5 w-3.5 text-[oklch(0.85_0.12_75)]" />
              Service
            </div>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">{s.title}</h1>
            <p className="mt-4 text-lg text-white/85">{s.tagline}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-[oklch(0.85_0.12_75)] hover:bg-[oklch(0.78_0.13_75)] text-[oklch(0.22_0.08_60)] font-semibold h-12 px-6">
                <Link to="/contact">Get Free Quote <ArrowRight className="h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 h-12 px-6">
                <Link to="/how-it-works">See Our Process</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <img src={s.image} alt={s.title} width={1280} height={800} className="rounded-2xl shadow-[var(--shadow-elegant)] aspect-[4/3] object-cover" />
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16">
        <div className="container-page max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Overview</span>
          <h2 className="mt-3 text-3xl font-bold">What this service is</h2>
          <p className="mt-5 text-muted-foreground leading-relaxed text-lg">{s.intro}</p>
        </div>
      </section>

      {/* What we do + benefits */}
      <section className="pb-20">
        <div className="container-page grid lg:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-border bg-card p-8">
            <h3 className="text-2xl font-bold">What we do for you</h3>
            <ul className="mt-6 space-y-3">
              {s.whatWeDo.map((w) => (
                <li key={w} className="flex gap-3 text-sm">
                  <CheckCircle2 className="h-5 w-5 text-[var(--color-success)] shrink-0 mt-0.5" />
                  <span>{w}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-[image:var(--gradient-subtle)] p-8">
            <h3 className="text-2xl font-bold">Key benefits</h3>
            <ul className="mt-6 space-y-4">
              {s.benefits.map((b) => (
                <li key={b} className="flex gap-3 text-sm font-medium">
                  <Sparkles className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-xl bg-white border border-border p-5">
              <div className="text-xs font-semibold uppercase tracking-wider text-primary">Ideal for</div>
              <p className="mt-2 text-sm">{s.ideal}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-[image:var(--gradient-subtle)]">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Process</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">How we deliver this service</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {s.process.map((p, i) => (
              <div key={p.title} className="rounded-2xl border border-border bg-card p-6 relative">
                <div className="text-5xl font-bold text-primary/20 absolute top-4 right-5">0{i + 1}</div>
                <div className="font-bold text-lg">{p.title}</div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + inquiry */}
      <section className="py-20">
        <div className="container-page grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Ready to get started?</h2>
            <p className="mt-4 text-muted-foreground">
              Send us your requirement and we'll respond within 12–24 hours with a transparent quote covering this service.
            </p>
            <div className="mt-6 space-y-3">
              {[
                "Free quote, no commitment",
                "Transparent 10% service fee",
                "Risk-free 20/80 payment model",
              ].map((t) => (
                <div key={t} className="flex gap-3 text-sm">
                  <CheckCircle2 className="h-5 w-5 text-[var(--color-success)]" /> {t}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl bg-card border border-border p-7 shadow-[var(--shadow-card)]">
            <h3 className="text-xl font-bold">Get Free Quote</h3>
            <p className="text-sm text-muted-foreground mt-1">For: <span className="text-foreground font-medium">{s.title}</span></p>
            <div className="mt-6"><InquiryForm compact /></div>
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="py-20 bg-[image:var(--gradient-subtle)]">
        <div className="container-page">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Explore More</span>
              <h2 className="mt-3 text-3xl font-bold">Other services we provide</h2>
            </div>
            <Link to="/services" className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
              View all <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {others.map((o) => (
              <Link key={o.slug} to="/services/$slug" params={{ slug: o.slug }} className="group rounded-2xl bg-card border border-border overflow-hidden hover:shadow-[var(--shadow-card)] hover:border-primary/40 transition-all">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={o.image} alt={o.title} loading="lazy" width={1280} height={800} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <o.icon className="h-6 w-6 text-primary" />
                  <h3 className="mt-3 font-bold">{o.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{o.short}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
