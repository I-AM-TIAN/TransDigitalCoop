import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const DownloadForm = ({ pdfUrl, title }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:5000/api/guardar-informacion', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.setAttribute('download', `${title}.pdf`);
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
      closeModal();
    } else {
      alert('Error al guardar la información');
    }
  };

  return (
    <div>
      <button onClick={openModal}>Descargar</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Formulario de Descarga"
      >
        <h2>Formulario de Descarga</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Nombre:
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </label>
          <br />
          <label>
            Correo electrónico:
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </label>
          <br />
          <label>
            Teléfono:
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
          </label>
          <br />
          <button type="submit">Enviar y Descargar</button>
        </form>
        <button onClick={closeModal}>Cerrar</button>
      </Modal>
    </div>
  );
};

export default DownloadForm;
