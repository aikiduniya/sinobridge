import { MessageCircle } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function FloatingActions() {
  return (
    <>
      <a
        href="https://wa.me/8615900000000"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[oklch(0.65_0.17_150)] text-white shadow-[var(--shadow-elegant)] hover:scale-105 transition-transform"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      <Link
        to="/contact"
        className="fixed bottom-5 left-5 z-50 hidden md:inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-primary)] px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] hover:scale-105 transition-transform"
      >
        Get Free Quote
      </Link>
    </>
  );
}
