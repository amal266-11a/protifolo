import { useEffect, useRef } from "react";
import "./Projects.css";

function Projects() {
  const projRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = projRef.current;
      const rect = section.getBoundingClientRect();

      if (rect.top < window.innerHeight - 100) {
        section.classList.add("show");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="projects" id="projects" ref={projRef}>
      <h2 className="projects-title">My Projects</h2>

      <div className="projects-grid">

        {/* مشروع 1 — Skoon Plant App */}
        <div className="project-card">
          <img src="\projects\skoon.png" alt="Skoon Plant App" />
          <h3>Skoon Plant App</h3>
          <p>
           A plant store application built using Flutter, Dart, and Firebase.
    I implemented the full app logic and designed a clean, simple, and intuitive user experience.
          </p>
          <a href="https://github.com/amal266-11a/final-project-sukoon-plant" className="project-btn" target="_blank">
            View Project
          </a>
        </div>

        {/* مشروع 2 — Nork Crowd Management */}
        <div className="project-card">
          <img src="\projects\نورك.png" alt="Nork App" />
          <h3>Nork – Crowd Management</h3>
          <p>
     A crowd‑management concept designed in Figma during the Namken Bootcamp.
    This project was also part of my participation in Hajjathon.
            </p>
          <a href="https://www.figma.com/proto/qL8uJn1kpLzXWK8iawX5da/The-Finale---Amal-adel-alshreif_AFK-Bootcamp-15.0--Community-?node-id=2064-1859&t=XSk5yU1TnFO5Lmur-1&scaling=min-zoom&content-scaling=fixed&page-id=1%3A137&starting-point-node-id=2067%3A1982" className="project-btn" target="_blank">
            View Project
          </a>
        </div>

        {/* مشروع 3 — Anas Web App */}
        <div className="project-card">
          <img src="\projects\logo-auns.png" alt="Anas Web App" />
          <h3>Anas – Web Monitoring App</h3>
          <p>
            A web project built using XAMPP, HTML, CSS, and JavaScript.
    It helps parents monitor what their children are watching online.
          </p>
          <a href="https://www.linkedin.com/posts/amal-alshreif-0a485a324_%D8%A7%D9%84%D8%AD%D9%85%D8%AF-%D9%84%D9%84%D9%87-%D8%B9%D9%84%D9%89-%D8%A7%D9%84%D8%AA%D9%85%D8%A7%D9%85-%D8%A8%D9%81%D8%B6%D9%84-%D8%A7%D9%84%D9%84%D9%87-%D8%AB%D9%85-%D8%A8%D8%AC%D9%87%D9%88%D8%AF%D9%86%D8%A7-activity-7407188759848439808-WAW6?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFH--PwBhDiLYA34KCFeCNtPigp00fJYz30" className="project-btn" target="_blank">
            View Project
          </a>
        </div>

      </div>
    </section>
  );
}

export default Projects;
