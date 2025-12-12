import "../styles/home.css";
import myphoto from "../assets/myphoto.jpg";
import resume from "../assets/Akash-Pandit.pdf";

export default function Home() {

  // 1️⃣ Download Only Function
  const handleDownload = () => {
    fetch(resume)
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "Akash-Pandit-Resume.pdf";
        link.click();
        window.URL.revokeObjectURL(url);
      });
  };

  // 2️⃣ Open in New Tab + Auto Download Function
  const handleOpenAndDownload = (e) => {
    e.preventDefault(); // prevent default <a> behavior

    // Step 1: Open PDF in a new tab
    window.open(resume, "_blank");

    // Step 2: Trigger download
    fetch(resume)
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "Akash-Pandit-Resume.pdf";
        link.click();
        window.URL.revokeObjectURL(url);
      });
  };

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
              industry-level projects involving web app development, analytics
              dashboards, authentication, and database-driven systems.
            </p>

            <p>
              I am passionate about clean code, continuous learning, and creating
              smooth user experiences using modern development practices.
            </p>
          </div>

          <div className="hero-buttons">

            {/* 🔹 Download ONLY */}
            <button className="btn-primary" onClick={handleOpenAndDownload}>
              Download Resume
            </button>

            
            <a href="#projects" className="btn-outline">View Projects</a>

           
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
