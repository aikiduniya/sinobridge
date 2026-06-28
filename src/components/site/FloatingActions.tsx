import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { CONTACT } from "@/lib/contact";

export function FloatingActions() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
        {open && (
          <div
            role="dialog"
            aria-label="Choose WhatsApp number"
            className="rounded-2xl border border-border bg-card shadow-[var(--shadow-elegant)] w-72 p-4 animate-in fade-in slide-in-from-bottom-2"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="text-sm font-semibold">Chat on WhatsApp</div>
              <button onClick={() => setOpen(false)} aria-label="Close">
                <X className="h-4 w-4 text-muted-foreground" />
              </button>
            </div>
            <p className="text-xs text-muted-foreground mb-3">Select a number to start a chat.</p>
            <div className="space-y-2">
              {CONTACT.phones.map((p) => (
                <a
                  key={p.wa}
                  href={`https://wa.me/${p.wa}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 rounded-lg border border-border px-3 py-2 hover:bg-secondary transition"
                >
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-[oklch(0.65_0.17_150)] text-white">
                    <MessageCircle className="h-4 w-4" />
                  </span>
                  <span className="text-left">
                    <span className="block text-sm font-semibold">{p.display}</span>
                    <span className="block text-xs text-muted-foreground">{p.label}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        )}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Open WhatsApp chat options"
          aria-expanded={open}
          className="grid h-14 w-14 place-items-center rounded-full bg-[oklch(0.65_0.17_150)] text-white shadow-[var(--shadow-elegant)] hover:scale-105 transition-transform"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      </div>
      <Link
        to="/contact"
        className="fixed bottom-5 left-5 z-50 hidden md:inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-primary)] px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] hover:scale-105 transition-transform"
      >
        Get Free Quote
      </Link>
    </>
  );
}
