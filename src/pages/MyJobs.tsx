import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Briefcase, ArrowRight, Building2 } from "lucide-react";
import { Layout } from "@/components/Layout";
import { getProfileData } from "@/lib/profileData";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

export default function MyJobs() {
  const stored = localStorage.getItem("baed_user");
  const user = stored ? JSON.parse(stored) : null;
  const data = user ? getProfileData(user.email) : null;
  const jobs = data?.savedJobs ?? [];
  const isEmployer = user?.role === "Employer";

  return (
    <Layout>
      <section className="py-16 min-h-screen">
        <div className="container max-w-4xl mx-auto">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0} className="mb-10">
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-2">
              {isEmployer ? "Your Listings" : "Your Jobs"}
            </p>
            <h1 className="text-3xl md:text-4xl font-bold">
              {isEmployer ? "My Job Listings" : "Saved Jobs"}
            </h1>
            <p className="text-muted-foreground mt-2">
              {isEmployer ? "Manage your active job postings." : "Opportunities you've saved for later."}
            </p>
          </motion.div>

          {jobs.length === 0 ? (
            <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={1}
              className="text-center py-20 rounded-2xl border border-border bg-card"
            >
              <Briefcase className="h-10 w-10 text-muted-foreground mx-auto mb-4" />
              <p className="text-lg font-semibold text-foreground mb-2">
                {isEmployer ? "No listings yet" : "No saved jobs yet"}
              </p>
              <p className="text-muted-foreground mb-6 text-sm">
                {isEmployer ? "Post your first job to find inclusive talent." : "Browse our job board to find your next opportunity."}
              </p>
              <Link to="/jobs" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors">
                {isEmployer ? "Post a Job" : "Browse Jobs"} <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          ) : (
            <div className="grid sm:grid-cols-2 gap-5">
              {jobs.map((job, i) => (
                <motion.div key={job.id} initial="hidden" animate="visible" variants={fadeUp} custom={i + 1}>
                  <Link to={job.href}
                    className="block p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-2.5 rounded-xl bg-primary/10 shrink-0">
                        <Building2 className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-foreground group-hover:text-primary transition-colors truncate">
                          {job.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-0.5">{job.company}</p>
                        <span className="inline-block mt-2 text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                          {job.meta}
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
              {/* Browse more */}
              <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={jobs.length + 1}>
                <Link to="/jobs"
                  className="flex flex-col items-center justify-center gap-3 p-6 rounded-2xl border-2 border-dashed border-border hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 group h-full min-h-[140px]"
                >
                  <Briefcase className="h-7 w-7 text-muted-foreground group-hover:text-primary transition-colors" />
                  <p className="text-sm font-semibold text-muted-foreground group-hover:text-primary transition-colors">
                    {isEmployer ? "Post another listing" : "Browse more jobs"}
                  </p>
                </Link>
              </motion.div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}