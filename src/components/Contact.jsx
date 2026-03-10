import React, { useState } from "react";
import { User, Phone, Mail, MapPin, ChevronDown } from "lucide-react";
import { useLang } from "../context/LangContext";

export default function Contact() {
  const { t } = useLang();
  const c = t.contact;

  const [form, setForm] = useState({
    name: "", phone: "", email: "", type: "", budget: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function set(field) {
    return e => setForm(prev => ({ ...prev, [field]: e.target.value }));
  }

  function handleSubmit() {
    if (!form.name.trim() || !form.phone.trim()) return;
    setSubmitted(true);
    setForm({ name: "", phone: "", email: "", type: "", budget: "" });
    setTimeout(() => setSubmitted(false), 3000);
  }

  return (
    <section id="contact" className="contact" aria-labelledby="contact-title">
      <div className="contact__inner">
        <div className="contact__grid">

          {/* ── Form ── */}
          <div className="contact__form-col">
            {/* Row 1: Name + Phone */}
            <div className="contact__form-row">
              <InputWrap icon={<User size={15} />}>
                <input
                  type="text"
                  placeholder={c.fullName}
                  value={form.name}
                  onChange={set("name")}
                  autoComplete="name"
                />
              </InputWrap>
              <InputWrap icon={<Phone size={15} />}>
                <input
                  type="tel"
                  placeholder={c.phone}
                  value={form.phone}
                  onChange={set("phone")}
                  autoComplete="tel"
                />
              </InputWrap>
            </div>

            {/* Row 2: Email */}
            <div className="contact__form-row--full">
              <InputWrap icon={<Mail size={15} />}>
                <input
                  type="email"
                  placeholder={c.email}
                  value={form.email}
                  onChange={set("email")}
                  autoComplete="email"
                />
              </InputWrap>
            </div>

            {/* Row 3: Type + Budget */}
            <div className="contact__form-row">
              <SelectWrap placeholder={c.propType} value={form.type} onChange={set("type")} options={c.propTypeOptions} />
              <SelectWrap placeholder={c.budget}   value={form.budget} onChange={set("budget")} options={c.budgetOptions} />
            </div>

            {/* Submit */}
            <div className="contact__submit-wrap">
              <button
                type="button"
                className={`contact__submit${submitted ? " success" : ""}`}
                onClick={handleSubmit}
              >
                {submitted ? c.submitted : c.submit}
              </button>
            </div>
          </div>

          {/* ── Text ── */}
          <div className="contact__text-col">
            <h2 className="contact__title" id="contact-title">
              {c.title}
              <strong>{c.titleBold}</strong>
            </h2>
            <p className="contact__desc">{c.desc}</p>

            <ul className="contact__info-list" style={{ listStyle: "none" }}>
              <li className="contact__info-item">
                <MapPin size={15} />
                <span>{c.address}</span>
              </li>
              <li className="contact__info-item">
                <Phone size={15} />
                <span>{c.phone2}</span>
              </li>
              <li className="contact__info-item">
                <Mail size={15} />
                <span>{c.email2}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Input wrapper ──────────────────────────── */
function InputWrap({ icon, children }) {
  return (
    <div className="input-wrap">
      <span className="input-wrap__icon" aria-hidden="true">{icon}</span>
      {children}
    </div>
  );
}

/* ─── Select wrapper ─────────────────────────── */
function SelectWrap({ placeholder, value, onChange, options }) {
  return (
    <div className="input-wrap">
      <select
        className={value ? "has-value" : ""}
        value={value}
        onChange={onChange}
      >
        <option value="">{placeholder}</option>
        {options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
      <span className="input-wrap__chevron" aria-hidden="true">
        <ChevronDown size={15} />
      </span>
    </div>
  );
}
