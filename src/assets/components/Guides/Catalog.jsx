import React from "react";

import storytellingImage from '/story.png';
import mapsImage from '/maps.png';
import redImage from '/redssapp.png';
import cadena from '/cadena.png';
import '../../css/catalog.css';

const Catalog = () => {
  return (
    <>
      <div className="learning-container">
        <h1>¡Aprende con TransDigitalCoop!</h1>
        <div className="cards">
        <div className="card">
            <img
              src={mapsImage}
              alt="Cadena de suministro 4.0"
              className="card-image"
            />
            <h2>Transformación Digital</h2>
            <p>
              ¿Qué es la transformación digital? Impulsa tu empresa digitalmente
            </p>
            <button>Descargar</button>
          </div>
          <div className="card">
            <img src={mapsImage} alt="MAPS" className="card-image" />
            <h2>Maps</h2>
            <p>
              Guía Completa para Empresas: Maximiza tu Presencia en Google Maps
            </p>
            <button>Descargar</button>
          </div>
          <div className="card">
            <img
              src={redImage}
              alt="Cadena de suministro 4.0"
              className="card-image"
            />
            <h2>RedssApp</h2>
            <p>
              ¿Quieres formar parte de nuestra red de asociatividad empresarial? Aprende cómo.
            </p>
            <button>Descargar</button>
          </div>
          <div className="card">
            <img
              src={cadena}
              alt="Cadena de suministro 4.0"
              className="card-image"
            />
            <h2>Cadena de suministro 4.0</h2>
            <p>
              ¿Qué es la cadena de suministro 4.0? Aprende
              ahora
            </p>
            <button>Descargar</button>
          </div>
          <div className="card">
            <img
              src={storytellingImage}
              alt="Storytelling"
              className="card-image"
            />
            <h2>Storytelling</h2>
            <p>Guión para grabar tu Storytelling Vol. 2</p>
            <button>Descargar</button>
          </div>
          <div className="card">
            <img
              src={mapsImage}
              alt="Cadena de suministro 4.0"
              className="card-image"
            />
            <h2>Comercio Electrónico</h2>
            <p>
              ¿Qué es el comercio electrónico? Mejora tu presencia digital.
            </p>
            <button>Descargar</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Catalog;
