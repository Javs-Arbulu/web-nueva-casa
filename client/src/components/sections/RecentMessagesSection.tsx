import React from "react";

const RecentMessagesSection: React.FC = () => {
  const messages = [
    {
      id: 1,
      title: "El Propósito de la Juventud",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      date: "2025-09-28",
      description:
        "Descubre cómo encontrar tu propósito en esta etapa de la vida",
    },
    {
      id: 2,
      title: "Fe en Tiempos Difíciles",
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      date: "2025-09-21",
      description: "Mantener la esperanza cuando todo parece difícil",
    },
    {
      id: 3,
      title: "Amor y Relaciones",
      image:
        "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      date: "2025-09-14",
      description: "Construyendo relaciones saludables basadas en el amor",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Mensajes Recientes
          </h2>
          <p className="text-lg text-gray-600">
            Escucha nuestras últimas prédicas y fortalece tu posición de Dios
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main featured message */}
          <div className="lg:col-span-2">
            <div className="relative rounded-lg overflow-hidden shadow-xl group cursor-pointer">
              <img
                src={messages[0].image}
                alt={messages[0].title}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="inline-block bg-primary text-white px-3 py-1 rounded-full text-sm font-medium mb-3">
                  Nuevo
                </span>
                <h3 className="text-2xl font-bold mb-2">{messages[0].title}</h3>
                <p className="text-gray-200 mb-4">{messages[0].description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-300">
                    Septiembre 28, 2025
                  </span>
                  <button className="bg-white text-primary px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                    Ver Mensaje
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Side messages */}
          <div className="space-y-6">
            {messages.slice(1).map((message) => (
              <div key={message.id} className="group cursor-pointer">
                <div className="relative rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={message.image}
                    alt={message.title}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h4 className="font-semibold mb-1">{message.title}</h4>
                    <p className="text-xs text-gray-300">
                      {message.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="btn btn-primary text-lg py-4 px-8">Ver Más</button>
          <button className="btn btn-secondary text-lg py-4 px-8 ml-4">
            Suscríbete
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecentMessagesSection;
