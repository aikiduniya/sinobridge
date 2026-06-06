import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(2, "Name is required").max(100),
  email: z.string().trim().email("Valid email required").max(255),
  phone: z.string().trim().min(4, "Phone is required").max(40),
  country: z.string().trim().min(2, "Country is required").max(80),
  product: z.string().trim().min(2, "Product requirement is required").max(200),
  message: z.string().trim().max(1500).optional(),
});

export function InquiryForm({ compact = false }: { compact?: boolean }) {
  const [submitting, setSubmitting] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      phone: fd.get("phone"),
      country: fd.get("country"),
      product: fd.get("product"),
      message: fd.get("message") || undefined,
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form.");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Inquiry received. Our team will respond within 12–24 hours.");
    }, 700);
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className={compact ? "grid gap-4" : "grid gap-4 md:grid-cols-2"}>
        <Field label="Full Name" name="name" placeholder="John Smith" />
        <Field label="Email" name="email" type="email" placeholder="john@company.com" />
        <Field label="Phone / WhatsApp" name="phone" placeholder="+1 555 123 4567" />
        <Field label="Country" name="country" placeholder="United States" />
      </div>
      <Field label="Product Requirement" name="product" placeholder="e.g. Bluetooth speakers, 5000 units" />
      <div className="grid gap-1.5">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" rows={4} placeholder="Tell us about your sourcing needs, target price, timeline..." />
      </div>
      <Button
        type="submit"
        disabled={submitting}
        size="lg"
        className="bg-[image:var(--gradient-primary)] shadow-[var(--shadow-card)] h-12"
      >
        {submitting ? "Sending..." : "Submit Inquiry"}
      </Button>
      <p className="text-xs text-muted-foreground text-center">
        We respond within 12–24 hours. Your information stays confidential.
      </p>
    </form>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div className="grid gap-1.5">
      <Label htmlFor={name}>{label}</Label>
      <Input id={name} name={name} type={type} placeholder={placeholder} required />
    </div>
  );
}
