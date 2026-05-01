import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, ArrowRight, CheckCircle, Clock, Play } from "lucide-react";
import { Layout } from "@/components/Layout";
import { getProfileData } from "@/lib/profileData";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

export default function MyCourses() {
  const stored = localStorage.getItem("baed_user");
  const user = stored ? JSON.parse(stored) : null;
    const data = user ? getProfileData(user.email) : null;
    console.log("user email:", user?.email, "data:", data);
  const courses = data?.savedCourses ?? [];

  return (
    <Layout>
      <section className="py-16 min-h-screen">
        <div className="container max-w-4xl mx-auto">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0} className="mb-10">
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-2">Your Learning</p>
            <h1 className="text-3xl md:text-4xl font-bold">My Courses</h1>
            <p className="text-muted-foreground mt-2">Pick up where you left off.</p>
          </motion.div>

          {courses.length === 0 ? (
            <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={1}
              className="text-center py-20 rounded-2xl border border-border bg-card"
            >
              <BookOpen className="h-10 w-10 text-muted-foreground mx-auto mb-4" />
              <p className="text-lg font-semibold text-foreground mb-2">No courses yet</p>
              <p className="text-muted-foreground mb-6 text-sm">Browse our catalog to find your first course.</p>
              <Link to="/courses" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors">
                Explore Courses <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          ) : (
            <div className="grid sm:grid-cols-2 gap-5">
              {courses.map((course, i) => (
                <motion.div key={course.id} initial="hidden" animate="visible" variants={fadeUp} custom={i + 1}>
                  <Link to={course.href}
                    className="block p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                        {course.category}
                      </span>
                      {course.progress === 100 ? (
                        <CheckCircle className="h-5 w-5 text-[#5f1a37] shrink-0" />
                      ) : (
                        <Play className="h-5 w-5 text-primary shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </div>
                    <h3 className="font-bold text-foreground group-hover:text-primary transition-colors mb-4">
                      {course.title}
                    </h3>
                    {/* Progress bar */}
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {course.progress === 100 ? "Completed" : "In progress"}
                        </span>
                        <span className="font-semibold text-foreground">{course.progress}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-border overflow-hidden">
                        <div
                          className="h-full rounded-full bg-primary transition-all duration-500"
                          style={{ width: `${course.progress}%` }}
                        />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
              {/* Browse more card */}
              <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={courses.length + 1}>
                <Link to="/courses"
                  className="flex flex-col items-center justify-center gap-3 p-6 rounded-2xl border-2 border-dashed border-border hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 group h-full min-h-[160px]"
                >
                  <BookOpen className="h-7 w-7 text-muted-foreground group-hover:text-primary transition-colors" />
                  <p className="text-sm font-semibold text-muted-foreground group-hover:text-primary transition-colors">Browse more courses</p>
                </Link>
              </motion.div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}