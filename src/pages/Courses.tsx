import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { BookOpen, PenTool, BarChart3, Share2, Search, FileEdit } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const courses = [
  { icon: PenTool, title: "Content Writing Fundamentals", level: "Beginner", lessons: 12, desc: "Learn the foundations of professional content writing, from blog posts to web copy." },
  { icon: Share2, title: "Social Media Marketing", level: "Beginner", lessons: 10, desc: "Master social media strategy and content creation across major platforms." },
  { icon: Search, title: "SEO & Content Strategy", level: "Intermediate", lessons: 14, desc: "Understand search engine optimization and build effective content strategies." },
  { icon: FileEdit, title: "Copywriting for Brands", level: "Intermediate", lessons: 8, desc: "Craft compelling brand messaging that converts and engages." },
  { icon: BarChart3, title: "Content Analytics", level: "Intermediate", lessons: 9, desc: "Measure and optimize content performance with data-driven insights." },
  { icon: BookOpen, title: "Accessible Content Creation", level: "All Levels", lessons: 6, desc: "Create content that's inclusive and accessible to all audiences." },
];

export default function Courses() {
  return (
    <Layout>
      <section className="gradient-hero py-20 md:py-28">
        <div className="container max-w-3xl text-center">
          <motion.h1 initial="hidden" animate="visible" variants={fadeUp} custom={0} className="text-4xl md:text-5xl font-extrabold">
            Learning <span className="text-gradient-primary">Hub</span>
          </motion.h1>
          <motion.p initial="hidden" animate="visible" variants={fadeUp} custom={1} className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Practical, accessible courses in content marketing. Learn at your own pace with recorded lessons designed for all abilities.
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-5xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((c, i) => (
              <motion.div key={c.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 group cursor-pointer">
                <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary mb-4"><c.icon className="h-5 w-5" /></div>
                <div className="flex gap-2 mb-3">
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground">{c.level}</span>
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-accent/30 text-accent-foreground">{c.lessons} lessons</span>
                </div>
                <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">{c.title}</h3>
                <p className="text-sm text-muted-foreground">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
