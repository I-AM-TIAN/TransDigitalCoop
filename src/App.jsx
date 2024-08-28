import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./assets/components/Home";
import Guides from './assets/components/Guides';
import AboutUs from './assets/components/AboutUs';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rutas-de-aprendizaje" element={<Guides />} />
          <Route path='/nosotros' element={<AboutUs />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
