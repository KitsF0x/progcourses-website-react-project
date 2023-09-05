import React from "react";
import "../styles/style.scss";

const Navigation = () => {
  return (
    <nav className="nav-container">
      <a href="#" className="nav-item logo">
        ProgCourses
      </a>
      <a href="#about" className="nav-item">
        O nas
      </a>
      <a href="#courses" className="nav-item">
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
