import React from "react";

export default function ProjectCard({
  title,
  description,
  tags,
  link,
  images,
}) {
  return (
    <article className="card">
      <div className="card__body">
        <h3 className="card__title">{title}</h3>
        <p className="card__text">{description}</p>
        <div className="tags">
          {tags?.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>
      </div>
      <div className="card__footer">
        <a href={link} target="_blank" rel="noreferrer" className="btn btn--sm">
          See case study
        </a>{" "}
        <a
          href="https://github.com/Nisrine7515/FOCUSme-app"
          target="_blank"
          rel="noreferrer"
          className="btn btn--sm"
        >
          Github link
        </a>
      </div>
    </article>
  );
}
