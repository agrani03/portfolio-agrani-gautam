export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured online store with real-time inventory management, secure payment processing, and an intuitive admin dashboard.",
    image: "/images/projects/project1.png",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/agrani/ecommerce",
    featured: true,
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task tracker with drag-and-drop boards, real-time updates, and team workspace support.",
    image: "/images/projects/project2.png",
    tags: ["Next.js", "TypeScript", "Firebase"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/agrani/taskapp",
  },
  {
    title: "Weather Dashboard",
    description:
      "A sleek weather app with location-based forecasts, interactive maps, and 7-day predictions using OpenWeather API.",
    image: "/images/projects/project3.png",
    tags: ["React", "Tailwind CSS", "REST API"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/agrani/weather",
  },
  {
    title: "Portfolio Website",
    description:
      "A minimal, editorial-style developer portfolio built with React, TypeScript, and Tailwind CSS.",
    image: "/images/projects/project4.png",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/agrani/portfolio",
  },
];
