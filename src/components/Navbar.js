import React, { useState } from "react";

function Navbar() {
  const [show, setShow] = useState(false);

  return (
    <header className={`header ${show ? "nav_show" : ""}`}>
      <div className="logo">
        <h2>
          <span>E</span> TUTOR
        </h2>
      </div>

      <button className="nav_icon" onClick={() => setShow(!show)}>
        <div className="line_1" />
        <div className="line_2" />
        <div className="line_3" />
      </button>

      <nav onClick={() => setShow(!show)}>
        <ul>
          <li>
            <a href="#inicio">Inicio</a>
          </li>
          <li>
            <a href="#about">Conocenos</a>
          </li>
          <li>
            <a href="#servicios">Servicios</a>
          </li>
          <li>
            <a href="#contact">Contancto</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
