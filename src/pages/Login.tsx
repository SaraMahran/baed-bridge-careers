import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Eye, EyeOff, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ACCOUNTS = [
  { email: "learner@baedconnect.com", password: "learn123", name: "Sara Ahmed", role: "Learner" },
  { email: "employer@baedconnect.com", password: "hire123", name: "Nour Talent Co.", role: "Employer" },
  { email: "admin@baedconnect.com", password: "admin123", name: "Baed Admin", role: "Admin" },
];

const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    setError("");
    if (!email.trim()) { setError("Please enter your email address."); return; }
    if (!isValidEmail(email.trim())) { setError("Please enter a valid email address."); return; }
    if (!password) { setError("Please enter your password."); return; }
    setLoading(true);
    setTimeout(() => {
      // Check hardcoded accounts first
      const hardcoded = ACCOUNTS.find(
        (a) => a.email === email.trim().toLowerCase() && a.password === password
      );
      if (hardcoded) {
        localStorage.setItem("baed_user", JSON.stringify(hardcoded));
        navigate("/");
        setLoading(false);
        return;
      }
      // Check locally registered accounts
      const registered = JSON.parse(localStorage.getItem("baed_registered_users") || "[]");
      const found = registered.find(
        (u: any) => u.email === email.trim().toLowerCase() && u.password === password
      );
      if (found) {
        localStorage.setItem("baed_user", JSON.stringify(found));
        navigate("/");
      } else {
        setError("Incorrect email or password. Please try again.");
      }
      setLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left — brand panel */}
      <div className="hidden lg:flex flex-col justify-between bg-gradient-to-br from-[#5f1a37] via-[#a0205b] to-[#c374ae] p-12 relative overflow-hidden">
        <motion.div
          className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/5"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-white/5"
          animate={{ scale: [1.15, 1, 1.15] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative z-10">
          <Link to="/" className="text-2xl font-extrabold text-white">
            Baed<span className="text-[#fff279]"> Connect</span>
          </Link>
        </div>
        <div className="relative z-10 space-y-8">
          <div>
            <h2 className="text-4xl font-extrabold text-white leading-tight mb-4">
              Your career starts<br />
              <span className="text-[#fff279]">here.</span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed">
              Education for employment is accessible. Join thousands of people with disabilities building meaningful careers in content marketing.
            </p>
          </div>
          {[
            { emoji: "✨", text: "AI-powered career matching" },
            { emoji: "📚", text: "6 accessible courses" },
            { emoji: "💼", text: "Inclusive job opportunities" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.15 }}
              className="flex items-center gap-3"
            >
              <span className="text-xl">{item.emoji}</span>
              <span className="text-white/80 font-medium">{item.text}</span>
            </motion.div>
          ))}
        </div>
        <div className="relative z-10">
          <p className="text-white/40 text-sm">© 2026 Baed Connect — A product of Baed (بعض)</p>
        </div>
      </div>

      {/* Right — form panel */}
      <div className="flex items-center justify-center px-6 py-12 bg-background">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          {/* Mobile logo */}
          <Link to="/" className="lg:hidden block text-xl font-extrabold text-foreground mb-8">
            Baed<span className="text-primary"> Connect</span>
          </Link>

          <div className="mb-8">
            <p className="text-xs font-semibold tracking-widest text-primary uppercase mb-2">Welcome Back</p>
            <h1 className="text-3xl font-bold text-foreground mb-2">Log in to your account</h1>
            <p className="text-muted-foreground text-sm">
              Don't have an account?{" "}
              <Link to="/signup" className="text-primary font-semibold hover:underline">
                Sign up free
              </Link>
            </p>
          </div>

          <div className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-foreground mb-1.5">Email address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                autoComplete="off"
                className="w-full px-4 py-3 rounded-xl border-2 border-border text-sm text-foreground bg-card focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-1.5">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  autoComplete="off"
                  onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                  className="w-full px-4 py-3 pr-12 rounded-xl border-2 border-border text-sm text-foreground bg-card focus:outline-none focus:border-primary transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(prev => !prev)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {error && (
              <motion.p
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-destructive bg-destructive/10 border border-destructive/20 rounded-xl px-4 py-3"
              >
                {error}
              </motion.p>
            )}

            <Button onClick={handleLogin} disabled={loading} className="w-full h-12 text-base" size="lg">
              {loading ? "Signing in..." : "Log In"}
            </Button>
          </div>

          <div className="mt-8 pt-6 border-t border-border">
            <p className="text-xs text-muted-foreground text-center mb-3">Demo accounts for testing</p>
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: "Learner", email: "learner@baedconnect.com", password: "learn123" },
                { label: "Employer", email: "employer@baedconnect.com", password: "hire123" },
              ].map((demo) => (
                <button
                  key={demo.label}
                  onClick={() => { setEmail(demo.email); setPassword(demo.password); }}
                  className="text-xs px-3 py-2 rounded-lg border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors text-left"
                >
                  <span className="font-semibold block">{demo.label}</span>
                  <span className="opacity-70">Click to fill</span>
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;