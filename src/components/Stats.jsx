import React from "react";
import { useLang } from "../context/LangContext";

export default function Stats() {
  const { t } = useLang();

  return (
    <section className="stats" aria-label="Statistics">
      <div className="stats__grid">
        {t.stats.map((s, i) => (
          <div className="stats__item" key={i}>
            <div className="stats__num">{s.num}</div>
            <div className="stats__label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
