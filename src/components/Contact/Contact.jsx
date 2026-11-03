
import { profile } from "../../data/profile";
import "./Contact.css";

export default function Contact() {
  const { email, social } = profile;
  const gmailCompose = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${encodeURIComponent(email)}`;
  
  return (
    <section className="contact section" id="contact">
      <div className="contact-container">

        <div className="section-label">
          CONTACT
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h2>
              Let's work
              <br />
              <span>together.</span>
            </h2>

            <p className="contact-description">
              สนใจร่วมงานหรือพูดคุยเกี่ยวกับโปรเจกต์
              สามารถติดต่อผมได้เลยครับ
            </p>

            <a
              href={gmailCompose}
              className="contact-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get In Touch <span>↗</span>
            </a>
          </div>

          <div className="contact-links">

            <a
              href={gmailCompose}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Email</span>
              <span>↗</span>
            </a>

            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>GitHub</span>
              <span>↗</span>
            </a>

            <a
              href={social.gitlab}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>GitLab</span>
              <span>↗</span>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}
