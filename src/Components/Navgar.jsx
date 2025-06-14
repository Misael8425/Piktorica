import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Usamos los íconos de Lucide para el botón hamburguesa

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar si el menú está abierto

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Cambiar el estado de 'isOpen' al hacer clic
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white text-[#b8926a] shadow-md z-10">
      <div className="flex justify-between items-center p-4 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold">Piktorica Studio</h1>

        {/* Botón hamburguesa (visible solo en pantallas pequeñas) */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Menú */}
        <ul
          className={`${
            isOpen ? 'flex' : 'hidden' // Si 'isOpen' es true, mostramos el menú
          } md:flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0 text-lg`}
        >
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
