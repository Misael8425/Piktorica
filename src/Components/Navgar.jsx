import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white text-[#b8926a] shadow-md z-10">
      <div className="flex justify-between items-center p-4 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold">Piktorica Studio</h1>
        <ul className="flex space-x-6 text-lg">
          <li>
            <a 
              href="#inicio" 
              className="hover:text-black transition-colors duration-300 cursor-pointer"
            >
              Inicio
            </a>
          </li>
          <li>
            <a 
              href="#servicios" 
              className="hover:text-black transition-colors duration-300 cursor-pointer"
            >
              Servicios
            </a>
          </li>
          <li>
            <a 
              href="#objetivo" 
              className="hover:text-black transition-colors duration-300 cursor-pointer"
            >
              Nuestro objetivo
            </a>
          </li>
          <li>
            <a 
              href="#contacto" 
              className="hover:text-black transition-colors duration-300 cursor-pointer"
            >
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
