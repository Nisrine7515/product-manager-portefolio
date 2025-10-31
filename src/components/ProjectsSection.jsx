import React from "react";
import ProjectCard from "./ProjectCard.jsx";
import "../styles/sections.css";

const PROJECTS = [
  {
    id: 1,
    title: "FOCUSme App",
    tags: ["PRD", "User Research"],
    description:
      "FOCUSme provides a minimalist interface with only the essentials :  a timer, session options, and progress statistics. Users can start a focus session of 15, 25, or 50 minutes, aligning with the most common focus durations. Upon completion, sessions are tracked to provide insights into total focus time and session averages.",
    link: "https://drive.google.com/file/d/1wnnovTN-H2bzZWUE91jJHN3v3abkC_i4/view?usp=sharing",
    images: ["/src/background-photo.jpeg", "/images/focusme-2.png"],
  },
  // {
  //   id: 2,
  //   title: "Marketplace partenaires",
  //   tags: ["Strategy", "Roadmap", "Go-to-market"],
  //   description:
  //     "Définition de la vision, priorisation & lancement d’une marketplace générant 18% de revenu incrémental.",
  //   link: "https://exemple.com/case-study-marketplace",
  // },
  // {
  //   id: 3,
  //   title: "Feature flag & expérimentation",
  //   tags: ["Experimentation", "Data", "Delivery"],
  //   description:
  //     "Mise en place d’un framework d’expérimentation et d’un process weekly review orienté impact.",
  //   link: "https://exemple.com/case-study-experimentation",
  // },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="section container">
      <div className="section__head">
        <h2 className="section__title">Projects</h2>
        <p className="section__desc">
          I build few concrete, impact and metrics-driven case studies.{" "}
        </p>
      </div>
      <div className="grid grid--3">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.id} {...p} />
        ))}
      </div>
    </section>
  );
}
