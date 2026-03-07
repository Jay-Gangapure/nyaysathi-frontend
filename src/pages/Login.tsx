import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Scale, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Login = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) { toast.error(t("login.fillAll")); return; }
    setLoading(true);
    await new Promise(r => setTimeout(r, 1000));
    toast.success(t("login.welcomeToast"));
    navigate("/dashboard");
    setLoading(false);
  };

  return (
    <div className="flex min-h-screen">
      <div className="hidden w-1/2 gradient-primary lg:flex lg:flex-col lg:items-center lg:justify-center lg:p-12">
        <Scale className="mb-6 h-16 w-16 text-primary-foreground" />
        <h2 className="font-display text-3xl font-bold text-primary-foreground">{t("login.welcomeBack")}</h2>
        <p className="mt-3 max-w-sm text-center text-primary-foreground/80">{t("login.welcomeSubtitle")}</p>
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
          <h1 className="font-display text-2xl font-bold text-foreground">{t("login.title")}</h1>
          <p className="mt-1 text-sm text-muted-foreground">{t("login.subtitle")}</p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <div>
              <Label htmlFor="email">{t("login.email")}</Label>
              <Input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" />
            </div>
            <div>
              <Label htmlFor="password">{t("login.password")}</Label>
              <div className="relative">
                <Input id="password" type={showPw ? "text" : "password"} value={password} onChange={e => setPassword(e.target.value)} placeholder="Enter password" />
                <button type="button" onClick={() => setShowPw(!showPw)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                  {showPw ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Checkbox id="remember" checked={remember} onCheckedChange={(c) => setRemember(c === true)} />
                <Label htmlFor="remember" className="text-sm font-normal">{t("login.rememberMe")}</Label>
              </div>
              <button type="button" className="text-sm font-medium text-primary hover:underline">{t("login.forgotPassword")}</button>
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? t("login.loggingIn") : t("login.loginButton")}
            </Button>
          </form>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            {t("login.noAccount")} <Link to="/signup" className="font-medium text-primary hover:underline">{t("common.signup")}</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
