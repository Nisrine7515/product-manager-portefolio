import React from "react";
import Hero from "../components/Hero.jsx";
import ProjectsSection from "../components/ProjectsSection.jsx";
import SkillsSection from "../components/SkillsSection.jsx";

export default function Home({ onContactClick }) {
  return (
    <main>
      <Hero onContactClick={onContactClick} />
      <ProjectsSection />
      <SkillsSection />
    </main>
  );
}
