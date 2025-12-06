import React from "react";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} Akash Pandit. All rights reserved.</p>
        <div className="footer-links">
          <a href="https://github.com/Akashpandit01" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/akash-pandit-aa987b1aa/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:akashpandit3052@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
}
