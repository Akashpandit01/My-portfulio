import "../styles/projects.css";
import dalypulse1 from "../assets/tech/dalypulse1.png";
import voluntirehub from "../assets/tech/voluntirehub.png";

function Projects() {
  return (
    <section className="projects fade-in" id="projects">
      <div className="section-heading">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
          Beautifully crafted full-stack & frontend projects based on real-world needs.
        </p>
      </div>

      <div className="project-grid">

        {/* PROJECT 1 */}
        <div className="project-card premium-card" data-tilt>
          <div className="project-image">
            <img src={dalypulse1} alt="DailyPulse" />
          </div>

          <span className="project-tag">FULL STACK</span> 

          <h3 className="project-title">DailyPulse – Habit Tracking App</h3>

          <div className="tech-list">
            <span>React</span><span>Node.js</span><span>Express.js
</span><span>Tailwind CSS</span> <span>JWT</span> <span>MongoDB</span>
          </div>

          <p className="project-desc">
            A modern habit tracking app with mood analytics, streak counters, cloud sync & auth.
          </p>

          <div className="project-actions">
            <a href="https://github.com/mrpawarGit/DailyPulse-Frontend" target="_blank" className="btn-outline">GitHub</a>
            <a href="https://daily-pulse-app.vercel.app/" target="_blank" className="btn-primary">Live Demo</a>
          </div>
        </div>

        {/* PROJECT 2 */}
        <div className="project-card premium-card" data-tilt>
          <div className="project-image">
            <img src={voluntirehub} alt="VolunteerHub" />
          </div>

          <span className="project-tag">FRONTEND + FIREBASE</span>

          <h3 className="project-title">VolunteerHub – Volunteer Management Platform</h3>

          <div className="tech-list">
            <span>HTML</span><span>CSS</span><span>JavaScript</span><span>Bootstrap</span><span>Firebase</span>
          </div>

          <p className="project-desc">
            A platform connecting volunteers with NGOs — secure login, dashboards & real-time sync.
          </p>

          <div className="project-actions">
            <a href="https://github.com/Akashpandit01/Voluntier-Hub" target="_blank" className="btn-outline">GitHub</a>
            <a href="https://prismatic-gumption-0874a1.netlify.app/" target="_blank" className="btn-primary">Live Demo</a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;
