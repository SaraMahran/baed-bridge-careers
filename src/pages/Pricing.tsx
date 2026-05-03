import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import {
  Check, X, Sparkles, ArrowRight, Star, Shield, Zap,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

const plans = [
  {
    name: "Inclusion Starter",
    tagline: "Startups & Small Teams",
    price: "EGP 1,200",
    period: "/ month",
    icon: Zap,
    color: "border-[#a0205b]/30 bg-[#f9f2c2]",
    iconColor: "bg-[#a0205b]/10 text-[#a0205b]",
    buttonClass: "border-2 border-[#a0205b] text-[#a0205b] bg-transparent hover:bg-[#a0205b] hover:text-[#f9f2c2] transition-all font-bold",
    features: [
      { label: "1 Active Job Post", included: true },
      { label: "Basic Profile Previews", included: true },
      { label: "Digital Inclusion Toolkit", included: true },
      { label: "Logo in Partner List", included: true },
      { label: "Email Support", included: true },
      { label: "Full Talent Database", included: false },
      { label: "Monthly Accessibility Audit", included: false },
      { label: "Priority Support", included: false },
    ],
  },
  {
    name: "Growth Partner",
    tagline: "Growing SMEs",
    price: "EGP 3,500",
    period: "/ month",
    icon: Star,
    featured: true,
    color: "border-[#5f1a37] bg-[#5f1a37]",
    iconColor: "bg-[#fff279]/20 text-[#fff279]",
    buttonClass: "bg-[#fff279] text-[#5f1a37] hover:bg-[#fff060] font-bold shadow-lg",
    features: [
      { label: "Unlimited Job Posts", included: true },
      { label: "Full Talent Database", included: true },
      { label: "Monthly Accessibility Audit", included: true },
      { label: "Access to Inclusion Hub", included: true },
      { label: "Verified Growth Badge", included: true },
      { label: "Priority Support", included: true },
      { label: "Dedicated Shortlisting", included: false },
      { label: "On-site Training Workshops", included: false },
    ],
  },
  {
    name: "Enterprise Leader",
    tagline: "Corporations & Banks",
    price: "Custom",
    period: "pricing",
    icon: Shield,
    color: "border-[#a0205b]/30 bg-[#f9f2c2]",
    iconColor: "bg-[#a0205b]/10 text-[#a0205b]",
    buttonClass: "border-2 border-[#a0205b] text-[#a0205b] bg-transparent hover:bg-[#a0205b] hover:text-[#f9f2c2] transition-all font-bold",
    features: [
      { label: "Strategic Hiring Roadmap", included: true },
      { label: "Dedicated Shortlisting", included: true },
      { label: "Full Content Transformation", included: true },
      { label: "On-site Training Workshops", included: true },
      { label: "Featured Case Study & PR", included: true },
      { label: "Dedicated Account Manager", included: true },
      { label: "Early Access to New Tools", included: true },
      { label: "Custom Integrations", included: true },
    ],
  },
];

const faqs = [
  {
    q: "Can I change my plan later?",
    a: "Yes, you can upgrade or downgrade your subscription at any time from your dashboard.",
  },
  {
    q: "Do you offer annual discounts?",
    a: "Yes, contact our sales team for annual billing options and partner discounts.",
  },
  {
    q: "How does the Digital Audit work?",
    a: "Our team reviews your digital presence (website/content) and provides a monthly report on how to make it more accessible and inclusive for all users.",
  },
];

export default function Pricing() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-hero py-20 md:py-28 text-center overflow-hidden relative">
        <motion.div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 6, repeat: Infinity }} />
        <motion.div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-accent/20 blur-3xl" animate={{ scale: [1.2, 1, 1.2] }} transition={{ duration: 7, repeat: Infinity, delay: 1 }} />
        <div className="container relative z-10 max-w-3xl mx-auto">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
            className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
            For Employers
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Simple, Transparent <span className="text-gradient-primary">Pricing</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground leading-relaxed">
            Invest in the best diverse talent and scale your inclusive workforce.
          </motion.p>
        </div>
      </section>

      {/* Plans */}
      <section className="py-20">
        <div className="container max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 items-start">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp} custom={i}
                className={`relative rounded-3xl border-2 p-8 flex flex-col ${plan.color} ${plan.featured ? "md:-mt-4 md:pb-12" : ""}`}
              >
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#fff279] text-[#5f1a37] text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider">
                    Most Popular
                  </div>
                )}

                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-5 ${plan.iconColor}`}>
                  <plan.icon className="h-5 w-5" />
                </div>

                <h3 className={`text-xl font-bold mb-1 ${plan.featured ? "text-[#f9f2c2]" : "text-foreground"}`}>{plan.name}</h3>
                <p className={`text-xs font-medium mb-6 ${plan.featured ? "text-[#daa9cd]" : "text-muted-foreground"}`}>{plan.tagline}</p>

                <div className="mb-8">
                  <span className={`text-4xl font-black ${plan.featured ? "text-[#fff279]" : "text-foreground"}`}>{plan.price}</span>
                  <span className={`text-sm ml-1 ${plan.featured ? "text-[#f9f2c2]/70" : "text-muted-foreground"}`}>{plan.period}</span>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f.label} className="flex items-center gap-3">
                      {f.included ? (
                        <Check className={`h-4 w-4 shrink-0 ${plan.featured ? "text-[#fff279]" : "text-[#a0205b]"}`} />
                      ) : (
                        <X className={`h-4 w-4 shrink-0 ${plan.featured ? "text-[#f9f2c2]/30" : "text-muted-foreground/30"}`} />
                      )}
                      <span className={`text-sm ${f.included ? (plan.featured ? "text-[#f9f2c2]" : "text-foreground") : (plan.featured ? "text-[#f9f2c2]/40" : "text-muted-foreground/40")}`}>
                        {f.label}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button className={`w-full h-11 ${plan.buttonClass}`} asChild>
                  <Link to="/contact">
                    {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Early Adopter */}
      <section className="py-20">
        <div className="container max-w-4xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp} custom={0}
            className="rounded-3xl bg-[#5f1a37] p-10 md:p-14"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-[#daa9cd] mb-3">Limited Time</p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#f9f2c2] mb-3">Join the Journey: Early Adopter Advantage</h2>
            <p className="text-[#daa9cd] mb-8 leading-relaxed">
              We are currently in our MVP Phase, fine-tuning our AI engine to perfection. By joining us now, you're not just a subscriber — you're a Founding Partner.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { title: "Locked-in Pricing", desc: "Early adopters secure these introductory rates for life. As we scale and add more features, your price will never increase." },
                { title: "Direct Influence", desc: "Get early access to new tools and help shape our product roadmap with your feedback." },
                { title: "Exclusive Recognition", desc: 'Founding partners receive an "Early Adopter" badge on their profiles and featured placement in our network.' },
              ].map((item, i) => (
                <motion.div key={item.title} variants={fadeUp} custom={i + 1}
                  className="bg-[#f9f2c2]/5 border border-[#f9f2c2]/15 rounded-2xl p-5">
                  <div className="w-7 h-7 rounded-lg bg-[#a0205b]/50 flex items-center justify-center mb-3">
                    <Check className="h-3.5 w-3.5 text-[#fff279]" />
                  </div>
                  <p className="font-bold text-[#f9f2c2] text-sm mb-1.5">{item.title}</p>
                  <p className="text-[#daa9cd] text-xs leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-20 bg-card">
        <div className="container max-w-3xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp} custom={0}>
            <Sparkles className="h-10 w-10 text-primary mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4">The Impact of Your Subscription</h2>
            <div className="inline-flex items-center gap-2 bg-gradient-to-br from-[#5f1a37] to-[#a0205b] px-6 py-3 rounded-2xl mb-6">
              <span className="text-2xl font-black text-[#fff279]">100%</span>
              <span className="text-[#f9f2c2] font-semibold">Free for Talents.</span>
            </div>
            <p className="text-muted-foreground leading-relaxed text-lg">
              At Baed Connect, we believe accessibility shouldn't have a price tag for those seeking opportunity. Your subscription directly funds the training, mentorship, and infrastructure for people with disabilities — ensuring our platform remains free for the talents who need it most.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container max-w-3xl mx-auto">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
            className="text-2xl md:text-3xl font-bold text-center mb-10">
            Frequently Asked Questions
          </motion.h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i + 1}
                className="rounded-2xl border border-border bg-[#f9f2c2] overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left"
                >
                  <span className="font-semibold text-foreground text-sm">{faq.q}</span>
                  <span className={`text-primary transition-transform duration-200 ${openFaq === i ? "rotate-45" : ""}`}>
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5">
                    <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#a0205b] to-[#731f43] relative overflow-hidden">
        <motion.div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-[#f9f2c2]/5 blur-3xl" animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 5, repeat: Infinity }} />
        <div className="container relative z-10 max-w-2xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <h2 className="text-2xl md:text-3xl font-bold text-[#f9f2c2] mb-4">Ready to build an inclusive team?</h2>
            <p className="text-[#f9f2c2]/70 mb-8 leading-relaxed">Start with our free tier for talents or choose the right plan for your company.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" className="bg-[#fff279] text-[#5f1a37] hover:bg-[#fff060] font-bold shadow-lg" asChild>
                <Link to="/contact"><Sparkles className="mr-2 h-4 w-4" />Contact Sales</Link>
              </Button>
              <Link to="/jobs" className="inline-flex items-center justify-center gap-2 h-11 px-8 text-sm font-bold rounded-md border-2 border-[#f9f2c2]/40 text-[#f9f2c2] bg-transparent hover:bg-[#fff279] hover:text-[#5f1a37] hover:border-[#fff279] transition-all duration-200">
                Browse Talent
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}