import "../styles/home.css";
import myphoto from "../assets/myphoto.jpg";
import resume from "../assets/akashpandit0105.pdf"

export default function Home() {
  return (
    <section className="home-section" id="home">
      <div className="home-card premium-glass">

        <div className="hero-text">
          <p className="hero-hello">Hi, I'm</p>

          <h1 className="hero-name gradient-text">Akash Pandit</h1>

          <p className="hero-role">Aspiring Full-Stack / Java Developer</p>

          <div className="hero-about">
            <p>
              I am an aspiring Full Stack Developer with hands-on experience in
              React.js, JavaScript, Node.js, REST APIs, and modern frontend
              tools. I enjoy solving real-world problems and building scalable,
              user-friendly applications.
            </p>

            <p>
              I hold a B.E. in Computer Engineering and have worked on multiple
              industry-level projects involving full-stack development,
              analytics dashboards, authentication, and database-driven systems.
            </p>

            <p>
              I am passionate about clean code, continuous learning, and creating
              smooth user experiences using modern development practices.
            </p>
          </div>

          <div className="hero-buttons">
            <a   href={resume}   className="btn-primary"   target="_blank"
  rel="noreferrer" download>
  Download Resume
</a>

            <a href="/projects" className="btn-outline">View Projects</a>
          </div>
        </div>

        <div className="hero-image-container">
          <div className="image-glow premium-image">
            <img src={myphoto} alt="Akash Pandit" className="hero-image" />
          </div>
        </div>
      </div>
    </section>
  );
}
