import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "For Learners", href: "/learners" },
  { label: "For Employers", href: "/employers" },
  { label: "Courses", href: "/courses" },
  { label: "Mentorship", href: "/mentorship" },
  { label: "Jobs", href: "/jobs" },
  { label: "Resources", href: "/accessibility-resources" },
  { label: "Partners", href: "/partnerships" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <nav
      className="sticky top-0 z-50 bg-navbar border-b border-border/50 backdrop-blur-sm"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container flex items-center justify-between h-16">
        <Link
          to="/"
          className="font-display text-xl font-bold text-navbar-foreground tracking-tight"
          aria-label="Baed Connect - Home"
        >
          Baed<span className="text-primary"> Connect</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors
                ${
                  location.pathname === link.href
                    ? "text-primary bg-primary/10"
                    : "text-navbar-foreground hover:text-primary hover:bg-primary/5"
                }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-2">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/login">Log In</Link>
          </Button>
          <Button size="sm" asChild>
            <Link to="/signup">Get Started</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-navbar-foreground hover:text-primary rounded-md"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div id="mobile-menu" className="lg:hidden border-t border-border/50 bg-navbar pb-4">
          <div className="container flex flex-col gap-1 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className={`px-3 py-2.5 text-sm font-medium rounded-md transition-colors
                  ${
                    location.pathname === link.href
                      ? "text-primary bg-primary/10"
                      : "text-navbar-foreground hover:text-primary hover:bg-primary/5"
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-2 mt-3 px-3">
              <Button variant="outline" size="sm" className="flex-1" asChild>
                <Link to="/login" onClick={() => setMobileOpen(false)}>Log In</Link>
              </Button>
              <Button size="sm" className="flex-1" asChild>
                <Link to="/signup" onClick={() => setMobileOpen(false)}>Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
