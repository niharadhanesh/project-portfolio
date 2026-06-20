import "./Hero.css";
import { FaLinkedinIn, FaGithub, FaGlobe } from "react-icons/fa";

import heroImage from "../assets/images/brush-frame.jpg";

export default function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-wrapper">

        {/* SOCIAL ICONS */}
      <div className="hero-socials">

  <a
    href="https://linkedin.com"
    target="_blank"
    rel="noreferrer"
    aria-label="LinkedIn"
  >
    <FaLinkedinIn />
  </a>

  <a
    href="https://github.com"
    target="_blank"
    rel="noreferrer"
    aria-label="GitHub"
  >
    <FaGithub />
  </a>

  <a
    href="https://nihara-orpin.vercel.app/"
    target="_blank"
    rel="noreferrer"
    aria-label="Portfolio"
  >
    <FaGlobe />
  </a>

</div>

        {/* CONTENT */}
        <div className="hero-content">

          <span className="hero-tag">
            PROJECT SHOWCASE
          </span>

          <h1 className="hero-title">
            Building digital
            <span>products!</span>
          </h1>

          <p className="hero-text">
            Explore innovative web applications,
            healthcare systems, ERP platforms,
            inventory solutions and business products
            crafted with modern technologies.
          </p>

          <a
            href="#projects"
            className="hero-btn"
          >
            VIEW PROJECTS
          </a>

        </div>

        {/* IMAGE */}
        <div className="hero-image">

          <img
            src={heroImage}
            alt="Project Showcase"
            className="hero-main-image"
          />

        </div>

      </div>

    </section>
  );
}