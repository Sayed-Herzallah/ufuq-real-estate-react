import React, { useState } from "react";
import { MapPin, Bed, Bath, Maximize2 } from "lucide-react";
import { useLang } from "../context/LangContext";
import { propertiesData } from "../data/content";

export default function Properties() {
  const { t, lang } = useLang();
  const p = t.properties;
  const [filter,  setFilter]  = useState("all");
  const [visible, setVisible] = useState(3);

  const filtered = propertiesData.filter(card =>
    filter === "all"         ? true :
    filter === "residential" ? card.type === "residential" :
                               card.type === "commercial"
  );
  const shown = filtered.slice(0, visible);

  function handleFilter(f) {
    setFilter(f);
    setVisible(3);
  }

  return (
    <section id="properties" className="properties" aria-labelledby="props-title">
      <div className="properties__inner">
        {/* Header */}
        <div className="properties__header">
          <h2 className="properties__title" id="props-title">
            <span className="bold">{p.sectionTitle} </span>
            <span className="light">{p.sectionLight}</span>
          </h2>

          <div className="properties__filters" role="group" aria-label="Property type filter">
            {[
              { key: "all",         label: p.filterAll },
              { key: "residential", label: p.filterRes },
              { key: "commercial",  label: p.filterCom },
            ].map(f => (
              <button
                key={f.key}
                className={`filter-btn${filter === f.key ? " active" : ""}`}
                onClick={() => handleFilter(f.key)}
                aria-pressed={filter === f.key}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="properties__divider" aria-hidden="true" />

        {/* Cards */}
        <div className="properties__grid">
          {shown.map((card, idx) =>
            card.overlay && idx === 0
              ? <OverlayCard key={card.id} card={card} t={t} lang={lang} />
              : <StandardCard key={card.id} card={card} t={t} lang={lang} />
          )}
        </div>

        {/* Browse all */}
        {filtered.length > visible && (
          <div className="properties__browse-wrap">
            <button className="browse-btn" onClick={() => setVisible(v => v + 3)}>
              {p.browseAll}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

/* ─── Standard card ──────────────────────────── */
function StandardCard({ card, t, lang }) {
  const p = t.properties;
  const title    = lang === "ar" ? card.titleAr    : card.titleEn;
  const location = lang === "ar" ? card.locationAr : card.locationEn;

  return (
    <article className="prop-card">
      <div className="prop-card__img-wrap">
        <img src={card.image} alt={title} loading="lazy" />
      </div>
      <div className="prop-card__body">
        <div className="prop-card__price">{card.price}</div>
        <div className="prop-card__currency">{p.egp}</div>
        <h3 className="prop-card__title">{title}</h3>
        <div className="prop-card__location">
          <MapPin size={13} />
          <span>{location}</span>
        </div>
        <div className="prop-card__divider" />
        <div className="prop-card__specs">
          <span className="prop-spec"><Maximize2 size={13} /><span>{card.area}{p.m2}</span></span>
          <span className="prop-spec"><Bed size={13} /><span>{card.rooms} {p.rooms}</span></span>
          <span className="prop-spec"><Bath size={13} /><span>{card.baths} {p.bath}</span></span>
        </div>
      </div>
    </article>
  );
}

/* ─── Overlay card (first card) ─────────────── */
function OverlayCard({ card, t, lang }) {
  const p = t.properties;
  const title    = lang === "ar" ? card.titleAr    : card.titleEn;
  const location = lang === "ar" ? card.locationAr : card.locationEn;

  return (
    <article className="prop-card prop-card--overlay">
      <div className="prop-card__img-fill">
        <img src={card.image} alt={title} loading="lazy" />
      </div>
      <div className="prop-card__gradient" aria-hidden="true" />
      <div className="prop-card__body">
        <div className="prop-card__price">{card.price}</div>
        <div className="prop-card__currency">{p.egp}</div>
        <h3 className="prop-card__title">{title}</h3>
        <div className="prop-card__location">
          <MapPin size={12} />
          <span>{location}</span>
        </div>
        <div className="prop-card__divider" />
        <div className="prop-card__specs">
          <span className="prop-spec"><Maximize2 size={13} /><span>{card.area}{p.m2}</span></span>
          <span className="prop-spec"><Bed size={13} /><span>{card.rooms} {p.rooms}</span></span>
          <span className="prop-spec"><Bath size={13} /><span>{card.baths} {p.bath}</span></span>
        </div>
      </div>
    </article>
  );
}
