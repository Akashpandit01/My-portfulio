// src/pages/Resume.jsx
import "../styles/resume.css";

export default function Resume() {
  return (
    <section className="resume-section" id="resume">

      {/* Heading */}
      <div className="resume-heading">
        <h2 className="gradient-text">My Resume</h2>
        <p>A detailed overview of my journey, skills, education, and projects</p>

        {/* ⭐ DOWNLOAD BUTTON */}
        {/* <a
          href="https://drive.google.com/file/d/1HyC2XzGPaTYTHjyrCdCiL03tDp3EVW65/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="download-btn"
        >
          ⬇️ Download Resume
        </a> */}
      </div>

      <div className="resume-wrapper">
        {/* LEFT PANEL */}
        <aside className="resume-left glass-card fade-up">

          <div className="profile-box">
            <h2 className="name">Akash Pandit</h2>
            <p className="role">Full Stack Developer</p>

            <div className="contact-info">
              <p><strong>Email:</strong> akashpandit3052@gmail.com</p>
              <p><strong>Phone:</strong> +91 8550959295</p>
              <p><strong>Location:</strong> Pune, Maharashtra</p>
            </div>

            <div className="resume-links">
              <a href="https://www.linkedin.com/in/akash-pandit-aa987b1aa/" target="_blank">LinkedIn</a>
              <a href="https://github.com/Akashpandit01" target="_blank">GitHub</a>
            </div>
          </div>

          <div className="skills-section">
            <h3>Skills</h3>
            <div className="skills-grid">
              <p>JavaScript</p>
              <p>React.js</p>
              <p>Node.js</p>
              <p>Express.js</p>
              <p>Java</p>
              <p>MySQL</p>
              <p>MongoDB</p>
              <p>Firebase</p>
              <p>Git</p>
              <p>REST API</p>
              <p>HTML / CSS</p>
              <p>Tailwind / Bootstrap</p>
            </div>
          </div>
        </aside>

        {/* RIGHT SIDE */}
        <main className="resume-right">
          {/* SUMMARY */}
          <div className="resume-card glass-card fade-up">
            <h3 className="card-title">Summary</h3>
            <p>
              Passionate Full Stack Developer skilled in React.js, JavaScript, Node.js,
              Firebase, and REST APIs. Strong ability to build user-friendly and scalable
              applications with modern technologies.
            </p>
          </div>

          {/* EDUCATION */}
          <div className="resume-card glass-card fade-up">
            <h3 className="card-title">Education</h3>

            <div className="timeline">
              <div className="timeline-item">
                <div className="circle"></div>
                <div className="timeline-content">
                  <h4>Masai School</h4>
                  <span>2024 – Present</span>
                  <p>Full Stack Web Development (Bengaluru)</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="circle"></div>
                <div className="timeline-content">
                  <h4>Shree Chhatrapati Shivajiraje College of Engineering</h4>
                  <span>2019 – 2023</span>
                  <p>B.E Computer Engineering — CGPA: 7.41</p>
                </div>
              </div>
            </div>
          </div>

          {/* PROJECTS */}
          <div className="resume-card glass-card fade-up">
            <h3 className="card-title">Projects</h3>

            <div className="timeline">
              <div className="timeline-item">
                <div className="circle"></div>
                <div className="timeline-content">
                  <h4>DailyPulse – Habit Tracking App</h4>
                  <p><strong>Tech:</strong> React.js, TypeScript, Firebase, Tailwind</p>
                  <ul>
                    <li>User dashboard with analytics & insights.</li>
                    <li>Cloud sync with Firebase Auth.</li>
                    <li>Dark/light mode and animations.</li>
                  </ul>
                </div>
              </div>

              <div className="timeline-item">
                <div className="circle"></div>
                <div className="timeline-content">
                  <h4>VolunteerHub – Volunteer Management Platform</h4>
                  <p><strong>Tech:</strong> JavaScript, Firebase, Bootstrap</p>
                  <ul>
                    <li>Real-time volunteer & NGO matching.</li>
                    <li>Admin dashboard & activity tracking.</li>
                  </ul>
                </div>
              </div>

              <div className="timeline-item">
                <div className="circle"></div>
                <div className="timeline-content">
                  <h4>Hospital Management System</h4>
                  <p><strong>Tech:</strong> Java, JSP, Servlets, MySQL</p>
                  <ul>
                    <li>Appointment, patient records & admin login.</li>
                  </ul>
                </div>
              </div>

              <div className="timeline-item">
                <div className="circle"></div>
                <div className="timeline-content">
                  <h4>Academic Certificate Verification System</h4>
                  <p><strong>Tech:</strong> JSP, Servlet, MySQL</p>
                  <ul>
                    <li>Certificate generation & verification using unique ID.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* CERTIFICATION */}
          <div className="resume-card glass-card fade-up">
            <h3 className="card-title">Certifications</h3>
            <p>Java Full Stack Certification – Giri’s Tech Hub</p>
          </div>

          {/* Activities */}
          <div className="resume-card glass-card fade-up">
            <h3 className="card-title">Extracurricular Activities</h3>
            <ul>
              <li>Top 3 in Masai Hackathon with NoBroker.</li>
            </ul>
          </div>

        </main>
      </div>
    </section>
  );
}
