import "./ProjectsList.css";

const ProjectsList = () => {
  return (
    <div className="projectslist-page-buttons">
      <div className="projects-h1">Click to see my projects ↴</div>
      <ul className="allprojects-buttons">
        <button>
          <a
            href="https://github.com/Nisrine7515/pm-project-FocusMe"
            className="nav-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            FOCUSme
            <p className="button-description">
              <p>
                A minimalist productivity app designed to help users build deep
                focus habits and manage their time effectively.{" "}
              </p>
              <p>
                It uses a clean Pomodoro-style timer to structure work sessions,
                reduce distractions, and track progress over time.
              </p>
            </p>
            <p>react native & js</p>
          </a>
          {/* <img
            src={vintedImage}
            alt="Vinted Replique"
            className="project-image"
          /> */}
        </button>
        <button>
          <a
            href="https://marvelapi-front-reactjs.netlify.app/"
            className="nav-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            API MARVEL
            <p className="button-description">
              <p>
                A React website powered by the Marvel API that lets users
                search, view, and explore their favorite Marvel characters,
                comics, and stories.{" "}
              </p>
              <p>
                Built with clean JavaScript and API integration to display
                dynamic superhero data in real time.
              </p>
            </p>
            <p>react & js</p>
          </a>
          {/* <img src={marvelImage} alt="API Marvel" className="project-image" /> */}
        </button>

        <button>
          <a
            href="https://testing-leaf-let.netlify.app/"
            className="nav-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            TESTING LEAFLET
            <p className="button-description">
              Interactive map built, allowing users to explore locations,
              visualize data, and interact with markers in real time.
            </p>
            <p>react & js</p>
          </a>
          {/* <img
            src={leafImage}
            alt="Testing Leaf Let"
            className="project-image"
          /> */}
        </button>
      </ul>
    </div>
  );
};

export default ProjectsList;
