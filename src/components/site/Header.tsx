import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Ship } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-display font-bold text-lg">
          <span className="grid h-9 w-9 place-items-center rounded-md bg-[image:var(--gradient-primary)] text-primary-foreground">
            <Ship className="h-5 w-5" />
          </span>
          <span>SinoBridge<span className="text-primary"> Sourcing</span></span>
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
          {navItems.map((i) => (
            <Link
              key={i.to}
              to={i.to}
              className="text-muted-foreground hover:text-foreground transition-colors"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: i.to === "/" }}
            >
              {i.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <Button asChild size="sm" className="bg-[image:var(--gradient-primary)] shadow-[var(--shadow-card)]">
            <Link to="/contact">Get Free Quote</Link>
          </Button>
        </div>
        <button
          className="md:hidden p-2 -mr-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container-page py-4 flex flex-col gap-3">
            {navItems.map((i) => (
              <Link
                key={i.to}
                to={i.to}
                onClick={() => setOpen(false)}
                className="py-2 text-sm font-medium text-muted-foreground"
                activeProps={{ className: "py-2 text-sm font-medium text-foreground" }}
                activeOptions={{ exact: i.to === "/" }}
              >
                {i.label}
              </Link>
            ))}
            <Button asChild size="sm" className="bg-[image:var(--gradient-primary)]">
              <Link to="/contact" onClick={() => setOpen(false)}>Get Free Quote</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
