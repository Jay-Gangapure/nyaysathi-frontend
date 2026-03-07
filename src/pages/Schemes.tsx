import { useState } from "react";
import { Search, ExternalLink } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { api } from "@/services/api";
import LoadingSpinner from "@/components/LoadingSpinner";
import { motion } from "framer-motion";

interface Scheme { id: string; name: string; description: string; eligibility: string; link: string; }

const Schemes = () => {
  const [form, setForm] = useState({ age: "", gender: "", income: "", occupation: "", state: "" });
  const [results, setResults] = useState<Scheme[]>([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSearched(true);
    const res = await api.schemes.find(form);
    setResults(res);
    setLoading(false);
  };

  return (
    <DashboardLayout>
      <h1 className="mb-6 font-display text-2xl font-bold text-foreground">Government Scheme Finder</h1>
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-xl border border-border bg-card p-6 shadow-card lg:col-span-1">
          <h3 className="mb-4 font-semibold text-card-foreground">Your Details</h3>
          <form onSubmit={handleSearch} className="space-y-4">
            <div><Label>Age</Label><Input type="number" value={form.age} onChange={e => setForm({...form, age: e.target.value})} placeholder="Enter age" /></div>
            <div>
              <Label>Gender</Label>
              <Select value={form.gender} onValueChange={v => setForm({...form, gender: v})}>
                <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Income Range</Label>
              <Select value={form.income} onValueChange={v => setForm({...form, income: v})}>
                <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="below-1l">Below ₹1 Lakh</SelectItem>
                  <SelectItem value="1l-5l">₹1 - 5 Lakhs</SelectItem>
                  <SelectItem value="5l-10l">₹5 - 10 Lakhs</SelectItem>
                  <SelectItem value="above-10l">Above ₹10 Lakhs</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div><Label>Occupation</Label><Input value={form.occupation} onChange={e => setForm({...form, occupation: e.target.value})} placeholder="e.g., Farmer" /></div>
            <div>
              <Label>State</Label>
              <Select value={form.state} onValueChange={v => setForm({...form, state: v})}>
                <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="maharashtra">Maharashtra</SelectItem>
                  <SelectItem value="delhi">Delhi</SelectItem>
                  <SelectItem value="karnataka">Karnataka</SelectItem>
                  <SelectItem value="up">Uttar Pradesh</SelectItem>
                  <SelectItem value="tamil-nadu">Tamil Nadu</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button type="submit" className="w-full gap-2" disabled={loading}>
              <Search className="h-4 w-4" /> Find Schemes
            </Button>
          </form>
        </div>
        <div className="lg:col-span-2">
          {loading ? (
            <LoadingSpinner text="Finding matching schemes..." />
          ) : searched && results.length > 0 ? (
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">{results.length} schemes found</p>
              {results.map((s, i) => (
                <motion.div key={s.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="rounded-xl border border-border bg-card p-5 shadow-card">
                  <h3 className="font-semibold text-card-foreground">{s.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.description}</p>
                  <p className="mt-2 text-sm"><span className="font-medium text-foreground">Eligibility:</span> <span className="text-muted-foreground">{s.eligibility}</span></p>
                  <a href={s.link} className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
                    Apply Now <ExternalLink className="h-3 w-3" />
                  </a>
                </motion.div>
              ))}
            </div>
          ) : searched ? (
            <div className="rounded-xl border border-border bg-card p-10 text-center shadow-card">
              <p className="text-muted-foreground">No matching schemes found. Try adjusting your filters.</p>
            </div>
          ) : (
            <div className="flex h-full items-center justify-center rounded-xl border border-dashed border-border p-10 text-center">
              <div>
                <Search className="mx-auto mb-3 h-10 w-10 text-muted-foreground/40" />
                <p className="text-muted-foreground">Fill in your details and click "Find Schemes" to discover eligible government schemes.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Schemes;
