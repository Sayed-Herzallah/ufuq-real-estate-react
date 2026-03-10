import React, { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import { useLang } from "../context/LangContext";

function BuildingIcon() {
  return (
    <img
      src="/images/Vector.png"
      alt="UFUQ Logo"
      style={{ width: 40, height: 40, objectFit: "contain" }}
      onError={(e) => { e.target.style.display = "none"; }}
    />
  );
}

export default function Navbar() {
  const { lang, t, toggle } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    const handler = () => { if (window.innerWidth > 768) setMenuOpen(false); };
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  const links = [
    { label: t.nav.home,       href: "#home"       },
    { label: t.nav.properties, href: "#properties" },
    { label: t.nav.about,      href: "#about"      },
  ];

  return (
    <>
      <nav className={`navbar${scrolled ? " scrolled" : ""}`} role="navigation" aria-label="Main navigation">

        {/* Logo */}
        <a href="#home" className="navbar__logo" aria-label="UFUQ Real Estate">
          <BuildingIcon />
          <div className="navbar__logo-text">
            <div className="navbar__logo-sub">REAL ESTATE</div>
            <div className="navbar__logo-name">UFUQ</div>
          </div>
        </a>

        {/* Desktop nav links */}
        <ul className="navbar__links">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>

        {/* Desktop actions */}
        <div className="navbar__actions">
          <button
            className="lang-toggle"
            onClick={toggle}
            aria-label={`Switch to ${lang === "ar" ? "English" : "Arabic"}`}
          >
            <span className={`lang-toggle__flag${lang === "en" ? " inactive" : ""}`}>AR</span>
            <div className="lang-toggle__track" aria-hidden="true">
              <div className="lang-toggle__thumb" />
            </div>
          <span className={`lang-toggle__flag${lang === "ar" ? " inactive" : ""}`}>EN</span>
          </button>

          <a href="#contact" className="navbar__book-btn">
            {t.nav.bookNow}
          </a>
        </div>

        {/* Mobile actions */}
        <div className="navbar__mobile-actions">

          {/* Globe — يغير اللغة مباشرة */}
          <button
            className="navbar__lang-btn"
            onClick={toggle}
            aria-label={`Switch to ${lang === "ar" ? "English" : "Arabic"}`}
          >
            <Globe size={20} />
            <span className="navbar__lang-label">
              {lang === "ar" ? "EN" : "AR"}
            </span>
          </button>

          {/* Hamburger */}
          <button
            className="navbar__hamburger"
            onClick={() => setMenuOpen(o => !o)}
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`navbar__mobile-menu${menuOpen ? " open" : ""}`} role="menu">
        {links.map(l => (
          <a key={l.href} href={l.href} role="menuitem"
            onClick={() => setMenuOpen(false)}>
            {l.label}
          </a>
        ))}
        <a href="#contact" className="navbar__mobile-menu-book"
          onClick={() => setMenuOpen(false)}>
          {t.nav.bookNow}
        </a>
      </div>
    </>
  );
}