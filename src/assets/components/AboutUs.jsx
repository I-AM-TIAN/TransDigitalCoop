import React from 'react';
import '../css/aboutus.css';
import Navbar from './Home/Navbar';
import image1 from '/transdigitalcoop2.jpg';
import image2 from '/image.png';
import image3 from '/equipotdc.jpg';
import Footer from './Home/Footer';


const AboutUs = () => {
  return (
    <>
    <Navbar />
    
    <div className="tdc-container">
      <section className="tdc-section">
        <h2>¿Quiénes somos?</h2>
        <div className="tdc-content">
          <p>
            La Cooperativa TransDigitalCoop, desarrollada por estudiantes, profesores y egresados de la Universidad Cooperativa de Colombia en Montería, surge como respuesta a la necesidad de transformación digital en el sector de la economía solidaria y cooperativa. A través de la integración de tecnologías digitales y la promoción de la asociatividad empresarial, busca mejorar la competitividad, productividad y rentabilidad de las organizaciones solidarias.
          </p>
          <img src={image2} alt="Equipo TransDigitalCoop" />
        </div>
      </section>
      
      <section className="tdc-section">
        <h2>Nuestra misión</h2>
        <div className="tdc-content">
          <img src={image1} alt="Misión TransDigitalCoop" />
          <p>
            Es contribuir a los Objetivos de Desarrollo Sostenible, especialmente en crecimiento socioeconómico y trabajo decente. TransDigitalCoop ofrece servicios de implementación de transformación digital en MiPymes y desarrollo de plataformas tecnológicas cooperativas, como RedSSApp, para impulsar el desarrollo económico y cultural de los territorios asociativos y solidarios. Con un enfoque en la innovación y la eficiencia, busca convertirse en líderes reconocidos en el campo, ofreciendo soluciones de alta calidad en transformación digital. Además, a través de la creación de la Red de Integración Económica Digital de Organizaciones Solidarias en Córdoba, se promueve la asociatividad digital y se fortalece el sector de la economía solidaria en la región.
          </p>
        </div>
      </section>
      
      <section className="tdc-section">
        <h2>Enfoque</h2>
        <div className="tdc-content">
          <p>
            TransDigitalCoop es reconocido por su equipo joven con habilidades emprendedoras y valores cooperativos, centrado en alcanzar los Objetivos de Desarrollo Sostenible, especialmente el crecimiento socioeconómico y trabajo decente. Su enfoque se basa en integrar la transformación digital en todas las esferas organizativas y conectar redes de asociatividad entre emprendimientos cooperativos y comunidades de práctica. Con alianzas estratégicas, su visión es impulsar la transformación digital en las Organizaciones de Economía Social y Solidaria, mientras su visión es convertirse en líderes reconocidos en el campo, ofreciendo soluciones innovadoras y eficientes que generen valor para sus clientes. <br />
            <br />
            En cuanto a su portafolio de servicios se ha enfocado en implementar la transformación digital en las MiPymes a través de herramientas tecnológicas de las TIC, utilizando plataformas cooperativas, facilitando el acceso a mercados, redes de comercio electrónico, atención en línea, logística de última milla, entre otros. Además, se ha logrado la creación de la Red de Integración Económica Digital de las Organizaciones Solidarias en Córdoba. La formulación de proyectos y la cooperación internacional también han sido elementos fundamentales en el enfoque estratégico del uso de las TIC, así como
            impulsar el desarrollo económico y cultural de territorios asociativos y solidarios por medio de la implementación de plataformas tecnológicas cooperativas.
          </p>
          <img src={image3} alt="Equipo TransDigitalCoop" />
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
};

export default AboutUs;
