import { skillGroups } from "../../data/skills";
import "./Skills.css";

export default function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="section-label">
        <span>{String(skillGroups.length).padStart(2, "0")}</span>
        {" / MY TOOLKIT"}
      </div>

      <div className="section-heading skills-heading">
        <div>
          <h2>
            Technologies
            <br />
            <span>I work with.</span>
          </h2>
        </div>

        <p>
          A collection of technologies and tools I use to
          design, develop, and build modern software solutions.
        </p>
      </div>

      <div className="skill-groups">
        {skillGroups.map((group, index) => (
          <article className="skill-group" key={group.title}>
            <div className="skill-group-header">
              <span className="skill-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="skill-count">
                {String(group.skills.length).padStart(2, "0")} SKILLS
              </span>
            </div>

            <h3>{group.title}</h3>

            <div className="skill-divider" />

            <div className="skill-list">
              {group.skills.map((skill) => (
                <span className="skill-tag" key={skill}>
                  <span className="skill-dot" />
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="skills-footer">
        <span className="skills-status-dot" />
        Always learning. Always building.
      </div>
    </section>
  );
}
