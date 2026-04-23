import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Building2,
  BookOpen,
  Users,
  Compass,
  FileText,
  Heart,
  ArrowRight,
  Accessibility,
  Globe,
  Lightbulb,
  Handshake,
  Target,
  Sparkles,
} from "lucide-react";
import { Layout } from "@/components/Layout";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

function HeroSection() {
  return (
    <section className="gradient-hero py-20 md:py-32 overflow-hidden">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-sm font-semibold text-primary uppercase tracking-widest mb-4"
          >
            Education for Employment is Accessible
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight"
          >
            Skills. Opportunity.{" "}
            <span className="text-gradient-primary">Inclusion.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
          >
            Baed Connect empowers people with disabilities to build real careers in
            content marketing — and helps employers build truly inclusive teams.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg">
              <Link to="/career-match">
                <Sparkles className="mr-2 h-5 w-5" />
                Find My Career Match
              </Link>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <Link to="/employers">
                <Building2 className="mr-2 h-5 w-5" />
                Hire Inclusive Talent
              </Link>
            </Button>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-4 text-xs text-muted-foreground"
          >
            Powered by Gemini AI · Free · Takes 30 seconds
          </motion.p>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="py-20 bg-card" aria-labelledby="about-heading">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <h2 id="about-heading" className="text-3xl md:text-4xl font-bold">
              What is Baed Connect?
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Baed Connect is an educational and hiring platform designed to help
              individuals with disabilities gain practical skills in content marketing
              and connect with employers who want to build inclusive teams. We focus on
              remote-friendly careers where people with disabilities can work
              effectively and build meaningful professional lives.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function AudienceSection() {
  const audiences = [
    {
      icon: GraduationCap,
      title: "For Learners",
      description:
        "Gain practical content marketing skills, receive personalized mentorship, and access real job opportunities — all in an accessible learning environment designed for you.",
      href: "/learners",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: Building2,
      title: "For Employers",
      description:
        "Access trained, motivated talent with disabilities. Get guidance on accessibility, inclusive work environments, and building content that reaches everyone.",
      href: "/employers",
      color: "bg-accent/30 text-accent-foreground",
    },
  ];

  return (
    <section className="py-20" aria-labelledby="audience-heading">
      <div className="container">
        <motion.h2
          id="audience-heading"
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
        >
          Who is Baed Connect For?
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {audiences.map((a, i) => (
            <motion.div
              key={a.title}
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i + 1}
            >
              <Link
                to={a.href}
                className="block p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 group h-full"
              >
                <div className={`inline-flex p-3 rounded-xl ${a.color} mb-5`}>
                  <a.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {a.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{a.description}</p>
                <span className="inline-flex items-center mt-4 text-sm font-medium text-primary">
                  Learn more <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LearnerFeaturesSection() {
  const features = [
    { icon: BookOpen, label: "Accessible recorded lessons" },
    { icon: Users, label: "Mentorship sessions" },
    { icon: Compass, label: "Career guidance" },
    { icon: FileText, label: "HR support for applications" },
    { icon: Target, label: "Career path recommendations" },
    { icon: Sparkles, label: "Portfolio building support" },
  ];

  return (
    <section className="py-20 bg-card" aria-labelledby="learner-features-heading">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <h2 id="learner-features-heading" className="text-3xl md:text-4xl font-bold">
              What Learners Get
            </h2>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              Everything you need to build a successful career in content marketing — from
              structured learning to hands-on mentorship and real job placement support.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <motion.div
                key={f.label}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i * 0.5}
                className="flex items-start gap-3 p-4 rounded-xl bg-background border border-border"
              >
                <f.icon className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span className="text-sm font-medium">{f.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function EmployerFeaturesSection() {
  const features = [
    { icon: Users, label: "Access to trained talent with disabilities" },
    { icon: Accessibility, label: "Accessibility and inclusion resources" },
    { icon: Lightbulb, label: "Inclusive work environment guidance" },
    { icon: Globe, label: "Accessible content creation support" },
  ];

  return (
    <section className="py-20" aria-labelledby="employer-features-heading">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-4 order-2 lg:order-1">
            {features.map((f, i) => (
              <motion.div
                key={f.label}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i * 0.5}
                className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border"
              >
                <f.icon className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span className="text-sm font-medium">{f.label}</span>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="order-1 lg:order-2"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
          >
            <h2 id="employer-features-heading" className="text-3xl md:text-4xl font-bold">
              What Employers Get
            </h2>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              Build a more inclusive workplace with access to skilled talent, expert
              resources, and guidance on creating accessible content and work environments.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  const learnerSteps = [
    "Sign up and create your profile",
    "Choose your learning path",
    "Complete accessible courses",
    "Get personalized mentorship",
    "Apply for matched job opportunities",
  ];

  const employerSteps = [
    "Create your company account",
    "Explore inclusion best practices",
    "Browse trained candidate profiles",
    "Post job opportunities",
    "Hire and build inclusive teams",
  ];

  return (
    <section className="py-20 bg-card" aria-labelledby="how-it-works-heading">
      <div className="container">
        <motion.h2
          id="how-it-works-heading"
          className="text-3xl md:text-4xl font-bold text-center mb-14"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
        >
          How It Works
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {[
            { title: "For Learners", steps: learnerSteps, icon: GraduationCap },
            { title: "For Employers", steps: employerSteps, icon: Building2 },
          ].map((track, idx) => (
            <motion.div
              key={track.title}
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={idx + 1}
              className="p-8 rounded-2xl border border-border bg-background"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-primary/10">
                  <track.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold">{track.title}</h3>
              </div>
              <ol className="space-y-4">
                {track.steps.map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-primary/10 text-primary text-xs font-bold shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-sm text-muted-foreground">{step}</span>
                  </li>
                ))}
              </ol>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MissionSection() {
  return (
    <section className="py-20 gradient-accent" aria-labelledby="mission-heading">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <Heart className="h-10 w-10 text-primary mx-auto mb-6" />
            <h2 id="mission-heading" className="text-3xl md:text-4xl font-bold">
              Our Mission
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              We believe that people with disabilities are powerful contributors to the
              digital economy. Baed Connect exists to bridge the gap between talent and
              opportunity — creating pathways to meaningful employment in content creation
              and digital work. This isn't charity. This is smart, inclusive business.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function PartnershipSection() {
  return (
    <section className="py-20 bg-card" aria-labelledby="partner-heading">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <Handshake className="h-10 w-10 text-primary mx-auto mb-6" />
            <h2 id="partner-heading" className="text-3xl md:text-4xl font-bold">
              Partner With Us
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              We're building a movement. NGOs, companies, and educational institutions —
              let's collaborate to create a more inclusive workforce across the Arab region.
            </p>
            <Button className="mt-8" size="lg" asChild>
              <Link to="/partnerships">
                Explore Partnerships <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FinalCTASection() {
  return (
    <section className="py-24 gradient-primary text-primary-foreground">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Get Started?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80 leading-relaxed">
              Whether you're ready to learn new skills or build an inclusive team,
              Baed Connect is here for you.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                asChild
              >
                <Link to="/courses">
                  <GraduationCap className="mr-2 h-5 w-5" />
                  Start Learning
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border border-white text-white bg-transparent hover:bg-primary hover:text-white"
                asChild
              >
                <Link to="/employers">
                  <Building2 className="mr-2 h-5 w-5" />
                  Hire Inclusive Talent
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <AudienceSection />
      <LearnerFeaturesSection />
      <EmployerFeaturesSection />
      <HowItWorksSection />
      <MissionSection />
      <PartnershipSection />
      <FinalCTASection />
    </Layout>
  );
};

export default Index;
