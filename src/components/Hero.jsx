import React from "react";
import { useLang } from "../context/LangContext";

export default function Hero() {
  const { t } = useLang();

  return (
    <section id="home" className="hero">
      <div className="hero__inner">
        <div className="hero__img-col">
          <div className="hero__image-wrap">
            <img
              src="/images/hero.png"
              alt="Real Estate Cairo"
              loading="eager"
            />
          </div>
        </div>

        <div className="hero__text-col">
          <p className="hero__trusted">{t.hero.trusted}</p>

          <h1 className="hero__title">
            <span className="hero__title-light">{t.hero.title1}</span>
            <span className="hero__title-light">{t.hero.title2}</span>
            <span className="hero__title-bold">{t.hero.title3}</span>
          </h1>

          <p className="hero__desc">{t.hero.desc}</p>

          <div className="hero__btns">
            <a href="#contact" className="hero__btn hero__btn--primary">
              {t.hero.bookNow}
            </a>
            <a href="#about" className="hero__btn hero__btn--secondary">
              {t.hero.learnMore}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
