import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const languages = [
  { code: "en", label: "English" },
  { code: "hi", label: "हिंदी" },
  { code: "mr", label: "मराठी" },
];

interface LanguageSwitcherProps {
  compact?: boolean;
}

const LanguageSwitcher = ({ compact }: LanguageSwitcherProps) => {
  const { i18n } = useTranslation();

  return (
    <div className="flex items-center gap-2">
      {!compact && <Globe className="h-4 w-4 text-muted-foreground" />}
      <Select value={i18n.language?.substring(0, 2) || "en"} onValueChange={(v) => i18n.changeLanguage(v)}>
        <SelectTrigger className={compact ? "h-8 w-[100px] text-xs" : "h-9 w-[120px] text-sm"}>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {languages.map((lang) => (
            <SelectItem key={lang.code} value={lang.code}>
              {lang.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageSwitcher;
