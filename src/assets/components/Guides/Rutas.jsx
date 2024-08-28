import React from "react";
import "../../css/rutas.css";
import icono from "/Group16.png";

const Rutas = () => {
  return (
    <>
      <h1>Rutas de aprendizaje</h1>
      <div className="line"></div>
      <div className="rutas">
        <a href="">
          <div className="ruta">
            <img src={icono} alt="" />
            <h2>Asociatividad Empresarial 4.0</h2>
          </div>
        </a>
      </div>
    </>
  );
};

export default Rutas;
