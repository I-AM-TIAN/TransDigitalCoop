import React from "react";
import ServiceCard from "../Services/ServiceCard";
import "../../css/services.css";

const services = [
  {
    name: "Virtual Vent",
    image: "/VirtualVentSVG.svg",
    description: "Plataforma de comercio electrónico enfocada a potenciar las ventas de las cooperativas.",
  },
  {
    name: "RedssApp",
    image: "/RedssAppSER.png",
    description: "Red de Integración Económica Digital de las Organizaciones Solidarias en Córdoba.",
  },
  {
    name: "Modelo TIC",
    image: "/Group.png",
    description: "Modelo de incorporación de las TIC para ayudar a las MiPymes a transformarse digitalmente.",
  },
];

const Services = () => {
  return (
    <>
      <h2>Nuestros Servicios</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </>
  );
};

export default Services;
