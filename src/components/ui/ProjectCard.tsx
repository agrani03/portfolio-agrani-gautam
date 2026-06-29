import { ExternalLink } from "lucide-react";
import type { Project } from "../../data/projects";

function GitHubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

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
              <GitHubIcon size={16} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
