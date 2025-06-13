import React from 'react';
import { useParams } from 'react-router-dom';

const servicioImagenes = {
  'degradado-efecto-3d': [
    '/images/P1.png','/images/P2.png','/images/P3.png','/images/P4.png'
  ],
  mockup: [
    '/images/P5.png','/images/P6.png','/images/P7.png','/images/P8.png','/images/P9.png'
  ],
  'muy-pronto': [
    '/images/P11.jpg','/images/P12.jpg'
  ],
};

const formatServiceTitle = (str) =>
  str.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase());

const ServicioDetalle = () => {
  const { service } = useParams();
  const images = servicioImagenes[service] || [];
  const title = formatServiceTitle(service);

  return (
    <section className="bg-white py-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-semibold text-[#b8926a]">{title}</h2>
        <p className="mt-4 text-lg text-[#555]">
          Explora nuestro servicio de {title.toLowerCase()} a través de esta galería.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {images.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {images.map((img, idx) => (
              <div key={idx} className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src={img}
                  alt={`${title} - Imagen ${idx + 1}`}
                  className="w-full h-48 sm:h-56 md:h-64 object-cover"
                />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-[#b8926a]">
            No hay imágenes disponibles.
          </p>
        )}
      </div>
    </section>
  );
};

export default ServicioDetalle;
