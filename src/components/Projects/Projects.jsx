
import { projects } from "../../data/projects";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="section-label">
        <span>{String(projects.length).padStart(2, "0")}</span>
        {" / SELECTED WORK"}
      </div>

      <div className="section-heading">
        <h2>
          Featured
          <br />
          <span>Projects.</span>
        </h2>

        <p>ผลงานการพัฒนาเว็บไซต์และระบบซอฟต์แวร์</p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index + 1}
          />
        ))}
      </div>
    </section>
  );
}
