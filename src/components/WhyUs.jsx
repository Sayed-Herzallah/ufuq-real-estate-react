import React from "react";
import { useLang } from "../context/LangContext";

export default function WhyUs() {
  const { t } = useLang();
  const { whyUs } = t;

  return (
    <section id="about" className="whyus" aria-labelledby="whyus-title">
      <div className="whyus__inner">
        <h2 className="section-title" id="whyus-title">
          <span className="bold">{whyUs.sectionTitle}</span>
        </h2>

        <div className="whyus__grid">
          {/* Person image */}
          <div className="whyus__img-col">
            <img
              
              src="/images/man.png"
              alt="Real Estate Expert"
              loading="lazy"
            />
          </div>

          {/* Feature cards */}
          <div className="whyus__features">
            {whyUs.features.map((f, i) => (
              <div className="whyus__feature-card" key={i}>
                <h3 className="whyus__feature-title">{f.title}</h3>
                <p className="whyus__feature-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
