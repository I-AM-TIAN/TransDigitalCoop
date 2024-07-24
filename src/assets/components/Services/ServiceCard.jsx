import React from 'react';
import '../../css/services.css';

const ServiceCard = ({ service }) => {
  return (
    <div className="service-card">
      <img src={service.image} alt={service.name} className="service-image" />
      <h2 className="service-name">{service.name}</h2>
      <p className="service-description">{service.description}</p>
      <button className="service-button">Ver más</button>
    </div>
  );
};

export default ServiceCard;
