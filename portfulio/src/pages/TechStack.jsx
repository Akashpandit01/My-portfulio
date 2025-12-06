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
    { name: "HTML", logo: htmlLogo },
    { name: "CSS", logo: cssLogo },
    { name: "JavaScript", logo: jsLogo },
    { name: "React.js", logo: reactLogo },
    { name: "Bootstrap", logo: bootstrapLogo },
    { name: "Tailwind CSS", logo: tailwindLogo },

    { name: "Java", logo: javaLogo },
    { name: "Spring Boot", logo: springLogo },
    { name: "Node.js", logo: nodeLogo },

    { name: "MySQL", logo: mysqlLogo },
    { name: "MongoDB", logo: mongodbLogo },
    { name: "Firebase", logo: firebaseLogo },

    { name: "Git & GitHub", logo: gitLogo },
    { name: "Postman", logo: postmanLogo },
    { name: "VS Code", logo: vscodeLogo },
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="skills-header">
        <h2 className="skills-title">Technology Stack</h2>
        <p className="skills-subtitle">
          Tools that I use to code, build and implement
        </p>
      </div>

      <div className="skills-grid">
        {technologies.map((tech, index) => (
          <div key={index} className="skill-card fade-in-up">
            <div className="skill-icon-wrap">
              <img src={tech.logo} alt={tech.name} className="skill-icon" />
            </div>
            <p className="skill-name">{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
