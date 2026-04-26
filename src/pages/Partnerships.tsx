import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Handshake, Building2, GraduationCap, Heart, ArrowRight } from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const } }) };
const scaleIn = { hidden: { opacity: 0, scale: 0.93 }, visible: (i: number) => ({ opacity: 1, scale: 1, transition: { delay: i * 0.1, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const } }) };

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
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="text-xs font-semibold tracking-widest text-primary uppercase mb-4">Partnerships</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-4xl md:text-5xl font-extrabold">
            <span className="text-gradient-primary">Partner</span> With Us
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Together, we can create a more inclusive workforce across the Arab region.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container max-w-4xl">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-3xl font-bold text-center mb-12">Who We Partner With</motion.h2>
          <div className="grid md:grid-cols-3 gap-6">
            {partnerTypes.map((p, i) => (
              <motion.div key={p.title} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={scaleIn} custom={i}
                className="p-6 rounded-2xl bg-background border border-border text-center hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
                <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300"><p.icon className="h-6 w-6" /></div>
                <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="py-20 text-center">
        <div className="container max-w-2xl">
          <Handshake className="h-10 w-10 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Let's Build Something Together</h2>
          <p className="text-muted-foreground mb-8">Reach out to discuss how we can collaborate for inclusive impact.</p>
          <Button size="lg" className="bg-primary text-primary-foreground" asChild>
            <Link to="/contact">Get in Touch <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </motion.section>
    </Layout>
  );
}