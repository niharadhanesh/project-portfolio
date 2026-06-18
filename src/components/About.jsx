import './About.css';

export default function About() {
  return (
    <section id="about" className="about">

      <div className="about-container">

        <div className="about-top">

          <span className="about-label">
            ABOUT ME
          </span>

          <h2 className="about-title">
            Building the web,
            <span> beautifully.</span>
          </h2>

        </div>

        <div className="about-content">

          <div className="about-left">
            <p>
              I'm a Full Stack Developer passionate about building
              clean, scalable, and user-friendly web applications
              using Django, React, REST APIs, and modern technologies.
            </p>
          </div>

          <div className="about-right">

            <div className="about-card">
              <h3>01+</h3>
              <span>Years Experience</span>
            </div>

            <div className="about-card">
              <h3>10+</h3>
              <span>Projects Completed</span>
            </div>

            <div className="about-card">
              <h3>Django</h3>
              <span>Backend Development</span>
            </div>

            <div className="about-card">
              <h3>React</h3>
              <span>Frontend Development</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}