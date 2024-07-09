import React from 'react';
import '../../css/about.css';
import groupImage from '/image.png'; // Asegúrate de que la ruta sea correcta

const About = () => {
    return (
        <div className="transdigitalcoop">
            <div className="transdigitalcoop-text">
                <h1>¿Quiénes forman TransDigitalCoop?</h1>
                <p>Descubra más sobre nosotros y nuestros objetivos.</p>
                <button className="info-button">Más información</button>
            </div>
            <div className="transdigitalcoop-image">
                <img src={groupImage} alt="TransDigitalCoop Group" />
            </div>
        </div>
    );
};

export default About;