import React from 'react';
import Navbar from './Home/Navbar';
import Footer from './Home/Footer';
import Rutas from './Guides/Rutas';
import Catalog from './Guides/Catalog';

const Guides = () => {
  return (
    <>
        <Navbar />
        <Catalog />
        <Footer />
    </>
  )
}

export default Guides;