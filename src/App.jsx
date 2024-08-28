import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./assets/components/Home";
import Guides from './assets/components/Guides';
import AboutUs from './assets/components/AboutUs';
import Rutas from './assets/components/Guides/Rutas';
import RutasG from './assets/components/RutasG';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rutas-de-aprendizaje" element={<RutasG />} />
          <Route path="/guias" element={<Guides />} />
          <Route path='/nosotros' element={<AboutUs />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
