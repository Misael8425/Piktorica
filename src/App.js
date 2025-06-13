// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'; // Importar la página principal
import ServicioDetalle from './Components/ServicioDetalle'; // Importar el componente de detalle del servicio

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios/:service" element={<ServicioDetalle />} />
      </Routes>
    </Router>
  );
}

export default App;
