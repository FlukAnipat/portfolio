
import "./Navbar.css";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  return (
    <header className="navbar">
      <nav className="nav-container">
        <a href="#home" className="nav-logo">
          FLUK<span>.</span>
        </a>

        <div className="nav-links">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href}>
              {link.name}
            </a>
          ))}
        </div>

        <a href="#contact" className="nav-cta">
          Let's Talk <span>↗</span>
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
