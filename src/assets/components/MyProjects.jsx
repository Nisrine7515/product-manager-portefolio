import { useNavigate } from "react-router-dom";

import "./MyProjects.css";

const MyProjects = () => {
  const navigate = useNavigate();
  const goToProjectsList = () => {
    navigate("./ProjectsList");
  };
  return (
    <div className="projects-button">
      <button onClick={goToProjectsList}>My Projects</button>
    </div>
  );
};

export default MyProjects;
