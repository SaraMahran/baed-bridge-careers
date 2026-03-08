import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, Building2, ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
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
          <motion.h1 initial="hidden" animate="visible" variants={fadeUp} custom={0} className="text-4xl md:text-5xl font-extrabold">
            Job <span className="text-gradient-primary">Matching</span>
          </motion.h1>
          <motion.p initial="hidden" animate="visible" variants={fadeUp} custom={1} className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Connecting trained talent with inclusive employers. Find opportunities that value your skills and respect your needs.
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-3xl">
          <h2 className="text-2xl font-bold mb-8">Featured Opportunities</h2>
          <div className="space-y-4">
            {sampleJobs.map((job, i) => (
              <motion.div key={job.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300 cursor-pointer">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div>
                    <h3 className="font-bold text-lg">{job.title}</h3>
                    <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1"><Building2 className="h-4 w-4" /> {job.company}</span>
                      <span className="flex items-center gap-1"><MapPin className="h-4 w-4" /> {job.type}</span>
                      <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {job.posted}</span>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">View Details</Button>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <p className="text-muted-foreground mb-4">Sign up to see all job listings and get personalized matches.</p>
            <Button variant="hero" asChild>
              <Link to="/signup">Create Your Profile <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
