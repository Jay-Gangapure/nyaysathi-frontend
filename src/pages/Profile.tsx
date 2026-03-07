import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Lock, Globe, LogOut } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";

const Profile = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [name, setName] = useState("Demo User");
  const [language, setLanguage] = useState(i18n.language?.substring(0, 2) || "en");
  const [currentPw, setCurrentPw] = useState("");
  const [newPw, setNewPw] = useState("");

  const handleSave = () => {
    i18n.changeLanguage(language);
    toast.success(t("profile.profileUpdated"));
  };

  const handleChangePw = () => {
    if (!currentPw || !newPw) { toast.error(t("profile.fillBothFields")); return; }
    toast.success(t("profile.passwordChanged"));
    setCurrentPw("");
    setNewPw("");
  };

  return (
    <DashboardLayout>
      <h1 className="mb-6 font-display text-2xl font-bold text-foreground">{t("profile.title")}</h1>
      <div className="max-w-2xl space-y-6">
        <div className="rounded-xl border border-border bg-card p-6 shadow-card">
          <div className="mb-4 flex items-center gap-2">
            <User className="h-4 w-4 text-muted-foreground" />
            <h3 className="font-semibold text-card-foreground">{t("profile.personalInfo")}</h3>
          </div>
          <div className="space-y-4">
            <div><Label>{t("profile.fullName")}</Label><Input value={name} onChange={e => setName(e.target.value)} /></div>
            <div>
              <Label className="flex items-center gap-2"><Globe className="h-3 w-3" /> {t("profile.preferredLanguage")}</Label>
              <Select value={language} onValueChange={setLanguage}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">{t("common.english")}</SelectItem>
                  <SelectItem value="hi">{t("common.hindi")}</SelectItem>
                  <SelectItem value="mr">{t("common.marathi")}</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button onClick={handleSave}>{t("common.save")}</Button>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-card p-6 shadow-card">
          <div className="mb-4 flex items-center gap-2">
            <Lock className="h-4 w-4 text-muted-foreground" />
            <h3 className="font-semibold text-card-foreground">{t("profile.changePassword")}</h3>
          </div>
          <div className="space-y-4">
            <div><Label>{t("profile.currentPassword")}</Label><Input type="password" value={currentPw} onChange={e => setCurrentPw(e.target.value)} /></div>
            <div><Label>{t("profile.newPassword")}</Label><Input type="password" value={newPw} onChange={e => setNewPw(e.target.value)} /></div>
            <Button variant="outline" onClick={handleChangePw}>{t("profile.updatePassword")}</Button>
          </div>
        </div>

        <Button variant="destructive" onClick={() => navigate("/login")} className="gap-2">
          <LogOut className="h-4 w-4" /> {t("common.logout")}
        </Button>
      </div>
    </DashboardLayout>
  );
};

export default Profile;
