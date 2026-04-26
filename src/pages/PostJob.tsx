import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, DollarSign, Clock, FileText, Building2, Send } from "lucide-react";
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

export default function PostJob() {
  const stored = localStorage.getItem("baed_user");
  const user = stored ? JSON.parse(stored) : null;
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    title: "", company: user?.name ?? "", location: "", type: "Full-time",
    salary: "", description: "", responsibilities: "", requirements: "", benefits: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      // Save to localStorage so it persists and MyListings can read it
      const existing = JSON.parse(localStorage.getItem("posted_jobs") || "[]");
      const newJob = { ...form, id: `custom_${Date.now()}`, postedAt: new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }) };
      localStorage.setItem("posted_jobs", JSON.stringify([...existing, newJob]));
      // Also save as latest for the preview page
      localStorage.setItem("latest_posted_job", JSON.stringify(newJob));
      setLoading(false);
      toast({ title: "Job posted!", description: `"${form.title}" is now live on the job board.` });
      navigate("/job-preview");
    }, 1000);
  };

  const inputClass = "w-full px-4 py-3 rounded-xl border-2 border-border text-sm text-foreground bg-background focus:outline-none focus:border-primary transition-colors";
  const labelClass = "block text-sm font-bold text-foreground mb-1.5";

  return (
    <Layout>
      <section className="py-12 min-h-screen">
        <div className="container max-w-3xl mx-auto">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0} className="mb-8">
            <Link to="/my-listings" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="h-4 w-4" /> Back to My Listings
            </Link>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={1} className="mb-10">
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-2">Employer</p>
            <h1 className="text-3xl md:text-4xl font-bold">Post a New Job</h1>
            <p className="text-muted-foreground mt-2">Fill in the details below to list your opportunity on Baed Connect.</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={2} className="grid sm:grid-cols-2 gap-4">
              <div className="bg-card border border-border rounded-2xl p-5">
                <label className={labelClass}><FileText className="inline h-3.5 w-3.5 mr-1.5 text-primary" />Job Title</label>
                <input name="title" value={form.title} onChange={handleChange} required placeholder="e.g. Content Creator" className={inputClass} />
              </div>
              <div className="bg-card border border-border rounded-2xl p-5">
                <label className={labelClass}><Building2 className="inline h-3.5 w-3.5 mr-1.5 text-primary" />Company Name</label>
                <input name="company" value={form.company} onChange={handleChange} required placeholder="Your company" className={inputClass} />
              </div>
            </motion.div>

            <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={3} className="grid sm:grid-cols-3 gap-4">
              <div className="bg-card border border-border rounded-2xl p-5">
                <label className={labelClass}><MapPin className="inline h-3.5 w-3.5 mr-1.5 text-primary" />Location</label>
                <input name="location" value={form.location} onChange={handleChange} required placeholder="Remote / Cairo" className={inputClass} />
              </div>
              <div className="bg-card border border-border rounded-2xl p-5">
                <label className={labelClass}><Clock className="inline h-3.5 w-3.5 mr-1.5 text-primary" />Job Type</label>
                <select name="type" value={form.type} onChange={handleChange} className={inputClass}>
                  <option>Full-time</option>
                  <option>Part-time</option>
                  <option>Freelance</option>
                  <option>Contract</option>
                </select>
              </div>
              <div className="bg-card border border-border rounded-2xl p-5">
                <label className={labelClass}><DollarSign className="inline h-3.5 w-3.5 mr-1.5 text-primary" />Salary Range</label>
                <input name="salary" value={form.salary} onChange={handleChange} placeholder="EGP 8,000–12,000" className={inputClass} />
              </div>
            </motion.div>

            <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={4} className="bg-card border border-border rounded-2xl p-5">
              <label className={labelClass}>About the Role</label>
              <p className="text-xs text-muted-foreground mb-2">Describe what this role is about and what the candidate will do day-to-day.</p>
              <textarea name="description" value={form.description} onChange={handleChange} required rows={5} placeholder="We're looking for a creative content creator to join our team..." className={`${inputClass} resize-none`} />
            </motion.div>

            <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={5} className="bg-card border border-border rounded-2xl p-5">
              <label className={labelClass}>Responsibilities</label>
              <p className="text-xs text-muted-foreground mb-2">One per line.</p>
              <textarea name="responsibilities" value={form.responsibilities} onChange={handleChange} rows={5} placeholder={"Write blog posts and articles\nManage social media channels\nCollaborate with design team"} className={`${inputClass} resize-none`} />
            </motion.div>

            <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={6} className="bg-card border border-border rounded-2xl p-5">
              <label className={labelClass}>Requirements</label>
              <p className="text-xs text-muted-foreground mb-2">One per line.</p>
              <textarea name="requirements" value={form.requirements} onChange={handleChange} rows={5} placeholder={"Strong written communication skills\nExperience with WordPress\nSelf-motivated"} className={`${inputClass} resize-none`} />
            </motion.div>

            <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={7} className="bg-card border border-border rounded-2xl p-5">
              <label className={labelClass}>Benefits</label>
              <p className="text-xs text-muted-foreground mb-2">One per line.</p>
              <textarea name="benefits" value={form.benefits} onChange={handleChange} rows={4} placeholder={"Remote work\nFlexible hours\nHealth insurance"} className={`${inputClass} resize-none`} />
            </motion.div>

            <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={8} className="flex gap-3 pt-2">
              <Button type="submit" disabled={loading} size="lg" className="flex-1 h-12 text-base font-bold bg-primary text-primary-foreground hover:bg-primary/90">
                {loading ? (
                  <span className="flex items-center gap-2">
                    <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Publishing...
                  </span>
                ) : (
                  <span className="flex items-center gap-2"><Send className="h-4 w-4" /> Publish Job Listing</span>
                )}
              </Button>
              <Button type="button" variant="outline" size="lg" asChild className="px-8">
                <Link to="/my-listings">Cancel</Link>
              </Button>
            </motion.div>
          </form>
        </div>
      </section>
    </Layout>
  );
}