import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Users, Accessibility, Lightbulb, Globe, ArrowRight } from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const } }) };
const scaleIn = { hidden: { opacity: 0, scale: 0.93 }, visible: (i: number) => ({ opacity: 1, scale: 1, transition: { delay: i * 0.08, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const } }) };

const benefits = [
  { icon: Users, title: "Trained Talent Pool", desc: "Access candidates who have completed practical content marketing training and are ready to contribute." },
  { icon: Accessibility, title: "Inclusion Resources", desc: "Comprehensive guides on accessibility and disability inclusion for your workplace." },
  { icon: Lightbulb, title: "Inclusive Environment Guidance", desc: "Expert guidance on creating work environments where everyone can thrive." },
  { icon: Globe, title: "Accessible Content Support", desc: "Learn how to make your content reach a wider audience through accessibility best practices." },
];

const steps = [
  "Create your company account",
  "Explore inclusion best practices and resources",
  "Browse trained candidate profiles",
  "Post job opportunities on the platform",
  "Hire and build inclusive, high-performing teams",
];

export default function ForEmployers() {
  return (
    <Layout>
      <section className="gradient-hero py-20 md:py-28">
        <div className="container max-w-3xl text-center">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="text-xs font-semibold tracking-widest text-primary uppercase mb-4">For Employers</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-4xl md:text-5xl font-extrabold">
            Build <span className="text-gradient-primary">Inclusive</span> Teams
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Inclusive hiring isn't just the right thing to do — it's a competitive advantage. Access skilled, trained talent and build a workplace that reflects the diversity of your audience.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="mt-8">
            <Button size="lg" className="bg-primary text-[#f9f2c2]" asChild>
              <Link to="/jobs">Browse Candidates <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container max-w-5xl">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-3xl font-bold text-center mb-12">Why Hire Through Baed Connect?</motion.h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((b, i) => (
              <motion.div key={b.title} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={scaleIn} custom={i}
                className="p-6 rounded-2xl bg-background border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
                <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-[#f9f2c2] transition-colors duration-300"><b.icon className="h-5 w-5" /></div>
                <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">{b.title}</h3>
                <p className="text-sm text-muted-foreground">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-2xl">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-3xl font-bold text-center mb-10">How to Get Started</motion.h2>
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