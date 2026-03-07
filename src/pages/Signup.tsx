import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Scale, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Signup = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [form, setForm] = useState({ name: "", email: "", password: "", confirmPassword: "", language: "" });
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = t("signup.nameRequired");
    if (!/\S+@\S+\.\S+/.test(form.email)) e.email = t("signup.emailRequired");
    if (form.password.length < 6) e.password = t("signup.passwordMin");
    if (form.password !== form.confirmPassword) e.confirmPassword = t("signup.passwordMismatch");
    if (!form.language) e.language = t("signup.languageRequired");
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    await new Promise(r => setTimeout(r, 1000));
    // Set app language to user's preferred language
    const langMap: Record<string, string> = { english: "en", hindi: "hi", marathi: "mr" };
    if (langMap[form.language]) i18n.changeLanguage(langMap[form.language]);
    toast.success(t("signup.successToast"));
    navigate("/dashboard");
    setLoading(false);
  };

  return (
    <div className="flex min-h-screen">
      <div className="hidden w-1/2 gradient-primary lg:flex lg:flex-col lg:items-center lg:justify-center lg:p-12">
        <Scale className="mb-6 h-16 w-16 text-primary-foreground" />
        <h2 className="font-display text-3xl font-bold text-primary-foreground">{t("signup.joinTitle")}</h2>
        <p className="mt-3 max-w-sm text-center text-primary-foreground/80">{t("signup.joinSubtitle")}</p>
      </div>
      <div className="flex flex-1 items-center justify-center p-6 lg:p-12">
        <div className="w-full max-w-md">
          <div className="mb-8 flex items-center justify-between lg:justify-end">
            <div className="flex items-center gap-2 lg:hidden">
              <Scale className="h-7 w-7 text-primary" />
              <span className="font-display text-xl font-bold text-foreground">NyaySathi</span>
            </div>
            <LanguageSwitcher compact />
          </div>
          <h1 className="font-display text-2xl font-bold text-foreground">{t("signup.title")}</h1>
          <p className="mt-1 text-sm text-muted-foreground">{t("signup.subtitle")}</p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <div>
              <Label htmlFor="name">{t("signup.fullName")}</Label>
              <Input id="name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder={t("signup.namePlaceholder")} />
              {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
            </div>
            <div>
              <Label htmlFor="email">{t("signup.email")}</Label>
              <Input id="email" type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder={t("signup.emailPlaceholder")} />
              {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
            </div>
            <div>
              <Label htmlFor="password">{t("signup.password")}</Label>
              <div className="relative">
                <Input id="password" type={showPw ? "text" : "password"} value={form.password} onChange={e => setForm({...form, password: e.target.value})} placeholder={t("signup.passwordPlaceholder")} />
                <button type="button" onClick={() => setShowPw(!showPw)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                  {showPw ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              {errors.password && <p className="mt-1 text-xs text-destructive">{errors.password}</p>}
            </div>
            <div>
              <Label htmlFor="confirm">{t("signup.confirmPassword")}</Label>
              <Input id="confirm" type="password" value={form.confirmPassword} onChange={e => setForm({...form, confirmPassword: e.target.value})} placeholder={t("signup.confirmPlaceholder")} />
              {errors.confirmPassword && <p className="mt-1 text-xs text-destructive">{errors.confirmPassword}</p>}
            </div>
            <div>
              <Label>{t("signup.preferredLanguage")}</Label>
              <Select value={form.language} onValueChange={v => setForm({...form, language: v})}>
                <SelectTrigger><SelectValue placeholder={t("signup.selectLanguage")} /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="english">{t("common.english")}</SelectItem>
                  <SelectItem value="hindi">{t("common.hindi")}</SelectItem>
                  <SelectItem value="marathi">{t("common.marathi")}</SelectItem>
                </SelectContent>
              </Select>
              {errors.language && <p className="mt-1 text-xs text-destructive">{errors.language}</p>}
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? t("signup.creatingAccount") : t("signup.createAccount")}
            </Button>
          </form>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            {t("signup.alreadyHaveAccount")} <Link to="/login" className="font-medium text-primary hover:underline">{t("common.login")}</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
