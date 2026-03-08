import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { Heart, Globe, Users, Target } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

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
          <motion.h1 initial="hidden" animate="visible" variants={fadeUp} custom={0} className="text-4xl md:text-5xl font-extrabold">
            About <span className="text-gradient-primary">Baed Connect</span>
          </motion.h1>
          <motion.p initial="hidden" animate="visible" variants={fadeUp} custom={1} className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Baed Connect is a product of Baed (بعض), a content marketing and technology solutions company supporting startups and SMEs in Egypt and the Arab region. We created this platform to bridge the gap between disability and employment through accessible education and inclusive hiring.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container max-w-4xl">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-3xl font-bold text-center mb-6">
            Our Vision
          </motion.h2>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1} className="text-center text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            A world where disability is never a barrier to professional success. Where inclusive hiring is the norm. Where digital content is accessible to everyone. We're making this real — one learner, one employer, one opportunity at a time.
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div key={v.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                className="p-6 rounded-2xl bg-card border border-border text-center">
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
