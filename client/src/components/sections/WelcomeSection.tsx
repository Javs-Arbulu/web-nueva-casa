import React from "react";

const WelcomeSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Bienvenido a Nueva Casa
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text and pastor image */}
          <div className="space-y-8">
            <p className="text-lg text-gray-600 leading-relaxed">
              En Nueva Casa, creemos en el poder de la comunidad y la compasión.
              Somos un espacio inclusivo donde todos puedes explorar tu
              espiritualidad, sanar su corazón y encontrar su propósito. Únete a
              nosotros para construir vínculos duraderos y crecer juntos en este
              emocionante viaje de descubrimiento y crecimiento.
            </p>

            {/* Pastor image */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Pastor de Nueva Casa"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>

          {/* Right side - Community images grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-blue-100 rounded-lg p-6 h-32 flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                  alt="Comunidad joven"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="bg-green-100 rounded-lg p-6 h-40 flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                  alt="Grupo de estudio"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="bg-purple-100 rounded-lg p-6 h-40 flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                  alt="Reunión comunitaria"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="bg-orange-100 rounded-lg p-6 h-32 flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                  alt="Actividades grupales"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
