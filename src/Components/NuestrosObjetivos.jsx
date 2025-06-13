import React from 'react';

const objetivos = [
  {
    title: 'Ayudar a emprendedores para crear marcas únicas.',
    description:
      'Apoyamos a emprendedores para que puedan construir marcas que reflejen su esencia única.',
  },
  {
    title:
      'Brindar asesorías sobre comunicación en redes sociales a emprendedores.',
    description:
      'Ofrecemos consultorías personalizadas sobre cómo manejar y crecer en las redes sociales para emprendedores.',
  },
  {
    title: 'Ser asequible para las nuevas marcas.',
    description:
      'Nos aseguramos de que nuestros servicios sean accesibles para las nuevas marcas que están empezando su camino.',
  },
  {
    title: 'Lograr que emprendedores crezcan en los medios digitales.',
    description:
      'Queremos que los emprendedores logren una presencia sólida y exitosa en los medios digitales.',
  },
];

const NuestrosObjetivos = () => {
  return (
    <section className="bg-[#b8926a] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-8">
          Nuestros Objetivos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {objetivos.map((obj, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
            >
              <h3 className="text-xl font-bold text-[#b8926a] mb-4">
                {obj.title}
              </h3>
              <p className="text-[#b8926a] flex-grow">{obj.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NuestrosObjetivos;
