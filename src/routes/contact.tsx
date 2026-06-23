import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { InquiryForm } from "@/components/site/InquiryForm";
import { Mail, Phone, MapPin, MessageCircle, Clock, Facebook, Instagram } from "lucide-react";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M21 8.5a7.5 7.5 0 0 1-4.7-1.64v7.39a6 6 0 1 1-6-6c.34 0 .67.03 1 .09v3.1a3 3 0 1 0 2 2.81V2h3a4.5 4.5 0 0 0 4.7 4.5z" />
    </svg>
  );
}

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Get a Free Quote | China SourceLink" },
      { name: "description", content: "Contact our China sourcing team. Free quotes within 12–24 hours. WhatsApp, email and inquiry form available." },
      { property: "og:title", content: "Contact — China SourceLink" },
      { property: "og:description", content: "Reach our team for a free China sourcing quote." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Contact"
        title="Let's start your China sourcing project"
        subtitle="Send us your product requirement and our team will respond with a transparent quote within 12–24 hours."
      />

      <section className="py-20">
        <div className="container-page grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3 rounded-2xl bg-card border border-border p-7 md:p-10 shadow-[var(--shadow-card)]">
            <h2 className="text-2xl font-bold">Send us an inquiry</h2>
            <p className="mt-1 text-sm text-muted-foreground">All fields are confidential. We never share your data.</p>
            <div className="mt-7"><InquiryForm /></div>
          </div>

          <aside className="lg:col-span-2 space-y-5">
            <InfoCard icon={Mail} title="Email Support" lines={["hello@sinobridge.co", "sales@sinobridge.co"]} />
            <InfoCard icon={Phone} title="Call / WhatsApp" lines={["+86 159 0000 0000"]} />
            <InfoCard icon={MapPin} title="Office" lines={["International Trade Mart", "Yiwu, Zhejiang, China"]} />
            <InfoCard icon={Clock} title="Response Time" lines={["Within 12–24 hours, Mon–Sat"]} />

            <a
              href="https://wa.me/8615900000000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-2xl bg-[oklch(0.65_0.17_150)] text-white p-5 hover:opacity-95 transition-opacity"
            >
              <MessageCircle className="h-6 w-6" />
              <div>
                <div className="font-semibold">Chat on WhatsApp</div>
                <div className="text-sm text-white/85">Fastest way to reach our team</div>
              </div>
            </a>

            <div className="rounded-2xl border border-border bg-card p-5">
              <div className="text-sm font-semibold mb-3">Follow us</div>
              <div className="flex gap-3">
                <a href="#" aria-label="LinkedIn" className="grid h-10 w-10 place-items-center rounded-lg bg-secondary hover:bg-accent"><Linkedin className="h-4 w-4" /></a>
                <a href="#" aria-label="Facebook" className="grid h-10 w-10 place-items-center rounded-lg bg-secondary hover:bg-accent"><Facebook className="h-4 w-4" /></a>
                <a href="#" aria-label="Twitter" className="grid h-10 w-10 place-items-center rounded-lg bg-secondary hover:bg-accent"><Twitter className="h-4 w-4" /></a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </SiteLayout>
  );
}

function InfoCard({ icon: Icon, title, lines }: { icon: React.ComponentType<{ className?: string }>; title: string; lines: string[] }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 flex gap-4">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-[image:var(--gradient-primary)] text-primary-foreground">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="font-semibold">{title}</div>
        {lines.map((l) => <div key={l} className="text-sm text-muted-foreground">{l}</div>)}
      </div>
    </div>
  );
}
