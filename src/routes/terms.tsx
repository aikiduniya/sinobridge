import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions | China SourceLink" },
      { name: "description", content: "Terms and conditions governing the use of China SourceLink sourcing and procurement services." },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Legal" title="Terms & Conditions" subtitle="Last updated: June 2026" />
      <section className="py-16">
        <div className="container-page max-w-3xl prose-like space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p>This page is maintained by China SourceLink to explain the terms that apply when you use our website, request quotes or engage our sourcing and procurement services.</p>

          <h2 className="text-xl font-semibold text-foreground">1. Services</h2>
          <p>China SourceLink provides product sourcing, supplier verification, price negotiation, quality inspection, procurement management and logistics coordination for international clients buying from China.</p>

          <h2 className="text-xl font-semibold text-foreground">2. Quotations & Orders</h2>
          <p>Quotations are based on the specifications you provide and remain valid for the period stated. An order is confirmed once the agreed advance payment is received and we issue a written order confirmation.</p>

          <h2 className="text-xl font-semibold text-foreground">3. Payments</h2>
          <p>Our standard model is 20% advance to start the order and 80% after delivery, subject to written agreement on each project. A flat 10% service fee applies on total order value unless otherwise agreed.</p>

          <h2 className="text-xl font-semibold text-foreground">4. Quality Inspection</h2>
          <p>We perform independent pre-shipment inspection on every order. Acceptance criteria, AQL levels and inspection scope are agreed in writing before production.</p>

          <h2 className="text-xl font-semibold text-foreground">5. Shipping & Risk</h2>
          <p>Shipping terms (FOB, CIF, DDP, etc.) are defined per order. Risk transfers to the buyer in line with the agreed Incoterm.</p>

          <h2 className="text-xl font-semibold text-foreground">6. Intellectual Property</h2>
          <p>Clients are responsible for ensuring that the products they ask us to source do not infringe third-party intellectual property rights. Brand or trademark references on this site are used only to describe categories of products we have sourced.</p>

          <h2 className="text-xl font-semibold text-foreground">7. Limitation of Liability</h2>
          <p>To the maximum extent permitted by law, our liability for any single order is limited to the service fee paid for that order.</p>

          <h2 className="text-xl font-semibold text-foreground">8. Governing Law</h2>
          <p>These terms are governed by the laws of the People's Republic of China. Disputes will be resolved through good-faith negotiation and, if necessary, arbitration.</p>

          <h2 className="text-xl font-semibold text-foreground">9. Contact</h2>
          <p>Questions about these terms: <a className="text-primary underline" href="mailto:info@chinasourcelink.com">info@chinasourcelink.com</a></p>
        </div>
      </section>
    </SiteLayout>
  );
}
