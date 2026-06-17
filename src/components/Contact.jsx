import { useEffect, useRef, useState } from 'react';
import './Contact.css';

export default function Contact() {
  const sectionRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    const reveals = sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    reveals?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3500);
    e.target.reset();
  };

  return (
    <section id="contact" className="contact" ref={sectionRef}>
      <div className="container">
        <div className="contact-grid">
          {/* Left */}
          <div className="contact-left">
            <span className="eyebrow eyebrow-light reveal">Contact</span>
            <h2 className="contact-headline reveal delay-1">
              Let's discuss projects, systems, and development opportunities
            </h2>
            <p className="contact-sub reveal delay-2">
              Open to collaborating on modern web applications, frontend systems,
              backend architecture, and scalable business platforms.
            </p>

            <div className="contact-info-cards reveal delay-3">
              <a className="contact-info-card" href="mailto:subinsuresh8088@gmail.com">
                <div className="contact-info-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 7L2 7"/>
                  </svg>
                </div>
                <div>
                  <div className="contact-info-label">Email</div>
                  <div className="contact-info-value">subinsuresh8088@gmail.com</div>
                </div>
              </a>

              <a className="contact-info-card" href="https://github.com" target="_blank" rel="noreferrer">
                <div className="contact-info-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <div>
                  <div className="contact-info-label">GitHub</div>
                  <div className="contact-info-value">github.com/subinpk</div>
                </div>
              </a>
            </div>
          </div>

          {/* Right – Form */}
          <div className="contact-form-wrap reveal-right delay-2">
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '60px 20px' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: 16 }}>✅</div>
                <p style={{ color: '#fff', fontSize: '1.1rem', fontWeight: 600, fontFamily: 'Sora, sans-serif' }}>Message sent!</p>
                <p style={{ color: 'rgba(255,255,255,0.4)', marginTop: 8, fontSize: '0.9rem' }}>I'll get back to you soon.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-field">
                  <label className="form-label">Your Name</label>
                  <input className="form-input" type="text" placeholder="John Doe" required />
                </div>
                <div className="form-field">
                  <label className="form-label">Your Email</label>
                  <input className="form-input" type="email" placeholder="john@example.com" required />
                </div>
                <div className="form-field">
                  <label className="form-label">Project Discussion</label>
                  <textarea className="form-textarea" placeholder="Tell me about your project..." required />
                </div>
                <button type="submit" className="form-submit">Send Message</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}