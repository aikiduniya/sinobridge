import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | China SourceLink" },
      { name: "description", content: "How China SourceLink collects, uses and protects information you share through our website and services." },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Legal" title="Privacy Policy" subtitle="Last updated: June 2026" />
      <section className="py-16">
        <div className="container-page max-w-3xl space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p>This page is maintained by China SourceLink to explain what information we collect and how we use it. We respect your privacy and never sell your data.</p>

          <h2 className="text-xl font-semibold text-foreground">1. Information We Collect</h2>
          <p>When you submit an inquiry, request a quote or contact us, we may collect your name, company, email, phone number, country and the product details you share. We may also collect basic technical information (browser, device, pages visited) through standard analytics.</p>

          <h2 className="text-xl font-semibold text-foreground">2. How We Use Information</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>To respond to your inquiry and prepare quotations</li>
            <li>To deliver sourcing, inspection and shipping services you request</li>
            <li>To send service-related communications</li>
            <li>To improve our website, content and customer experience</li>
          </ul>

          <h2 className="text-xl font-semibold text-foreground">3. Sharing</h2>
          <p>We share only the minimum information needed with vetted suppliers, inspection partners and freight forwarders to fulfil your order. We do not sell or rent personal data.</p>

          <h2 className="text-xl font-semibold text-foreground">4. Data Security</h2>
          <p>We use reasonable technical and organisational measures to protect the information you share with us.</p>

          <h2 className="text-xl font-semibold text-foreground">5. Cookies</h2>
          <p>Our website uses essential cookies and may use analytics cookies to understand site usage. You can disable cookies in your browser settings.</p>

          <h2 className="text-xl font-semibold text-foreground">6. Your Rights</h2>
          <p>You may request access to, correction of or deletion of your personal data at any time by emailing us.</p>

          <h2 className="text-xl font-semibold text-foreground">7. Contact</h2>
          <p>Privacy questions: <a className="text-primary underline" href="mailto:info@chinasourcelink.com">info@chinasourcelink.com</a> · +1 (571) 599-0628</p>
        </div>
      </section>
    </SiteLayout>
  );
}
