import "../../css/learn.css";

function Learn() {
  return (
    <>
      <div className="container-learn">
        <div className="content-learn">
          <div className="text-container-learn">
            <h2 className="text-container-learn-title">¡Aprende con TransDigitalCoop!</h2>
            <p>Descarga ya nuestras guías y aprende con nosotros.</p>
            <a href="/guias">Ver Ahora</a>
          </div>
          <div className="image-container-learn">
            <img src="/muñeco.png" alt="Aprende con TransDigitalCoop" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Learn;
