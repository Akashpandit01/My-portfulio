import { useState } from "react";
import { Link } from "react-scroll";
import "../styles/navbar.css";
import resume from "../assets/Akash-Pandit.pdf";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  // Open Resume in new tab + auto-download
  const handleOpenAndDownload = (e) => {
    e.preventDefault();
    closeMenu();

    // 1. Open resume in new tab
    window.open(resume, "_blank");

    // 2. Auto download
    fetch(resume)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "Akash-Pandit-Resume.pdf";
        link.click();
        window.URL.revokeObjectURL(url);
      });
  };

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

          {/* Resume Button — Open + Download */}
          <a
            href="#"
            className="resume-btn"
            onClick={handleOpenAndDownload}
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
