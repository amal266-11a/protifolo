import { useEffect, useRef } from "react";
import "./About.css";

function About() {
  const aboutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = aboutRef.current;
      const rect = section.getBoundingClientRect();

      if (rect.top < window.innerHeight - 100) {
        section.classList.add("show");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="about" id="about" ref={aboutRef}>
      <div className="about-content">
        <h2 className="about-title">About Me</h2>

        <p className="about-text">
          I'm Amal Al-shreef, a third-year Computer Science student at Umm Al-Qura University.
          I specialize in frontend development and UI/UX design, and I love creating clean,
          modern, and meaningful user experiences.
        </p>

        <p className="about-text">
          I enjoy blending creativity with code, paying attention to details, and building
          designs that reflect both aesthetics and usability.
        </p>
      </div>
    </section>
  );
}

export default About;
