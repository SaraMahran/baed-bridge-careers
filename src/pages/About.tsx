import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { Heart, Globe, Users, Target } from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const } }) };
const scaleIn = { hidden: { opacity: 0, scale: 0.93 }, visible: (i: number) => ({ opacity: 1, scale: 1, transition: { delay: i * 0.08, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const } }) };

const values = [
  { icon: Heart, title: "Empowerment", desc: "We believe in the potential of every individual to contribute meaningfully to the digital economy." },
  { icon: Globe, title: "Accessibility", desc: "Every aspect of our platform is designed with accessibility as a core principle, not an afterthought." },
  { icon: Users, title: "Inclusion", desc: "We're building bridges between talented individuals and forward-thinking employers." },
  { icon: Target, title: "Impact", desc: "Measurable social impact through practical skills training and real employment outcomes." },
];

export default function About() {
  return (
    <Layout>
      <section className="gradient-hero py-20 md:py-28">
        <div className="container max-w-3xl text-center">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="text-xs font-semibold tracking-widest text-primary uppercase mb-4">Our Story</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-4xl md:text-5xl font-extrabold">
            About <span className="text-gradient-primary">Baed Connect</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Baed Connect is a product of Baed (بعض), a content marketing and technology solutions company supporting startups and SMEs in Egypt and the Arab region.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-[#5f1a37]">
        <div className="container max-w-4xl text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp} custom={0}>
            <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
            <p className="text-white/75 text-lg leading-relaxed max-w-2xl mx-auto">
              A world where disability is never a barrier to professional success. Where inclusive hiring is the norm. Where digital content is accessible to everyone. We're making this real — one learner, one employer, one opportunity at a time.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-5xl">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-3xl font-bold text-center mb-12">Our Values</motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div key={v.title} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={scaleIn} custom={i}
                className="p-6 rounded-2xl bg-card border border-border text-center hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary mb-4"><v.icon className="h-6 w-6" /></div>
                <h3 className="font-bold mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}