import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Briefcase, ArrowRight, Users, Plus, Eye } from "lucide-react";
import { Layout } from "@/components/Layout";
import { getProfileData } from "@/lib/profileData";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

const LISTING_DETAILS: Record<string, { applicants: number; status: string; posted: string; views: number }> = {
  j10: { applicants: 12, status: "Active", posted: "April 22, 2025", views: 284 },
  j11: { applicants: 4, status: "Active", posted: "April 18, 2025", views: 156 },
};

export default function MyListings() {
  const stored = localStorage.getItem("baed_user");
  const user = stored ? JSON.parse(stored) : null;
  const data = user ? getProfileData(user.email) : null;
  const hardcodedJobs = data?.savedJobs ?? [];

  // Pull any jobs this employer posted via the form
  const postedJobs: any[] = JSON.parse(localStorage.getItem("posted_jobs") || "[]");

  const allJobs = [...hardcodedJobs.map(j => ({ ...j, isHardcoded: true })), ...postedJobs.map(j => ({ ...j, isHardcoded: false }))];

  return (
    <Layout>
      <section className="py-16 min-h-screen">
        <div className="container max-w-4xl mx-auto">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}
            className="flex items-start justify-between mb-10"
          >
            <div>
              <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-2">Your Listings</p>
              <h1 className="text-3xl md:text-4xl font-bold">My Job Listings</h1>
              <p className="text-muted-foreground mt-2">Manage your active postings and track applicants.</p>
            </div>
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 shrink-0">
              <Link to="/post-job"><Plus className="h-4 w-4 mr-2" /> Post a Job</Link>
            </Button>
          </motion.div>

          {allJobs.length === 0 ? (
            <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={1}
              className="text-center py-20 rounded-2xl border border-border bg-card"
            >
              <Briefcase className="h-10 w-10 text-muted-foreground mx-auto mb-4" />
              <p className="text-lg font-semibold mb-2">No listings yet</p>
              <p className="text-muted-foreground mb-6 text-sm">Post your first job to find inclusive talent.</p>
              <Link to="/post-job" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors">
                Post a Job <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          ) : (
            <div className="flex flex-col gap-4">
              {allJobs.map((job, i) => {
                const details = LISTING_DETAILS[job.id];
                const isNew = !job.isHardcoded;
                return (
                  <motion.div key={job.id ?? i} initial="hidden" animate="visible" variants={fadeUp} custom={i + 1}
                    className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-sm transition-all"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className="p-2.5 rounded-xl bg-primary/10 shrink-0">
                          <Briefcase className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold text-foreground">{job.title}</h3>
                          <p className="text-sm text-muted-foreground mt-0.5">{job.company}</p>
                          <div className="flex flex-wrap gap-3 mt-3 text-xs text-muted-foreground">
                            {details ? (
                              <>
                                <span className="flex items-center gap-1"><Users className="h-3.5 w-3.5" />{details.applicants} applicants</span>
                                <span className="flex items-center gap-1"><Eye className="h-3.5 w-3.5" />{details.views} views</span>
                                <span>Posted {details.posted}</span>
                              </>
                            ) : (
                              <>
                                <span className="flex items-center gap-1"><Users className="h-3.5 w-3.5" />0 applicants</span>
                                <span className="flex items-center gap-1"><Eye className="h-3.5 w-3.5" />0 views</span>
                                {job.postedAt && <span>Posted {job.postedAt}</span>}
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2 shrink-0">
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-green-50 text-green-600 border border-green-200">
                          Active
                        </span>
                        <Link
                          to={isNew ? "/job-preview" : job.href}
                          className="text-xs text-primary hover:underline font-medium"
                        >
                          View listing →
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                );
              })}

              <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={allJobs.length + 1}>
                <Link to="/post-job" className="w-full flex items-center justify-center gap-2 p-4 rounded-2xl border-2 border-dashed border-border hover:border-primary/40 hover:bg-primary/5 transition-all group">
                  <Plus className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  <p className="text-sm font-semibold text-muted-foreground group-hover:text-primary transition-colors">Post another listing</p>
                </Link>
              </motion.div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}