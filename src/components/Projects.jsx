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
          <span className="projects-label">
            <span className="label-dot" />
            PROJECTS
          </span>

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
              <div className="preview-blob" />

              <div className="browser-window">
                <div className="browser-top">
                  <div className="browser-dots">
                    <span />
                    <span />
                    <span />
                  </div>
                  <span className="live-indicator">
                    <span className="live-dot" />
                    Live preview
                  </span>
                </div>

                <div className="browser-content">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                    loading="lazy"
                  />
                  <div className="image-shimmer" />
                  <div className="image-overlay" />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="project-content">
              <span className={`project-category cat-${project.type}`}>
                <span className="category-dot" />
                {project.category}
              </span>

              <h3 className="project-name">{project.title}</h3>

              <p className="project-text">{project.description}</p>

              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span
                    key={tech}
                    className="tech-pill"
                    style={{ transitionDelay: `${i * 60}ms` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-links">
                <a href={project.live} className="project-btn">
                  View Project
                  <svg
                    className="btn-arrow"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M3.5 8H12.5M12.5 8L8.5 4M12.5 8L8.5 12"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}