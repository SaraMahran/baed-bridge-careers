import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Sparkles, Briefcase, BookOpen, MessageSquare, Loader2, ChevronRight, Star, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { courses as allCourses } from "./Courses";

const JOBS = [
  { title: "Content Writer", company: "TechStart Egypt", type: "Remote" },
  { title: "Social Media Coordinator", company: "Green Media Agency", type: "Remote" },
  { title: "SEO Content Specialist", company: "DigiGrowth", type: "Hybrid" },
  { title: "Junior Copywriter", company: "BrandMakers", type: "Remote" },
];

const COURSES = [
  { title: "Content Writing Fundamentals", level: "Beginner" },
  { title: "Social Media Marketing", level: "Beginner" },
  { title: "SEO & Content Strategy", level: "Intermediate" },
  { title: "Copywriting for Brands", level: "Intermediate" },
  { title: "Content Analytics", level: "Intermediate" },
  { title: "Accessible Content Creation", level: "All Levels" },
];

const DISABILITY_OPTIONS = [
  "Prefer not to say",
  "Physical disability",
  "Visual impairment",
  "Hearing impairment",
  "Mental health condition",
  "Chronic illness / pain condition",
  "Neurological condition (e.g. epilepsy)",
  "Neurodivergent (e.g. ADHD, autism)",
  "Learning disability",
  "Multiple disabilities",
  "Other",
];

type MatchResult = {
  jobMatch: string;
  jobCompany: string;
  jobReason: string;
  matchScore: number;
  courses: string[];
  resumeTips: string[];
  interviewTips: string[];
  encouragement: string;
  sellingPoint: string;
};

export default function CareerMatch() {
  const [background, setBackground] = useState("");
  const [accessibilityNeeds, setAccessibilityNeeds] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("");
  const [disability, setDisability] = useState("");
  const [jobFields, setJobFields] = useState<string[]>([]);
  const [otherJobField, setOtherJobField] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<MatchResult | null>(null);
  const [error, setError] = useState("");

  const JOB_FIELD_OPTIONS = [
    "Content Writing",
    "Social Media Management",
    "SEO & Content Strategy",
    "Copywriting",
    "Content Analytics",
  ];

  const toggleJobField = (field: string) => {
    setJobFields(prev =>
      prev.includes(field) ? prev.filter(f => f !== field) : [...prev, field]
    );
  };

  const handleMatch = async () => {
    setError("");

    if (!background.trim()) {
      setError("Please describe your background and skills.");
      return;
    }
    if (!accessibilityNeeds) {
      setError("Please select your accessibility needs.");
      return;
    }
    if (!experienceLevel) {
      setError("Please select your experience level.");
      return;
    }

    setLoading(true);
    setResult(null);

    const selectedFields = [
      ...jobFields,
      ...(otherJobField.trim() ? [otherJobField.trim()] : []),
    ];

    const prompt = `
You are a compassionate and expert career advisor for Baed Connect — a platform that helps people with disabilities build careers in content marketing.

A candidate has submitted their profile. Analyze it carefully and match them to the best opportunity on our platform.

CANDIDATE PROFILE:
- Background and skills: ${background}
- Disability type: ${disability || "Not specified"}
- Accessibility needs: ${accessibilityNeeds}
- Experience level: ${experienceLevel}
- Interested job fields: ${selectedFields.length > 0 ? selectedFields.join(", ") : "Open to all content marketing roles"}

AVAILABLE JOBS ON OUR PLATFORM:
${JOBS.map((j, i) => `${i + 1}. ${j.title} at ${j.company} (${j.type})`).join("\n")}

AVAILABLE COURSES ON OUR PLATFORM:
${COURSES.map((c, i) => `${i + 1}. ${c.title} (${c.level})`).join("\n")}

Based on this candidate's profile, provide a personalized career match response.

You MUST respond in this exact JSON format and nothing else:
{
  "jobMatch": "exact job title from the list",
  "jobCompany": "exact company name from the list",
  "jobReason": "2-3 sentences explaining why this job is the best fit for this specific person, mentioning their background and accessibility needs",
  "matchScore": a number between 60 and 95. Be honest and realistic — a beginner with no formal work experience should score between 60-75, someone with some relevant experience 75-85, and only someone with strong directly relevant experience should score above 85. Do NOT default to high scores,
  "courses": ["course title 1", "course title 2"],
  "resumeTips": [
    "specific resume tip 1 referencing something the candidate actually mentioned — tell them exactly how to frame it",
    "specific resume tip 2 about a skill or experience they have that they should highlight for this specific job",
    "specific resume tip 3 about how to present their background confidently, including any gap or non-traditional experience"
  ],
  "interviewTips": [
    "specific tip 1 based on their background",
    "specific tip 2 based on the job they matched to",
    "specific tip 3 about confidently presenting their unique perspective as a person with a disability"
  ],
  "encouragement": "one warm, genuine sentence encouraging this specific person based on their background",
  "sellingPoint": "one powerful, specific sentence about what makes this candidate uniquely stand out to employers — referencing their actual background and disability experience as a strength"
}

Be specific, warm, and genuinely helpful. Reference their actual background in your response.
    `;

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${import.meta.env.VITE_GEMINI_API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }]
          })
        }
      );

      const data = await response.json();

      if (!response.ok) {
        console.error("Gemini error:", data);
        throw new Error(data.error?.message || "API error");
      }

      const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
      if (!text) throw new Error("No response from Gemini");

      const cleaned = text.replace(/```json|```/g, "").trim();
      const parsed: MatchResult = JSON.parse(cleaned);
      setResult(parsed);

    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <section className="gradient-hero py-20 md:py-28">
        <div className="container max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Sparkles className="h-4 w-4" />
              Powered by Gemini AI
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">
              Find Your Perfect{" "}
              <span className="text-gradient-primary">Career Match</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Tell us about yourself and our AI will match you to the right job,
              recommend the courses you need, and help you prepare for your interview —
              all tailored to your unique background and accessibility needs.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-2xl">
          {!result ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-card border border-border rounded-2xl p-8 shadow-sm"
            >
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Tell us about yourself
              </h2>
              <p className="text-muted-foreground mb-8 text-sm">
                The more you share, the more personalized your match will be.
              </p>

              <div className="space-y-6">

                {/* Background */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Your background and skills
                  </label>
                  <p className="text-xs text-muted-foreground mb-2">
                    Tell us about your experience, what you've worked on, and any skills you have — even if they seem unrelated.
                  </p>
                  <textarea
                    value={background}
                    onChange={(e) => setBackground(e.target.value)}
                    placeholder="e.g. I have a background in journalism and wrote for a student newspaper. I'm good at storytelling and have some experience with Instagram content..."
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-border text-sm text-foreground bg-background focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                </div>

                {/* Disability type */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Disability type <span className="text-muted-foreground font-normal">(optional)</span>
                  </label>
                  <p className="text-xs text-muted-foreground mb-2">
                    This helps us match you to roles and environments that genuinely suit your needs.
                  </p>
                  <select
                    value={disability}
                    onChange={(e) => setDisability(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border border-border text-sm text-foreground bg-background focus:outline-none focus:border-primary transition-colors"
                  >
                    <option value="">Select disability type...</option>
                    {DISABILITY_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                {/* Accessibility needs */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Your accessibility and work needs
                  </label>
                  <select
                    value={accessibilityNeeds}
                    onChange={(e) => setAccessibilityNeeds(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border border-border text-sm text-foreground bg-background focus:outline-none focus:border-primary transition-colors"
                  >
                    <option value="">Select your needs...</option>
                    <option value="Remote work only — I work best from home">Remote work only</option>
                    <option value="Flexible hours — I need to manage my energy and rest throughout the day">Flexible hours</option>
                    <option value="Screen reader compatible tools and written communication preferred">Screen reader support needed</option>
                    <option value="Low-stimulation environment — I work better with minimal distractions">Low-stimulation environment</option>
                    <option value="Part-time or reduced hours to manage my condition">Part-time or reduced hours</option>
                    <option value="No specific accessibility requirements beyond remote work">No specific requirements beyond remote</option>
                  </select>
                </div>

                {/* Job fields */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Which content marketing roles interest you?
                  </label>
                  <p className="text-xs text-muted-foreground mb-3">
                    Select all that apply. Leave blank if you're open to all roles.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {JOB_FIELD_OPTIONS.map((field) => (
                      <button
                        key={field}
                        onClick={() => toggleJobField(field)}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
                          jobFields.includes(field)
                            ? "border-primary bg-primary/10 text-primary"
                            : "border-border text-muted-foreground hover:border-primary/50"
                        }`}
                      >
                        {field}
                      </button>
                    ))}
                  </div>
                  <input
                    type="text"
                    value={otherJobField}
                    onChange={(e) => setOtherJobField(e.target.value)}
                    placeholder="Other (e.g. Podcast production, Email marketing...)"
                    className="w-full px-4 py-2.5 rounded-lg border border-border text-sm text-foreground bg-background focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                {/* Experience level */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Your experience level in content marketing
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {["Beginner", "Intermediate", "Advanced"].map((level) => (
                      <button
                        key={level}
                        onClick={() => setExperienceLevel(level)}
                        className={`py-3 rounded-lg border text-sm font-medium transition-all ${
                          experienceLevel === level
                            ? "border-primary bg-primary/10 text-primary"
                            : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                        }`}
                      >
                        {level}
                      </button>
                    ))}
                  </div>
                </div>

                {error && (
                  <p className="text-sm text-destructive bg-destructive/10 border border-destructive/20 rounded-lg px-4 py-2.5">
                    {error}
                  </p>
                )}

                <Button
                  onClick={handleMatch}
                  disabled={loading}
                  className="w-full"
                  size="lg"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Analyzing your profile...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Sparkles className="h-4 w-4" />
                      Find My Career Match
                    </span>
                  )}
                </Button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Match score header */}
              <div className="bg-gradient-to-r from-primary to-[#731f43] rounded-2xl p-8 text-white text-center">
                <p className="text-sm font-semibold uppercase tracking-widest opacity-80 mb-2">
                  Your Career Match
                </p>
                <div className="text-7xl font-extrabold mb-2">
                  {result.matchScore}%
                </div>
                <p className="opacity-80 text-sm">{result.encouragement}</p>
              </div>

              {/* Strongest selling point */}
              <div className="bg-card border border-primary/30 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-primary/10">
                    <Star className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground">Your Strongest Selling Point</h3>
                </div>
                <p className="text-sm text-foreground leading-relaxed font-medium italic">
                  "{result.sellingPoint}"
                </p>
              </div>

              {/* Job match */}
              <div className="bg-card border border-border rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-primary/10">
                    <Briefcase className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground">Best Job Match</h3>
                </div>
                <div className="mb-3">
                  <p className="font-semibold text-foreground text-lg">{result.jobMatch}</p>
                  <p className="text-sm text-muted-foreground">{result.jobCompany}</p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {result.jobReason}
                </p>
              </div>

              {/* Recommended courses */}
              <div className="bg-card border border-border rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-primary/10">
                    <BookOpen className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground">Recommended Courses</h3>
                </div>
                <div className="space-y-3">
                  {result.courses.map((course, i) => (
                    <Link
                    key={i}
                    to={`/courses/${allCourses.find(c => c.title === course)?.slug || ''}`}
                    className="flex items-center gap-3 p-3 rounded-lg bg-background border border-border hover:border-primary/30 hover:shadow-sm transition-all group"
                    >
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold shrink-0">
                        {i + 1}
                      </span>
                      <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{course}</span>
                      <ChevronRight className="h-4 w-4 text-muted-foreground ml-auto group-hover:text-primary transition-colors" />
                    </Link>
                  ))}
                </div>
              </div>
            
              {/* Resume tips */}
            <div className="bg-card border border-border rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-primary/10">
                <FileText className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-bold text-lg text-foreground">Resume Tips</h3>
            </div>
            <div className="space-y-3">
                {result.resumeTips.map((tip, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-background border border-border">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold shrink-0 mt-0.5">
                    {i + 1}
                    </span>
                    <span className="text-sm text-muted-foreground leading-relaxed">{tip}</span>
                </div>
                ))}
            </div>
            </div>

              {/* Interview tips */}
              <div className="bg-card border border-border rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-primary/10">
                    <MessageSquare className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground">Interview Preparation</h3>
                </div>
                <div className="space-y-3">
                  {result.interviewTips.map((tip, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-background border border-border">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <span className="text-sm text-muted-foreground leading-relaxed">{tip}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Button
                className="w-full"
                onClick={() => {
                  setResult(null);
                  setBackground("");
                  setAccessibilityNeeds("");
                  setExperienceLevel("");
                  setDisability("");
                  setJobFields([]);
                  setOtherJobField("");
                }}
              >
                Try with a different profile
              </Button>
            </motion.div>
          )}
        </div>
      </section>
    </Layout>
  );
}