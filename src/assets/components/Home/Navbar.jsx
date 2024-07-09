import "../../css/hero.css";

function Navbar() {
  return (
    <>
      <nav>
        <ul className="navbar">
          <li className="logo">
            <a href="">
              <img src="/tdc.png" alt="" />
            </a>
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
          <li className="list_item">
            <a href="">Guías</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
