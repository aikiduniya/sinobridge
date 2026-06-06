import { Link } from "@tanstack/react-router";
import { Ship, Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-[oklch(0.18_0.04_250)] text-[oklch(0.92_0.01_245)]">
      <div className="container-page py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 font-display font-bold text-lg text-white">
            <span className="grid h-9 w-9 place-items-center rounded-md bg-[image:var(--gradient-primary)]">
              <Ship className="h-5 w-5" />
            </span>
            SinoBridge
          </div>
          <p className="mt-4 text-sm text-[oklch(0.75_0.02_245)] leading-relaxed">
            Your trusted China sourcing & procurement partner. Risk-free buying, end-to-end management.
          </p>
        </div>
        <div>
          <h4 className="text-white text-sm font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-[oklch(0.75_0.02_245)]">
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/how-it-works" className="hover:text-white">How It Works</Link></li>
            <li><Link to="/services" className="hover:text-white">Services</Link></li>
            <li><Link to="/reviews" className="hover:text-white">Reviews</Link></li>
            <li><Link to="/faqs" className="hover:text-white">FAQs</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white text-sm font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-[oklch(0.75_0.02_245)]">
            <li><Link to="/services/$slug" params={{ slug: "product-sourcing" }} className="hover:text-white">Product Sourcing</Link></li>
            <li><Link to="/services/$slug" params={{ slug: "supplier-verification" }} className="hover:text-white">Supplier Verification</Link></li>
            <li><Link to="/services/$slug" params={{ slug: "quality-inspection" }} className="hover:text-white">Quality Inspection</Link></li>
            <li><Link to="/services/$slug" params={{ slug: "shipping-logistics" }} className="hover:text-white">Shipping & Logistics</Link></li>
            <li><Link to="/services/$slug" params={{ slug: "end-to-end-buying" }} className="hover:text-white">End-to-End Buying</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white text-sm font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-[oklch(0.75_0.02_245)]">
            <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5" /> hello@sinobridge.co</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5" /> +86 159 0000 0000</li>
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5" /> Yiwu, Zhejiang, China</li>
          </ul>
          <div className="flex gap-3 mt-4">
            <a href="#" aria-label="LinkedIn" className="grid h-8 w-8 place-items-center rounded-md bg-white/10 hover:bg-white/20"><Linkedin className="h-4 w-4" /></a>
            <a href="#" aria-label="Facebook" className="grid h-8 w-8 place-items-center rounded-md bg-white/10 hover:bg-white/20"><Facebook className="h-4 w-4" /></a>
            <a href="#" aria-label="Twitter" className="grid h-8 w-8 place-items-center rounded-md bg-white/10 hover:bg-white/20"><Twitter className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page py-5 text-xs text-[oklch(0.65_0.02_245)] flex flex-col md:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} SinoBridge Sourcing Co., Ltd. All rights reserved.</span>
          <span>Trust · Transparency · Quality</span>
        </div>
      </div>
    </footer>
  );
}
