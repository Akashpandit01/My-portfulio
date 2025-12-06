import { useState } from "react";
import { Link } from "react-scroll";
import "../styles/navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="nav-wrapper">
      <div className="nav-container">

        {/* Logo */}
        <div className="nav-logo">
          <span className="logo-circle">AP</span>
          <span className="logo-text">Akash Pandit</span>
        </div>

        {/* Hamburger */}
        <div
          className={`hamburger ${open ? "active" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Menu */}
        <nav className={`nav-links ${open ? "open" : ""}`}>
          <Link to="home" smooth duration={500} offset={-70} onClick={closeMenu}>
            Home
          </Link>
          <Link to="projects" smooth duration={500} offset={-70} onClick={closeMenu}>
            Projects
          </Link>
          <Link to="skills" smooth duration={500} offset={-70} onClick={closeMenu}>
            Skills
          </Link>
          <Link to="contact" smooth duration={500} offset={-70} onClick={closeMenu}>
            Contact
          </Link>

          <a href="#resume" className="resume-btn" onClick={closeMenu}>
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
