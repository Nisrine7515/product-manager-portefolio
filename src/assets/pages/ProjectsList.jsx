import "./ProjectsList.css";

const ProjectsList = () => {
  // ✅ Fonctions pour ouvrir les liens externes dans un nouvel onglet
  const openGitHubFocusMe = () => {
    window.open(
      "https://github.com/Nisrine7515/FOCUSme-app", // 🔗 Mets ici le bon lien GitHub
      "_blank",
      "noopener,noreferrer"
    );
  };

  const openMarvelApp = () => {
    window.open(
      "https://marvelapi-front-reactjs.netlify.app/",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const openLeafletApp = () => {
    window.open(
      "https://testing-leaf-let.netlify.app/",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="projectslist-page-buttons">
      <div className="projects-h1">Click to see my projects ↴</div>

      <ul className="allprojects-buttons">
        {/* -------------------- FOCUSME PROJECT -------------------- */}
        <li className="project-item">
          <button
            type="button"
            onClick={openGitHubFocusMe}
            className="nav-link project-button"
          >
            FOCUSme
          </button>

          <div className="button-description">
            <p>
              A minimalist productivity app designed to help users build deep
              focus habits and manage their time effectively.
            </p>
            <p>
              It uses a clean Pomodoro-style timer to structure work sessions,
              reduce distractions, and track progress over time.
            </p>
            <p>react native & js</p>
          </div>

          <a
            href="https://docs.google.com/presentation/d/1-PCx8380uhbHAnSoJB0bqgAv_5i23BUe/edit?usp=sharing&ouid=113097425318546044692&rtpof=true&sd=true"
            target="_blank"
            rel="noopener noreferrer"
            className="drive-link"
          >
            CLICK to see fictional launching as a product manager for FOCUSme
          </a>

          <div>
            <img
              src="/product-image-focus.png"
              alt="focus"
              className="project-image"
            />
          </div>
        </li>

        {/* -------------------- MARVEL API PROJECT -------------------- */}
        <li className="project-item">
          <button
            type="button"
            onClick={openMarvelApp}
            className="nav-link project-button"
          >
            API MARVEL
          </button>

          <div className="button-description">
            <p>
              A React website powered by the Marvel API that lets users search,
              view, and explore their favorite Marvel characters, comics, and
              stories.
            </p>
            <p>
              Built with clean JavaScript and API integration to display dynamic
              superhero data in real time.
            </p>
            <p>react & js</p>
          </div>

          <div>
            {/* <img
              src="/product-image-marvel.png"
              alt="API Marvel"
              className="project-image"
            /> */}
          </div>
        </li>

        {/* -------------------- LEAFLET PROJECT -------------------- */}
        <li className="project-item">
          <button
            type="button"
            onClick={openLeafletApp}
            className="nav-link project-button"
          >
            TESTING LEAFLET
          </button>

          <div className="button-description">
            <p>
              Interactive map built with React and Leaflet, allowing users to
              explore locations, visualize data, and interact with markers in
              real time.
            </p>
            <p>react & js</p>
          </div>

          <div>
            {/* <img
              src="/product-image-leaflet.png"
              alt="Testing Leaflet"
              className="project-image"
            /> */}
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ProjectsList;
