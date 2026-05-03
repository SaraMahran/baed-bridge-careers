import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Mail, MapPin, MessageCircle, Send, User, AtSign, BookOpen } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const } }),
};

export default function Contact() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Message sent!", description: "We'll get back to you within 48 hours." });
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 1000);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-hero py-20 md:py-28">
        <div className="container max-w-3xl text-center">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="text-xs font-semibold tracking-widest text-primary uppercase mb-4">
            Contact Us
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-4xl md:text-5xl font-extrabold">
            Get in <span className="text-gradient-primary">Touch</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Have questions? Want to partner with us? We'd love to hear from you.
          </motion.p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container max-w-5xl">
          <div className="grid lg:grid-cols-3 gap-8">

            {/* Left — contact info cards */}
            <div className="space-y-4">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
                <h2 className="text-xl font-bold text-foreground mb-6">How to reach us</h2>
              </motion.div>

              {[
                {
                  icon: Mail,
                  title: "Email",
                  value: "reem@baedcontent.com",
                  desc: "We respond within 48 hours",
                  i: 1,
                },
                {
                  icon: MapPin,
                  title: "Location",
                  value: "Cairo, Egypt",
                  desc: "Serving the Arab region",
                  i: 2,
                },
                {
                  icon: MessageCircle,
                  title: "Social",
                  value: "LinkedIn & Instagram",
                  desc: "Follow @baedconnect",
                  i: 3,
                },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }}
                  variants={fadeUp} custom={item.i}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-sm transition-all duration-200"
                >
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary shrink-0">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-sm">{item.title}</p>
                    <p className="text-sm text-primary font-medium mt-0.5">{item.value}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
                  </div>
                </motion.div>
              ))}

              {/* Quick links card */}
              <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeUp} custom={4}
                className="p-5 rounded-2xl bg-gradient-to-br from-[#5f1a37] to-[#a0205b] text-[#fff279] mt-6"
              >
                <BookOpen className="h-6 w-6 text-[#fff279] mb-3" />
                <p className="font-bold text-sm mb-1">Looking to join?</p>
                <p className="text-[#fff279]/70 text-xs leading-relaxed mb-3">
                  Sign up free and start your career journey today.
                </p>
                <a href="/get-started" className="inline-flex items-center gap-1 text-xs font-bold text-[#fff279] hover:text-[#fff279] transition-colors">
                  Get started free →
                </a>
              </motion.div>
            </div>

            {/* Right — form */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp} custom={0}
              className="lg:col-span-2"
            >
              <div className="text-center mb-8 lg:text-left">
                <h2 className="text-xl font-bold text-foreground mb-1">Send us a message</h2>
                <p className="text-sm text-muted-foreground">Fill in the form below and we'll get back to you soon.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name + Email */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-card border border-border rounded-2xl p-5">
                    <label className="block text-sm font-bold text-foreground mb-1">
                      <User className="inline h-3.5 w-3.5 mr-1.5 text-primary" />
                      Your name
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Sara Ahmed"
                      className="w-full px-3 py-2.5 mt-2 rounded-xl border-2 border-border text-sm text-foreground bg-background focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>

                  <div className="bg-card border border-border rounded-2xl p-5">
                    <label className="block text-sm font-bold text-foreground mb-1">
                      <AtSign className="inline h-3.5 w-3.5 mr-1.5 text-primary" />
                      Email address
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                      className="w-full px-3 py-2.5 mt-2 rounded-xl border-2 border-border text-sm text-foreground bg-background focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="bg-card border border-border rounded-2xl p-5">
                  <label className="block text-sm font-bold text-foreground mb-1">What's this about?</label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2.5 mt-2 rounded-xl border-2 border-border text-sm text-foreground bg-background focus:outline-none focus:border-primary transition-colors"
                  >
                    <option value="">Select a subject...</option>
                    <option value="General inquiry">General inquiry</option>
                    <option value="Partnership opportunity">Partnership opportunity</option>
                    <option value="Employer inquiry">Employer inquiry</option>
                    <option value="Learner support">Learner support</option>
                    <option value="Technical issue">Technical issue</option>
                    <option value="Media & press">Media & press</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div className="bg-card border border-border rounded-2xl p-5">
                  <label className="block text-sm font-bold text-foreground mb-1">Your message</label>
                  <p className="text-xs text-muted-foreground mb-2">Tell us what's on your mind — the more detail, the better we can help.</p>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Hi, I'd like to ask about..."
                    className="w-full px-3 py-3 mt-1 rounded-xl border-2 border-border text-sm text-foreground bg-background focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  size="lg"
                  className="w-full h-12 text-base font-bold"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending your message...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="h-4 w-4" />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>
    </Layout>
  );
}