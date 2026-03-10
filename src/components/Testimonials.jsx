import React from "react";
import { useLang } from "../context/LangContext";

export default function Testimonials() {
  const { t } = useLang();
  const { testimonials } = t;

  return (
    <section className="testimonials" aria-labelledby="testimonials-title">
      <div className="testimonials__inner">
        <h2 className="section-title" id="testimonials-title">
          <span className="light">{testimonials.sectionTitle} </span>
          <span className="bold">{testimonials.sectionBold}</span>
        </h2>

        <div className="testimonials__grid">
          {testimonials.items.map((item, i) => (
            <article className="testimonial-card" key={i}>
              <div className="testimonial-card__stars" aria-label="5 stars">
                {"★★★★★"}
              </div>

              <p className="testimonial-card__text">{item.text}</p>

              <div className="testimonial-card__divider" />

              <div className="testimonial-card__author">
                <img
                  className="testimonial-card__photo"
                  src={item.img}
                  alt={item.name}
                  loading="lazy"
                />
                <div className="testimonial-card__name-wrap">
                  <div className="testimonial-card__name">{item.name}</div>
                  <div className="testimonial-card__role">{item.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
