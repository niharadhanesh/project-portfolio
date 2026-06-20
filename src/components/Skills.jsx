import { useEffect, useRef } from 'react';
import './Skills.css';

const categories = [
  {
    title: 'Backend',
    accent: '#0a3d5c',
    tint: 'rgba(10, 61, 92, 0.10)',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    tags: ['Python', 'Django', 'REST APIs'],
  },
  {
    title: 'Frontend',
    accent: '#1f8fe0',
    tint: 'rgba(31, 143, 224, 0.10)',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'React'],
  },
  {
    title: 'Databases',
    accent: '#4fb8ff',
    tint: 'rgba(79, 184, 255, 0.12)',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      </svg>
    ),
    tags: ['MySQL', 'PostgreSQL'],
  },
  {
    title: 'Tools',
    accent: '#105f94',
    tint: 'rgba(16, 95, 148, 0.10)',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
    tags: ['Git', 'VS Code', 'GitHub'],
  },
];

export default function Skills() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            entry.target.querySelectorAll('.skill-tag').forEach((tag, i) => {
              setTimeout(() => tag.classList.add('tag-visible'), i * 60);
            });
          }
        });
      },
      { threshold: 0.15 }
    );
    sectionRef.current?.querySelectorAll('.reveal, .skill-category').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="skills" ref={sectionRef}>
      <div className="scan-line" aria-hidden="true" />

      <div className="container">
        <div className="skills-header">
          <span className="eyebrow eyebrow-light reveal">
            <span className="label-dot" />
            Tech Stack
          </span>
          <h2 className="skills-headline reveal delay-1">
            The tools behind every <span className="italic">build</span>
          </h2>
        </div>

        <div className="skills-grid">
          {categories.map((cat, i) => (
            <div
              key={cat.title}
              className={`skill-category reveal delay-${i + 1}`}
              style={{ '--accent': cat.accent, '--accent-tint': cat.tint }}
            >
              <div className="skill-category-icon">{cat.icon}</div>
              <div className="skill-category-title">{cat.title}</div>
              <div className="skill-tags">
                {cat.tags.map((tag) => <span key={tag} className="skill-tag">{tag}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}