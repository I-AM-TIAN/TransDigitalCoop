// Catalog.js
import React from 'react';

import storytellingImage from '/story.png';
import transformacion from '/transformacion.png';
import mapsImage from '/maps.png';
import redImage from '/redssapp.png';
import cadena from '/cadena.png';
import virtualvent from '/virtualvent.png';
import territorio from '/territorio.png'
import cadenaUrl from '/cadenasuministro.pdf';
import virtualventUrl from '/guiavirtualvent.pdf';
import transforUrl from '/transformaciondigital.pdf';
import territoriosUrl from '/Guiadeterritoriosolidario.pdf';
import mapsUrl from '/googlemaps.pdf';
import redsUrl from '/redssappguia.pdf';
import storyUrl from '/storytelling.pdf';
import '../../css/catalog.css';

const Catalog = () => {
  return (
    <>
     <h1>¡Aprende con TransDigitalCoop!</h1>
      <div className="learning-container">
        <div className="cards">
          <div className="card">
            <img src={mapsImage} alt="MAPS" className="card-image" />
            <h2>Maps</h2>
            <p>
              Guía Completa para Empresas: Maximiza tu Presencia en Google Maps
            </p>
            <a href={mapsUrl} download>Descargar</a>
          </div>
          <div className="card">
            <img
              src={storytellingImage}
              alt="Storytelling"
              className="card-image"
            />
            <h2>Storytelling</h2>
            <p>Guión para grabar tu Storytelling Vol. 2</p>
            <a href={storyUrl} download>Descargar</a>
          </div>
          <div className="card">
            <img
              src={redImage}
              alt="RedssApp"
              className="card-image"
            />
            <h2>RedssApp</h2>
            <p>
              ¿Quieres formar parte de nuestra red de asociatividad empresarial? Aprende cómo.
            </p>
            <a href={redsUrl} download>Descargar</a>
          </div>
          <div className="card">
            <img
              src={cadena}
              alt="Cadena de suministro 4.0"
              className="card-image"
            />
            <h2>Cadena de suministro 4.0</h2>
            <p>
              ¿Qué es la cadena de suministro 4.0? Aprende ahora
            </p>
            <a href={cadenaUrl} download>Descargar</a>
          </div>
          <div className="card">
            <img
              src={transformacion}
              alt="Transformación Digital"
              className="card-image"
            />
            <h2>Transformación Digital</h2>
            <p>
              ¿Qué es la transformación digital? Impulsa tu empresa digitalmente
            </p>
            <a href={transforUrl} download>Descargar</a>
          </div>
          <div className="card">
            <img
              src={virtualvent}
              alt="Storytelling"
              className="card-image"
            />
            <h2>Comercio Electrónico</h2>
            <p>
              ¿Qué es el comercio electrónico? Mejora tu presencia digital.
            </p>
            <a href={virtualventUrl} download>Descargar</a>
          </div>
          <div className="card">
            <img
              src={territorio}
              alt="Territorios solidarios"
              className="card-image"
            />
            <h2>Territorios Solidarios</h2>
            <p>
              ¿Qué son territorios solidarios?
            </p>
            <a href={territoriosUrl} download>Descargar</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Catalog;
