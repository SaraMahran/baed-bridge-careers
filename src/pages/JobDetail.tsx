import { useParams, Link, useSearchParams } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, Building2, MapPin, Clock, ArrowLeft, Sparkles, CheckCircle, Bookmark, BookmarkCheck } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

const JOBS: Record<string, {
  id: string; title: string; company: string; location: string;
  type: string; salary: string; posted: string; description: string;
  responsibilities: string[]; requirements: string[]; benefits: string[];
  accessibilityNote: string;
}> = {
  j1: {
    id: "j1", title: "Content Creator – Remote", company: "TechCorp Egypt",
    location: "Remote · Cairo, Egypt", type: "Full-time", salary: "EGP 8,000 – 12,000 / month", posted: "April 20, 2025",
    description: "TechCorp Egypt is looking for a creative and driven Content Creator to join our growing marketing team. You'll produce engaging written and visual content for our blog, social media channels, and email campaigns — all from the comfort of your home.",
    responsibilities: ["Write blog posts, articles, and social media copy", "Collaborate with the design team on visual content", "Manage and schedule content across platforms", "Track content performance using analytics tools", "Brainstorm and pitch new content ideas weekly"],
    requirements: ["Strong written Arabic and English communication skills", "Experience with content management systems (WordPress, etc.)", "Familiarity with SEO basics", "Self-motivated and able to work independently", "Portfolio of writing samples preferred"],
    benefits: ["100% remote work", "Flexible working hours", "Health insurance", "Monthly performance bonus", "Career development budget"],
    accessibilityNote: "TechCorp Egypt is committed to an inclusive workplace. We provide assistive technology support, flexible deadlines, and open communication about accessibility needs.",
  },
  j2: {
    id: "j2", title: "Junior Copywriter", company: "Wunderman Thompson",
    location: "Hybrid · Cairo, Egypt", type: "Part-time", salary: "EGP 4,500 – 6,000 / month", posted: "April 15, 2025",
    description: "Wunderman Thompson is seeking a Junior Copywriter to support our creative team in crafting compelling copy for global and regional brands. This hybrid role offers flexibility and exposure to world-class creative work.",
    responsibilities: ["Write copy for digital ads, landing pages, and social media", "Support senior copywriters on large campaigns", "Proofread and edit content for clarity and brand voice", "Participate in creative brainstorms", "Research industry trends and audience insights"],
    requirements: ["Excellent written communication in Arabic and English", "Creative thinking and attention to detail", "Basic understanding of advertising and marketing", "Ability to meet deadlines and handle feedback", "Degree in marketing, communications, or related field (preferred)"],
    benefits: ["Hybrid working model", "Exposure to international campaigns", "Mentorship from senior creatives", "Paid time off", "Professional development opportunities"],
    accessibilityNote: "Wunderman Thompson welcomes applicants with disabilities. We offer flexible in-office days, accessible workspaces, and individualised support.",
  },
  j10: {
    id: "j10", title: "Social Media Manager", company: "Nour Talent Co.",
    location: "Remote", type: "Full-time", salary: "EGP 10,000 – 15,000 / month", posted: "April 22, 2025",
    description: "Nour Talent Co. is hiring a Social Media Manager to lead our online presence. You'll develop and execute social strategies, grow our communities, and represent our brand voice across all platforms.",
    responsibilities: ["Develop and implement social media strategies", "Create and schedule content across Instagram, LinkedIn, and TikTok", "Engage with followers and build community", "Analyze performance metrics and report monthly", "Collaborate with content and design teams"],
    requirements: ["2+ years of social media management experience", "Strong understanding of platform algorithms", "Creative eye for visual content", "Data-driven approach to growth", "Experience with scheduling tools (Buffer, Hootsuite, etc.)"],
    benefits: ["Fully remote", "Flexible hours", "Equity participation", "Health & wellness stipend", "Annual team retreat"],
    accessibilityNote: "We are an inclusive employer. All candidates with disabilities are encouraged to apply and will receive full support throughout the hiring process.",
  },
  j11: {
    id: "j11", title: "Content Strategist", company: "Nour Talent Co.",
    location: "Remote", type: "Full-time", salary: "EGP 12,000 – 18,000 / month", posted: "April 18, 2025",
    description: "We're looking for a Content Strategist to own our content roadmap. You'll define topics, formats, and distribution channels — ensuring every piece of content drives measurable business outcomes.",
    responsibilities: ["Build and maintain a comprehensive content calendar", "Define content pillars aligned with business goals", "Conduct audience and keyword research", "Oversee content production and quality", "Measure ROI and optimise content performance"],
    requirements: ["3+ years in content strategy or editorial roles", "Strong analytical and project management skills", "Familiarity with SEO and content marketing tools", "Excellent written English and Arabic", "Experience working with cross-functional teams"],
    benefits: ["Fully remote", "Competitive salary + performance bonus", "Learning & development budget", "Flexible working hours", "Health insurance"],
    accessibilityNote: "Nour Talent Co. is committed to disability inclusion. We adapt our hiring process and work environment to ensure equal opportunity for all candidates.",
  },
};

export default function JobDetail() {
  const { id } = useParams<{ id: string }>();
  const [searchParams] = useSearchParams();
  const job = id ? JOBS[id] : null;
  const [saved, setSaved] = useState(searchParams.get("saved") === "true");
  const { toast } = useToast();

  const handleSave = () => {
    setSaved(true);
    toast({
      title: "Job saved!",
      description: `${job?.title} has been added to your saved jobs.`,
    });
  };

  if (!job) {
    return (
      <Layout>
        <div className="min-h-screen flex flex-col items-center justify-center gap-4">
          <p className="text-2xl font-bold text-foreground">Job not found</p>
          <Link to="/jobs" className="text-primary hover:underline text-sm">← Back to Jobs</Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-12 min-h-screen">
        <div className="container max-w-3xl mx-auto">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0} className="mb-8">
            <Link to="/jobs" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="h-4 w-4" /> Back to Jobs
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={1}
            className="p-8 rounded-2xl bg-card border border-border mb-6"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-primary/10 shrink-0">
                <Building2 className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h1 className="text-2xl font-bold text-foreground">{job.title}</h1>
                <p className="text-muted-foreground font-medium mt-1">{job.company}</p>
                <div className="flex flex-wrap gap-3 mt-4">
                  <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5" /> {job.location}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Clock className="h-3.5 w-3.5" /> {job.type}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Briefcase className="h-3.5 w-3.5" /> {job.salary}
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-6 flex gap-3">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Apply Now
              </Button>
              <Button
                variant="outline"
                onClick={handleSave}
                disabled={saved}
                className="border-[#a0205b]/30 text-[#a0205b] hover:bg-[#a0205b]/5 hover:border-[#a0205b] disabled:opacity-100 disabled:cursor-default disabled:text-[#a0205b] disabled:border-[#a0205b]/30"
              >
                {saved
                  ? <><BookmarkCheck className="h-4 w-4 mr-2" /> Saved</>
                  : <><Bookmark className="h-4 w-4 mr-2" /> Save Job</>
                }
              </Button>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={2}
            className="p-8 rounded-2xl bg-card border border-border mb-6"
          >
            <h2 className="text-lg font-bold mb-3">About the Role</h2>
            <p className="text-muted-foreground leading-relaxed">{job.description}</p>
          </motion.div>

          {/* Responsibilities */}
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={3}
            className="p-8 rounded-2xl bg-card border border-border mb-6"
          >
            <h2 className="text-lg font-bold mb-4">Responsibilities</h2>
            <ul className="space-y-2.5">
              {job.responsibilities.map((r, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />{r}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Requirements */}
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={4}
            className="p-8 rounded-2xl bg-card border border-border mb-6"
          >
            <h2 className="text-lg font-bold mb-4">Requirements</h2>
            <ul className="space-y-2.5">
              {job.requirements.map((r, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />{r}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Benefits */}
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={5}
            className="p-8 rounded-2xl bg-card border border-border mb-6"
          >
            <h2 className="text-lg font-bold mb-4">Benefits</h2>
            <div className="flex flex-wrap gap-2">
              {job.benefits.map((b, i) => (
                <span key={i} className="text-xs font-medium px-3 py-1.5 rounded-full bg-primary/10 text-primary">{b}</span>
              ))}
            </div>
          </motion.div>

          {/* Accessibility */}
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={6}
            className="p-6 rounded-2xl bg-gradient-to-br from-[#5f1a37]/5 to-[#a0205b]/5 border border-primary/20"
          >
            <div className="flex items-start gap-3">
              <Sparkles className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-bold text-foreground mb-1">Accessibility & Inclusion</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{job.accessibilityNote}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}