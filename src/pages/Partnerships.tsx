import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Handshake, Building2, GraduationCap, Heart, ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const partnerTypes = [
  { icon: Building2, title: "Companies", desc: "Partner with us to access inclusive talent pipelines and demonstrate your commitment to diversity." },
  { icon: Heart, title: "NGOs", desc: "Collaborate to expand the reach and impact of accessible education and employment programs." },
  { icon: GraduationCap, title: "Educational Institutions", desc: "Join forces to develop curriculum, share resources, and create pathways for students with disabilities." },
];

export default function Partnerships() {
  return (
    <Layout>
      <section className="gradient-hero py-20 md:py-28">
        <div className="container max-w-3xl text-center">
          <motion.h1 initial="hidden" animate="visible" variants={fadeUp} custom={0} className="text-4xl md:text-5xl font-extrabold">
            <span className="text-gradient-primary">Partner</span> With Us
          </motion.h1>
          <motion.p initial="hidden" animate="visible" variants={fadeUp} custom={1} className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Together, we can create a more inclusive workforce across the Arab region. Explore how your organization can collaborate with Baed Connect.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container max-w-4xl">
          <div className="grid md:grid-cols-3 gap-6">
            {partnerTypes.map((p, i) => (
              <motion.div key={p.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                className="p-6 rounded-2xl bg-background border border-border text-center">
                <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary mb-4"><p.icon className="h-6 w-6" /></div>
                <h3 className="font-bold mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 text-center">
        <div className="container max-w-2xl">
          <Handshake className="h-10 w-10 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Let's Build Something Together</h2>
          <p className="text-muted-foreground mb-8">Reach out to discuss how we can collaborate for inclusive impact.</p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Get in Touch <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
