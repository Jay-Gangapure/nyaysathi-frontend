import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { MessageSquare, BookOpen, Landmark, FileUp, MapPin, Clock, HelpCircle, ArrowRight } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const Dashboard = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const cards = [
    { title: t("dashboard.card1Title"), desc: t("dashboard.card1Desc"), icon: MessageSquare, path: "/assistant", color: "bg-primary/10 text-primary" },
    { title: t("dashboard.card2Title"), desc: t("dashboard.card2Desc"), icon: BookOpen, path: "/rights", color: "bg-accent/10 text-accent" },
    { title: t("dashboard.card3Title"), desc: t("dashboard.card3Desc"), icon: Landmark, path: "/schemes", color: "bg-success/10 text-success" },
    { title: t("dashboard.card4Title"), desc: t("dashboard.card4Desc"), icon: FileUp, path: "/document", color: "bg-warning/10 text-warning" },
    { title: t("dashboard.card5Title"), desc: t("dashboard.card5Desc"), icon: MapPin, path: "/directory", color: "bg-destructive/10 text-destructive" },
  ];

  const recentQueries = [
    "What are my rights as a tenant?",
    "How to file an RTI application?",
    "Consumer complaint process",
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="font-display text-2xl font-bold text-foreground">{t("dashboard.welcome")}</h1>
          <p className="mt-1 text-muted-foreground">{t("dashboard.subtitle")}</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => (
            <motion.div
              key={card.path}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              onClick={() => navigate(card.path)}
              className="group cursor-pointer rounded-xl border border-border bg-card p-5 shadow-card transition-all hover:shadow-card-hover hover:-translate-y-0.5"
            >
              <div className={`mb-3 inline-flex rounded-lg p-2.5 ${card.color}`}>
                <card.icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-card-foreground">{card.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{card.desc}</p>
              <ArrowRight className="mt-3 h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
            </motion.div>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-5 shadow-card">
            <div className="mb-4 flex items-center gap-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <h3 className="font-semibold text-card-foreground">{t("dashboard.recentQueries")}</h3>
            </div>
            <div className="space-y-2">
              {recentQueries.map((q) => (
                <button key={q} onClick={() => navigate("/assistant")} className="flex w-full items-center gap-3 rounded-lg p-3 text-left text-sm text-muted-foreground transition-colors hover:bg-muted">
                  <MessageSquare className="h-4 w-4 shrink-0" />
                  {q}
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-5 shadow-card">
            <div className="mb-4 flex items-center gap-2">
              <HelpCircle className="h-4 w-4 text-muted-foreground" />
              <h3 className="font-semibold text-card-foreground">{t("dashboard.quickHelp")}</h3>
            </div>
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">{t("dashboard.needHelp")}</p>
              <Button variant="outline" className="w-full justify-start gap-2" onClick={() => navigate("/directory")}>
                <MapPin className="h-4 w-4" /> {t("dashboard.findLegalAid")}
              </Button>
              <Button variant="outline" className="w-full justify-start gap-2" onClick={() => navigate("/assistant")}>
                <MessageSquare className="h-4 w-4" /> {t("dashboard.askAI")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
