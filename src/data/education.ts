export interface EducationEntry {
  dateRange: string;
  degree: string;
  institution: string;
  note?: string;
  isCurrent: boolean;
}

export const education: EducationEntry[] = [
  {
    dateRange: "2021–2025",
    degree: "Bachelor of Technology in Computer Science",
    institution: "University Name",
    note: "CGPA: 8.5/10",
    isCurrent: true,
  },
  {
    dateRange: "2019–2021",
    degree: "Higher Secondary Education",
    institution: "College Name",
    note: "Science stream — 92%",
    isCurrent: false,
  },
  {
    dateRange: "2017–2019",
    degree: "Secondary Education",
    institution: "School Name",
    note: "90%",
    isCurrent: false,
  },
];
