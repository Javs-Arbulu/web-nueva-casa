import React from "react";

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "Isabella",
      role: "Joven Creyente",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b1c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      testimonial:
        "Nueva Casa me ha ayudado a encontrar mi identidad en Cristo. Los jóvenes aquí son genuinos y me han enseñado lo que significa vivir en comunidad. Estoy muy agradecida por este lugar.",
    },
    {
      name: "Marcos",
      role: "Joven y Músico",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      testimonial:
        "La adoración aqui es increible y me ha inspirado a profundizar mi relacioón con Dios. Las enseñanzas han cambiado mi perspectiva de lo que significa ser un cristiano en el mundo de hoy.",
    },
    {
      name: "Camila",
      role: "Joven y Madre",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      testimonial:
        "Como madre joven, encontré en Nueva Casa un lugar donde mi familia es aceptada y amada. Los programas para niños son excelentes y mi hijo está creciendo en un ambiente lleno de valores.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Testimonios
          </h2>
          <p className="text-lg text-gray-600">
            Escucha lo que otros jóvenes tienen que decir sobre su experiencia
            en Nueva Casa
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Quote icon */}
              <div className="mb-6">
                <svg
                  className="w-10 h-10 text-primary"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  style={{ opacity: 0.3 }}
                >
                  <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zM22 8c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
                </svg>
              </div>

              {/* Testimonial text */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                "{testimonial.testimonial}"
              </p>

              {/* Author info */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>

              {/* Rating stars */}
              <div className="flex mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
