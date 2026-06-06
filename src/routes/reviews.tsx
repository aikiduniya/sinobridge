import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Star, Quote } from "lucide-react";

interface Review {
  name: string;
  role: string;
  country: string;
  rating: number;
  text: string;
  date: string;
}

const seedReviews: Review[] = [
  { name: "Michael Reynolds", role: "Founder", country: "USA", rating: 5, text: "The 20/80 payment model gave us total peace of mind on our first container. Shipment arrived inspected and on schedule. SinoBridge feels like our China office.", date: "Mar 2026" },
  { name: "Sara Khalifa", role: "Procurement Head, Retail Chain", country: "UAE", rating: 5, text: "Their negotiation team got us 18% below our previous prices and handled every customs document. Truly transparent and professional.", date: "Feb 2026" },
  { name: "Lukas Hartmann", role: "E-commerce Owner", country: "Germany", rating: 5, text: "Professional, transparent and fast. They feel like an extension of our own team in China. Inspection reports caught issues we would have missed.", date: "Jan 2026" },
  { name: "Aiko Tanaka", role: "Buyer", country: "Japan", rating: 4, text: "Great supplier verification work. Saved us from a fraudulent factory and found a much better alternative within two weeks.", date: "Dec 2025" },
  { name: "Carlos Mendes", role: "Importer", country: "Brazil", rating: 5, text: "End-to-end service is exactly what we needed. One invoice, one contact, zero stress. Highly recommended for first-time China buyers.", date: "Nov 2025" },
  { name: "Priya Sharma", role: "Brand Owner", country: "India", rating: 5, text: "Custom OEM project was handled brilliantly. Samples, tooling, packaging — every step communicated clearly. Will use them for every reorder.", date: "Oct 2025" },
];

const reviewSchema = z.object({
  name: z.string().trim().min(2, "Name is required").max(100),
  country: z.string().trim().min(2, "Country is required").max(80),
  role: z.string().trim().max(120).optional().or(z.literal("")),
  rating: z.number().min(1).max(5),
  text: z.string().trim().min(15, "Review must be at least 15 characters").max(1500),
});

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Client Reviews — SinoBridge China Sourcing Agency" },
      { name: "description", content: "Real reviews from importers worldwide. Share your experience with SinoBridge or read what global buyers say about our China sourcing service." },
      { property: "og:title", content: "Client Reviews — SinoBridge" },
      { property: "og:description", content: "Trusted by importers in 35+ countries." },
      { property: "og:url", content: "/reviews" },
    ],
    links: [{ rel: "canonical", href: "/reviews" }],
  }),
  component: ReviewsPage,
});

function ReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>(seedReviews);
  const [rating, setRating] = useState(5);
  const [submitting, setSubmitting] = useState(false);

  const avg = reviews.reduce((a, r) => a + r.rating, 0) / reviews.length;

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = reviewSchema.safeParse({
      name: fd.get("name"),
      country: fd.get("country"),
      role: fd.get("role") || "",
      rating,
      text: fd.get("text"),
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form.");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setReviews((prev) => [
        {
          name: parsed.data.name,
          role: parsed.data.role || "Verified Client",
          country: parsed.data.country,
          rating: parsed.data.rating,
          text: parsed.data.text,
          date: "Just now",
        },
        ...prev,
      ]);
      setSubmitting(false);
      setRating(5);
      (e.target as HTMLFormElement).reset();
      toast.success("Thanks! Your review has been posted.");
    }, 500);
  }

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Client Reviews"
        title="Trusted by importers in 35+ countries"
        subtitle="Read what global buyers say about working with SinoBridge — and share your own experience."
      />

      {/* Summary */}
      <section className="py-14">
        <div className="container-page">
          <div className="rounded-3xl border border-border bg-card p-8 md:p-12 shadow-[var(--shadow-card)] grid md:grid-cols-3 gap-8 items-center">
            <div className="text-center md:text-left">
              <div className="text-6xl font-bold text-primary">{avg.toFixed(1)}</div>
              <div className="flex gap-1 text-[oklch(0.78_0.13_75)] mt-2 justify-center md:justify-start">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
              </div>
              <div className="mt-2 text-sm text-muted-foreground">Average rating — based on {reviews.length} reviews</div>
            </div>
            <div className="md:col-span-2 grid grid-cols-3 gap-6 text-center">
              {[
                ["500+", "Global clients"],
                ["98%", "Client satisfaction"],
                ["35+", "Countries served"],
              ].map(([n, l]) => (
                <div key={l}>
                  <div className="text-2xl font-bold">{n}</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews grid + write review */}
      <section className="pb-20">
        <div className="container-page grid lg:grid-cols-3 gap-10">
          {/* Reviews */}
          <div className="lg:col-span-2 space-y-5">
            <h2 className="text-2xl font-bold">What our clients say</h2>
            {reviews.map((r, i) => (
              <article key={i} className="rounded-2xl bg-card border border-border p-6 md:p-7 shadow-[var(--shadow-card)]">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="grid h-11 w-11 place-items-center rounded-full bg-[image:var(--gradient-primary)] text-primary-foreground font-bold">
                      {r.name.split(" ").map((p) => p[0]).slice(0, 2).join("")}
                    </div>
                    <div>
                      <div className="font-semibold">{r.name}</div>
                      <div className="text-xs text-muted-foreground">{r.role} · {r.country}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex gap-0.5 text-[oklch(0.78_0.13_75)]">
                      {Array.from({ length: 5 }).map((_, n) => (
                        <Star key={n} className={`h-4 w-4 ${n < r.rating ? "fill-current" : "opacity-25"}`} />
                      ))}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">{r.date}</div>
                  </div>
                </div>
                <Quote className="h-5 w-5 text-primary/40 mt-4" />
                <p className="mt-2 text-sm leading-relaxed text-foreground">{r.text}</p>
              </article>
            ))}
          </div>

          {/* Write a review */}
          <aside className="lg:col-span-1">
            <div className="lg:sticky lg:top-24 rounded-2xl bg-card border border-border p-7 shadow-[var(--shadow-card)]">
              <h2 className="text-xl font-bold">Share your experience</h2>
              <p className="mt-1 text-sm text-muted-foreground">Help other importers by reviewing our service.</p>
              <form onSubmit={onSubmit} className="mt-6 grid gap-4">
                <div className="grid gap-1.5">
                  <Label htmlFor="r-name">Your Name</Label>
                  <Input id="r-name" name="name" required placeholder="Jane Doe" />
                </div>
                <div className="grid gap-1.5">
                  <Label htmlFor="r-country">Country</Label>
                  <Input id="r-country" name="country" required placeholder="United Kingdom" />
                </div>
                <div className="grid gap-1.5">
                  <Label htmlFor="r-role">Role / Company (optional)</Label>
                  <Input id="r-role" name="role" placeholder="Founder, Acme Trading" />
                </div>
                <div className="grid gap-1.5">
                  <Label>Rating</Label>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((n) => (
                      <button
                        key={n}
                        type="button"
                        onClick={() => setRating(n)}
                        aria-label={`Rate ${n} stars`}
                        className="p-1"
                      >
                        <Star className={`h-7 w-7 transition-colors ${n <= rating ? "text-[oklch(0.78_0.13_75)] fill-current" : "text-muted-foreground/40"}`} />
                      </button>
                    ))}
                  </div>
                </div>
                <div className="grid gap-1.5">
                  <Label htmlFor="r-text">Your Review</Label>
                  <Textarea id="r-text" name="text" rows={5} required placeholder="Tell others about your experience with SinoBridge..." />
                </div>
                <Button type="submit" disabled={submitting} size="lg" className="bg-[image:var(--gradient-primary)] h-12">
                  {submitting ? "Posting..." : "Post Review"}
                </Button>
                <p className="text-xs text-muted-foreground">Reviews are moderated. Display only — not stored permanently in this preview.</p>
              </form>
            </div>
          </aside>
        </div>
      </section>
    </SiteLayout>
  );
}
