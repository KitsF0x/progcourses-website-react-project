import React from "react";
import "../styles/style.scss";

const Navigation = () => {
  return (
    <nav className="nav-container">
      <a href="#" className="nav-item">
        Strona główna
      </a>
      <a href="#" className="nav-item">
        O nas
      </a>
      <a href="#" className="nav-item">
        Kursy
      </a>
      <a href="#" className="nav-item">
        Regulamin
      </a>
      <a href="#" className="nav-item">
        Kontakt
      </a>
    </nav>
  );
};

export default Navigation;
