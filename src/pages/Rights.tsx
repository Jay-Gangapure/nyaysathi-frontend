import { useState } from "react";
import { ShieldCheck, Monitor, ShoppingCart, Briefcase, Home, FileText, ArrowLeft, CheckCircle2, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";

const categories = [
  {
    id: "women", icon: ShieldCheck, title: "Women Rights", color: "bg-pink-500/10 text-pink-600",
    explanation: "Indian law provides strong protections for women against domestic violence, workplace harassment, and discrimination.",
    steps: ["File a complaint at the nearest police station or Women's Helpline (181)", "Approach the District Women's Protection Officer", "File a case under the Protection of Women from Domestic Violence Act, 2005", "Seek legal aid from the District Legal Services Authority"],
    documents: ["ID Proof (Aadhaar/Voter ID)", "FIR Copy", "Medical Report (if applicable)", "Address Proof"],
    links: [{ label: "Women Helpline", url: "#" }, { label: "NCW Portal", url: "#" }],
  },
  {
    id: "cyber", icon: Monitor, title: "Cybercrime", color: "bg-blue-500/10 text-blue-600",
    explanation: "Cybercrime laws in India cover online fraud, identity theft, cyberstalking, and data breaches under the IT Act 2000.",
    steps: ["Report on cybercrime.gov.in", "File FIR at nearest cyber cell", "Preserve digital evidence (screenshots, emails)", "Follow up with the investigating officer"],
    documents: ["Screenshots of the crime", "Transaction details", "Communication records", "Device information"],
    links: [{ label: "Cybercrime Portal", url: "#" }],
  },
  {
    id: "consumer", icon: ShoppingCart, title: "Consumer Protection", color: "bg-green-500/10 text-green-600",
    explanation: "The Consumer Protection Act 2019 protects buyers against defective products, deficient services, and unfair trade practices.",
    steps: ["Send a legal notice to the seller/service provider", "File complaint on consumerhelpline.gov.in", "Approach the District Consumer Forum", "Appeal to State/National Commission if needed"],
    documents: ["Purchase receipt/invoice", "Product warranty card", "Communication with seller", "Photos of defective product"],
    links: [{ label: "Consumer Helpline", url: "#" }],
  },
  {
    id: "labour", icon: Briefcase, title: "Labour Rights", color: "bg-orange-500/10 text-orange-600",
    explanation: "Labour laws protect workers' rights including minimum wages, working conditions, and social security benefits.",
    steps: ["Document the violation", "Complain to the Labour Commissioner", "File a case in Labour Court", "Seek help from trade unions"],
    documents: ["Employment contract", "Salary slips", "Attendance records", "ID proof"],
    links: [{ label: "Labour Ministry", url: "#" }],
  },
  {
    id: "property", icon: Home, title: "Property Law", color: "bg-purple-500/10 text-purple-600",
    explanation: "Property laws govern the purchase, sale, transfer, and inheritance of immovable property in India.",
    steps: ["Verify property title and ownership", "Check for encumbrances", "Register the property at Sub-Registrar office", "Pay stamp duty and registration charges"],
    documents: ["Sale deed", "Property tax receipts", "Encumbrance certificate", "Approved building plan"],
    links: [{ label: "Land Records Portal", url: "#" }],
  },
  {
    id: "rti", icon: FileText, title: "RTI", color: "bg-teal-500/10 text-teal-600",
    explanation: "The Right to Information Act 2005 empowers citizens to request information from public authorities.",
    steps: ["Write an RTI application addressed to the PIO", "Pay ₹10 fee (postal order/cash/online)", "Send to the concerned public authority", "If unsatisfied, file first appeal within 30 days"],
    documents: ["RTI application form", "Payment proof", "ID proof (optional)", "Previous correspondence (for appeal)"],
    links: [{ label: "RTI Online Portal", url: "#" }],
  },
];

const Rights = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const cat = categories.find(c => c.id === selected);

  return (
    <DashboardLayout>
      <AnimatePresence mode="wait">
        {!selected ? (
          <motion.div key="grid" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <h1 className="mb-6 font-display text-2xl font-bold text-foreground">Legal Rights Explorer</h1>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {categories.map((c, i) => (
                <motion.div
                  key={c.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => setSelected(c.id)}
                  className="group cursor-pointer rounded-xl border border-border bg-card p-6 shadow-card transition-all hover:shadow-card-hover hover:-translate-y-0.5"
                >
                  <div className={`mb-3 inline-flex rounded-lg p-2.5 ${c.color}`}>
                    <c.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-card-foreground">{c.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{c.explanation}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : cat ? (
          <motion.div key="detail" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
            <Button variant="ghost" onClick={() => setSelected(null)} className="mb-4 gap-2">
              <ArrowLeft className="h-4 w-4" /> Back to categories
            </Button>
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className={`inline-flex rounded-lg p-3 ${cat.color}`}><cat.icon className="h-6 w-6" /></div>
                <h1 className="font-display text-2xl font-bold text-foreground">{cat.title}</h1>
              </div>
              <div className="rounded-xl border border-border bg-card p-6 shadow-card">
                <h3 className="mb-2 font-semibold text-card-foreground">Overview</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{cat.explanation}</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-6 shadow-card">
                <h3 className="mb-3 font-semibold text-card-foreground">Step-by-Step Process</h3>
                <ol className="space-y-3">
                  {cat.steps.map((s, i) => (
                    <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">{i + 1}</span>
                      {s}
                    </li>
                  ))}
                </ol>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-xl border border-border bg-card p-6 shadow-card">
                  <h3 className="mb-3 font-semibold text-card-foreground">Required Documents</h3>
                  <ul className="space-y-2">
                    {cat.documents.map(d => (
                      <li key={d} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-success" /> {d}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl border border-border bg-card p-6 shadow-card">
                  <h3 className="mb-3 font-semibold text-card-foreground">Important Links</h3>
                  <div className="space-y-2">
                    {cat.links.map(l => (
                      <a key={l.label} href={l.url} className="flex items-center gap-2 text-sm text-primary hover:underline">
                        <ExternalLink className="h-4 w-4" /> {l.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </DashboardLayout>
  );
};

export default Rights;
