import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import CareerMatch from "./pages/CareerMatch";
import CourseDetail from "./pages/CourseDetail";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import NotFound from "./pages/NotFound";


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
          <Route path="/mentorship" element={<Mentorship />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/accessibility-resources" element={<AccessibilityResources />} />
          <Route path="/partnerships" element={<Partnerships />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/career-match" element={<CareerMatch />} />
          <Route path="/courses/:slug" element={<CourseDetail />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;