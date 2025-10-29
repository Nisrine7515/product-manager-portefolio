import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// import { library } from "@fortawesome/fontawesome-svg-core";
// library.add(faEnvelope, faKey, faListAlt);
// import {
//   faEnvelope,
//   faKey,
//   faListAlt,
// } from "@fortawesome/free-solid-svg-icons";
// import "@fontsource/kanit";
// import "@fontsource/kanit/700.css";
import "./App.css";
import Header from "./assets/components/Header";
import Home from "./assets/pages/Home";
import SkillsList from "./assets/pages/SkillsList";

import MyProjects from "./assets/components/MyProjects";
import ProjectsList from "./assets/pages/ProjectsList";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="skills" element={<SkillsList />} />
        <Route path="MyProjects" element={<MyProjects />} />
        <Route path="ProjectsList" element={<ProjectsList />} />
      </Routes>
    </Router>
  );
}
export default App;
