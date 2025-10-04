import React from "react";

const CommunitySection: React.FC = () => {
  return (
    <section className="py-16" style={{ background: "var(--gradient-soft)" }}>
      <div className="max-w-7xl px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Encuentra tu Comunidad
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              Los grupos pequeños son el corazón de nuestra iglesia. Son el
              lugar donde puedes explorar tu espiritualidad, sanar su corazón y
              encontrar su propósito. Únete a nosotros para construir vínculos
              duraderos y crecer juntos en este emocionante viaje de
              descubrimiento y crecimiento.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Encuentra un grupo que se adapte a tu horario y ubicación, y
              comienza a construir relaciones significativas que te ayudarán a
              crecer en tu fe.
            </p>

            <div className="pt-4">
              <button className="btn btn-primary text-lg py-4 px-8">
                Explorar Grupos
              </button>
            </div>
          </div>

          {/* Right side - Community illustration */}
          <div className="relative">
            <div className="bg-gradient-to-br from-green-200 to-green-400 rounded-3xl p-8 relative overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 left-4 w-8 h-8 bg-white rounded-full"></div>
                <div className="absolute top-16 right-8 w-6 h-6 bg-white rounded-full"></div>
                <div className="absolute bottom-8 left-8 w-10 h-10 bg-white rounded-full"></div>
                <div className="absolute bottom-16 right-4 w-4 h-4 bg-white rounded-full"></div>
              </div>

              {/* Community image/illustration */}
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Comunidad Nueva Casa"
                  className="w-full h-80 object-cover rounded-2xl shadow-xl"
                />
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-primary text-white p-4 rounded-full shadow-lg">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  ></path>
                </svg>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-accent text-white p-4 rounded-full shadow-lg">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
