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

    const reveals = sectionRef.current?.querySelectorAll(
      '.reveal, .reveal-left, .reveal-right'
    );

    reveals?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 3500);

    e.target.reset();
  };

  return (
    <section id="contact" className="contact" ref={sectionRef}>
      <div className="container">
        <div className="contact-grid">

          {/* Left Content */}
          <div className="contact-left">
            <span className="eyebrow eyebrow-light reveal">
              <span className="label-dot" />
              Contact
            </span>

            <h2 className="contact-headline reveal delay-1">
              Let's discuss projects, systems, and{' '}
              <span className="italic">development opportunities</span>
            </h2>

            <p className="contact-sub reveal delay-2">
              Open to collaborating on modern web applications, frontend systems,
              backend architecture, and scalable business platforms.
            </p>
          </div>

          {/* Right — Form */}
          <div className="contact-form-wrap reveal-right delay-2">
            <div className="code-top">
              <div className="code-dots">
                <span />
                <span />
                <span />
              </div>
              <span className="code-filename">send_message.js</span>
            </div>

            <div className="form-body">
              {submitted ? (
                <div className="console-output">
                  <p className="console-line">$ sendMessage(payload)</p>
                  <p className="console-line success-line">
                    <span className="success-icon">✓</span>
                    {' '}200 OK — message delivered
                  </p>
                  <p className="console-line muted-line">
                    // I'll get back to you within 24 hrs
                  </p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="field-row">
                    <span className="field-num">01</span>
                    <div className="field-body">
                      <label className="field-label" htmlFor="cf-name">
                        Your Name
                      </label>
                      <input
                        id="cf-name"
                        className="field-input"
                        type="text"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                  </div>

                  <div className="field-row">
                    <span className="field-num">02</span>
                    <div className="field-body">
                      <label className="field-label" htmlFor="cf-email">
                        Your Email
                      </label>
                      <input
                        id="cf-email"
                        className="field-input"
                        type="email"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="field-row">
                    <span className="field-num">03</span>
                    <div className="field-body">
                      <label className="field-label" htmlFor="cf-message">
                        Project Discussion
                      </label>
                      <textarea
                        id="cf-message"
                        className="field-textarea"
                        placeholder="Tell me about your project..."
                        required
                      />
                    </div>
                  </div>

                  <div className="field-row submit-row">
                    <span className="field-num">04</span>
                    <button type="submit" className="form-submit">
                      <span className="prompt-symbol">$</span>
                      {' '}sendMessage()
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}