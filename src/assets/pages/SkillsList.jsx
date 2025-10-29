import "./SkillsList.css";

const Skillslist = () => {
  return (
    <div className="skillslist-buttons">
      <ul className="allskills-buttons">
        <div>
          <button>Notion</button>
          <button>Jira</button>
          <button>Trello</button>
          <button>Confluence</button>
        </div>
        <div>
          <button>Netflify</button>
          <button>Productboard</button>
          <button>Github</button>
        </div>
        <button>Google analytics</button>
        <button>Looker Studio</button>
        <button>React Native</button>
        <button>React JavaScript</button>
      </ul>
    </div>
  );
};

export default Skillslist;
