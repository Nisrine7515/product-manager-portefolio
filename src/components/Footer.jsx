import React from "react";
import "../styles/footer.css";

export default function Footer({ onContactClick }) {
  const year = new Date().getFullYear();
  return (
    <footer className="ftr">
      <div className="container ftr__inner">
        <p className="ftr__copy">
          © {year} Nisirine SNACEL — Product Manager Portfolio
        </p>
        <button
          className="btn btn--ghost"
          onClick={onContactClick}
          aria-haspopup="dialog"
        >
          Contact
        </button>
      </div>
    </footer>
  );
}
