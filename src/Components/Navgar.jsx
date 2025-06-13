import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white text-[#b8926a] shadow-md z-10">
      <div className="flex justify-between items-center p-4 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold">Piktorica Studio</h1>
        {/* Botón hamburguesa (móvil) */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        {/* Enlaces */}
        <ul
          className={`${
            isOpen ? 'flex' : 'hidden'
          } md:flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0 text-lg`}
        >
          {['Inicio', 'Servicios', 'Nuestro objetivo', 'Contacto'].map((item) => {
            const id = item.toLowerCase().replace(/\s+/g, '');
            return (
              <li key={id} className="px-2 md:px-0">
                <a
                  href={`#${id}`}
                  className="block hover:text-black transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
);
};

export default Navbar;
