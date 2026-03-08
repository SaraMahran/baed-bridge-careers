import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Users, Accessibility, Lightbulb, Globe, ArrowRight, CheckCircle2 } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

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
          <motion.h1 initial="hidden" animate="visible" variants={fadeUp} custom={0} className="text-4xl md:text-5xl font-extrabold">
            Build <span className="text-gradient-primary">Inclusive</span> Teams
          </motion.h1>
          <motion.p initial="hidden" animate="visible" variants={fadeUp} custom={1} className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Inclusive hiring isn't just the right thing to do — it's a competitive advantage. Access skilled, trained talent and build a workplace that reflects the diversity of your audience.
          </motion.p>
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={2} className="mt-8">
            <Button variant="hero" size="lg" asChild>
              <Link to="/jobs">Browse Candidates <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-12">Why Hire Through Baed Connect?</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((b, i) => (
              <motion.div key={b.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                className="p-6 rounded-2xl bg-background border border-border">
                <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary mb-4"><b.icon className="h-5 w-5" /></div>
                <h3 className="font-bold mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-2xl">
          <h2 className="text-3xl font-bold text-center mb-10">How to Get Started</h2>
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
