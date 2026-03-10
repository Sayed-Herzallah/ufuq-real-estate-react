import React from "react";
import { LangProvider } from "./context/LangContext";
import "./css/lang-sidebar.css";
import Navbar       from "./components/Navbar";
import Hero         from "./components/Hero";
import Stats        from "./components/Stats";
import Testimonials from "./components/Testimonials";
import WhyUs        from "./components/WhyUs";
import Properties   from "./components/Properties";
import Steps        from "./components/Steps";
import Contact      from "./components/Contact";
import Footer       from "./components/Footer";

export default function App() {
  return (
    <LangProvider>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Testimonials />
        <WhyUs />
        <Properties />
        <Steps />
        <Contact />
      </main>
      <Footer />
    </LangProvider>
  );
}
