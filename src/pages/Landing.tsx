import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Scale, Bot, Landmark, FileSearch, MapPin, ArrowRight, CheckCircle2, Users, Globe, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import FeatureCard from "@/components/FeatureCard";

const steps = [
  { num: "1", title: "Ask a Question", desc: "Type or speak your legal question in your preferred language." },
  { num: "2", title: "Get Clear Answers", desc: "Our AI explains your rights and procedures in simple terms." },
  { num: "3", title: "Take Action", desc: "Find relevant schemes, download documents, or contact legal aid." },
];

const stats = [
  { icon: Users, value: "10,000+", label: "Citizens Helped" },
  { icon: Globe, value: "3", label: "Languages Supported" },
  { icon: Shield, value: "100%", label: "Free & Accessible" },
];

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Scale className="h-7 w-7 text-primary" />
            <span className="font-display text-xl font-bold text-foreground">NyaySathi</span>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" onClick={() => navigate("/login")}>Log In</Button>
            <Button onClick={() => navigate("/signup")}>Sign Up</Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="gradient-hero py-20 lg:py-32">
        <div className="container text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              🇮🇳 Free Legal Awareness for Every Citizen
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto max-w-4xl font-display text-4xl font-extrabold leading-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            Understand Your Legal Rights{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Easily</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground"
          >
            NyaySathi helps citizens access legal information, discover government schemes, and understand legal procedures — all in simple language.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <Button size="lg" onClick={() => navigate("/signup")} className="gap-2 px-8 text-base">
              Get Started <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate("/assistant")} className="gap-2 px-8 text-base">
              Ask Legal Assistant
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="font-display text-3xl font-bold text-foreground">Everything You Need</h2>
            <p className="mt-3 text-muted-foreground">Empowering citizens with accessible legal knowledge</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <FeatureCard icon={Bot} title="AI Legal Assistant" description="Ask legal questions in plain language and get clear, easy-to-understand answers." delay={0} onClick={() => navigate("/assistant")} />
            <FeatureCard icon={Landmark} title="Government Scheme Finder" description="Discover schemes you're eligible for based on your profile." delay={0.1} onClick={() => navigate("/schemes")} />
            <FeatureCard icon={FileSearch} title="Document Understanding" description="Upload legal documents and get simplified summaries." delay={0.2} onClick={() => navigate("/document")} />
            <FeatureCard icon={MapPin} title="Legal Help Directory" description="Find nearby legal aid offices and free legal services." delay={0.3} onClick={() => navigate("/directory")} />
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="border-y border-border bg-muted/50 py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="font-display text-3xl font-bold text-foreground">How It Works</h2>
            <p className="mt-3 text-muted-foreground">Get legal help in three simple steps</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl gradient-primary text-xl font-bold text-primary-foreground">
                  {step.num}
                </div>
                <h3 className="mb-2 font-display text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Impact */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl rounded-2xl gradient-primary p-10 text-center text-primary-foreground shadow-elevated">
            <h2 className="font-display text-3xl font-bold">Making Justice Accessible</h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
              NyaySathi bridges the gap between citizens and the legal system by providing free, multilingual legal awareness.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6">
              {stats.map((s) => (
                <div key={s.label}>
                  <s.icon className="mx-auto mb-2 h-6 w-6 text-primary-foreground/80" />
                  <div className="text-2xl font-bold">{s.value}</div>
                  <div className="text-xs text-primary-foreground/70">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-10">
        <div className="container text-center">
          <div className="mb-4 flex items-center justify-center gap-2">
            <Scale className="h-5 w-5 text-primary" />
            <span className="font-display text-lg font-bold text-foreground">NyaySathi</span>
          </div>
          <p className="mx-auto max-w-lg text-sm text-muted-foreground">
            ⚠️ NyaySathi provides legal information only and is not a substitute for a lawyer. For legal advice, please consult a qualified legal professional.
          </p>
          <p className="mt-4 text-xs text-muted-foreground/60">© 2026 NyaySathi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
