import React from 'react';
import { useNavigate } from 'react-router-dom';

const serviciosData = [
  {
    id: 'degradado-efecto-3d',
    title: 'Degradado y efecto 3D',
    image: '/images/P1.png',
    description: 'Descripción del servicio.',
  },
  {
    id: 'mockup',
    title: 'Mockup',
    image: '/images/P8.png',
    description: 'Descripción del servicio.',
  },
  {
    id: 'muy-pronto',
    title: 'Muy pronto',
    image: '/images/P17.png',
    description: 'Descripción del servicio.',
  },
];

const Servicios = () => {
  const navigate = useNavigate();

  const handleVerMas = (service) => {
    navigate(`/servicios/${service}`);
  };

  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Título visible */}
        <h2 className="text-4xl font-semibold text-center text-[#b8926a] mb-8">
          Nuestros Servicios
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviciosData.map(({ id, title, image, description }) => (
            <div
              key={id}
              className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl flex flex-col h-full"
            >
              <img
                src={image}
                alt={title}
                className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-lg"
              />
              <h3 className="text-2xl font-bold text-[#b8926a] mt-4">
                {title}
              </h3>
              <p className="text-[#b8926a] mb-4 flex-grow">
                {description}
              </p>
              <button
                onClick={() => handleVerMas(id)}
                className="mt-auto bg-[#b8926a] text-white py-2 px-6 rounded-full transition-colors duration-300 hover:bg-[#eae6df] hover:text-[#b8926a]"
              >
                Ver más
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicios;
