import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section
      className="relative h-[95vh] flex items-center justify-center"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      {/* Background image would go here - using gradient for now */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center bg-no-repeat"></div>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Encuentra tu propósito en comunidad
        </h1>

        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
          Descubre un espacio vibrante donde la juventud se encuentra con la
          espiritualidad. Te invitamos a ser parte de nuestra comunidad!
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-10 h-10 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
