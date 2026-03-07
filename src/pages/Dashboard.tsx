import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { MessageSquare, BookOpen, Landmark, FileUp, MapPin, Clock, HelpCircle, ArrowRight } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";

const cards = [
  { title: "Ask Legal Assistant", desc: "Get answers to your legal questions", icon: MessageSquare, path: "/assistant", color: "bg-primary/10 text-primary" },
  { title: "Explore Legal Rights", desc: "Browse rights by category", icon: BookOpen, path: "/rights", color: "bg-accent/10 text-accent" },
  { title: "Find Government Schemes", desc: "Discover schemes you qualify for", icon: Landmark, path: "/schemes", color: "bg-success/10 text-success" },
  { title: "Upload Legal Document", desc: "Get AI summaries of documents", icon: FileUp, path: "/document", color: "bg-warning/10 text-warning" },
  { title: "Legal Help Directory", desc: "Find legal aid near you", icon: MapPin, path: "/directory", color: "bg-destructive/10 text-destructive" },
];

const recentQueries = [
  "What are my rights as a tenant?",
  "How to file an RTI application?",
  "Consumer complaint process",
];

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="font-display text-2xl font-bold text-foreground">Welcome back 👋</h1>
          <p className="mt-1 text-muted-foreground">How can NyaySathi help you today?</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
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
          {/* Recent Queries */}
          <div className="rounded-xl border border-border bg-card p-5 shadow-card">
            <div className="mb-4 flex items-center gap-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <h3 className="font-semibold text-card-foreground">Recent Queries</h3>
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

          {/* Quick Help */}
          <div className="rounded-xl border border-border bg-card p-5 shadow-card">
            <div className="mb-4 flex items-center gap-2">
              <HelpCircle className="h-4 w-4 text-muted-foreground" />
              <h3 className="font-semibold text-card-foreground">Quick Help</h3>
            </div>
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">Need immediate legal assistance?</p>
              <Button variant="outline" className="w-full justify-start gap-2" onClick={() => navigate("/directory")}>
                <MapPin className="h-4 w-4" /> Find Legal Aid Near You
              </Button>
              <Button variant="outline" className="w-full justify-start gap-2" onClick={() => navigate("/assistant")}>
                <MessageSquare className="h-4 w-4" /> Ask AI Legal Assistant
              </Button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
