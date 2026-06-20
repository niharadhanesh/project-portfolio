import { useEffect, useRef } from 'react';
import { projects } from '../data/projects';
import './Projects.css';

export default function Projects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        }),
      { threshold: 0.15 }
    );

    sectionRef.current
      ?.querySelectorAll('.reveal')
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="projects" ref={sectionRef}>
      <div className="projects-container">

        <div className="projects-header reveal">
          <span className="projects-label">PROJECTS</span>

          <h2 className="projects-title">
            Selected <span>work.</span>
          </h2>

          <p className="projects-description">
            A collection of business applications, healthcare platforms,
            management systems, and modern web experiences built using
            Django, React, REST APIs, and scalable architectures.
          </p>
        </div>

        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`project-showcase ${
              index % 2 !== 0 ? 'reverse' : ''
            } reveal`}
          >

            {/* Preview */}

            <div className="project-preview">

              <div className="browser-window">

                <div className="browser-top">
                  <span />
                  <span />
                  <span />
                </div>

                <div className="browser-content">

                  <div className="mock-header"></div>

                  <div className="mock-row">
                    <div className="mock-card"></div>
                    <div className="mock-card"></div>
                    <div className="mock-card"></div>
                  </div>

                  <div className="mock-line w90"></div>
                  <div className="mock-line w70"></div>
                  <div className="mock-line w50"></div>

                </div>

              </div>

            </div>

            {/* Content */}

            <div className="project-content">

              <span className="project-category">
                {project.category}
              </span>

              <h3 className="project-name">
                {project.title}
              </h3>

              <p className="project-text">
                {project.description}
              </p>

              <div className="project-tech">
                {project.tech.map((tech) => (
                  <span key={tech} className="tech-pill">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-links">
                <a href={project.live} className="project-btn">
                  View Project
                </a>
              </div>

            </div>

          </div>
        ))}

      </div>
    </section>
  );
}