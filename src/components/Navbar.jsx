import { useState, useEffect } from "react";
import "./Navbar.css";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      const sections = [
        "home",
        "about",
        "projects",
        "contact",
      ];

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);

        if (el && window.scrollY >= el.offsetTop - 150) {
          setActive(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();

    setMenuOpen(false);

    document
      .querySelector(href)
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <>
      <header className={`navbar ${scrolled ? "scrolled" : ""}`}>

        <div className="navbar-container">

          <a
            href="#home"
            className="navbar-logo"
            onClick={(e) => handleClick(e, "#home")}
          >
            Nihara<span>.</span>
          </a>

          <button
            className={`menu-btn ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </button>

        </div>

        {/* Overlay */}

        <div
          className={`menu-overlay ${
            menuOpen ? "active" : ""
          }`}
          onClick={() => setMenuOpen(false)}
        />

        {/* Side Menu */}

        <div
          className={`side-menu ${
            menuOpen ? "active" : ""
          }`}
        >
          <nav className="side-nav">

            {links.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={
                  active === item.href.slice(1)
                    ? "active"
                    : ""
                }
                onClick={(e) =>
                  handleClick(e, item.href)
                }
              >
                {item.label}
              </a>
            ))}

          </nav>

          <div className="side-line" />
        </div>

      </header>
    </>
  );
}