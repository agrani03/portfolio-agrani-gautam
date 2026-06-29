export interface EducationEntry {
  dateRange: string;
  degree: string;
  institution: string;
  note?: string;
  isCurrent: boolean;
}

export const education: EducationEntry[] = [
  {
    dateRange: "2024–Present",
    degree: "Bachelor of Technology",
    institution: "Acropolis Institute of Technology and Research",
    isCurrent: true,
  },
  {
    dateRange: "2021–2023",
    degree: "Higher Secondary Education",
    institution: "APS Lucknow",
    isCurrent: false,
  },
  {
    dateRange: "2019–2021",
    degree: "Secondary Education",
    institution: "APS Lucknow",
    isCurrent: false,
  },
];
