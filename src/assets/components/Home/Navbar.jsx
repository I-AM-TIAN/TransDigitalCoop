import React, { useState } from "react";
import "../../css/navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav>
        <ul className="navbar">
          <li className="logo">
            <a href="/">
              <img src="/tdc.png" alt="Logo" />
            </a>
          </li>
          <li className="menu-icon" onClick={toggleMenu}>
            ☰
          </li>
          <div className={`menu ${menuOpen ? "open" : ""}`}>
            <li className="list_item">
              <a href="/">Inicio</a>
            </li>
            <li className="list_item">
              <a href="/nosotros">Nosotros</a>
            </li>
            <li className="list_item">
              <a href="#pricing">Planes y Precios</a>
            </li>
            <li className="list_item">
              <a href="">Contáctanos</a>
            </li>
            <li className="list_item">
              <a href="/guias">Guías</a>
            </li>
          </div>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
