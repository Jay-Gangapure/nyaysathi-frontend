import { useState } from "react";
import { MapPin, Phone, Globe, Search } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { api } from "@/services/api";
import LoadingSpinner from "@/components/LoadingSpinner";
import { motion } from "framer-motion";

interface Office { id: string; name: string; contact: string; website: string; address: string; }

const Directory = () => {
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [results, setResults] = useState<Office[]>([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const handleSearch = async () => {
    if (!state || !district) return;
    setLoading(true);
    setSearched(true);
    const res = await api.directory.search(state, district);
    setResults(res);
    setLoading(false);
  };

  return (
    <DashboardLayout>
      <h1 className="mb-6 font-display text-2xl font-bold text-foreground">Legal Help Directory</h1>
      <div className="mb-6 flex flex-wrap items-end gap-4 rounded-xl border border-border bg-card p-5 shadow-card">
        <div className="min-w-[180px] flex-1">
          <Label>State</Label>
          <Select value={state} onValueChange={setState}>
            <SelectTrigger><SelectValue placeholder="Select state" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="maharashtra">Maharashtra</SelectItem>
              <SelectItem value="delhi">Delhi</SelectItem>
              <SelectItem value="karnataka">Karnataka</SelectItem>
              <SelectItem value="up">Uttar Pradesh</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="min-w-[180px] flex-1">
          <Label>District</Label>
          <Select value={district} onValueChange={setDistrict}>
            <SelectTrigger><SelectValue placeholder="Select district" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="central">Central</SelectItem>
              <SelectItem value="north">North</SelectItem>
              <SelectItem value="south">South</SelectItem>
              <SelectItem value="east">East</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button onClick={handleSearch} disabled={loading || !state || !district} className="gap-2">
          <Search className="h-4 w-4" /> Search
        </Button>
      </div>

      {loading ? (
        <LoadingSpinner text="Searching legal aid offices..." />
      ) : results.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((o, i) => (
            <motion.div key={o.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="rounded-xl border border-border bg-card p-5 shadow-card">
              <h3 className="font-semibold text-card-foreground">{o.name}</h3>
              <div className="mt-3 space-y-2 text-sm text-muted-foreground">
                <p className="flex items-center gap-2"><MapPin className="h-4 w-4" /> {o.address}</p>
                <p className="flex items-center gap-2"><Phone className="h-4 w-4" /> {o.contact}</p>
                <a href={o.website} className="flex items-center gap-2 text-primary hover:underline"><Globe className="h-4 w-4" /> Visit Website</a>
              </div>
            </motion.div>
          ))}
        </div>
      ) : searched ? (
        <div className="rounded-xl border border-border bg-card p-10 text-center shadow-card">
          <p className="text-muted-foreground">No offices found. Try a different location.</p>
        </div>
      ) : null}
    </DashboardLayout>
  );
};

export default Directory;
