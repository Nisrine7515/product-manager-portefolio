import React from "react";
import "../styles/hero.css";

export default function Hero({ onContactClick }) {
  return (
    <section className="hero">
      <div className="container hero__grid">
        <div className="hero__content">
          <p className="eyebrow">Learn a little bit more about me</p>
          <h1 className="hero__title">
            I enjoy building products that are{" "}
            <span className="accent">useful</span>
            <span>,</span> <span className="accent">measurable</span> and{" "}
            <span className="accent">loved</span>.
          </h1>
          <p className="hero__subtitle">
            I'm Nisrine, and I'm studying software engineering and product
            management. What I love about this field is that it allows me to be
            truly autonomous in my work. I have a background in psychology and
            in political arts. I've been eager to develop soft skills which turn
            into hard skills that will benefit me throughout my life, both
            personally and professionally. I love building things from scratch,
            but what I enjoy most is exchanging ideas with other tech
            professionals to gain new insights. Other then that, i have a
            passion for literature and history. I believe working in tech is an
            art, one through which we can tell countless stories.
          </p>
          <div className="hero__actions">
            <a href="#projects" className="btn">
              See my projets
            </a>
            <button className="btn btn--ghost" onClick={onContactClick}>
              Let's connect !
            </button>
          </div>
        </div>
        <div className="hero__visual" aria-hidden="true">
          <div className="hero__card">
            <div className="stat">
              <span className="stat__num">
                🌱 A particulary focus on scientific reseach for methodology :
                observation, hypothesis, experimentation, validation
              </span>
            </div>
            <div className="stat">
              <span className="stat__num">
                📚 Always a work in progress through continous formation{" "}
              </span>
            </div>
            <div className="stat">
              <span className="stat__num">🛠️ Impact over output</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
