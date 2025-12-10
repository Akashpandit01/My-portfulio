import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import TechStack from "./pages/TechStack";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";


export default function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-out-cubic" });
  }, []);

  return (
    <>
      <ScrollProgress />
      <Navbar />

      <main className="page-container">
        <section id="home" data-aos="fade-up">
          <Home />
        </section>

        <section id="projects" data-aos="fade-up">
          <Projects />
        </section>

        <section id="skills" data-aos="fade-up">
          <TechStack />
        </section>

        <section id="contact" data-aos="fade-up">
          <Contact />
        </section>
{/* 
        <section id="resume" data-aos="fade-up">
          <Resume />
        </section> */}
      </main>

      <Footer />
    </>
  );
}
