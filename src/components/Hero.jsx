import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-overlay"></div>

      <div className="hero-container">

        <div className="hero-content">

          <span className="hero-kicker">
            PROJECT PORTFOLIO
          </span>

          <h1 className="hero-title">
            Transforming ideas into
            <span> powerful web applications.</span>
          </h1>

          <p className="hero-description">
            Explore a collection of business solutions, healthcare
            systems, ERP platforms, inventory management tools,
            billing applications, and custom web products designed
            to solve real-world challenges through thoughtful
            software development.
          </p>

          <div className="hero-actions">

            <a
              href="#projects"
              className="hero-btn hero-btn-primary"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="hero-btn hero-btn-secondary"
            >
              Contact Me
            </a>

          </div>

        </div>

      </div>

      <div className="hero-scroll">
        Scroll
      </div>

    </section>
  );
}