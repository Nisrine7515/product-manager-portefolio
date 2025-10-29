import { useNavigate } from "react-router-dom";
import "./Skills.css";

const Skills = () => {
  const navigate = useNavigate();
  const goToSkills = () => {
    navigate("./skills");
  };
  return (
    <div className="skills-button">
      <button onClick={goToSkills}>My skills</button>
    </div>
  );
};

export default Skills;
