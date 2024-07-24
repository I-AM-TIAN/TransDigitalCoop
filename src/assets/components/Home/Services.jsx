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
    image: "/redssappserv.png",
    description: "Red de Integración Económica Digital de las Organizaciones Solidarias en Córdoba.",
  },
  {
    name: "Servicio 3",
    image: "ruta-a-imagen-3.jpg",
    description: "Descripción del Servicio 3.",
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
