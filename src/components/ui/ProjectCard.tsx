import { ExternalLink, Github } from "lucide-react";
import type { Project } from "../../data/projects";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export default function ProjectCard({ project, featured }: ProjectCardProps) {
  return (
    <div
      className={`group relative flex flex-col rounded-xl border border-[var(--border)] bg-[var(--surface)] overflow-hidden hover:border-[var(--accent)] hover:shadow-md transition-all duration-300 hover:-translate-y-1 ${
        featured ? "lg:flex-row" : ""
      }`}
    >
      {/* Image */}
      <div
        className={`relative overflow-hidden bg-[var(--border)] ${
          featured ? "lg:w-1/2 h-48 lg:h-auto" : "h-48"
        }`}
      >
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            width={600}
            height={300}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-[var(--text-muted)] text-sm">
            Project Preview
          </div>
        )}

        {/* Featured badge */}
        {featured && (
          <span className="absolute top-3 left-3 px-3 py-1 text-[10px] uppercase tracking-wider font-semibold rounded-full bg-[var(--accent)] text-[#111111]">
            Featured
          </span>
        )}
      </div>

      {/* Content */}
      <div className={`flex flex-col flex-1 p-5 ${featured ? "lg:p-8 lg:justify-center" : ""}`}>
        <h3 className={`font-semibold text-[var(--text-primary)] mb-2 ${featured ? "text-xl" : "text-lg"}`}>
          {project.title}
        </h3>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] px-2.5 py-1 rounded-full border border-[var(--accent)]/30 text-[var(--text-secondary)] bg-[var(--accent)]/5"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 pt-2 border-t border-[var(--border)]">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--text-primary)] hover:text-[var(--accent-hover)] transition-colors"
            >
              View project
              <ExternalLink size={14} />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors ml-auto"
              aria-label={`${project.title} on GitHub`}
            >
              <Github size={16} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
