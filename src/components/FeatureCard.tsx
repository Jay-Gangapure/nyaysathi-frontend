import { type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
  onClick?: () => void;
}

const FeatureCard = ({ icon: Icon, title, description, delay = 0, onClick }: FeatureCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -4 }}
    onClick={onClick}
    className="group cursor-pointer rounded-xl border border-border bg-card p-6 shadow-card transition-shadow duration-300 hover:shadow-card-hover"
  >
    <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
      <Icon className="h-6 w-6 text-primary" />
    </div>
    <h3 className="mb-2 font-display text-lg font-semibold text-card-foreground">{title}</h3>
    <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
  </motion.div>
);

export default FeatureCard;
