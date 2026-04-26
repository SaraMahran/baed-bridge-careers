// import { Link } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { motion } from "framer-motion";
// import {
//   GraduationCap,
//   Building2,
//   BookOpen,
//   Users,
//   Compass,
//   FileText,
//   Heart,
//   ArrowRight,
//   Accessibility,
//   Globe,
//   Lightbulb,
//   Handshake,
//   Target,
//   Sparkles,
// } from "lucide-react";
// import { Layout } from "@/components/Layout";

// const fadeUp = {
//   hidden: { opacity: 0, y: 24 },
//   visible: (i: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: i * 0.1, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
//   }),
// };

// function HeroSection() {
//   return (
//     <section className="gradient-hero py-20 md:py-32 overflow-hidden">
//       <div className="container">
//         <div className="max-w-3xl mx-auto text-center">
//           <motion.p
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.4 }}
//             className="text-sm font-semibold text-primary uppercase tracking-widest mb-4"
//           >
//             Education for Employment is Accessible
//           </motion.p>
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.1 }}
//             className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight"
//           >
//             Skills. Opportunity.{" "}
//             <span className="text-gradient-primary">Inclusion.</span>
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
//           >
//             Baed Connect empowers people with disabilities to build real careers in
//             content marketing — and helps employers build truly inclusive teams.
//           </motion.p>
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.3 }}
//             className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
//           >
//             <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg">
//               <Link to="/career-match">
//                 <Sparkles className="mr-2 h-5 w-5" />
//                 Find My Career Match
//               </Link>
//             </Button>
//             <Button variant="hero-outline" size="lg" asChild>
//               <Link to="/employers">
//                 <Building2 className="mr-2 h-5 w-5" />
//                 Hire Inclusive Talent
//               </Link>
//             </Button>
//           </motion.div>
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5, delay: 0.5 }}
//             className="mt-4 text-xs text-muted-foreground"
//           >
//             Powered by Gemini AI · Free · Takes 30 seconds
//           </motion.p>
//         </div>
//       </div>
//     </section>
//   );
// }

// function AboutSection() {
//   return (
//     <section className="py-20 bg-card" aria-labelledby="about-heading">
//       <div className="container">
//         <div className="max-w-3xl mx-auto text-center">
//           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
//             <h2 id="about-heading" className="text-3xl md:text-4xl font-bold">
//               What is Baed Connect?
//             </h2>
//             <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
//               Baed Connect is an educational and hiring platform designed to help
//               individuals with disabilities gain practical skills in content marketing
//               and connect with employers who want to build inclusive teams. We focus on
//               remote-friendly careers where people with disabilities can work
//               effectively and build meaningful professional lives.
//             </p>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function AudienceSection() {
//   const audiences = [
//     {
//       icon: GraduationCap,
//       title: "For Learners",
//       description:
//         "Gain practical content marketing skills, receive personalized mentorship, and access real job opportunities — all in an accessible learning environment designed for you.",
//       href: "/learners",
//       color: "bg-primary/10 text-primary",
//     },
//     {
//       icon: Building2,
//       title: "For Employers",
//       description:
//         "Access trained, motivated talent with disabilities. Get guidance on accessibility, inclusive work environments, and building content that reaches everyone.",
//       href: "/employers",
//       color: "bg-accent/30 text-accent-foreground",
//     },
//   ];

//   return (
//     <section className="py-20" aria-labelledby="audience-heading">
//       <div className="container">
//         <motion.h2
//           id="audience-heading"
//           className="text-3xl md:text-4xl font-bold text-center mb-12"
//           initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
//         >
//           Who is Baed Connect For?
//         </motion.h2>
//         <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
//           {audiences.map((a, i) => (
//             <motion.div
//               key={a.title}
//               initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i + 1}
//             >
//               <Link
//                 to={a.href}
//                 className="block p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 group h-full"
//               >
//                 <div className={`inline-flex p-3 rounded-xl ${a.color} mb-5`}>
//                   <a.icon className="h-6 w-6" />
//                 </div>
//                 <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
//                   {a.title}
//                 </h3>
//                 <p className="text-muted-foreground leading-relaxed">{a.description}</p>
//                 <span className="inline-flex items-center mt-4 text-sm font-medium text-primary">
//                   Learn more <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
//                 </span>
//               </Link>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function LearnerFeaturesSection() {
//   const features = [
//     { icon: BookOpen, label: "Accessible recorded lessons" },
//     { icon: Users, label: "Mentorship sessions" },
//     { icon: Compass, label: "Career guidance" },
//     { icon: FileText, label: "HR support for applications" },
//     { icon: Target, label: "Career path recommendations" },
//     { icon: Sparkles, label: "Portfolio building support" },
//   ];

//   return (
//     <section className="py-20 bg-card" aria-labelledby="learner-features-heading">
//       <div className="container">
//         <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
//           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
//             <h2 id="learner-features-heading" className="text-3xl md:text-4xl font-bold">
//               What Learners Get
//             </h2>
//             <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
//               Everything you need to build a successful career in content marketing — from
//               structured learning to hands-on mentorship and real job placement support.
//             </p>
//           </motion.div>
//           <div className="grid sm:grid-cols-2 gap-4">
//             {features.map((f, i) => (
//               <motion.div
//                 key={f.label}
//                 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i * 0.5}
//                 className="flex items-start gap-3 p-4 rounded-xl bg-background border border-border"
//               >
//                 <f.icon className="h-5 w-5 text-primary mt-0.5 shrink-0" />
//                 <span className="text-sm font-medium">{f.label}</span>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function EmployerFeaturesSection() {
//   const features = [
//     { icon: Users, label: "Access to trained talent with disabilities" },
//     { icon: Accessibility, label: "Accessibility and inclusion resources" },
//     { icon: Lightbulb, label: "Inclusive work environment guidance" },
//     { icon: Globe, label: "Accessible content creation support" },
//   ];

//   return (
//     <section className="py-20" aria-labelledby="employer-features-heading">
//       <div className="container">
//         <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
//           <div className="grid sm:grid-cols-2 gap-4 order-2 lg:order-1">
//             {features.map((f, i) => (
//               <motion.div
//                 key={f.label}
//                 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i * 0.5}
//                 className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border"
//               >
//                 <f.icon className="h-5 w-5 text-primary mt-0.5 shrink-0" />
//                 <span className="text-sm font-medium">{f.label}</span>
//               </motion.div>
//             ))}
//           </div>
//           <motion.div
//             className="order-1 lg:order-2"
//             initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
//           >
//             <h2 id="employer-features-heading" className="text-3xl md:text-4xl font-bold">
//               What Employers Get
//             </h2>
//             <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
//               Build a more inclusive workplace with access to skilled talent, expert
//               resources, and guidance on creating accessible content and work environments.
//             </p>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function HowItWorksSection() {
//   const learnerSteps = [
//     "Sign up and create your profile",
//     "Choose your learning path",
//     "Complete accessible courses",
//     "Get personalized mentorship",
//     "Apply for matched job opportunities",
//   ];

//   const employerSteps = [
//     "Create your company account",
//     "Explore inclusion best practices",
//     "Browse trained candidate profiles",
//     "Post job opportunities",
//     "Hire and build inclusive teams",
//   ];

//   return (
//     <section className="py-20 bg-card" aria-labelledby="how-it-works-heading">
//       <div className="container">
//         <motion.h2
//           id="how-it-works-heading"
//           className="text-3xl md:text-4xl font-bold text-center mb-14"
//           initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
//         >
//           How It Works
//         </motion.h2>
//         <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
//           {[
//             { title: "For Learners", steps: learnerSteps, icon: GraduationCap },
//             { title: "For Employers", steps: employerSteps, icon: Building2 },
//           ].map((track, idx) => (
//             <motion.div
//               key={track.title}
//               initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={idx + 1}
//               className="p-8 rounded-2xl border border-border bg-background"
//             >
//               <div className="flex items-center gap-3 mb-6">
//                 <div className="p-2.5 rounded-xl bg-primary/10">
//                   <track.icon className="h-5 w-5 text-primary" />
//                 </div>
//                 <h3 className="text-xl font-bold">{track.title}</h3>
//               </div>
//               <ol className="space-y-4">
//                 {track.steps.map((step, i) => (
//                   <li key={i} className="flex items-start gap-3">
//                     <span className="flex items-center justify-center w-7 h-7 rounded-full bg-primary/10 text-primary text-xs font-bold shrink-0 mt-0.5">
//                       {i + 1}
//                     </span>
//                     <span className="text-sm text-muted-foreground">{step}</span>
//                   </li>
//                 ))}
//               </ol>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function MissionSection() {
//   return (
//     <section className="py-20 gradient-accent" aria-labelledby="mission-heading">
//       <div className="container">
//         <div className="max-w-3xl mx-auto text-center">
//           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
//             <Heart className="h-10 w-10 text-primary mx-auto mb-6" />
//             <h2 id="mission-heading" className="text-3xl md:text-4xl font-bold">
//               Our Mission
//             </h2>
//             <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
//               We believe that people with disabilities are powerful contributors to the
//               digital economy. Baed Connect exists to bridge the gap between talent and
//               opportunity — creating pathways to meaningful employment in content creation
//               and digital work. This isn't charity. This is smart, inclusive business.
//             </p>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function PartnershipSection() {
//   return (
//     <section className="py-20 bg-card" aria-labelledby="partner-heading">
//       <div className="container">
//         <div className="max-w-3xl mx-auto text-center">
//           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
//             <Handshake className="h-10 w-10 text-primary mx-auto mb-6" />
//             <h2 id="partner-heading" className="text-3xl md:text-4xl font-bold">
//               Partner With Us
//             </h2>
//             <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
//               We're building a movement. NGOs, companies, and educational institutions —
//               let's collaborate to create a more inclusive workforce across the Arab region.
//             </p>
//             <Button className="mt-8" size="lg" asChild>
//               <Link to="/partnerships">
//                 Explore Partnerships <ArrowRight className="ml-2 h-4 w-4" />
//               </Link>
//             </Button>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function FinalCTASection() {
//   return (
//     <section className="py-24 gradient-primary text-primary-foreground">
//       <div className="container">
//         <div className="max-w-3xl mx-auto text-center">
//           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
//             <h2 className="text-3xl md:text-4xl font-bold">
//               Ready to Get Started?
//             </h2>
//             <p className="mt-4 text-lg text-primary-foreground/80 leading-relaxed">
//               Whether you're ready to learn new skills or build an inclusive team,
//               Baed Connect is here for you.
//             </p>
//             <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
//               <Button
//                 size="lg"
//                 variant="secondary"
//                 asChild
//               >
//                 <Link to="/courses">
//                   <GraduationCap className="mr-2 h-5 w-5" />
//                   Start Learning
//                 </Link>
//               </Button>
//               <Button
//                 size="lg"
//                 variant="outline"
//                 className="border border-white text-white bg-transparent hover:bg-primary hover:text-white"
//                 asChild
//               >
//                 <Link to="/employers">
//                   <Building2 className="mr-2 h-5 w-5" />
//                   Hire Inclusive Talent
//                 </Link>
//               </Button>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

// const Index = () => {
//   return (
//     <Layout>
//       <HeroSection />
//       <AboutSection />
//       <AudienceSection />
//       <LearnerFeaturesSection />
//       <EmployerFeaturesSection />
//       <HowItWorksSection />
//       <MissionSection />
//       <PartnershipSection />
//       <FinalCTASection />
//     </Layout>
//   );
// };

// export default Index;


import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
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
  Star,
  FileText as FileTextIcon,
  MessageSquare,
} from "lucide-react";
import { Layout } from "@/components/Layout";

// ── Animation variants ──────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

const slideLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: (i: number) => ({
    opacity: 1, x: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

const slideRight = {
  hidden: { opacity: 0, x: 40 },
  visible: (i: number) => ({
    opacity: 1, x: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: (i: number) => ({
    opacity: 1, scale: 1,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

// ── Sections ─────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="gradient-hero py-20 md:py-32 overflow-hidden relative">
      {/* Decorative animated blobs */}
      <motion.div
        className="absolute top-10 left-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-accent/20 blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="container relative z-10">
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
            {/* Pulsing primary CTA */}
            <motion.div
              animate={{ boxShadow: ["0 0 0 0 rgba(160,32,91,0)", "0 0 0 12px rgba(160,32,91,0.15)", "0 0 0 0 rgba(160,32,91,0)"] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="rounded-lg"
            >
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg">
                <Link to="/career-match">
                  <Sparkles className="mr-2 h-5 w-5" />
                  Find My Career Match
                </Link>
              </Button>
            </motion.div>
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
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp} custom={0}
          >
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
      description: "Gain practical content marketing skills, receive personalized mentorship, and access real job opportunities — all in an accessible learning environment designed for you.",
      href: "/learners",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: Building2,
      title: "For Employers",
      description: "Access trained, motivated talent with disabilities. Get guidance on accessibility, inclusive work environments, and building content that reaches everyone.",
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
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp} custom={0}
        >
          Who is Baed Connect For?
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {audiences.map((a, i) => (
            <motion.div
              key={a.title}
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
              variants={i === 0 ? slideLeft : slideRight} custom={1}
            >
              <Link
                to={a.href}
                className="block p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 group h-full"
              >
                <div className={`inline-flex p-3 rounded-xl ${a.color} mb-5`}>
                  <a.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{a.title}</h3>
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
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            variants={slideLeft} custom={0}
          >
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
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
                variants={scaleIn} custom={i}
                className="flex items-start gap-3 p-4 rounded-xl bg-background border border-border hover:border-primary/30 hover:shadow-sm transition-all duration-200"
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
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
                variants={scaleIn} custom={i}
                className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-sm transition-all duration-200"
              >
                <f.icon className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span className="text-sm font-medium">{f.label}</span>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="order-1 lg:order-2"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            variants={slideRight} custom={0}
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
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp} custom={0}
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
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
              variants={idx === 0 ? slideLeft : slideRight} custom={1}
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
                  <motion.li
                    key={i}
                    initial="hidden" whileInView="visible" viewport={{ once: true }}
                    variants={fadeUp} custom={i * 0.5}
                    className="flex items-start gap-3"
                  >
                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-primary/10 text-primary text-xs font-bold shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-sm text-muted-foreground">{step}</span>
                  </motion.li>
                ))}
              </ol>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CareerMatchCTASection() {
  const results = [
    { emoji: "🎯", title: "Personalized job match", desc: "AI reads your background and finds your best-fit role from our listings" },
    { emoji: "⭐", title: "Your strongest selling point", desc: "One powerful sentence about what makes you stand out to employers" },
    { emoji: "📄", title: "Resume tips", desc: "Specific advice on how to present your experience for your matched role" },
    { emoji: "📚", title: "Custom learning path", desc: "The exact courses you need to close your skill gaps" },
    { emoji: "💬", title: "Interview preparation", desc: "3 tailored tips to walk into your interview with confidence" },
  ];

  return (
    <section className="py-24 overflow-hidden">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#5f1a37] via-[#a0205b] to-[#c374ae]" />
            {/* Animated blobs */}
            <motion.div
              className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/5"
              animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-white/5"
              animate={{ scale: [1.15, 1, 1.15], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
            <motion.div
              className="absolute top-10 right-40 w-40 h-40 rounded-full bg-[#fff279]/10"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center p-10 md:p-16">
              {/* Left */}
              <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
                variants={slideLeft} custom={0}
              >
                <div className="inline-flex items-center gap-2 bg-white/15 text-white px-4 py-2 rounded-full text-xs font-semibold mb-6 border border-white/20">
                  <Sparkles className="h-3.5 w-3.5" />
                  Powered by Gemini AI
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-6">
                  Your career match,{" "}
                  <span className="text-[#fff279]">in 30 seconds.</span>
                </h2>
                <p className="text-white/75 text-lg leading-relaxed mb-8">
                  Tell our AI about your background and accessibility needs.
                  It matches you to the right job, recommends your learning path,
                  and prepares you for the interview — all personalized to you.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    size="lg"
                    className="bg-[#fff279] text-[#5f1a37] hover:bg-[#fff060] font-bold shadow-lg"
                    asChild
                  >
                    <Link to="/career-match">
                      <Sparkles className="mr-2 h-5 w-5" />
                      Try Career Match AI
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/40 text-white bg-transparent hover:bg-[#fff279] hover:text-[#5f1a37] hover:border-[#fff279]"
                    asChild
                  >
                    <Link to="/courses">Browse Courses</Link>
                  </Button>
                </div>
              </motion.div>

              {/* Right — result cards */}
              <div className="space-y-3">
                {results.map((item, i) => (
                  <motion.div
                    key={i}
                    initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
                    variants={slideRight} custom={i}
                    className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10"
                  >
                    <span className="text-2xl shrink-0">{item.emoji}</span>
                    <div>
                      <p className="font-semibold text-white text-sm">{item.title}</p>
                      <p className="text-white/65 text-xs mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
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
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp} custom={0}
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <Heart className="h-10 w-10 text-primary mx-auto mb-6" />
            </motion.div>
            <h2 id="mission-heading" className="text-3xl md:text-4xl font-bold">Our Mission</h2>
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
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp} custom={0}
          >
            <Handshake className="h-10 w-10 text-primary mx-auto mb-6" />
            <h2 id="partner-heading" className="text-3xl md:text-4xl font-bold">Partner With Us</h2>
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

// function FinalCTASection() {
//   return (
//     <section className="py-24 bg-[#fff279] relative overflow-hidden">
//       {/* Decorative blobs */}
//       <motion.div
//         className="absolute top-0 left-0 w-64 h-64 rounded-full bg-primary/10 blur-3xl"
//         animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
//         transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
//       />
//       <motion.div
//         className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-primary/10 blur-3xl"
//         animate={{ scale: [1.3, 1, 1.3], opacity: [0.4, 0.7, 0.4] }}
//         transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
//       />

//       <div className="container relative z-10">
//         <div className="max-w-3xl mx-auto text-center">
//           <motion.div
//             initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
//             variants={fadeUp} custom={0}
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-[#3d1a2e]">
//               Ready to Get Started?
//             </h2>
//             <p className="mt-4 text-lg text-[#5f1a37]/80 leading-relaxed">
//               Whether you're ready to learn new skills or build an inclusive team,
//               Baed Connect is here for you.
//             </p>
//             <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
//               <Button
//                 size="lg"
//                 className="bg-[#5f1a37] text-white hover:bg-[#3d1a2e] shadow-lg"
//                 asChild
//               >
//                 <Link to="/career-match">
//                   <Sparkles className="mr-2 h-5 w-5" />
//                   Find My Career Match
//                 </Link>
//               </Button>
//               <Button
//                 size="lg"
//                 variant="outline"
//                 className="border-[#5f1a37] text-[#5f1a37] bg-transparent hover:bg-[#5f1a37] hover:text-white"
//                 asChild
//               >
//                 <Link to="/get-started">
//                   <GraduationCap className="mr-2 h-5 w-5" />
//                   Get Started Free
//                 </Link>
//               </Button>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

function FinalCTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#5f1a37] to-[#731f43] relative overflow-hidden">
      <motion.div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-white/5 blur-3xl" animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} />
      <motion.div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-white/5 blur-3xl" animate={{ scale: [1.3, 1, 1.3], opacity: [0.4, 0.7, 0.4] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }} />
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp} custom={0}>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to Get Started?</h2>
            <p className="mt-4 text-lg text-white/70 leading-relaxed">
              Whether you're ready to learn new skills or build an inclusive team, Baed Connect is here for you.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#fff279] text-[#5f1a37] hover:bg-[#fff060] font-bold shadow-lg" asChild>
                <Link to="/career-match"><Sparkles className="mr-2 h-5 w-5" />Find My Career Match</Link>
              </Button>
              <Link
              to="/get-started"
              className="inline-flex items-center justify-center gap-2 h-11 px-8 text-base font-bold rounded-md border-2 border-white/40 text-white bg-transparent hover:bg-[#fff279] hover:text-[#5f1a37] hover:border-[#fff279] transition-all duration-200"
            >
              <GraduationCap className="h-5 w-5" />
              Get Started Free
            </Link>
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
      <CareerMatchCTASection />
      <MissionSection />
      <PartnershipSection />
      <FinalCTASection />
    </Layout>
  );
};

export default Index;