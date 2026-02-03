import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
     <div className="hero-content">

  <div className="top-badge">
    Cooperative Training Student (wadi makkah)
  </div>

  <h1 className="hero-title typing">Amal Al-shreef</h1>

  <p className="hero-subtitle">Frontend Developer & UI/UX Designer</p>

  <p className="hero-bio fade-in">
    A third-year Computer Science student at Umm Al-Qura University.  
    Passionate about frontend development, UI/UX design, and creating clean, beautiful user experiences.
  </p>

  <div className="hero-buttons">
    <a href="#projects" className="btn primary">View Projects</a>
    <a href="\amal-adel-alshareef-FlowCV-Resume-20251014.pdf" className="btn secondary">Download CV</a>
  </div>

</div>


      <div className="hero-image">
        <img src="\avatar.png" alt="Amal Avatar" />
      </div>
    </section>
  );
}

export default Hero;