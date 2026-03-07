import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Scale, Bot, Landmark, FileSearch, MapPin, ArrowRight, Users, Globe, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import FeatureCard from "@/components/FeatureCard";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useTranslation } from "react-i18next";

const Landing = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const steps = [
    { num: "1", title: t("landing.step1Title"), desc: t("landing.step1Desc") },
    { num: "2", title: t("landing.step2Title"), desc: t("landing.step2Desc") },
    { num: "3", title: t("landing.step3Title"), desc: t("landing.step3Desc") },
  ];

  const stats = [
    { icon: Users, value: "10,000+", label: t("landing.stat1") },
    { icon: Globe, value: "3", label: t("landing.stat2") },
    { icon: Shield, value: "100%", label: t("landing.stat3") },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Scale className="h-7 w-7 text-primary" />
            <span className="font-display text-xl font-bold text-foreground">NyaySathi</span>
          </div>
          <div className="flex items-center gap-3">
            <LanguageSwitcher compact />
            <Button variant="ghost" onClick={() => navigate("/login")}>{t("common.login")}</Button>
            <Button onClick={() => navigate("/signup")}>{t("common.signup")}</Button>
          </div>
        </div>
      </header>

      <section className="gradient-hero py-20 lg:py-32">
        <div className="container text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              {t("landing.badge")}
            </span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="mx-auto max-w-4xl font-display text-4xl font-extrabold leading-tight text-foreground sm:text-5xl lg:text-6xl">
            {t("landing.title")}{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{t("landing.titleHighlight")}</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            {t("landing.subtitle")}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" onClick={() => navigate("/signup")} className="gap-2 px-8 text-base">
              {t("landing.getStarted")} <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate("/assistant")} className="gap-2 px-8 text-base">
              {t("landing.askAssistant")}
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="font-display text-3xl font-bold text-foreground">{t("landing.featuresTitle")}</h2>
            <p className="mt-3 text-muted-foreground">{t("landing.featuresSubtitle")}</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <FeatureCard icon={Bot} title={t("landing.feature1Title")} description={t("landing.feature1Desc")} delay={0} onClick={() => navigate("/assistant")} />
            <FeatureCard icon={Landmark} title={t("landing.feature2Title")} description={t("landing.feature2Desc")} delay={0.1} onClick={() => navigate("/schemes")} />
            <FeatureCard icon={FileSearch} title={t("landing.feature3Title")} description={t("landing.feature3Desc")} delay={0.2} onClick={() => navigate("/document")} />
            <FeatureCard icon={MapPin} title={t("landing.feature4Title")} description={t("landing.feature4Desc")} delay={0.3} onClick={() => navigate("/directory")} />
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-muted/50 py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="font-display text-3xl font-bold text-foreground">{t("landing.howItWorks")}</h2>
            <p className="mt-3 text-muted-foreground">{t("landing.howItWorksSubtitle")}</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step, i) => (
              <motion.div key={step.num} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl gradient-primary text-xl font-bold text-primary-foreground">{step.num}</div>
                <h3 className="mb-2 font-display text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl rounded-2xl gradient-primary p-10 text-center text-primary-foreground shadow-elevated">
            <h2 className="font-display text-3xl font-bold">{t("landing.impactTitle")}</h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">{t("landing.impactSubtitle")}</p>
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

      <footer className="border-t border-border bg-card py-10">
        <div className="container text-center">
          <div className="mb-4 flex items-center justify-center gap-2">
            <Scale className="h-5 w-5 text-primary" />
            <span className="font-display text-lg font-bold text-foreground">NyaySathi</span>
          </div>
          <p className="mx-auto max-w-lg text-sm text-muted-foreground">{t("landing.disclaimer")}</p>
          <p className="mt-4 text-xs text-muted-foreground/60">{t("landing.copyright")}</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
