import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, Users, Compass, FileText, Target, Sparkles, ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const features = [
  { icon: BookOpen, title: "Accessible Courses", desc: "Recorded lessons in content marketing designed for all abilities, with captions and screen-reader support." },
  { icon: Users, title: "Mentorship", desc: "One-on-one mentorship sessions with experienced professionals to guide your career journey." },
  { icon: Compass, title: "Career Guidance", desc: "Help choosing the right career path in content marketing based on your strengths and interests." },
  { icon: FileText, title: "HR Support", desc: "Resume building, interview preparation, and application support to help you land your next role." },
  { icon: Target, title: "Job Matching", desc: "Get matched with employers actively seeking inclusive, diverse talent for remote-friendly roles." },
  { icon: Sparkles, title: "Portfolio Building", desc: "Create a professional portfolio showcasing your skills to potential employers." },
];

const steps = [
  "Sign up and create your learner profile",
  "Choose your content marketing learning path",
  "Complete accessible, self-paced courses",
  "Book mentorship sessions for personalized guidance",
  "Apply for matched job opportunities",
];

export default function ForLearners() {
  return (
    <Layout>
      <section className="gradient-hero py-20 md:py-28">
        <div className="container max-w-3xl text-center">
          <motion.h1 initial="hidden" animate="visible" variants={fadeUp} custom={0} className="text-4xl md:text-5xl font-extrabold">
            Your Career Starts <span className="text-gradient-primary">Here</span>
          </motion.h1>
          <motion.p initial="hidden" animate="visible" variants={fadeUp} custom={1} className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Baed Connect gives you the skills, mentorship, and connections you need to build a meaningful career in content marketing — on your terms, at your pace.
          </motion.p>
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={2} className="mt-8">
            <Button variant="hero" size="lg" asChild>
              <Link to="/courses">Start Learning <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-12">What You'll Get</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div key={f.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                className="p-6 rounded-2xl bg-background border border-border">
                <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary mb-4"><f.icon className="h-5 w-5" /></div>
                <h3 className="font-bold mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-2xl">
          <h2 className="text-3xl font-bold text-center mb-10">Your Learning Journey</h2>
          <ol className="space-y-6">
            {steps.map((step, i) => (
              <motion.li key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                className="flex items-start gap-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-full gradient-primary text-primary-foreground font-bold shrink-0">{i + 1}</span>
                <span className="text-lg pt-1.5">{step}</span>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>
    </Layout>
  );
}
