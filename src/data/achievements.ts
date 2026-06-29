export interface Achievement {
  icon: "Trophy" | "Star" | "Code2" | "Medal";
  title: string;
  description: string;
}

export const achievements: Achievement[] = [
  {
    icon: "Trophy",
    title: "Hackathon Winner",
    description: "Won 1st place at XYZ Hackathon 2024.",
  },
  {
    icon: "Star",
    title: "Open Source Contributor",
    description: "Contributed to multiple open-source projects with 50+ merged PRs.",
  },
  {
    icon: "Code2",
    title: "500+ DSA Problems",
    description: "Solved 500+ problems across LeetCode, Codeforces, and HackerRank.",
  },
  {
    icon: "Medal",
    title: "Dean's List",
    description: "Recognized for academic excellence across 4 consecutive semesters.",
  },
];
