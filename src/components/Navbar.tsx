import { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Menu, X, ChevronDown, Sparkles, BookOpen, Briefcase,
  LogOut, Building2, FileText, Star,
} from "lucide-react";
import { getProfileData } from "@/lib/profileData";

type User = { name: string; email: string; role: string; };

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

const getLearnerMenuItems = (email: string) => {
  const data = getProfileData(email);
  return [
    {
      icon: Sparkles,
      label: "Career Match AI",
      href: "/career-match",
      desc: "Find your perfect role",
    },
    {
      icon: BookOpen,
      label: "My Courses",
      href: data && data.savedCourses.length > 0 ? "/my-courses" : "/courses",
      desc: data && data.savedCourses.length > 0
        ? `${data.savedCourses.length} course${data.savedCourses.length !== 1 ? "s" : ""} in progress`
        : "Explore courses",
    },
    {
      icon: Briefcase,
      label: "Saved Jobs",
      href: data && data.savedJobs.length > 0 ? "/my-jobs" : "/jobs",
      desc: data && data.savedJobs.length > 0
        ? `${data.savedJobs.length} saved opportunit${data.savedJobs.length !== 1 ? "ies" : "y"}`
        : "Browse opportunities",
    },
    {
      icon: FileText,
      label: "Mentorship",
      href: data && data.mentorshipSessions.length > 0 ? "/my-mentorship" : "/mentorship",
      desc: (() => {
        if (!data || data.mentorshipSessions.length === 0) return "Book a session";
        const upcoming = data.mentorshipSessions.filter(s => s.status === "upcoming").length;
        return upcoming > 0 ? `${upcoming} upcoming session${upcoming !== 1 ? "s" : ""}` : "View sessions";
      })(),
    },
  ];
};

const getEmployerMenuItems = (email: string) => {
  const data = getProfileData(email);
  return [
    {
      icon: Briefcase,
      label: "My Listings",
      href: data && data.savedJobs.length > 0 ? "/my-listings" : "/jobs",
      desc: data && data.savedJobs.length > 0
        ? `${data.savedJobs.length} active listing${data.savedJobs.length !== 1 ? "s" : ""}`
        : "Post & manage listings",
    },
    {
      icon: Building2,
      label: "For Employers",
      href: "/employers",
      desc: "Hiring resources",
    },
    {
      icon: Star,
      label: "Partnerships",
      href: "/partnerships",
      desc: "Collaborate with us",
    },
  ];
};

const getInitials = (name: string) =>
  name.split(" ").map(n => n[0]).join("").toUpperCase().slice(0, 2);

const getRoleColor = (role: string) => {
  if (role === "Employer") return "bg-[#5f1a37] text-white";
  if (role === "Admin") return "bg-[#230a14] text-white";
  return "bg-primary/15 text-primary";
};

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stored = localStorage.getItem("baed_user");
    setUser(stored ? JSON.parse(stored) : null);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
        setUserMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setOpenDropdown(null);
    setMobileOpen(false);
    setUserMenuOpen(false);
  }, [location.pathname]);

  const toggleDropdown = (label: string) => {
    setOpenDropdown(prev => prev === label ? null : label);
    setUserMenuOpen(false);
  };

  const toggleUserMenu = () => {
    setUserMenuOpen(prev => !prev);
    setOpenDropdown(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("baed_user");
    setUser(null);
    setUserMenuOpen(false);
    navigate("/");
  };

  const isDropdownActive = (dropdown: typeof dropdowns[0]) =>
    dropdown.items.some((item) => location.pathname === item.href);

  const menuItems = user
    ? user.role === "Employer"
      ? getEmployerMenuItems(user.email)
      : getLearnerMenuItems(user.email)
    : [];

  return (
    <nav
      ref={navRef}
      className="sticky top-0 z-50 bg-navbar border-b border-border/50 backdrop-blur-sm"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          to="/"
          className="font-display text-xl font-bold text-navbar-foreground tracking-tight"
          aria-label="Baed Connect - Home"
        >
          Baed<span className="text-primary"> Connect</span>
        </Link>

        {/* Desktop nav links */}
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
                <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${openDropdown === dropdown.label ? "rotate-180" : ""}`} />
              </button>
              {openDropdown === dropdown.label && (
                <div className="absolute top-full left-0 mt-1.5 w-64 bg-[#fdfdef] border border-border rounded-xl shadow-lg py-2 z-50">
                  {dropdown.items.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className={`flex flex-col px-4 py-3 hover:bg-primary/5 transition-colors ${
                        location.pathname === item.href ? "text-primary bg-primary/5" : "text-foreground"
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

        {/* Desktop auth — logged out */}
        {!user ? (
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
        ) : (
          <div className="hidden lg:flex items-center gap-2">
            {/* Career Match button — same height/padding as profile button */}
            {user.role !== "Employer" && (
              <Link
                to="/career-match"
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl border-2 border-[#a0205b] bg-[#a0205b] hover:bg-[#8a1a4f] hover:border-[#8a1a4f] transition-all text-[#fff9c6] text-xs font-bold h-[38px]"
              >
                <Sparkles className="h-3.5 w-3.5 shrink-0" />
                <span>Career Match</span>
              </Link>
            )}

            {/* Avatar + name button */}
            <div className="relative">
              <button
                onClick={toggleUserMenu}
                className="flex items-center gap-2.5 px-3 py-1.5 rounded-xl border-2 border-[#a0205b] bg-[#a0205b] hover:bg-[#8a1a4f] hover:border-[#8a1a4f] transition-all h-[38px]"
              >
                <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-black bg-white/20 text-[#fff9c6] border border-[#fff9c6]">
                  {getInitials(user.name)}
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-[#fff9c6] leading-none">{user.name.split(" ")[0]}</p>
                  <p className="text-xs text-white/70 leading-none mt-0.5">{user.role}</p>
                </div>
                <ChevronDown className={`h-3.5 w-3.5 text-white/70 transition-transform ${userMenuOpen ? "rotate-180" : ""}`} />
              </button>

              {/* User dropdown */}
              {userMenuOpen && (
                <div className="absolute top-full right-0 mt-2 w-72 bg-[#fdfdef] border border-border rounded-2xl shadow-xl py-3 z-50">
                  {/* User info header */}
                  <div className="px-4 pb-3 mb-1 border-b border-border">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-black ${getRoleColor(user.role)}`}>
                        {getInitials(user.name)}
                      </div>
                      <div>
                        <p className="font-bold text-foreground text-sm">{user.name}</p>
                        <p className="text-xs text-muted-foreground">{user.email}</p>
                        <span className={`inline-block mt-1 text-xs font-semibold px-2 py-0.5 rounded-full ${getRoleColor(user.role)}`}>
                          {user.role}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Role-based menu items */}
                  <div className="px-2 mb-1">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-2 py-1.5">
                      {user.role === "Employer" ? "Manage" : "My Learning"}
                    </p>
                    {menuItems.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-primary/5 transition-colors group"
                      >
                        <div className="p-1.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                          <item.icon className="h-3.5 w-3.5" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{item.label}</p>
                          <p className="text-xs text-muted-foreground">{item.desc}</p>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* Logout */}
                  <div className="border-t border-border mt-1 pt-2 px-2">
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-primary/5 text-muted-foreground hover:text-foreground transition-colors group"
                    >
                      <div className="p-1.5 rounded-lg bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-foreground transition-colors">
                        <LogOut className="h-3.5 w-3.5" />
                      </div>
                      <span className="text-sm font-semibold">Log out</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

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
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform ${openDropdown === dropdown.label ? "rotate-180" : ""}`} />
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

            {/* Mobile auth */}
            {!user ? (
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
            ) : (
              <div className="mt-3 px-3 space-y-1">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border mb-2">
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-black ${getRoleColor(user.role)}`}>
                    {getInitials(user.name)}
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-sm">{user.name}</p>
                    <p className="text-xs text-muted-foreground">{user.role}</p>
                  </div>
                </div>
                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-primary/5 transition-colors"
                  >
                    <item.icon className="h-4 w-4 text-primary" />
                    <div>
                      <p className="text-sm font-semibold text-foreground">{item.label}</p>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                  </Link>
                ))}
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-colors mt-1"
                >
                  <LogOut className="h-4 w-4" />
                  <span className="text-sm font-semibold">Log out</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}