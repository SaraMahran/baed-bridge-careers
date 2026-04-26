import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Building2, MapPin, Clock, Briefcase, CheckCircle, Sparkles, ArrowLeft, Bookmark } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

export default function JobPreview() {
  const raw = localStorage.getItem("latest_posted_job");
  const job = raw ? JSON.parse(raw) : null;

  const responsibilities: string[] = job?.responsibilities ? job.responsibilities.split("\n").filter(Boolean) : [];
  const requirements: string[] = job?.requirements ? job.requirements.split("\n").filter(Boolean) : [];
  const benefits: string[] = job?.benefits ? job.benefits.split("\n").filter(Boolean) : [];

  if (!job) {
    return (
      <Layout>
        <div className="min-h-screen flex flex-col items-center justify-center gap-4">
          <p className="text-2xl font-bold">No job found</p>
          <Link to="/post-job" className="text-primary hover:underline text-sm">← Post a job</Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-12 min-h-screen">
        <div className="container max-w-3xl mx-auto">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0} className="mb-8">
            <Link to="/my-listings" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="h-4 w-4" /> Back to My Listings
            </Link>
          </motion.div>

          {/* Success banner */}
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={1}
            className="mb-6 p-4 rounded-2xl bg-green-50 border border-green-200 flex items-center gap-3"
          >
            <CheckCircle className="h-5 w-5 text-green-600 shrink-0" />
            <div>
              <p className="text-sm font-bold text-green-800">Job posted successfully!</p>
              <p className="text-xs text-green-700">Your listing is now live on the Baed Connect job board.</p>
            </div>
          </motion.div>

          {/* Header */}
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={2}
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
                  {job.location && <span className="flex items-center gap-1.5 text-xs text-muted-foreground"><MapPin className="h-3.5 w-3.5" />{job.location}</span>}
                  <span className="flex items-center gap-1.5 text-xs text-muted-foreground"><Clock className="h-3.5 w-3.5" />{job.type}</span>
                  {job.salary && <span className="flex items-center gap-1.5 text-xs text-muted-foreground"><Briefcase className="h-3.5 w-3.5" />{job.salary}</span>}
                </div>
              </div>
            </div>
            <div className="mt-6 flex gap-3">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Apply Now</Button>
              <Button variant="outline" className="border-[#a0205b]/30 text-[#a0205b] hover:bg-[#a0205b]/5 hover:border-[#a0205b]">
                <Bookmark className="h-4 w-4 mr-2" /> Save Job
              </Button>
            </div>
          </motion.div>

          {job.description && (
            <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={3} className="p-8 rounded-2xl bg-card border border-border mb-6">
              <h2 className="text-lg font-bold mb-3">About the Role</h2>
              <p className="text-muted-foreground leading-relaxed">{job.description}</p>
            </motion.div>
          )}

          {responsibilities.length > 0 && (
            <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={4} className="p-8 rounded-2xl bg-card border border-border mb-6">
              <h2 className="text-lg font-bold mb-4">Responsibilities</h2>
              <ul className="space-y-2.5">
                {responsibilities.map((r, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />{r}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {requirements.length > 0 && (
            <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={5} className="p-8 rounded-2xl bg-card border border-border mb-6">
              <h2 className="text-lg font-bold mb-4">Requirements</h2>
              <ul className="space-y-2.5">
                {requirements.map((r, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />{r}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {benefits.length > 0 && (
            <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={6} className="p-8 rounded-2xl bg-card border border-border mb-6">
              <h2 className="text-lg font-bold mb-4">Benefits</h2>
              <div className="flex flex-wrap gap-2">
                {benefits.map((b, i) => (
                  <span key={i} className="text-xs font-medium px-3 py-1.5 rounded-full bg-primary/10 text-primary">{b}</span>
                ))}
              </div>
            </motion.div>
          )}

          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={7}
            className="p-6 rounded-2xl bg-gradient-to-br from-[#5f1a37]/5 to-[#a0205b]/5 border border-primary/20"
          >
            <div className="flex items-start gap-3">
              <Sparkles className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-bold text-foreground mb-1">Accessibility & Inclusion</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {job.company} is committed to building an inclusive workplace. All candidates with disabilities are encouraged to apply and will receive full support throughout the hiring process.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}