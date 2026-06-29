export interface Achievement {
  icon: "Trophy" | "Star" | "Code2" | "Medal";
  title: string;
  description: string;
}

export const achievements: Achievement[] = [
  {
    icon: "Trophy",
    title: "Runner Up — YANTRIKA 2026",
    description: "Secured 2nd place at YANTRIKA 2026.",
  },
];
