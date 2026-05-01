import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, Building2, ArrowRight, Sparkles } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const } }),
};

const sampleJobs = [
  { title: "Content Writer", company: "TechStart Egypt", type: "Remote", posted: "2 days ago" },
  { title: "Social Media Coordinator", company: "Green Media Agency", type: "Remote", posted: "5 days ago" },
  { title: "SEO Content Specialist", company: "DigiGrowth", type: "Hybrid", posted: "1 week ago" },
  { title: "Junior Copywriter", company: "BrandMakers", type: "Remote", posted: "1 week ago" },
];

export default function Jobs() {
  return (
    <Layout>
      <section className="gradient-hero py-20 md:py-28">
        <div className="container max-w-3xl text-center">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="text-xs font-semibold tracking-widest text-primary uppercase mb-4">Job Matching</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-4xl md:text-5xl font-extrabold">
            Find Your <span className="text-gradient-primary">Opportunity</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Connecting trained talent with inclusive employers. Find opportunities that value your skills and respect your needs.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="mt-8">
            <Button asChild size="lg" className="bg-primary text-primary-foreground">
              <Link to="/career-match">
                <Sparkles className="mr-2 h-4 w-4" />
                Get AI Career Match
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-3xl">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-2xl font-bold mb-8">
            Featured Opportunities
          </motion.h2>
          <div className="space-y-4">
            {sampleJobs.map((job, i) => (
              <motion.div
                key={job.title}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }}
                variants={fadeUp} custom={i}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300 cursor-pointer group"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div>
                    <h3 className="font-bold text-lg group-hover:text-primary transition-colors">{job.title}</h3>
                    <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1"><Building2 className="h-4 w-4" />{job.company}</span>
                      <span className="flex items-center gap-1"><MapPin className="h-4 w-4" />{job.type}</span>
                      <span className="flex items-center gap-1"><Clock className="h-4 w-4" />{job.posted}</span>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    className="shrink-0 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                  >View Details</Button>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={5} className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-[#5f1a37] to-[#a0205b] text-center">
            <p className="text-white/80 mb-2 text-sm font-medium">Want a personalized job match?</p>
            <p className="text-white font-bold text-lg mb-6">Let our AI analyze your profile and find your best-fit role</p>
            <Button asChild size="lg" className="bg-[#fff279] text-[#5f1a37] hover:bg-[#fff060] font-bold">
              <Link to="/career-match">
                <Sparkles className="mr-2 h-4 w-4" />
                Try AI Career Match <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}