
export default function ProjectCard({ project, index }) {
  if (!project) return null;

  const hasLiveUrl = Boolean(project.liveUrl);

  const cardContent = (
    <>
      <div className="project-image">
        {project.image ? (
          <img
            src={project.image}
            alt={project.name}
            loading="lazy"
          />
        ) : (
          <div className="project-placeholder">
            PROJECT
          </div>
        )}

        {project.featured && (
          <span className="featured-tag">
            FEATURED
          </span>
        )}
      </div>

      <div className="project-body">
        <span className="project-category">
          {String(index).padStart(2, "0")} / {project.category}
        </span>

        <h3>{project.name}</h3>

        <p>{project.description}</p>

        <div className="project-technologies">
          {project.technologies?.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        <div className="project-actions">
          {hasLiveUrl && (
            <span className="project-live-link">
              Live Demo ↗
            </span>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              GitHub ↗
            </a>
          )}
        </div>
      </div>
    </>
  );

  return hasLiveUrl ? (
    <a
      href={project.liveUrl}
      className="project-card"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View ${project.name}`}
    >
      {cardContent}
    </a>
  ) : (
    <article className="project-card">
      {cardContent}
    </article>
  );
}
