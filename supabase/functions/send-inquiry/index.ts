import { SMTPClient } from "npm:emailjs@4.0.3";
import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";
import { z } from "npm:zod@3.23.8";

const BodySchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().min(1).max(40),
  country: z.string().trim().min(1).max(80),
  product: z.string().trim().min(1).max(200),
  message: z.string().trim().max(1500).optional().default(""),
});

const ADMIN_EMAIL = "info@chinasourcelink.com";

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!));
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  try {
    const parsed = BodySchema.safeParse(await req.json());
    if (!parsed.success) {
      return new Response(JSON.stringify({ error: parsed.error.flatten().fieldErrors }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    const data = parsed.data;

    const host = Deno.env.get("SMTP_HOST")!;
    const port = parseInt(Deno.env.get("SMTP_PORT") || "465", 10);
    const user = Deno.env.get("SMTP_USERNAME")!;
    const password = Deno.env.get("SMTP_PASSWORD")!;

    const client = new SMTPClient({
      user,
      password,
      host,
      port,
      ssl: port === 465,
      tls: port !== 465,
    });

    const from = `China SourceLink <${user}>`;

    // Admin email
    const adminHtml = `
      <h2>New Inquiry from ${escapeHtml(data.name)}</h2>
      <table cellpadding="6" style="font-family:Arial,sans-serif;font-size:14px;border-collapse:collapse">
        <tr><td><b>Name</b></td><td>${escapeHtml(data.name)}</td></tr>
        <tr><td><b>Email</b></td><td>${escapeHtml(data.email)}</td></tr>
        <tr><td><b>Phone</b></td><td>${escapeHtml(data.phone)}</td></tr>
        <tr><td><b>Country</b></td><td>${escapeHtml(data.country)}</td></tr>
        <tr><td><b>Product</b></td><td>${escapeHtml(data.product)}</td></tr>
        <tr><td valign="top"><b>Message</b></td><td>${escapeHtml(data.message || "-").replace(/\n/g, "<br/>")}</td></tr>
      </table>`;

    await client.sendAsync({
      from,
      to: ADMIN_EMAIL,
      "reply-to": data.email,
      subject: `New Inquiry — ${data.name} (${data.country})`,
      text: `New inquiry\n\nName: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nCountry: ${data.country}\nProduct: ${data.product}\nMessage: ${data.message || "-"}`,
      attachment: [{ data: adminHtml, alternative: true }],
    });

    // Customer confirmation
    const customerHtml = `
      <div style="font-family:Arial,sans-serif;font-size:15px;color:#111;max-width:560px">
        <h2 style="color:#b91c1c;margin:0 0 12px">Thank you, ${escapeHtml(data.name)}!</h2>
        <p>We've received your sourcing inquiry and our team will respond within <b>12–24 hours</b>.</p>
        <p><b>Your request:</b><br/>${escapeHtml(data.product)}</p>
        <hr style="border:none;border-top:1px solid #eee;margin:20px 0"/>
        <p style="margin:0">China SourceLink<br/>
        <a href="mailto:info@chinasourcelink.com">info@chinasourcelink.com</a><br/>
        +1 (571) 599-0628</p>
      </div>`;

    await client.sendAsync({
      from,
      to: data.email,
      subject: "We received your inquiry — China SourceLink",
      text: `Hi ${data.name},\n\nThanks for contacting China SourceLink. We've received your inquiry and will respond within 12–24 hours.\n\nYour request: ${data.product}\n\n— China SourceLink\ninfo@chinasourcelink.com\n+1 (571) 599-0628`,
      attachment: [{ data: customerHtml, alternative: true }],
    });

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("send-inquiry error:", err);
    return new Response(JSON.stringify({ error: (err as Error).message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
