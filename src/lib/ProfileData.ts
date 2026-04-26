export type SavedCourse = {
  id: string;
  title: string;
  category: string;
  progress: number;
  href: string;
};

export type SavedJob = {
  id: string;
  title: string;
  company: string;
  meta: string;
  href: string;
};

export type MentorshipSession = {
  id: string;
  mentor: string;
  topic: string;
  date: string;
  status: "upcoming" | "completed" | "pending";
};

export type ProfileData = {
  savedCourses: SavedCourse[];
  savedJobs: SavedJob[];
  mentorshipSessions: MentorshipSession[];
};

export const PROFILE_DATA: Record<string, ProfileData> = {
  // ── Learner: Sara Ahmed ─────────────────────────────────────
  "learner@baedconnect.com": {
    savedCourses: [
      {
        id: "c1",
        title: "Content Writing Fundamentals",
        category: "Writing",
        progress: 60,
        href: "/courses/content-writing",
      },
      {
        id: "c2",
        title: "SEO for Beginners",
        category: "SEO",
        progress: 20,
        href: "/courses/seo-beginners",
      },
      {
        id: "c3",
        title: "Social Media Strategy",
        category: "Social Media",
        progress: 100,
        href: "/courses/social-media-strategy",
      },
    ],
    savedJobs: [
      {
        id: "j1",
        title: "Content Creator – Remote",
        company: "TechCorp Egypt",
        meta: "Full-time · Remote",
        href: "/jobs/j1",
      },
      {
        id: "j2",
        title: "Junior Copywriter",
        company: "Wunderman Thompson",
        meta: "Part-time · Hybrid",
        href: "/jobs/j2",
      },
    ],
    mentorshipSessions: [
      {
        id: "m1",
        mentor: "Nour Hassan",
        topic: "CV Review & LinkedIn Optimization",
        date: "May 3, 2025",
        status: "upcoming",
      },
      {
        id: "m2",
        mentor: "Dina Youssef",
        topic: "Portfolio Feedback",
        date: "April 18, 2025",
        status: "completed",
      },
    ],
  },

  // ── Employer: Nour Talent Co. ───────────────────────────────
  "employer@baedconnect.com": {
    savedCourses: [],
    savedJobs: [
      {
        id: "j10",
        title: "Social Media Manager",
        company: "Nour Talent Co.",
        meta: "12 applicants · Active",
        href: "/jobs/j10",
      },
      {
        id: "j11",
        title: "Content Strategist",
        company: "Nour Talent Co.",
        meta: "4 applicants · Active",
        href: "/jobs/j11",
      },
    ],
    mentorshipSessions: [],
  },

  // ── Admin ───────────────────────────────────────────────────
  "admin@baedconnect.com": {
    savedCourses: [],
    savedJobs: [],
    mentorshipSessions: [],
  },
};

export function getProfileData(email: string): ProfileData | null {
  return PROFILE_DATA[email.toLowerCase()] ?? null;
}