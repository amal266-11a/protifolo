import { useEffect, useRef } from "react";
import "./Participation.css";

function Participation() {
  const partRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = partRef.current;
      const rect = section.getBoundingClientRect();

      if (rect.top < window.innerHeight - 100) {
        section.classList.add("show");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="participation" id="participation" ref={partRef}>
      <h2 className="participation-title">My Participation</h2>

      <div className="participation-grid">

       

        <div className="participation-card">
          <h3>VolunThon-Absar</h3>
          <p>
           Won first place at VolunThon with Absar, a tech-health project supporting Hajj pilgrims.
          </p>
        </div>

        

      </div>
    </section>
  );
}

export default Participation;
