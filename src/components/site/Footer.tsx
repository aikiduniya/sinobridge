import { Link } from "@tanstack/react-router";
import logoImg from "@/assets/logo.png";
import { Mail, Phone, Facebook, Instagram } from "lucide-react";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M21 8.5a7.5 7.5 0 0 1-4.7-1.64v7.39a6 6 0 1 1-6-6c.34 0 .67.03 1 .09v3.1a3 3 0 1 0 2 2.81V2h3a4.5 4.5 0 0 0 4.7 4.5z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-[oklch(0.18_0.04_250)] text-[oklch(0.92_0.01_245)]">
      <div className="container-page py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="bg-white rounded-lg inline-block p-2">
            <img src={logoImg} alt="China SourceLink" className="h-12 w-auto" />
          </div>
          <p className="mt-4 text-sm text-[oklch(0.75_0.02_245)] leading-relaxed">
            Your trusted China sourcing & procurement partner — generic and branded products. Risk-free buying, end-to-end management.
          </p>
          <div className="flex gap-3 mt-5">
            <a href="https://www.facebook.com/share/1DcvbkvD7U/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="grid h-9 w-9 place-items-center rounded-md bg-white/10 hover:bg-white/20"><Facebook className="h-4 w-4" /></a>
            <a href="https://www.instagram.com/china.sourcelink" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="grid h-9 w-9 place-items-center rounded-md bg-white/10 hover:bg-white/20"><Instagram className="h-4 w-4" /></a>
            <a href="https://www.tiktok.com/@chinasourcelink" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="grid h-9 w-9 place-items-center rounded-md bg-white/10 hover:bg-white/20"><TikTokIcon className="h-4 w-4" /></a>
          </div>
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
            <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5" /> <a href="mailto:info@chinasourcelink.com" className="hover:text-white">info@chinasourcelink.com</a></li>
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5" /> <a href="tel:+15715990628" className="hover:text-white">+1 (571) 599-0628</a></li>
            
          </ul>
          <h4 className="text-white text-sm font-semibold mb-3 mt-6">Legal</h4>
          <ul className="space-y-2 text-sm text-[oklch(0.75_0.02_245)]">
            <li><Link to="/terms" className="hover:text-white">Terms & Conditions</Link></li>
            <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page py-5 text-xs text-[oklch(0.65_0.02_245)] flex flex-col md:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} China SourceLink. All rights reserved.</span>
          <span>Trust · Transparency · Quality</span>
        </div>
      </div>
    </footer>
  );
}
