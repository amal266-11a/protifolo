import "./Skills.css";

function Skills() {
  return (
    <section className="skills" id="skills">
      <h2 className="skills-title">My Skills</h2>

      <div className="skills-slider">
        <div className="slide-track">

          {/* skills images */}
          <div className="skill-box"><img src="/skills/html.png" alt="HTML" /></div>
          <div className="skill-box"><img src="/skills/css.png" alt="CSS" /></div>
          <div className="skill-box"><img src="/skills/js.png" alt="JavaScript" /></div>
          <div className="skill-box"><img src="/skills/dart.png" alt="React" /></div>
          <div className="skill-box"><img src="/skills/figma.png" alt="Figma" /></div>
          <div className="skill-box"><img src="/skills/fultter.png" alt="UI/UX" /></div>

          {/* نكررهم عشان الحركة تكون مستمرة */}
          <div className="skill-box"><img src="/skills/html.png" alt="HTML" /></div>
          <div className="skill-box"><img src="/skills/css.png" alt="CSS" /></div>
          <div className="skill-box"><img src="/skills/js.png" alt="JavaScript" /></div>
          <div className="skill-box"><img src="/skills/dart.png" alt="React" /></div>
          <div className="skill-box"><img src="/skills/figma.png" alt="Figma" /></div>
          <div className="skill-box"><img src="/skills/fultter.png" alt="UI/UX" /></div>

        </div>
      </div>
    </section>
  );
}

export default Skills;
