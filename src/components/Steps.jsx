import React from "react";
import { useLang } from "../context/LangContext";

export default function Steps() {
  const { t } = useLang();
  const { steps } = t;

  return (
    <section className="steps" aria-labelledby="steps-title">
      {/* Banner */}
      <div className="steps__banner">
        <h2 className="steps__banner-title" id="steps-title">
          <span className="bold">{steps.titleBold} </span>
          <span className="light">{steps.titleLight}</span>
        </h2>
      </div>

      {/* Cards */}
      <div className="steps__cards-wrap">
        <div className="steps__grid">
          {steps.items.map((s, i) => (
            <article className="step-card" key={i}>
              <span className="step-card__num" aria-hidden="true">{s.num}</span>
              <h3 className="step-card__title">{s.title}</h3>
              <p className="step-card__desc">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
