import React from "react";
import "../styles/sections.css";

const GROUPS = [
  {
    title: "Discovery",
    items: [
      "User research",
      "Problem framing",
      "Opportunity solution tree",
      "JTBD",
      "Story mapping",
    ],
  },
  {
    title: "Delivery",
    items: [
      "Priorisation (RICE/ICE)",
      "Backlog & Roadmap",
      "Specifications",
      "Agile (Scrum/Kanban)",
      "Stakeholder management",
    ],
  },
  {
    title: "Data",
    items: [
      "SQL",
      "Product analytics",
      "Instrumentation",
      "A/B testing",
      "North Star Metric",
    ],
  },
  {
    title: "Utils",
    items: ["Jira", "Notion", "Figma", "Amplitude", "Mixpanel", "Looker"],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="section section--alt">
      <div className="container">
        <div className="section__head">
          <h2 className="section__title">Skills</h2>
          <p className="section__desc">A mix of discovery, data et delivery.</p>
        </div>
        <div className="grid grid--2">
          {GROUPS.map((g) => (
            <div key={g.title} className="skillgrp">
              <h3 className="skillgrp__title">{g.title}</h3>
              <ul className="skillgrp__list">
                {g.items.map((i) => (
                  <li key={i} className="skillgrp__item">
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
