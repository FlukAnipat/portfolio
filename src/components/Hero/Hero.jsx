
import { profile } from "../../data/profile";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">

        <div className="hero-status">
          <span className="status-dot" />
          AVAILABLE FOR OPPORTUNITIES
        </div>

        <h1>
          Hi, I'm
          <span> {profile.nickname}.</span>
          <br />
          I build digital
          <br />
          <em>experiences.</em>
        </h1>

        <p>{profile.description}</p>

        <div className="hero-actions">
          <a href="#projects" className="btn-primary">
            Explore Projects ↗
          </a>

          <a href="#contact" className="btn-outline">
            Contact Me
          </a>
        </div>

        <div className="hero-meta">
          <span>COMPUTER SCIENCE</span>
          <span>AGE {profile.age}</span>
          <span>{profile.location.toUpperCase()}</span>
        </div>

      </div>

      <div className="hero-code">
        <div className="code-header">
          <span className="red" />
          <span className="yellow" />
          <span className="green" />
          <small>developer.jsx</small>
        </div>

        <pre>
          <code>
{`const developer = {
  name: "${profile.name}",
  role: "${profile.role}",
  passion: "Building ideas"
};

while (learning) {
  buildSomething();
}`}
          </code>
        </pre>
      </div>
    </section>
  );
}
