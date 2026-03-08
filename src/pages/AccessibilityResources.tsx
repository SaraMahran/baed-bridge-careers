import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { Eye, Ear, Hand, Monitor, FileText, MessageCircle } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const resources = [
  { icon: Eye, title: "Visual Accessibility", desc: "Guidelines for color contrast, font sizing, and visual design that works for everyone." },
  { icon: Ear, title: "Audio & Captions", desc: "Best practices for captions, transcripts, and audio descriptions in digital content." },
  { icon: Hand, title: "Motor Accessibility", desc: "Keyboard navigation, touch targets, and interaction patterns for motor impairments." },
  { icon: Monitor, title: "Screen Reader Support", desc: "Creating content that works seamlessly with assistive technologies." },
  { icon: FileText, title: "Accessible Documents", desc: "Making PDFs, presentations, and documents accessible to all readers." },
  { icon: MessageCircle, title: "Inclusive Language", desc: "Writing copy that respects and includes people with disabilities." },
];

export default function AccessibilityResources() {
  return (
    <Layout>
      <section className="gradient-hero py-20 md:py-28">
        <div className="container max-w-3xl text-center">
          <motion.h1 initial="hidden" animate="visible" variants={fadeUp} custom={0} className="text-4xl md:text-5xl font-extrabold">
            Accessibility <span className="text-gradient-primary">Resources</span>
          </motion.h1>
          <motion.p initial="hidden" animate="visible" variants={fadeUp} custom={1} className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Learn how to create digital content and work environments that are truly accessible and inclusive.
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-5xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((r, i) => (
              <motion.div key={r.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 cursor-pointer group">
                <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary mb-4"><r.icon className="h-5 w-5" /></div>
                <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">{r.title}</h3>
                <p className="text-sm text-muted-foreground">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
