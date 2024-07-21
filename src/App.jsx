import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./assets/components/Home";
import Guides from './assets/components/Guides';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/guias" element={<Guides />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
