export interface Skill {
  name: string;
  weight?: "normal" | "large";
}

export const technicalSkills: Skill[] = [
  { name: "HTML", weight: "large" },
  { name: "CSS", weight: "large" },
  { name: "JavaScript", weight: "large" },
  { name: "TypeScript" },
  { name: "React", weight: "large" },
  { name: "Node.js", weight: "large" },
  { name: "SQL" },
  { name: "Tailwind CSS" },
  { name: "Git" },
  { name: "GitHub" },
];

export const softSkills: Skill[] = [
  { name: "Problem Solving", weight: "large" },
  { name: "Communication" },
  { name: "Teamwork" },
  { name: "Time Management" },
  { name: "Adaptability" },
  { name: "Creativity" },
  { name: "Leadership" },
  { name: "Attention to Detail" },
  { name: "Critical Thinking" },
];
