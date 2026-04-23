import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";

const ACCOUNTS = [
  { email: "learner@baedconnect.com", password: "learn123", name: "Sara Ahmed", role: "Learner" },
  { email: "employer@baedconnect.com", password: "hire123", name: "Nour Talent Co.", role: "Employer" },
  { email: "admin@baedconnect.com", password: "admin123", name: "Baed Admin", role: "Admin" },
];

const isValidEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    setError("");
    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }
    if (!isValidEmail(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!password) {
      setError("Please enter your password.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      const match = ACCOUNTS.find(
        (a) => a.email === email.trim().toLowerCase() && a.password === password
      );
      if (match) {
        localStorage.setItem("baed_user", JSON.stringify(match));
        navigate("/");
      } else {
        setError("Incorrect email or password. Please try again.");
      }
      setLoading(false);
    }, 800);
  };

  return (
    <Layout>
      <section className="bg-gradient-to-b from-background to-muted/30 min-h-screen flex items-center justify-center px-4 py-20">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <p className="text-xs font-semibold tracking-widest text-primary uppercase mb-3">
              Welcome Back
            </p>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Log in to Baed Connect
            </h1>
            <p className="text-muted-foreground text-sm">
              Don't have an account?{" "}
              <Link to="/get-started" className="text-primary font-medium underline underline-offset-4">
                Get Started
              </Link>
            </p>
          </div>

          <div className="bg-[#fbf9d8] border border-border rounded-2xl p-8 shadow-sm">
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Email address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  autoComplete="off"
                  className="w-full px-4 py-2.5 rounded-lg border border-border text-sm text-foreground bg-background focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    autoComplete="off"
                    onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                    className="w-full px-4 py-2.5 pr-11 rounded-lg border border-border text-sm text-foreground bg-background focus:outline-none focus:border-primary transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(prev => !prev)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {error && (
                <p className="text-sm text-destructive bg-destructive/10 border border-destructive/20 rounded-lg px-4 py-2.5">
                  {error}
                </p>
              )}

              <Button
                onClick={handleLogin}
                disabled={loading}
                className="w-full"
                size="lg"
              >
                {loading ? "Signing in..." : "Log In"}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Login;