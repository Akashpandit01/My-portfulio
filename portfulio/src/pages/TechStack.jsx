import "../styles/tech.css";

import htmlLogo from "../assets/tech/html.png";
import cssLogo from "../assets/tech/css.png";
import jsLogo from "../assets/tech/javascript.png";
import reactLogo from "../assets/tech/react.png";
import bootstrapLogo from "../assets/tech/bootstrap.jpeg";
import tailwindLogo from "../assets/tech/tailwind.png";

import javaLogo from "../assets/tech/java.png";
import springLogo from "../assets/tech/spring.png";
import nodeLogo from "../assets/tech/node.png";

import mysqlLogo from "../assets/tech/mysql.png";
import mongodbLogo from "../assets/tech/mongodb.png";
import firebaseLogo from "../assets/tech/firebase.png";

import gitLogo from "../assets/tech/git.png";
import postmanLogo from "../assets/tech/postman.png";
import vscodeLogo from "../assets/tech/vscode.jpeg";

export default function TechStack() {
  const technologies = [
    {
      name: "React.js",
      desc: "Building dynamic and interactive UI components",
      logo: reactLogo,
    },
    {
      name: "Node.js",
      desc: "Server-side JavaScript runtime for scalable apps",
      logo: nodeLogo,
    },
    {
      name: "Express.js",
      desc: "Backend framework for APIs and middleware",
      logo: nodeLogo,
    },
    {
      name: "MongoDB",
      desc: "Flexible NoSQL database for modern applications",
      logo: mongodbLogo,
    },
    {
      name: "Firebase",
      desc: "Real-time database and authentication services",
      logo: firebaseLogo,
    },
    {
      name: "MySQL",
      desc: "Relational database management using SQL",
      logo: mysqlLogo,
    },
    {
      name: "Java",
      desc: "Object-oriented backend applications",
      logo: javaLogo,
    },
    {
      name: "CSS",
      desc: "Styling and creating visually appealing layouts",
      logo: cssLogo,
    },
    {
      name: "HTML",
      desc: "Structuring web pages with semantic markup",
      logo: htmlLogo,
    },
    {
      name: "JavaScript",
      desc: "Writing modern and interactive web applications",
      logo: jsLogo,
    },
    {
      name: "Tailwind CSS",
      desc: "Utility-first CSS framework for fast UI design",
      logo: tailwindLogo,
    },
    {
      name: "Bootstrap",
      desc: "Prebuilt component library for responsive pages",
      logo: bootstrapLogo,
    },
    {
      name: "TypeScript",
      desc: "Static typing for more robust JavaScript apps",
      logo: jsLogo,
    },
    {
      name: "Git",
      desc: "Version control for managing code changes",
      logo: gitLogo,
    },
  ];

  return (
    <section className="skill-section">
      <h2 className="title">Tech Stack</h2>

      <div className="tech-grid">
        {technologies.map((t, i) => (
          <div className="tech-card" key={i}>
            <img src={t.logo} alt={t.name} className="tech-icon" />

            <div className="tech-info">
              <h3>{t.name}</h3>
              <p>{t.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
