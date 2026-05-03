import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Users, Calendar, MessageCircle, ArrowRight } from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const } }) };
const scaleIn = { hidden: { opacity: 0, scale: 0.93 }, visible: (i: number) => ({ opacity: 1, scale: 1, transition: { delay: i * 0.1, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const } }) };

const mentorshipTypes = [
  { icon: Users, title: "One-on-One Mentorship", desc: "Get paired with an experienced content marketing professional who understands your goals and challenges." },
  { icon: Calendar, title: "Career Planning Sessions", desc: "Work with mentors to map out your career path and set achievable professional milestones." },
  { icon: MessageCircle, title: "Ongoing Support", desc: "Regular check-ins and guidance as you progress through your learning and job search journey." },
];

export default function Mentorship() {
  return (
    <Layout>
      <section className="gradient-hero py-20 md:py-28">
        <div className="container max-w-3xl text-center">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="text-xs font-semibold tracking-widest text-primary uppercase mb-4">Mentorship Program</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-4xl md:text-5xl font-extrabold">
            <span className="text-gradient-primary">Mentorship</span> That Makes a Difference
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Personalized guidance from experienced professionals to help you navigate your career path with confidence.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container max-w-4xl">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-3xl font-bold text-center mb-12">What's Included</motion.h2>
          <div className="grid md:grid-cols-3 gap-6">
            {mentorshipTypes.map((m, i) => (
              <motion.div key={m.title} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={scaleIn} custom={i}
                className="p-6 rounded-2xl bg-background border border-border text-center hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
                <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-[#fff279] transition-colors duration-300"><m.icon className="h-6 w-6" /></div>
                <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">{m.title}</h3>
                <p className="text-sm text-muted-foreground">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="py-20 text-center">
        <div className="container max-w-2xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Connect With a Mentor?</h2>
          <p className="text-muted-foreground mb-8">Sign up for Baed Connect and book your first mentorship session.</p>
          <Button size="lg" className="bg-primary text-primary-foreground" asChild>
            <Link to="/signup">Get Started Free <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </motion.section>
    </Layout>
  );
}