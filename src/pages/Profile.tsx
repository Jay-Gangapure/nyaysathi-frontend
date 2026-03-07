import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Lock, Globe, LogOut } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const Profile = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("Demo User");
  const [language, setLanguage] = useState("english");
  const [currentPw, setCurrentPw] = useState("");
  const [newPw, setNewPw] = useState("");

  const handleSave = () => { toast.success("Profile updated successfully!"); };
  const handleChangePw = () => {
    if (!currentPw || !newPw) { toast.error("Please fill both fields"); return; }
    toast.success("Password changed!");
    setCurrentPw("");
    setNewPw("");
  };

  return (
    <DashboardLayout>
      <h1 className="mb-6 font-display text-2xl font-bold text-foreground">Profile Settings</h1>
      <div className="max-w-2xl space-y-6">
        <div className="rounded-xl border border-border bg-card p-6 shadow-card">
          <div className="mb-4 flex items-center gap-2">
            <User className="h-4 w-4 text-muted-foreground" />
            <h3 className="font-semibold text-card-foreground">Personal Information</h3>
          </div>
          <div className="space-y-4">
            <div><Label>Full Name</Label><Input value={name} onChange={e => setName(e.target.value)} /></div>
            <div>
              <Label className="flex items-center gap-2"><Globe className="h-3 w-3" /> Preferred Language</Label>
              <Select value={language} onValueChange={setLanguage}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="english">English</SelectItem>
                  <SelectItem value="hindi">Hindi</SelectItem>
                  <SelectItem value="marathi">Marathi</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button onClick={handleSave}>Save Changes</Button>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-card p-6 shadow-card">
          <div className="mb-4 flex items-center gap-2">
            <Lock className="h-4 w-4 text-muted-foreground" />
            <h3 className="font-semibold text-card-foreground">Change Password</h3>
          </div>
          <div className="space-y-4">
            <div><Label>Current Password</Label><Input type="password" value={currentPw} onChange={e => setCurrentPw(e.target.value)} /></div>
            <div><Label>New Password</Label><Input type="password" value={newPw} onChange={e => setNewPw(e.target.value)} /></div>
            <Button variant="outline" onClick={handleChangePw}>Update Password</Button>
          </div>
        </div>

        <Button variant="destructive" onClick={() => navigate("/login")} className="gap-2">
          <LogOut className="h-4 w-4" /> Logout
        </Button>
      </div>
    </DashboardLayout>
  );
};

export default Profile;
