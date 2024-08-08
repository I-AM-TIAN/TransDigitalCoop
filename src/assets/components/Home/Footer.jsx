import React from 'react';
import '../../css/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <p>© 2024 TransDigitalCoop. Todos los derechos reservados.</p>
      </div>
      <div className="social-icons">
        <a href="https://www.facebook.com/share/jt8rQFFAVDqqgUML/?mibextid=qi2Omg" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://www.youtube.com/channel/UC8pUqx0B6hlhcfHdoDNb2LA" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-youtube"></i>
        </a>
        <a href="https://www.instagram.com/transdigitalcoop?igsh=c3R4ZzFrNHNmaGVq" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
