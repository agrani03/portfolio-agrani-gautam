import { Clock, Briefcase, Cpu, ThumbsUp, type LucideIcon } from "lucide-react";
import { useCountUp } from "../../hooks/useCountUp";

const iconMap: Record<string, LucideIcon> = {
  Clock,
  Briefcase,
  Cpu,
  ThumbsUp,
};

interface StatCardProps {
  icon: string;
  value: number;
  suffix?: string;
  label: string;
  isVisible: boolean;
}

export default function StatCard({ icon, value, suffix, label, isVisible }: StatCardProps) {
  const count = useCountUp(value, isVisible);
  const Icon = iconMap[icon] || Briefcase;

  return (
    <div className="flex flex-col items-center p-6 rounded-xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)] transition-colors">
      <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 bg-[var(--accent)]/20">
        <Icon size={20} className="text-[var(--accent-hover)]" />
      </div>
      <span className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)]">
        {count}
        {suffix && <span className="text-[var(--accent-hover)]">{suffix}</span>}
      </span>
      <span className="text-xs text-[var(--text-muted)] mt-1 text-center">{label}</span>
    </div>
  );
}
