import { useEffect, useState } from "react";
import "../css/hero.css";

function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Simulación de carga o evento que activa la visibilidad
    setIsVisible(true);
  }, []);

  return (
    <>
      <header>
        <nav>
          <ul className="navbar">
            <li className="logo">
              <a href=""><img src="/tdc.png" alt="" /></a>
            </li>
            <li className="list_item">
              <a href="">Inicio</a>
            </li>
            <li className="list_item">
              <a href="">Nosotros</a>
            </li>
            <li className="list_item">
              <a href="#pricing">Planes y Precios</a>
            </li>
            <li className="list_item">
              <a href="">Contáctanos</a>
            </li>
          </ul>
        </nav>
        <div className={`container ${isVisible ? 'appear' : ''}`}>
          <div className="left-section">
            <h1>Bienvenid@ a TransDigitalCoop</h1>
            <p>Atrévete a dar el paso que necesita tu organización hacia la transformación digital.</p>
          </div>
          <div className="right-section">
            <h2>¿Quieres que te contactemos?</h2>
            <form>
              <div className="form-group">
                <input type="text" placeholder="Nombre" required />
                <input type="text" placeholder="Apellido" required />
              </div>
              <input type="email" placeholder="Correo electrónico" required />
              <input type="number" placeholder="Celular" required />
              <select required>
                <option value="" disabled selected>Ocupación</option>
                <option value="opcion1" selected>Empleado</option>
                <option value="opcion2">Estudiante</option>
              </select>
              <p>Deja tus datos y uno de nuestros asesores se contactará contigo.</p>
              <button type="submit">Enviar</button>
            </form>
          </div>
        </div>
      </header>
    </>
  );
}

export default Hero;
