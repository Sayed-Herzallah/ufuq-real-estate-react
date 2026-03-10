import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { useLang } from "../context/LangContext";

function BuildingIconSmall() {
  return (
    <img 
      src="/images/Vector.png"
      alt="UFUQ Logo" 
      style={{ width: 40, height: 40, objectFit: "contain" }}
      onError={(e) => { e.target.style.display = 'none'; }}
    />
  );
}

export default function Footer() {
  const { t, lang } = useLang();
  const f = t.footer;

  return (
    <footer className="footer">
      <div className="footer__grid">
        {/* Brand */}
        <div className="footer__brand">
          <a href="#home" className="footer__logo">
            <BuildingIconSmall />
            <div className="footer__logo-text">
              <div className="footer__logo-sub">REAL ESTATE</div>
              <div className="footer__logo-name">UFUQ</div>
            </div>
          </a>
          <p className="footer__tagline">{f.tagline}</p>
        </div>

        {/* Properties */}
        <div className="footer__col">
          <span className="footer__col-title">{f.properties}</span>
          <a href="#properties" className="footer__link">{f.residential}</a>
          <a href="#properties" className="footer__link">{f.commercial}</a>
        </div>

        {/* Company */}
        <div className="footer__col">
          <span className="footer__col-title">{f.company}</span>
          <a href="#about" className="footer__link">{f.aboutUs}</a>
          <a href="#about" className="footer__link">{f.joinUs}</a>
        </div>

        {/* Contact */}
        <div className="footer__col">
          <span className="footer__col-title">{f.contactUs}</span>
          <div className="footer__contact-item">
            <MapPin size={13} />
            <span>{f.address}</span>
          </div>
          <div className="footer__contact-item">
            <Phone size={13} />
            <span>{f.phone}</span>
          </div>
          <div className="footer__contact-item">
            <Mail size={13} />
            <span>{f.email}</span>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        © 2024 UFUQ Real Estate.{" "}
        {lang === "ar" ? "جميع الحقوق محفوظة." : "All rights reserved."}
      </div>
    </footer>
  );
}
