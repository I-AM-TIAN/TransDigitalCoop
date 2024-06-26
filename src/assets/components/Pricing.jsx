import "../css/pricing.css";

function Pricing() {
  return (
    <>
      <div className="pricing-section" id="#pricing">
        <h1>Planes y Precios</h1>
        <p>¡Nos ajustamos a tus necesidades!</p>
        <div className="plans">
          <div className="plan">
            <h2>Gratis</h2>
            <p className="price">$ 0.00 / Mes</p>
            <ul>
              <li>
                <span className="check">✔</span>Curso básico de transformación
                digital para tod@s
              </li>
              <li>
                <span className="check">✔</span>Curso básico de asociatividad
                empresarial en entornos digitales
              </li>
              <li className="unchecked">
                <span className="check">✔</span>Diagnostico madurez de
                transformación digital
              </li>
              <li className="unchecked">
                <span className="check">✔</span>Inclusión RedsApp
              </li>
              <li className="unchecked">
                <span className="check">✔</span>Marketing digital a la red de
                asociatividad
              </li>
              <li className="unchecked">
                <span className="check">✔</span>Acceso al directorio de las
                organizaciones aliadas
              </li>
              <li className="unchecked">
                <span className="check">✔</span>Acceso al Marketplace (comercio
                electrónico de productos y servicios)
              </li>
            </ul>
            <button className="boton">¡Adquirir!</button>
          </div>
          <div className="plan">
            <h2>Básico</h2>
            <p className="price">$ 62.500 / Mes</p>
            <ul>
              <li>
                <span className="check">✔</span>Curso básico de transformación
                digital para tod@s
              </li>
              <li>
                <span className="check">✔</span>Curso básico de asociatividad
                empresarial en entornos digitales
              </li>
              <li>
                <span className="check">✔</span>Diagnostico madurez de
                transformación digital
              </li>
              <li>
                <span className="check">✔</span>Inclusión RedsApp
              </li>
              <li>
                <span className="check">✔</span>Marketing digital a la red de
                asociatividad
              </li>
              <li>
                <span className="check">✔</span>Acceso al directorio de las
                organizaciones aliadas
              </li>
              <li className="unchecked">
                <span className="check">✔</span>Acceso al Marketplace (comercio
                electrónico de productos y servicios)
              </li>
            </ul>
            <button className="boton">¡Adquirir!</button>
          </div>
          <div className="plan">
            <h2>Premium</h2>
            <p className="price">$ 62.500 / Mes + Comisión</p>
            <ul>
              <li>
                <span className="check">✔</span>Curso básico de transformación
                digital para tod@s
              </li>
              <li>
                <span className="check">✔</span>Curso básico de asociatividad
                empresarial en entornos digitales
              </li>
              <li>
                <span className="check">✔</span>Diagnostico madurez de
                transformación digital
              </li>
              <li>
                <span className="check">✔</span>Inclusión RedsApp
              </li>
              <li>
                <span className="check">✔</span>Marketing digital a la red de
                asociatividad
              </li>
              <li>
                <span className="check">✔</span>Acceso al directorio de las
                organizaciones aliadas
              </li>
              <li>
                <span className="check">✔</span>Acceso al Marketplace (comercio
                electrónico de productos y servicios)
              </li>
            </ul>
            <button className="boton">¡Adquirir!</button>
          </div>
        </div>
      </div>
      
      <div className="benefits-section">
        <h2>Para obtener beneficios Premium+ como:</h2>
        <div className="benefits">
          <div className="benefit">
            <p>Consultoría especializada</p>
          </div>
          <div className="benefit">
            <p>Diseño de hojas de ruta hacia la transformación digital</p>
          </div>
          <div className="benefit">
            <p>Implementación de sistemas inteligentes</p>
          </div>
        </div>
        <button id="contact-button">¡Contacte con nosotros!</button>
      </div>
    </>
  );
}

export default Pricing;
