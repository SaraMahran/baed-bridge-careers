import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, Users, Compass, FileText, Target, Sparkles, ArrowRight } from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const } }) };
const scaleIn = { hidden: { opacity: 0, scale: 0.93 }, visible: (i: number) => ({ opacity: 1, scale: 1, transition: { delay: i * 0.08, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const } }) };

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
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="text-xs font-semibold tracking-widest text-primary uppercase mb-4">For Learners</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-4xl md:text-5xl font-extrabold">
            Your Career Starts <span className="text-gradient-primary">Here</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Baed Connect gives you the skills, mentorship, and connections you need to build a meaningful career in content marketing — on your terms, at your pace.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="mt-8 flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-primary text-primary-foreground" asChild>
              <Link to="/courses">Start Learning <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/career-match"><Sparkles className="mr-2 h-4 w-4" />Get AI Career Match</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container max-w-5xl">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-3xl font-bold text-center mb-12">What You'll Get</motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div key={f.title} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={scaleIn} custom={i}
                className="p-6 rounded-2xl bg-background border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
                <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300"><f.icon className="h-5 w-5" /></div>
                <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-2xl">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-3xl font-bold text-center mb-10">Your Learning Journey</motion.h2>
          <ol className="space-y-4">
            {steps.map((step, i) => (
              <motion.li key={i} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} variants={fadeUp} custom={i}
                className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold shrink-0 text-sm">{i + 1}</span>
                <span className="text-base pt-2">{step}</span>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>
    </Layout>
  );
}