import sourcingImg from "@/assets/svc-sourcing.jpg";
import verificationImg from "@/assets/svc-verification.jpg";
import negotiationImg from "@/assets/svc-negotiation.jpg";
import inspectionImg from "@/assets/svc-inspection.jpg";
import procurementImg from "@/assets/svc-procurement.jpg";
import shippingImg from "@/assets/svc-shipping.jpg";
import endtoendImg from "@/assets/svc-endtoend.jpg";
import {
  Search, ShieldCheck, Handshake, ClipboardCheck, Package, Ship, Boxes,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ServiceItem {
  slug: string;
  title: string;
  short: string;
  tagline: string;
  image: string;
  icon: LucideIcon;
  intro: string;
  whatWeDo: string[];
  process: { title: string; desc: string }[];
  benefits: string[];
  ideal: string;
}

export const services: ServiceItem[] = [
  {
    slug: "product-sourcing",
    title: "Product Sourcing from China",
    short: "Find the right manufacturer in China for any product category.",
    tagline: "The right factory, not just any factory.",
    image: sourcingImg,
    icon: Search,
    intro:
      "We help global buyers find the best-matching Chinese manufacturers for any product — from electronics and textiles to custom industrial equipment. Our local team works directly with factories in every major Chinese trade hub.",
    whatWeDo: [
      "Deep research across factories, trade shows and our verified network",
      "Brief multiple suppliers and gather competitive quotations",
      "Compare quality, pricing, MOQ and lead time on your behalf",
      "Shortlist 2–3 best-fit suppliers for your final decision",
      "Provide sample sourcing and side-by-side sample evaluation",
    ],
    process: [
      { title: "Submit Requirement", desc: "Share product specs, target price and quantity." },
      { title: "Market Research", desc: "We identify capable factories across China." },
      { title: "Quotation Round", desc: "Multiple suppliers quote against your spec." },
      { title: "Shortlist & Samples", desc: "Top suppliers selected and samples arranged." },
    ],
    benefits: [
      "Save weeks of research and supplier hunting",
      "Avoid trading companies pretending to be factories",
      "Get factory-direct pricing from day one",
    ],
    ideal: "Importers, e-commerce sellers, brands launching new SKUs.",
  },
  {
    slug: "supplier-verification",
    title: "Supplier Verification & Factory Audit",
    short: "Factory audits, business licence checks, on-site visits.",
    tagline: "Know exactly who you're buying from.",
    image: verificationImg,
    icon: ShieldCheck,
    intro:
      "Before any money changes hands, we verify the supplier behind your order. Our auditors visit the factory in person, check legal documents and confirm real production capability — protecting you from scams and unreliable partners.",
    whatWeDo: [
      "Verify business licence, tax records and export rights",
      "Conduct on-site factory audits with photo and video reports",
      "Check machinery, workforce and production capacity",
      "Review QMS, certifications (ISO, CE, RoHS, FDA, BSCI) when applicable",
      "Validate references from existing international clients",
    ],
    process: [
      { title: "Document Check", desc: "Legal and corporate verification." },
      { title: "Factory Visit", desc: "On-site audit by our local team." },
      { title: "Capability Report", desc: "Detailed PDF with photos & video." },
      { title: "Risk Rating", desc: "Clear green/yellow/red recommendation." },
    ],
    benefits: [
      "Eliminate the #1 risk of overseas buying — fake suppliers",
      "Buy only from verified, audited factories",
      "Full transparency with documented evidence",
    ],
    ideal: "Any buyer placing a first order or moving to a new supplier.",
  },
  {
    slug: "price-negotiation",
    title: "Price Negotiation with Manufacturers",
    short: "Leverage our local relationships to secure the best pricing.",
    tagline: "Local language. Local relationships. Better pricing.",
    image: negotiationImg,
    icon: Handshake,
    intro:
      "Negotiation in China is built on relationships, language and cultural understanding. Our native Mandarin-speaking team negotiates pricing, terms and conditions on your behalf — typically saving clients 10–25% versus quotes they get directly.",
    whatWeDo: [
      "Negotiate unit price, MOQ, payment terms and lead times",
      "Push for better packaging, warranty and after-sales terms",
      "Lock pricing for repeat orders and seasonal demand",
      "Coordinate sample fees, tooling costs and OEM/ODM terms",
      "Document everything in clear, bilingual order agreements",
    ],
    process: [
      { title: "Quote Review", desc: "We benchmark supplier quotes." },
      { title: "Negotiation", desc: "Direct conversations in Mandarin." },
      { title: "Final Offer", desc: "Best price + terms presented." },
      { title: "Agreement", desc: "Bilingual contract signed." },
    ],
    benefits: [
      "Save 10–25% on typical orders",
      "Avoid hidden costs and unfair payment terms",
      "Build long-term, fair partnerships with suppliers",
    ],
    ideal: "Buyers who want enterprise-grade pricing without an in-house China team.",
  },
  {
    slug: "quality-inspection",
    title: "Product Quality Inspection & Testing",
    short: "Pre-shipment inspection and lab testing on every order.",
    tagline: "Inspected before paid. Always.",
    image: inspectionImg,
    icon: ClipboardCheck,
    intro:
      "Every order is independently inspected before shipment. Our QC team checks workmanship, function, packaging and quantity against your spec — and arranges third-party lab testing whenever certification is required.",
    whatWeDo: [
      "Pre-production inspection (raw materials & components)",
      "During-production inspection (DUPRO) on critical orders",
      "Pre-shipment inspection (PSI) with AQL sampling",
      "Detailed photo/video reports of every check",
      "Third-party lab testing (electrical, chemical, safety)",
    ],
    process: [
      { title: "Inspection Plan", desc: "Checklist built around your spec." },
      { title: "On-Site QC", desc: "Inspector visits the factory." },
      { title: "Report Sent", desc: "Pass/fail report within 24 hours." },
      { title: "Action Taken", desc: "Defects fixed before shipment." },
    ],
    benefits: [
      "Catch defects before they reach your warehouse",
      "Reduce returns, refunds and customer complaints",
      "Protect your brand reputation",
    ],
    ideal: "Anyone importing physical products — especially branded or regulated goods.",
  },
  {
    slug: "procurement-management",
    title: "Procurement & Order Management",
    short: "End-to-end order, production and document handling.",
    tagline: "We run your China supply chain for you.",
    image: procurementImg,
    icon: Package,
    intro:
      "We manage the day-to-day work of running orders in China — purchase orders, production tracking, sample approvals, supplier communication and export documentation — so your team can focus on growing the business.",
    whatWeDo: [
      "Issue and manage purchase orders with each supplier",
      "Track production schedules and report progress weekly",
      "Approve samples and revisions on your behalf",
      "Prepare commercial invoices, packing lists and certificates",
      "Centralised dashboard and reporting for all your orders",
    ],
    process: [
      { title: "Order Setup", desc: "PO issued and scheduled." },
      { title: "Production Tracking", desc: "Weekly status reports." },
      { title: "Sample Approval", desc: "Pre-shipment approval cycles." },
      { title: "Documents", desc: "Export paperwork prepared." },
    ],
    benefits: [
      "No need for an in-house China procurement team",
      "Predictable lead times and clear communication",
      "Single point of contact for all suppliers",
    ],
    ideal: "Growing brands juggling multiple suppliers and SKUs.",
  },
  {
    slug: "shipping-logistics",
    title: "Shipping & Logistics Coordination",
    short: "Sea, air and door-to-door delivery to your country.",
    tagline: "From factory floor to your warehouse door.",
    image: shippingImg,
    icon: Ship,
    intro:
      "We coordinate the full international shipping journey — booking freight, consolidating cargo, preparing export documents and working with your customs broker to get goods to your warehouse safely and on time.",
    whatWeDo: [
      "Sea freight (FCL & LCL) from all major Chinese ports",
      "Air freight and express courier for urgent shipments",
      "Door-to-door delivery (DDP / DDU) to 35+ countries",
      "Customs documentation and HS code support",
      "Cargo consolidation across multiple suppliers",
    ],
    process: [
      { title: "Mode Selection", desc: "Best route by cost / speed." },
      { title: "Booking", desc: "Freight space reserved." },
      { title: "Export Docs", desc: "Full document package." },
      { title: "Tracking", desc: "Live updates until delivery." },
    ],
    benefits: [
      "Competitive freight rates via partner forwarders",
      "Avoid customs delays with proper documentation",
      "One bill of lading even with multiple suppliers",
    ],
    ideal: "Buyers tired of juggling forwarders, brokers and suppliers.",
  },
  {
    slug: "end-to-end-buying",
    title: "End-to-End Buying Service",
    short: "One trusted partner from inquiry to final delivery.",
    tagline: "One partner. One invoice. Zero stress.",
    image: endtoendImg,
    icon: Boxes,
    intro:
      "Our flagship service — we handle every step of buying from China for you. Sourcing, verification, negotiation, payment, inspection, shipping and delivery, all under our risk-free 20/80 payment model.",
    whatWeDo: [
      "Manage the entire buying journey end-to-end",
      "Use our own capital to fund the order in China",
      "Apply the 20/80 split: 20% advance, 80% after delivery",
      "Independent inspection before shipment",
      "Single transparent invoice covering everything",
    ],
    process: [
      { title: "20% Advance", desc: "Order begins, no full risk for you." },
      { title: "We Purchase", desc: "Goods bought with our capital." },
      { title: "Inspected & Shipped", desc: "QC passed, freight booked." },
      { title: "80% on Delivery", desc: "Balance paid after arrival." },
    ],
    benefits: [
      "Zero need for a China team or office",
      "Aligned interests — we invest our own capital",
      "Truly risk-free buying with full transparency",
    ],
    ideal: "Buyers who want a turn-key, fully managed China supply chain.",
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
