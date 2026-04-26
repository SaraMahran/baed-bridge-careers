import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import ForLearners from "./pages/ForLearners";
import ForEmployers from "./pages/ForEmployers";
import Courses from "./pages/Courses";
import Mentorship from "./pages/Mentorship";
import Jobs from "./pages/Jobs";
import AccessibilityResources from "./pages/AccessibilityResources";
import Partnerships from "./pages/Partnerships";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import CareerMatch from "./pages/CareerMatch";
import CourseDetail from "./pages/CourseDetail";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import NotFound from "./pages/NotFound";
import MyCourses from "./pages/MyCourses";
import MyJobs from "./pages/MyJobs";
import MyMentorship from "./pages/MyMentorship";
import MyListings from "./pages/MyListings";
import JobDetail from "./pages/JobDetail";
import PostJob from "./pages/PostJob";
import JobPreview from "./pages/JobPreview";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/learners" element={<ForLearners />} />
          <Route path="/employers" element={<ForEmployers />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:slug" element={<CourseDetail />} />
          <Route path="/mentorship" element={<Mentorship />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/jobs/:id" element={<JobDetail />} />
          <Route path="/accessibility-resources" element={<AccessibilityResources />} />
          <Route path="/partnerships" element={<Partnerships />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/get-started" element={<Navigate to="/signup" />} />
          <Route path="/career-match" element={<CareerMatch />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          {/* Profile pages */}
          <Route path="/my-courses" element={<MyCourses />} />
          <Route path="/my-jobs" element={<MyJobs />} />
          <Route path="/my-mentorship" element={<MyMentorship />} />
          <Route path="/my-listings" element={<MyListings />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/post-job" element={<PostJob />} />
          <Route path="/job-preview" element={<JobPreview />} />

        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;