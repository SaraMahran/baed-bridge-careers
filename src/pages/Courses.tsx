import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { BookOpen, PenTool, BarChart3, Share2, Search, FileEdit } from "lucide-react";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const } }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: (i: number) => ({ opacity: 1, scale: 1, transition: { delay: i * 0.08, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const } }),
};

export const courses = [
  { icon: PenTool, title: "Content Writing Fundamentals", slug: "content-writing-fundamentals", level: "Beginner", lessons: 12, desc: "Learn the foundations of professional content writing, from blog posts to web copy.", fullDesc: "This course covers everything you need to start writing professional content — from understanding your audience and structuring articles, to writing compelling web copy and blog posts. You'll practice with real assignments and get feedback on your writing.", topics: ["Understanding content formats", "Writing for the web", "Blog post structure", "Web copy fundamentals", "Editing and proofreading", "Building a writing portfolio"], accessibility: "All lessons are recorded with captions. Written transcripts available. Self-paced with no deadlines." },
  { icon: Share2, title: "Social Media Marketing", slug: "social-media-marketing", level: "Beginner", lessons: 10, desc: "Master social media strategy and content creation across major platforms.", fullDesc: "Learn how to build and manage social media presence across Instagram, LinkedIn, Facebook, and TikTok. You'll create content calendars, write engaging captions, and understand analytics to grow an audience.", topics: ["Platform strategy", "Content calendars", "Caption writing", "Visual content basics", "Community engagement", "Social media analytics"], accessibility: "All lessons are recorded with captions. Written transcripts available. Self-paced with no deadlines." },
  { icon: Search, title: "SEO & Content Strategy", slug: "seo-content-strategy", level: "Intermediate", lessons: 14, desc: "Understand search engine optimization and build effective content strategies.", fullDesc: "Dive into the world of SEO and learn how to create content that ranks. This course covers keyword research, on-page optimization, content planning, and how to build a content strategy that drives organic traffic.", topics: ["Keyword research", "On-page SEO", "Content planning", "Link building basics", "Technical SEO overview", "Measuring SEO performance"], accessibility: "All lessons are recorded with captions. Written transcripts available. Self-paced with no deadlines." },
  { icon: FileEdit, title: "Copywriting for Brands", slug: "copywriting-for-brands", level: "Intermediate", lessons: 8, desc: "Craft compelling brand messaging that converts and engages.", fullDesc: "Learn the art and science of copywriting — writing words that make people take action. From brand voice development to conversion copy, this course gives you the tools to write for any brand confidently.", topics: ["Brand voice", "Conversion copywriting", "Email copy", "Ad copywriting", "Landing pages", "Brand storytelling"], accessibility: "All lessons are recorded with captions. Written transcripts available. Self-paced with no deadlines." },
  { icon: BarChart3, title: "Content Analytics", slug: "content-analytics", level: "Intermediate", lessons: 9, desc: "Measure and optimize content performance with data-driven insights.", fullDesc: "Stop guessing and start knowing. This course teaches you how to measure the performance of your content using Google Analytics, social media insights, and other tools — and how to use that data to improve.", topics: ["Google Analytics basics", "Social media insights", "Content performance metrics", "A/B testing", "Reporting", "Data-driven content decisions"], accessibility: "All lessons are recorded with captions. Written transcripts available. Self-paced with no deadlines." },
  { icon: BookOpen, title: "Accessible Content Creation", slug: "accessible-content-creation", level: "All Levels", lessons: 6, desc: "Create content that's inclusive and accessible to all audiences.", fullDesc: "Learn how to create digital content that everyone can access and enjoy — including people with visual, hearing, cognitive, and motor disabilities. This course is essential for any content creator who wants to reach the widest possible audience.", topics: ["Web accessibility basics", "Alt text and image descriptions", "Captions and transcripts", "Inclusive language", "Accessible documents", "Testing for accessibility"], accessibility: "All lessons are recorded with captions. Written transcripts available. Self-paced with no deadlines." },
];

export default function Courses() {
  return (
    <Layout>
      <section className="gradient-hero py-20 md:py-28">
        <div className="container max-w-3xl text-center">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="text-xs font-semibold tracking-widest text-primary uppercase mb-4">Learning Hub</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-4xl md:text-5xl font-extrabold">
            Practical <span className="text-gradient-primary">Courses</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Accessible content marketing courses. Learn at your own pace with recorded lessons designed for all abilities.
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-5xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((c, i) => (
              <motion.div key={c.title} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={scaleIn} custom={i}>
                <Link to={`/courses/${c.slug}`} className="block p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 group h-full">
                  <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-[#fff279] transition-colors duration-300">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <div className="flex gap-2 mb-3">
                    <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground">{c.level}</span>
                    <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-accent/30 text-accent-foreground">{c.lessons} lessons</span>
                  </div>
                  <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">{c.title}</h3>
                  <p className="text-sm text-muted-foreground">{c.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}