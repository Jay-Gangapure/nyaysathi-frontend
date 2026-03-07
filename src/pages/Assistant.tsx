import { useState, useRef, useEffect } from "react";
import { Send, Mic, Volume2, Globe, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import DashboardLayout from "@/components/DashboardLayout";
import { api } from "@/services/api";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

const Assistant = () => {
  const [messages, setMessages] = useState<Message[]>([
    { id: "1", role: "assistant", content: "Namaste! 🙏 I'm NyaySathi, your AI legal assistant. Ask me any legal question in English, Hindi, or Marathi and I'll explain it in simple language." },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [language, setLanguage] = useState("english");
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);

  const send = async () => {
    if (!input.trim() || loading) return;
    const userMsg: Message = { id: Date.now().toString(), role: "user", content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setLoading(true);
    try {
      const res = await api.assistant.sendMessage(input);
      setMessages(prev => [...prev, { id: (Date.now() + 1).toString(), role: "assistant", content: res.reply }]);
    } catch {
      setMessages(prev => [...prev, { id: (Date.now() + 1).toString(), role: "assistant", content: "Sorry, something went wrong. Please try again." }]);
    }
    setLoading(false);
  };

  const history = ["What are my rights as a tenant?", "How to file RTI?", "Consumer protection basics"];

  return (
    <DashboardLayout>
      <div className="flex h-[calc(100vh-7rem)] gap-4">
        {/* Chat History Sidebar */}
        <div className="hidden w-64 shrink-0 flex-col rounded-xl border border-border bg-card p-4 lg:flex">
          <h3 className="mb-3 text-sm font-semibold text-card-foreground">Chat History</h3>
          <div className="space-y-1">
            {history.map((h) => (
              <button key={h} className="w-full truncate rounded-lg px-3 py-2 text-left text-sm text-muted-foreground hover:bg-muted">{h}</button>
            ))}
          </div>
          <div className="mt-auto pt-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Globe className="h-4 w-4" />
              <Select value={language} onValueChange={setLanguage}>
                <SelectTrigger className="h-8 text-xs"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="english">English</SelectItem>
                  <SelectItem value="hindi">Hindi</SelectItem>
                  <SelectItem value="marathi">Marathi</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Chat area */}
        <div className="flex flex-1 flex-col rounded-xl border border-border bg-card">
          <div className="border-b border-border px-4 py-3">
            <h2 className="font-semibold text-card-foreground">AI Legal Assistant</h2>
            <p className="text-xs text-muted-foreground">Ask any legal question</p>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            <AnimatePresence>
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
                >
                  <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                    msg.role === "assistant" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                  }`}>
                    {msg.role === "assistant" ? <Bot className="h-4 w-4" /> : <User className="h-4 w-4" />}
                  </div>
                  <div className={`max-w-[75%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    msg.role === "assistant"
                      ? "bg-muted text-foreground"
                      : "bg-primary text-primary-foreground"
                  }`}>
                    {msg.content}
                    {msg.role === "assistant" && (
                      <button className="mt-2 flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground">
                        <Volume2 className="h-3 w-3" /> Play audio
                      </button>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            {loading && (
              <div className="flex gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Bot className="h-4 w-4" />
                </div>
                <div className="rounded-2xl bg-muted px-4 py-3">
                  <div className="flex gap-1">
                    <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground" style={{ animationDelay: "0ms" }} />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground" style={{ animationDelay: "150ms" }} />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={endRef} />
          </div>

          <div className="border-t border-border p-4">
            <form onSubmit={(e) => { e.preventDefault(); send(); }} className="flex gap-2">
              <Button type="button" variant="outline" size="icon" className="shrink-0">
                <Mic className="h-4 w-4" />
              </Button>
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your legal question..."
                className="flex-1"
              />
              <Button type="submit" size="icon" disabled={loading || !input.trim()}>
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Assistant;
