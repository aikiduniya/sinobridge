import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";

const groups = [
  {
    title: "Buying Model & Pricing",
    items: [
      { q: "How does the 20/80 payment model work?", a: "You pay a 20% advance to initiate the order. We use our own capital to buy goods in China and only release shipment after our quality inspection passes. The remaining 80% is paid after delivery to your country." },
      { q: "What is your service fee?", a: "A flat, transparent 10% of the total order value covers sourcing, supplier verification, negotiation, inspection coordination and risk management. There are no hidden charges and we never accept commissions from suppliers." },
      { q: "Are there any hidden costs?", a: "No. The 10% service fee plus actual product cost and actual shipping cost is all you pay. Every invoice is itemised and supported by supplier and freight documentation." },
      { q: "What is the minimum order size you accept?", a: "We work with both small trial orders and large-volume production orders. There is no fixed minimum — we focus on serious buyers regardless of size." },
    ],
  },
  {
    title: "Sourcing & Suppliers",
    items: [
      { q: "How do you find suppliers?", a: "We combine our verified network of over 1,200 audited factories with deep market research, trade-show contacts and on-the-ground visits in China's manufacturing hubs." },
      { q: "Do you only work with factories you already know?", a: "No. For every project we benchmark our network against fresh market research to make sure you get the best-matching supplier — not just a convenient one." },
      { q: "What if the supplier I already have is unreliable?", a: "We can take over an existing relationship, run a fresh audit and renegotiate terms — or source replacement suppliers in parallel without disrupting your business." },
      { q: "Can you help with custom / OEM / ODM products?", a: "Yes. We coordinate sample development, tooling, packaging design and IP protection clauses for custom manufacturing projects." },
    ],
  },
  {
    title: "Quality & Inspection",
    items: [
      { q: "How does quality inspection work?", a: "An independent QC inspector visits the factory before shipment, checks workmanship, function, packaging and quantity against your spec using AQL sampling, and sends you a detailed photo/video report within 24 hours." },
      { q: "What happens if products fail inspection?", a: "Goods don't ship. The factory must rework, replace or refund the defective items before we release the cargo — and you've only paid 20% so far." },
      { q: "Do you arrange lab testing and certifications?", a: "Yes — we coordinate independent lab testing (electrical safety, chemical, RoHS, FCC, CE etc.) and help with required certifications for your destination market." },
    ],
  },
  {
    title: "Shipping & Logistics",
    items: [
      { q: "Which countries do you ship to?", a: "We serve clients in 35+ countries with a strong focus on the USA, Europe, the Middle East and the rest of Asia. Door-to-door (DDP/DDU) options are available for most markets." },
      { q: "Sea or air freight — which should I choose?", a: "Sea freight is cheaper for bulk shipments with 25–45 day lead times. Air or express freight is faster (3–10 days) but more expensive. We recommend the best mode for your cost and timeline." },
      { q: "Do you handle customs documentation?", a: "Yes. We prepare commercial invoices, packing lists, certificates of origin and any required export documents, and we coordinate with your local customs broker." },
      { q: "Can you consolidate shipments from multiple suppliers?", a: "Absolutely. We consolidate cargo from several factories into a single shipment and a single bill of lading to reduce your freight costs." },
    ],
  },
  {
    title: "Working With Us",
    items: [
      { q: "How quickly do you respond to inquiries?", a: "Within 12–24 hours on business days. Urgent WhatsApp messages are usually answered the same hour during China working hours." },
      { q: "What languages does your team speak?", a: "Our client-facing team works in English and Mandarin. We also have account managers comfortable in Arabic and basic European languages." },
      { q: "Will I have a dedicated account manager?", a: "Yes. Every client is assigned an English-speaking account manager who is your single point of contact for sourcing, production and shipping updates." },
      { q: "Is my product idea kept confidential?", a: "Yes. We sign NDAs with both clients and suppliers when needed, and we never share your designs, branding or pricing outside the project team." },
    ],
  },
];

export const Route = createFileRoute("/faqs")({
  head: () => ({
    meta: [
      { title: "FAQs — China Sourcing & Procurement Questions | China SourceLink" },
      { name: "description", content: "Answers to common questions about China sourcing: 20/80 payment model, supplier verification, quality inspection, shipping, fees and customs." },
      { name: "keywords", content: "China sourcing FAQ, China procurement questions, importing from China, supplier verification, China quality inspection, OEM China FAQ" },
      { property: "og:type", content: "article" },
      { property: "og:title", content: "FAQs — China SourceLink" },
      { property: "og:description", content: "Everything global buyers ask about importing from China." },
      { property: "og:url", content: "https://chinasourcelink.com/faqs" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://chinasourcelink.com/faqs" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: groups.flatMap((g) => g.items).map((i) => ({
          "@type": "Question",
          name: i.q,
          acceptedAnswer: { "@type": "Answer", text: i.a },
        })),
      }),
    }],
  }),
  component: FaqsPage,
});

function FaqsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="FAQs"
        title="Frequently Asked Questions"
        subtitle="Everything global buyers ask before sourcing from China. Still have a question? Our team replies within 12–24 hours."
      />

      <section className="py-16">
        <div className="container-page max-w-3xl space-y-14">
          {groups.map((g) => (
            <div key={g.title}>
              <h2 className="text-2xl font-bold mb-5">{g.title}</h2>
              <div className="space-y-3">
                {g.items.map((f) => (
                  <details key={f.q} className="group rounded-xl border border-border bg-card p-5 open:shadow-[var(--shadow-card)]">
                    <summary className="cursor-pointer list-none flex items-center justify-between font-semibold gap-4">
                      <span>{f.q}</span>
                      <span className="text-primary transition-transform group-open:rotate-45 text-xl leading-none shrink-0">+</span>
                    </summary>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-[image:var(--gradient-hero)] text-white">
        <div className="container-page text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold">Still have questions?</h2>
          <p className="mt-3 text-white/85">Our China sourcing experts are one message away.</p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-[oklch(0.85_0.12_75)] text-[oklch(0.22_0.08_60)] font-semibold px-6 h-12">
              Contact Our Team
            </Link>
            <a href="https://wa.me/15715990628" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md bg-white/10 border border-white/30 text-white font-semibold px-6 h-12 hover:bg-white/20">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
