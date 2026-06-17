import { useEffect, useRef } from 'react';
import './About.css';

const experience = [
  {
    role: 'Python Developer',
    company: 'Altos Technologies',
    points: [
      'Developed and maintained 3+ production-ready Django applications following the MVT architecture.',
      'Built RESTful APIs for user management, authentication, and role-based access.',
      'Developed dynamic admin dashboards with CRUD operations for users, projects, and application data.',
      'Implemented responsive UI using Bootstrap, ensuring compatibility across mobile and desktop.',
    ],
  },
  {
    role: 'Python Fullstack Intern',
    company: 'STC Technologies',
    points: [
      'Gained comprehensive full-stack experience using Python, Django, HTML, CSS, JavaScript, and Bootstrap.',
      'Developed and deployed dynamic web applications with responsive interfaces and efficient backend functionality.',
    ],
  },
];

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.12 }
    );
    sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right')
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="container">
        <div className="about-grid">
          <div className="about-left">
            <span className="eyebrow reveal">About</span>
            <h2 className="about-headline reveal delay-1">
              Crafting <span className="italic">reliable</span> backend systems with thoughtful frontends
            </h2>
            <p className="about-body reveal delay-2">
              Python Django developer with experience building and deploying full-stack web
              applications. Proficient in Python, Django, REST APIs, and frontend technologies
              like HTML, CSS, JavaScript, and Bootstrap. Experienced in database management with
              MySQL and PostgreSQL, and version control with Git — focused on writing clean,
              efficient code for responsive, scalable solutions.
            </p>
            <div className="about-tags reveal delay-3">
              <span className="about-tag">Django MVT</span>
              <span className="about-tag">REST APIs</span>
              <span className="about-tag">Role-based Auth</span>
              <span className="about-tag">Admin Dashboards</span>
            </div>
          </div>

          <div className="about-timeline">
            {experience.map((exp, i) => (
              <div key={exp.company} className={`timeline-item reveal-right delay-${i + 1}`}>
                <span className="timeline-dot" />
                <div className="timeline-role">{exp.role}</div>
                <div className="timeline-company">{exp.company}</div>
                <div className="timeline-desc">
                  <ul>
                    {exp.points.map((p) => <li key={p}>{p}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}