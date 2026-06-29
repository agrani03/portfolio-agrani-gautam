import type { Skill } from "../../data/skills";

interface TagProps {
  skill: Skill;
}

export default function Tag({ skill }: TagProps) {
  return (
    <span
      className={`inline-flex items-center border border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)] rounded-full cursor-default hover:bg-[var(--text-primary)] hover:text-[var(--bg)] transition-colors duration-200 ${
        skill.weight === "large" ? "px-5 py-2 text-sm font-medium" : "px-4 py-1.5 text-xs"
      }`}
    >
      {skill.name}
    </span>
  );
}
