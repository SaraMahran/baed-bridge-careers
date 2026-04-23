import { Link } from "react-router-dom";

const footerSections = [
  {
    title: "Platform",
    links: [
      { label: "About", href: "/about" },
      { label: "Courses", href: "/courses" },
      { label: "Mentorship", href: "/mentorship" },
      { label: "Job Matching", href: "/jobs" },
    ],
  },
  {
    title: "For You",
    links: [
      { label: "For Learners", href: "/learners" },
      { label: "For Employers", href: "/employers" },
      { label: "Partnerships", href: "/partnerships" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Accessibility Resources", href: "/accessibility-resources" },
      { label: "Contact Us", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background/80" role="contentinfo">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="font-display text-xl font-bold text-background">
              Baed<span className="text-brand-glow"> Connect</span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-background/60">
              Education for employment is accessible. Empowering people with disabilities
              through skills, mentorship, and meaningful career opportunities.
            </p>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-display font-semibold text-background mb-4 text-sm uppercase tracking-wider">
                {section.title}
              </h3>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm text-background/60 hover:text-brand-glow transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-background/40">
            © {new Date().getFullYear()} Baed Connect — A product of Baed (بعض). All rights reserved.
          </p>
          <p className="text-xs text-background/40">
            Built with accessibility at its core.
          </p>
        </div>
      </div>
    </footer>
  );
}
