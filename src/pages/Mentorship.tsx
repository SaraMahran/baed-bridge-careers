import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Users, Calendar, MessageCircle, ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

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
          <motion.h1 initial="hidden" animate="visible" variants={fadeUp} custom={0} className="text-4xl md:text-5xl font-extrabold">
            <span className="text-gradient-primary">Mentorship</span> That Makes a Difference
          </motion.h1>
          <motion.p initial="hidden" animate="visible" variants={fadeUp} custom={1} className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Personalized guidance from experienced professionals to help you navigate your career path with confidence.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container max-w-4xl">
          <div className="grid md:grid-cols-3 gap-6">
            {mentorshipTypes.map((m, i) => (
              <motion.div key={m.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                className="p-6 rounded-2xl bg-background border border-border text-center">
                <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary mb-4"><m.icon className="h-6 w-6" /></div>
                <h3 className="font-bold mb-2">{m.title}</h3>
                <p className="text-sm text-muted-foreground">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 text-center">
        <div className="container max-w-2xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Connect With a Mentor?</h2>
          <p className="text-muted-foreground mb-8">Sign up for Baed Connect and book your first mentorship session.</p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/signup">Get Started <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
