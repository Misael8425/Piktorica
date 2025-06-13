import React from 'react';
import { FaInstagram } from 'react-icons/fa';

const socialLinks = [
  {
    href: 'https://www.instagram.com/piktorica.studio/',
    icon: <FaInstagram aria-label="Instagram" />,
    label: 'Instagram',
  },
];

const Contacto = () => {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-[#b8926a] mb-6">
          Contacto
        </h2>
        <p className="text-lg sm:text-xl text-[#b8926a] mb-12">
          ¡Conéctate con nosotros! Síguenos en Instagram para ver más de nuestro trabajo y novedades.
        </p>
        <div className="flex justify-center space-x-6">
          {socialLinks.map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl sm:text-6xl text-[#b8926a] hover:text-black transition-colors duration-300"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contacto;
