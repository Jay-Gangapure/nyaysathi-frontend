import { useState, useCallback } from "react";
import { Upload, FileText, CheckCircle2, AlertCircle } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { api } from "@/services/api";
import LoadingSpinner from "@/components/LoadingSpinner";
import { motion } from "framer-motion";

const DocumentUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ summary: string; keyPoints: string[] } | null>(null);

  const handleFile = (f: File) => {
    if (f.type === "application/pdf" || f.type.startsWith("image/")) {
      setFile(f);
      setResult(null);
    }
  };

  const onDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files[0]) handleFile(e.dataTransfer.files[0]);
  }, []);

  const analyze = async () => {
    if (!file) return;
    setLoading(true);
    const res = await api.documents.upload(file);
    setResult(res);
    setLoading(false);
  };

  return (
    <DashboardLayout>
      <h1 className="mb-6 font-display text-2xl font-bold text-foreground">Document Upload & Analysis</h1>
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-4">
          <div
            onDragOver={e => { e.preventDefault(); setDragOver(true); }}
            onDragLeave={() => setDragOver(false)}
            onDrop={onDrop}
            className={`flex flex-col items-center justify-center rounded-xl border-2 border-dashed p-12 text-center transition-colors ${
              dragOver ? "border-primary bg-primary/5" : "border-border bg-card"
            }`}
          >
            <Upload className="mb-4 h-10 w-10 text-muted-foreground/50" />
            <p className="text-sm font-medium text-foreground">Drag & drop your document here</p>
            <p className="mt-1 text-xs text-muted-foreground">PDF or images accepted</p>
            <label className="mt-4">
              <input type="file" accept=".pdf,image/*" className="hidden" onChange={e => e.target.files?.[0] && handleFile(e.target.files[0])} />
              <span className="cursor-pointer rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">Browse Files</span>
            </label>
          </div>

          {file && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 rounded-xl border border-border bg-card p-4">
              <FileText className="h-8 w-8 text-primary" />
              <div className="flex-1 min-w-0">
                <p className="truncate text-sm font-medium text-foreground">{file.name}</p>
                <p className="text-xs text-muted-foreground">{(file.size / 1024).toFixed(1)} KB</p>
              </div>
              <Button onClick={analyze} disabled={loading} size="sm">Analyze</Button>
            </motion.div>
          )}
        </div>

        <div>
          {loading ? (
            <LoadingSpinner text="Analyzing document..." />
          ) : result ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
              <div className="rounded-xl border border-border bg-card p-6 shadow-card">
                <h3 className="mb-3 flex items-center gap-2 font-semibold text-card-foreground">
                  <AlertCircle className="h-4 w-4 text-primary" /> AI Summary
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{result.summary}</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-6 shadow-card">
                <h3 className="mb-3 font-semibold text-card-foreground">Key Points</h3>
                <ul className="space-y-2">
                  {result.keyPoints.map(p => (
                    <li key={p} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-success" /> {p}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ) : (
            <div className="flex h-full items-center justify-center rounded-xl border border-dashed border-border p-10">
              <p className="text-center text-muted-foreground">Upload a document to see AI-powered analysis and summary.</p>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DocumentUpload;
