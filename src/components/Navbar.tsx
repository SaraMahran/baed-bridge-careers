import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";


const dropdowns = [
  {
    label: "Learn",
    items: [
      { label: "Courses", href: "/courses", desc: "Practical content marketing skills" },
      { label: "Mentorship", href: "/mentorship", desc: "One-on-one career guidance" },
      { label: "Resources", href: "/accessibility-resources", desc: "Accessibility & inclusion guides" },
    ],
  },
  {
    label: "Work",
    items: [
      { label: "Career Match AI", href: "/career-match", desc: "Get your personalized AI career match" },
      { label: "For Learners", href: "/learners", desc: "Your path to employment" },
      { label: "For Employers", href: "/employers", desc: "Build inclusive teams" },
      { label: "Job Matching", href: "/jobs", desc: "Find the right opportunity" },
    ],
  },
];

const standaloneLinks = [
  { label: "About", href: "/about" },
  { label: "Partners", href: "/partnerships" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setOpenDropdown(null);
    setMobileOpen(false);
  }, [location.pathname]);

  const toggleDropdown = (label: string) => {
    setOpenDropdown(prev => prev === label ? null : label);
  };

  const isDropdownActive = (dropdown: typeof dropdowns[0]) =>
    dropdown.items.some((item) => location.pathname === item.href);

  return (
    <nav
      ref={navRef}
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
          {dropdowns.map((dropdown) => (
            <div key={dropdown.label} className="relative">
              <button
                onClick={() => toggleDropdown(dropdown.label)}
                className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isDropdownActive(dropdown) || openDropdown === dropdown.label
                    ? "text-primary bg-primary/10"
                    : "text-navbar-foreground hover:text-primary hover:bg-primary/5"
                }`}
              >
                {dropdown.label}
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${
                    openDropdown === dropdown.label ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openDropdown === dropdown.label && (
                <div className="absolute top-full left-0 mt-1.5 w-64 bg-[#fdfdef] border border-border rounded-xl shadow-lg py-2 z-50">
                  {dropdown.items.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className={`flex flex-col px-4 py-3 hover:bg-primary/5 transition-colors ${
                        location.pathname === item.href
                          ? "text-primary bg-primary/5"
                          : "text-foreground"
                      }`}
                    >
                      <span className="text-sm font-medium">{item.label}</span>
                      <span className="text-xs text-muted-foreground mt-0.5">{item.desc}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {standaloneLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                location.pathname === link.href
                  ? "text-primary bg-primary/10"
                  : "text-navbar-foreground hover:text-primary hover:bg-primary/5"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Auth buttons */}
        <div className="hidden lg:flex items-center gap-2">
          <Link
            to="/login"
            className="px-3 py-2 text-sm font-medium rounded-md text-navbar-foreground hover:text-primary hover:bg-primary/5 transition-colors"
          >
            Log In
          </Link>
          <Link
            to="/get-started"
            className="px-4 py-2 text-sm font-medium rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-navbar-foreground hover:text-primary rounded-md"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border/50 bg-navbar pb-4">
          <div className="container flex flex-col gap-1 pt-2">
            {dropdowns.map((dropdown) => (
              <div key={dropdown.label}>
                <button
                  onClick={() => toggleDropdown(dropdown.label)}
                  className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium text-navbar-foreground hover:text-primary rounded-md"
                >
                  {dropdown.label}
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform ${
                      openDropdown === dropdown.label ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openDropdown === dropdown.label && (
                  <div className="ml-4 flex flex-col gap-1 mb-1">
                    {dropdown.items.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        className={`px-3 py-2 text-sm rounded-md transition-colors ${
                          location.pathname === item.href
                            ? "text-primary bg-primary/10"
                            : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {standaloneLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`px-3 py-2.5 text-sm font-medium rounded-md transition-colors ${
                  location.pathname === link.href
                    ? "text-primary bg-primary/10"
                    : "text-navbar-foreground hover:text-primary hover:bg-primary/5"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <div className="flex gap-2 mt-3 px-3">
              <Link
                to="/login"
                className="flex-1 text-center px-3 py-2 text-sm font-medium rounded-md border border-border text-navbar-foreground hover:text-primary transition-colors"
              >
                Log In
              </Link>
              <Link
                to="/get-started"
                className="flex-1 text-center px-3 py-2 text-sm font-medium rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
