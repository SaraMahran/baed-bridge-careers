import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { courses } from "./Courses";
import { CheckCircle, Clock, ArrowLeft, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CourseDetail() {
  const { slug } = useParams();
  const course = courses.find(c => c.slug === slug);

  if (!course) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Course not found</h1>
            <Link to="/courses" className="text-primary underline">Back to courses</Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="gradient-hero py-20 md:py-28">
        <div className="container max-w-3xl">
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to all courses
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex gap-2 mb-4">
              <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground">{course.level}</span>
              <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-accent/30 text-accent-foreground">{course.lessons} lessons</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">
              {course.title}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {course.fullDesc}
            </p>
            <div className="mt-8 flex gap-4">
              <Button size="lg">
                Enroll Now
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/career-match">
                  <Sparkles className="h-4 w-4 mr-2" />
                  Get AI Career Match
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-3xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* What you'll learn */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <h2 className="text-xl font-bold text-foreground mb-4">What you'll learn</h2>
              <div className="space-y-3">
                {course.topics.map((topic, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm text-muted-foreground">{topic}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Accessibility info */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <h2 className="text-xl font-bold text-foreground mb-4">Accessibility</h2>
              <div className="flex items-start gap-3">
                <Clock className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <p className="text-sm text-muted-foreground leading-relaxed">{course.accessibility}</p>
              </div>
              <div className="mt-6 p-4 rounded-xl bg-primary/5 border border-primary/20">
                <p className="text-sm text-foreground font-medium">
                  This course is designed for people with disabilities. Take it at your own pace, on your own schedule.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}