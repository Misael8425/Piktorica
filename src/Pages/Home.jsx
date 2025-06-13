// src/pages/Home.jsx
import React from 'react';
import Navbar from '../Components/Navgar';
import Servicios from '../Components/Servicios';
import NuestrosObjetivos from '../Components/NuestrosObjetivos';
import Contacto from '../Components/Contacto';

const Home = () => {
  return (
    <div className="font-sans text-[#b8926a]">
      <Navbar />

      {/* Hero más grande */}
      <section
        id="inicio"
        className="flex items-center justify-center text-center bg-[#eae6df] pt-40 pb-32 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl sm:text-5xl font-semibold mb-6">
            Bienvenidos a Piktorica Studio!
          </h2>
          <p className="text-lg sm:text-xl leading-relaxed">
            Una marca de branding e identidad visual enfocada en las empresas
            MYPyMES; llena de color, creatividad y sobre todo empatía.
          </p>
        </div>
      </section>

      <section id="servicios">
        <Servicios />
      </section>

      <section id="objetivo">
        <NuestrosObjetivos />
      </section>

      <section id="contacto">
        <Contacto />
      </section>

      <footer className="bg-[#b8926a] text-white py-6 text-center mt-8">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Piktorica Studio. Todos los derechos
          reservados.
        </p>
      </footer>
    </div>
  );
};

export default Home;