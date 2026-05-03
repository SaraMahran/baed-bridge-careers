

import { useState } from "react";
import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import {
  Heart, Globe, Users, Target, TrendingUp, Award, Building2,
  Sparkles,
} from "lucide-react";


// ── Asset imports ──
import teamPhoto from "@/assets/Reem and Atef.jpeg";

// Testimonial logos
import bumbleTechLogo from "@/assets/Testimonials/bumbleb.tech.jpeg";
import mohajabatLogo from "@/assets/Testimonials/Mohajabat.jpeg";
import ibrizLogo from "@/assets/Testimonials/Ibriz Abaya.jpeg";
import expertsEyeLogo from "@/assets/Testimonials/Experts Eye Center.jpeg";

// Brand logos (marquee)
import familyMedicalLogo from "@/assets/Logos/FAMILY MEDICAL.jpeg";
import unicaLogo from "@/assets/Logos/UNICA.jpeg";
import maanLogo from "@/assets/Logos/MAAN.jpeg";
import ideaLogo from "@/assets/Logos/IDEA.jpeg";
import mummersLogo from "@/assets/Logos/MUMMERS.jpeg";
import lavenderLogo from "@/assets/Logos/LAVANDER_EVENTS.jpeg";
import dragonLogo from "@/assets/Logos/DRAGON.jpeg";
import gFastLogo from "@/assets/Logos/G-FAST.jpeg";
import amcLogo from "@/assets/Logos/AMC.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const } }),
};
const slideLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: (i: number) => ({ opacity: 1, x: 0, transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } }),
};
const slideRight = {
  hidden: { opacity: 0, x: 40 },
  visible: (i: number) => ({ opacity: 1, x: 0, transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } }),
};
const scaleIn = {
  hidden: { opacity: 0, scale: 0.93 },
  visible: (i: number) => ({ opacity: 1, scale: 1, transition: { delay: i * 0.08, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const } }),
};

const Divider = () => <div className="section-divider mb-12" />;

const YellowDivider = () => <div className="w-24 bg-[#fff279]/50 mx-auto mb-12" style={{ height: 2 }} />;

const values = [
  { icon: Heart, title: "Empowerment", desc: "We believe in the potential of every individual to contribute meaningfully to the digital economy." },
  { icon: Globe, title: "Accessibility", desc: "Every aspect of our platform is designed with accessibility as a core principle, not an afterthought." },
  { icon: Users, title: "Inclusion", desc: "We're building bridges between talented individuals and forward-thinking employers." },
  { icon: Target, title: "Impact", desc: "Measurable social impact through practical skills training and real employment outcomes." },
];

const awards = [
  { title: "Top 100 Startups in Egypt", org: "TotalEnergies Startupper of the Year", year: "2024" },
  { title: "High-Potential Female-Led Business", org: "ICEAlex Ladies Startups League · British Council", year: "2024" },
  { title: "Women Entrepreneurship Camp", org: "The American Center Cairo", year: "2024" },
  { title: "Supported Startup", org: "Entrepenelle · Ministry of Planning & Economic Development", year: "2024" },
];

const testimonials = [
  {
    quote: "Working with Reem Mahran through Baed has been a game-changer for bumbleb.tech. She brings deep marketing knowledge, an experimental mindset, and just the right mix of strategy and curiosity. Reem nailed the brand identity. And more importantly, she knows exactly how to communicate it in a way that feels both bold and true to who we are.",
    author: "bumbleb.tech",
    country: "Netherlands",
    flag: "🇳🇱",
    logo: bumbleTechLogo,
  },
  {
    quote: "الشغل ممتاز بصراحة وبتمني شركتكم تكبر لأنكم بجد مجتهدين",
    author: "Mohajabat",
    country: "UAE",
    flag: "🇦🇪",
    logo: mohajabatLogo,
  },
  {
    quote: "أفكاركوا في الماركيتينج كيريتيف ودؤوبين في الشغل",
    author: "Ibriz Abaya",
    country: "Egypt",
    flag: "🇪🇬",
    logo: ibrizLogo,
  },
  {
    quote: "I like your discipline, persistence, spirit, and prompt follow-up.",
    author: "Experts Eye Center",
    country: "Egypt",
    flag: "🇪🇬",
    logo: expertsEyeLogo,
  },
];

const brandLogos = [
  { src: ideaLogo, name: "IDEA GROUP EGYPT" },
  { src: maanLogo, name: "Ma3an Digital" },
  { src: gFastLogo, name: "G-Fast" },
  { src: familyMedicalLogo, name: "Family Medical Polyclinics" },
  { src: dragonLogo, name: "Dragon Island Park" },
  { src: amcLogo, name: "AMC Cookware" },
  { src: lavenderLogo, name: "Lavender Events" },
  { src: unicaLogo, name: "Unica Research" },
  { src: mummersLogo, name: "Mumerz.com" },
];

export default function About() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <Layout>

      {/* ── HERO ── */}
      <section className="gradient-hero py-20 md:py-28 relative overflow-hidden">
        <motion.div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 6, repeat: Infinity }} />
        <motion.div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-accent/20 blur-3xl" animate={{ scale: [1.2, 1, 1.2] }} transition={{ duration: 7, repeat: Infinity, delay: 1 }} />
        <div className="container max-w-3xl text-center relative z-10">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="text-xs font-semibold tracking-widest text-primary uppercase mb-4">
            The Experts in Content · The Future of Con-Tech
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-4xl md:text-5xl font-extrabold">
            From 5 Years of Storytelling to{" "}
            <span className="text-gradient-primary">Building the AI That Scales Inclusion</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Baed Connect is a product of Baed (بعض) — a content marketing powerhouse turned Con-Tech innovator, supporting startups and SMEs across the Arab region.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }} className="mt-8 flex flex-wrap justify-center gap-3">
            {["25+ Global Brands", "6 Countries", "11 Industries", "Since 2021"].map((tag, i) => (
              <span key={i} className="text-xs font-semibold text-primary/70 bg-primary/5 px-3 py-1.5 rounded-full border border-primary/10">{tag}</span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── DOMAIN EXPERTISE ── */}
      <section className="py-20 bg-card">
        <div className="container max-w-6xl mx-auto">
          <Divider />
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp} custom={0} className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary/70 mb-3">01 · Domain Expertise</p>
            <h2 className="text-3xl md:text-4xl font-bold">The 5-Year Foundation</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeUp} custom={0}
              className="rounded-3xl overflow-hidden bg-[#5f1a37]">
              {/* taller + object-[center_20%] nudges the image up to show more faces */}
              <img
                src={teamPhoto}
                alt="Reem Ali Mahran and Atef Gwily"
                className="w-full h-80 md:h-96 object-cover object-[center_20%]"
              />
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-8 border-r border-[#a0205b]/30">
                  <p className="text-[#daa9cd] text-xs font-semibold uppercase tracking-wider mb-1">CEO & Co-founder</p>
                  <p className="font-bold text-[#fff279] text-lg mb-3">Reem Ali Mahran</p>
                  <p className="text-[#f9f2c2]/80 text-sm leading-relaxed">
                    A Master's Researcher in Advertising and PR and a Serial Tech Entrepreneur. Reem synchronizes 7+ years of marketing intelligence with research-driven tech strategy.
                  </p>
                </div>
                <div className="p-8">
                  <p className="text-[#daa9cd] text-xs font-semibold uppercase tracking-wider mb-1">CSO & Co-founder</p>
                  <p className="font-bold text-[#fff279] text-lg mb-3">Atef Gwily</p>
                  <p className="text-[#f9f2c2]/80 text-sm leading-relaxed">
                    The strategic anchor for Baed. With a background in History, Atef masters Narrative-driven Strategy, translating complex market data into high-stakes business deals.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={slideRight} custom={0}
              className="group relative overflow-hidden rounded-2xl bg-[#f9f2c2] border-r-8 border-r-[#5f1a37] p-8">
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#5f1a37]/5 rounded-full -ml-16 -mb-16 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative">
                <p className="text-primary text-xs font-semibold uppercase tracking-wider mb-3">The Story</p>
                <p className="text-[#5f1a37]/80 leading-relaxed mb-6">
                  Baed (بعض) didn't start in a lab — it was built on 5 years of high-stakes market execution. Since 2021, we functioned as a content powerhouse, solving complex growth puzzles for 25+ global brands across 6 countries.
                </p>
                <p className="text-primary text-xs font-semibold uppercase tracking-wider mb-3">The Insight</p>
                <p className="text-[#5f1a37]/80 leading-relaxed">
                  This wasn't just service delivery — it was the data-gathering phase that allowed us to identify the massive gap in the digital economy: the lack of scalable, inclusive technology for talent with disabilities.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STRATEGIC PIVOT ── */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#5f1a37]/5 via-transparent to-[#a0205b]/5" />
        <div className="container max-w-6xl mx-auto relative z-10">
          <Divider />
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp} custom={0} className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary/70 mb-3">02 · The Pivot</p>
            <h2 className="text-3xl md:text-4xl font-bold">Engineering <span className="text-primary">Baed Connect</span></h2>
          </motion.div>
          <div className="grid lg:grid-cols-3 gap-6">
            {[
              { title: "The Restructure", desc: "In 2024, we executed a strategic pivot from a service-based agency to a tech-enabled ecosystem, restructuring our DNA to lead the Con-Tech (Content Technology) revolution in MENA.", icon: TrendingUp },
              { title: "The Platform", desc: "Baed Connect is our AI-driven matchmaking platform designed to bridge the gap between inclusive employers and specialized talent with disabilities.", icon: Sparkles },
              { title: "The Model", desc: "By leveraging our proprietary content-matching logic, we enable PWDs to transition from content consumers to elite producers — turning professional education into a 100% free, partner-powered engine.", icon: Building2 },
            ].map((item, i) => (
              <motion.div key={item.title} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={scaleIn} custom={i}
                className="rounded-2xl bg-[#f9f2c2] border border-[#a0205b]/20 p-6 group hover:shadow-lg transition-all duration-300">
                <div className="inline-flex p-3 rounded-xl bg-[#a0205b]/10 text-[#5f1a37] mb-4 group-hover:bg-[#a0205b] group-hover:text-[#f9f2c2] transition-all duration-300">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-[#5f1a37] text-lg mb-3">{item.title}</h3>
                <p className="text-[#5f1a37]/80 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MARKET VALIDATION ── */}
      <section className="py-20 bg-card">
        <div className="container max-w-5xl mx-auto">
          <Divider />
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp} custom={0} className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary/70 mb-3">03 · Validation</p>
            <h2 className="text-3xl md:text-4xl font-bold">Market Validation & Traction</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-4">
            {awards.map((award, i) => (
              <motion.div key={award.title} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={scaleIn} custom={i}
                className="flex items-start gap-4 p-5 rounded-2xl bg-gradient-to-br from-[#5f1a37] to-[#a0205b] border border-[#a0205b]/30">
                <div className="w-9 h-9 rounded-xl bg-[#fff279]/20 flex items-center justify-center shrink-0">
                  <Award className="h-4 w-4 text-[#fff279]" />
                </div>
                <div>
                  <p className="font-bold text-[#fff279] text-sm">{award.title}</p>
                  <p className="text-[#f9f2c2]/70 text-xs mt-0.5">{award.org}</p>
                  <p className="text-[#daa9cd] text-xs mt-1">{award.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOUNDING TEAM ── }
      <section className="py-20">
        <div className="container max-w-5xl mx-auto">
          <Divider />
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp} custom={0} className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary/70 mb-3">04 · The Team</p>
            <h2 className="text-3xl md:text-4xl font-bold">Strategic & Operational DNA</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={slideLeft} custom={0}
              className="rounded-2xl bg-[#5f1a37] p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#a0205b] flex items-center justify-center text-[#fff279] font-black text-lg shrink-0">RM</div>
                <div>
                  <p className="font-bold text-[#fff279]">Reem Ali Mahran</p>
                  <p className="text-[#daa9cd] text-xs">CEO & Co-founder</p>
                </div>
              </div>
              <p className="text-[#f9f2c2]/80 text-sm leading-relaxed">
                A Master's Researcher in Advertising and PR and a Serial Tech Entrepreneur (Co-founder of Layal and House of Eros and Psyche). Reem synchronizes 7+ years of marketing intelligence with research-driven tech strategy.
              </p>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={slideRight} custom={0}
              className="rounded-2xl bg-[#f9f2c2] border border-[#a0205b]/20 p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#5f1a37] flex items-center justify-center text-[#fff279] font-black text-lg shrink-0">AG</div>
                <div>
                  <p className="font-bold text-[#5f1a37]">Atef Gwily</p>
                  <p className="text-primary text-xs">CSO & Co-founder</p>
                </div>
              </div>
              <p className="text-[#5f1a37]/80 text-sm leading-relaxed">
                The strategic anchor for Baed, Layal, and Eros & Psyche. With a background in History, Atef masters Narrative-driven Strategy, translating complex historical patterns and market data into high-stakes business deals and operational scalability.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      */}

      {/* ── LOGO MARQUEE ──
      <section className="py-20 bg-card overflow-hidden">
        <div className="container max-w-5xl mx-auto">
          <Divider />
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary/70 mb-3">Our Ecosystem of Trust</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">25+ Brands Served</h2>
            <p className="text-muted-foreground text-sm">11 Industries · 6 Countries · Recognized among Top 100 Startups in Egypt</p>
          </motion.div>
        </div>
        <div className="relative">
          <div className="flex gap-8 animate-marquee whitespace-nowrap px-8">
            {[...brandLogos, ...brandLogos].map((brand, i) => (
              <div key={i} className="inline-flex flex-col items-center gap-2 shrink-0">
                <div className="w-16 h-16 rounded-full bg-[#f9f2c2] border-2 border-[#a0205b]/20 overflow-hidden flex items-center justify-center shadow-md hover:shadow-lg hover:border-[#a0205b]/50 transition-all duration-300">
                  <img src={brand.src} alt={brand.name} className="w-full h-full object-cover" />
                </div>
                <span className="text-[10px] font-semibold text-[#5f1a37]/60 max-w-[80px] text-center leading-tight">{brand.name}</span>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 25s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section> */}
      {/* ── LOGO MARQUEE ── */}
      <section className="py-20 bg-card overflow-hidden">
        <div className="container max-w-5xl mx-auto">
          <Divider />
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary/70 mb-3">Our Ecosystem of Trust</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">25+ Brands Served</h2>
            <p className="text-muted-foreground text-sm">11 Industries · 6 Countries · Recognized among Top 100 Startups in Egypt</p>
          </motion.div>
        </div>
        <div className="relative">
          <div className="flex gap-8 animate-marquee whitespace-nowrap px-8">
            {[...brandLogos, ...brandLogos].map((brand, i) => (
              <div key={i} className="inline-flex flex-col items-center gap-2 shrink-0 w-[90px]">
                <div className="w-16 h-16 rounded-full bg-[#f9f2c2] border-2 border-[#a0205b]/20 overflow-hidden flex items-center justify-center shadow-md hover:shadow-lg hover:border-[#a0205b]/50 transition-all duration-300">
                  <img src={brand.src} alt={brand.name} className="w-full h-full object-cover" />
                </div>
                {/* Updated text wrapper with word wrapping */}
                <span className="text-[10px] font-semibold text-[#5f1a37]/60 w-[90px] text-center leading-tight break-words whitespace-normal">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 25s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20">
        <div className="container max-w-4xl mx-auto">
          <Divider />
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary/70 mb-3">Testimonials</p>
            <h2 className="text-3xl md:text-4xl font-bold">Our Expertise in Action</h2>
            <p className="mt-3 text-muted-foreground text-sm">Before we built the tech, we mastered the craft.</p>
          </motion.div>

          <div className="relative">
            {/* Circular logo avatar floating above the card */}
            <div className="flex justify-center relative z-10">
              <motion.div
                key={activeTestimonial + "-avatar"}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="w-20 h-20 rounded-full border-4 border-[#f9f2c2] bg-white overflow-hidden shadow-xl"
              >
                <img
                  src={testimonials[activeTestimonial].logo}
                  alt={testimonials[activeTestimonial].author}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>

            {/* Card — negative margin to overlap the avatar */}
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="rounded-3xl bg-gradient-to-br from-[#5f1a37] via-[#a0205b] to-[#c374ae] pt-14 pb-10 px-10 text-center mb-6 relative overflow-hidden -mt-10"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full overflow-hidden pointer-events-none">
                <motion.div className="w-full h-full bg-[#f9f2c2]/5" animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} />
              </div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full overflow-hidden pointer-events-none">
                <motion.div className="w-full h-full bg-[#f9f2c2]/5" animate={{ scale: [1.15, 1, 1.15] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }} />
              </div>
              <div className="relative z-10">
                <p className="text-[#f9f2c2] text-lg leading-relaxed mb-6 max-w-2xl mx-auto">
                  "{testimonials[activeTestimonial].quote}"
                </p>
                <div className="flex items-center justify-center gap-3">
                  <span className="text-2xl">{testimonials[activeTestimonial].flag}</span>
                  <div className="text-left">
                    <p className="text-[#fff279] text-sm font-bold">{testimonials[activeTestimonial].author}</p>
                    <p className="text-[#daa9cd] text-xs">{testimonials[activeTestimonial].country}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="flex justify-center gap-2 mt-4">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className={`h-2.5 rounded-full transition-all duration-200 ${i === activeTestimonial ? "bg-[#a0205b] w-6" : "bg-[#a0205b]/30 w-2.5"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── VISION ── */}
      <section className="py-20 bg-[#5f1a37]">
        <div className="container max-w-4xl text-center">
          <YellowDivider />
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp} custom={0}>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#daa9cd] mb-3">Our Vision</p>
            <h2 className="text-3xl font-bold text-[#fff279] mb-6">A world where disability is never a barrier to professional success.</h2>
            <p className="text-[#f9f2c2]/80 text-lg leading-relaxed max-w-2xl mx-auto">
              Where inclusive hiring is the norm. Where digital content is accessible to everyone. We're making this real — one learner, one employer, one opportunity at a time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── MISSION ── */}
      <section className="py-20 bg-card">
        <div className="container max-w-4xl text-center">
          <Divider />
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp} custom={0}>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary/70 mb-3">Our Mission</p>
            <h2 className="text-3xl font-bold mb-6">Baed Connect is where our mission meets technology.</h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
              We believe that people with disabilities are powerful contributors to the digital economy. Baed Connect exists to bridge the gap between talent and opportunity — creating pathways to meaningful employment in content creation and digital work. This isn't charity. This is smart, inclusive business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="py-20">
        <div className="container max-w-5xl">
          <Divider />
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-3xl font-bold text-center mb-12">
            Our Values
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div key={v.title} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={scaleIn} custom={i}
                className="p-6 rounded-2xl bg-[#f9f2c2] border border-border text-center hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
                <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-[#f9f2c2] transition-all duration-300">
                  <v.icon className="h-6 w-6" />
                </div>
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