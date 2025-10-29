import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import Linkedin from "./Linkedin";
import Github from "./Github";

function Header() {
  const navigate = useNavigate();
  return (
    <header className="header">
      <div className="header-overlay">
        <button className="header-title" onClick={() => navigate("/")}>
          Nisrine SNACEL – Product Manager Portefolio
        </button>
        <div className="header-buttons">
          <Linkedin />
          <Github />
        </div>
      </div>
    </header>
  );
}

export default Header;
