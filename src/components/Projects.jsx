import { useEffect, useRef } from 'react';
import { projects } from '../data/projects';
import './Projects.css';

function Mock({ accent }) {
  return (
    <div className="project-mock">
      <div className="project-mock-bar">
        <div className="project-mock-dot" style={{ background: '#E8836A' }} />
        <div className="project-mock-dot" style={{ background: '#E8C66A' }} />
        <div className="project-mock-dot" style={{ background: '#8FC78F' }} />
      </div>
      <div className="project-mock-content">
        <div className="project-mock-line" style={{ width: '50%', background: `${accent}45` }} />
        <div className="project-mock-line" style={{ width: '85%' }} />
        <div className="project-mock-line" style={{ width: '70%' }} />
        <div className="project-mock-row">
          <div className="project-mock-box" />
          <div className="project-mock-box" />
          <div className="project-mock-box" />
        </div>
        <div className="project-mock-line" style={{ width: '92%', marginTop: 4 }} />
        <div className="project-mock-line" style={{ width: '60%' }} />
      </div>
    </div>
  );
}

const cardIcons = [
  // invoice / billing
  <svg key="1" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="16" y2="17"/>
  </svg>,
  // vehicle
  <svg key="2" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 17h14M5 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0zM5 17V8l2-5h10l2 5v9"/>
  </svg>,
];

export default function Projects() {
  const sectionRef = useRef(null);
  const featured = projects.find((p) => p.featured);
  const secondary = projects.filter((p) => !p.featured);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.reveal, .reveal-scale').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="projects" ref={sectionRef}>
      <div className="container">
        <div className="projects-header">
          <div>
            <span className="eyebrow reveal">My Work</span>
            <h2 className="projects-headline reveal delay-1">
              Selected <span className="italic">projects</span>
            </h2>
          </div>
          <p className="projects-sub reveal delay-2">
            Real systems built for hospitals, billing, and fleet management —
            designed for reliability, clarity, and ease of use.
          </p>
        </div>

        {/* Featured project */}
        {featured && (
          <div className="project-featured reveal-scale">
            <div className="project-featured-info">
              <span className="featured-badge">★ Featured Project</span>
              <h3 className="project-featured-title">{featured.title}</h3>
              <p className="project-featured-desc">{featured.description}</p>
              <div className="project-tech">
                {featured.tech.map((t) => <span key={t} className="tech-tag">{t}</span>)}
              </div>
              <div className="project-actions">
                <a href={featured.live} className="project-btn-primary">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15,3 21,3 21,9"/><line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                  Live Preview
                </a>
                <a href={featured.github} className="project-btn-outline">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
            <div className="project-featured-visual">
              <div className="project-visual-blob" style={{ background: featured.accent }} />
              <Mock accent={featured.accent} />
            </div>
          </div>
        )}

        {/* Secondary projects */}
        <div className="projects-secondary">
          {secondary.map((project, i) => (
            <div
              key={project.id}
              className={`project-card reveal delay-${i + 2}`}
              style={{
                '--card-accent': project.accent,
                '--card-accent-tint': `${project.accent}1F`,
              }}
            >
              <div className="project-card-icon">{cardIcons[i % cardIcons.length]}</div>
              <div className="project-card-category">{project.category}</div>
              <h3 className="project-card-title">{project.title}</h3>
              <p className="project-card-desc">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((t) => <span key={t} className="tech-tag">{t}</span>)}
              </div>
              <div className="project-card-links">
                <a href={project.live} className="card-link">
                  Live Preview
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
                <a href={project.github} className="card-link">GitHub</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}