import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FileText, ArrowRight, Calendar, CheckCircle, Clock } from "lucide-react";
import { Layout } from "@/components/Layout";
import { getProfileData } from "@/lib/profileData";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

const statusStyle = {
  upcoming: "bg-blue-50 text-blue-600 border-blue-200",
  completed: "bg-green-50 text-green-600 border-green-200",
  pending: "bg-yellow-50 text-yellow-600 border-yellow-200",
};

export default function MyMentorship() {
  const stored = localStorage.getItem("baed_user");
  const user = stored ? JSON.parse(stored) : null;
  const data = user ? getProfileData(user.email) : null;
  const sessions = data?.mentorshipSessions ?? [];

  return (
    <Layout>
      <section className="py-16 min-h-screen">
        <div className="container max-w-4xl mx-auto">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0} className="mb-10">
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-2">Your Mentorship</p>
            <h1 className="text-3xl md:text-4xl font-bold">My Sessions</h1>
            <p className="text-muted-foreground mt-2">Your mentorship history and upcoming sessions.</p>
          </motion.div>

          {sessions.length === 0 ? (
            <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={1}
              className="text-center py-20 rounded-2xl border border-border bg-card"
            >
              <FileText className="h-10 w-10 text-muted-foreground mx-auto mb-4" />
              <p className="text-lg font-semibold text-foreground mb-2">No sessions yet</p>
              <p className="text-muted-foreground mb-6 text-sm">Book a session with one of our mentors.</p>
              <Link to="/mentorship" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors">
                Book a Session <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          ) : (
            <div className="flex flex-col gap-4">
              {sessions.map((session, i) => (
                <motion.div key={session.id} initial="hidden" animate="visible" variants={fadeUp} custom={i + 1}
                  className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-sm transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="p-2.5 rounded-xl bg-primary/10 shrink-0">
                        {session.status === "completed"
                          ? <CheckCircle className="h-5 w-5 text-green-500" />
                          : <Clock className="h-5 w-5 text-primary" />
                        }
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground">{session.topic}</h3>
                        <p className="text-sm text-muted-foreground mt-0.5">with {session.mentor}</p>
                        <div className="flex items-center gap-1.5 mt-2 text-xs text-muted-foreground">
                          <Calendar className="h-3.5 w-3.5" />
                          {session.date}
                        </div>
                      </div>
                    </div>
                    <span className={`shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full border capitalize ${statusStyle[session.status]}`}>
                      {session.status}
                    </span>
                  </div>
                </motion.div>
              ))}
              <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={sessions.length + 1}>
                <Link to="/mentorship"
                  className="flex items-center justify-center gap-2 p-4 rounded-2xl border-2 border-dashed border-border hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 group"
                >
                  <FileText className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  <p className="text-sm font-semibold text-muted-foreground group-hover:text-primary transition-colors">Book another session</p>
                </Link>
              </motion.div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}