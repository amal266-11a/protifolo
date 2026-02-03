import { useEffect, useRef } from "react";
import "./Contact.css";

function Contact() {
  const contactRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = contactRef.current;
      const rect = section.getBoundingClientRect();

      if (rect.top < window.innerHeight - 100) {
        section.classList.add("show");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="contact" id="contact" ref={contactRef}>
      <h2 className="contact-title">Contact Me</h2>

      <p className="contact-text">
        Feel free to reach out if you’d like to collaborate, ask a question.
      </p>

      <div className="contact-links">
        <a href="mailto:amal.a.alshrif@gmail.com" className="contact-item">
          📩 Email
        </a>

        <a href="https://github.com/amal266-11a" target="_blank" className="contact-item">
          💻 GitHub
        </a>

        <a href="www.linkedin.com/in/amal-alshreif-0a485a324" target="_blank" className="contact-item">
          🔗 LinkedIn
        </a>
      </div>
    </section>
  );
}

export default Contact;
