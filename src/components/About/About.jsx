
import { profile } from "../../data/profile";
import "./About.css";

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="section-label">01 / ABOUT ME</div>

      <div className="about-content">

        <div className="about-image">
          <img
            src="/img/profile/profile.jpg"
            alt="Profile of Fluk Anipat"
          />
          <span className="about-image-caption">
            DEVELOPER / CREATIVE THINKER
          </span>
        </div>

        <div className="about-text">
          <h2>
            About Me
            <br />
            <span>Builder's mindset.</span>
          </h2>

          <div className="about-description">
            <p>
              Hello! My name is <strong>{profile.name}</strong>,
              but you can call me <strong>{profile.nickname}</strong>.
              I am {profile.age} years old and currently pursuing a degree in
              {` ${profile.major}`} at {profile.university}.
            </p>

            <p>
              I am passionate about Web Application Development,
              specializing in both Frontend and Backend technologies.
              I enjoy learning new programming languages and
              applying different technologies to build software solutions.
            </p>

            <p>
              I focus on creating practical, efficient, and
              user-friendly applications that solve real-world problems
              and deliver meaningful user experiences.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
