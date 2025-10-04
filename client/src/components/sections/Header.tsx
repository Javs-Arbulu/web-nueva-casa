import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-lg">
      <nav className="max-w-7xl px-4 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-primary">
                Nueva Casa
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="flex items-center gap-8">
              <a
                href="#"
                className="text-gray-900 text-primary px-4 py-2 font-medium"
              >
                Inicio
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-primary px-4 py-2 font-medium"
              >
                Ministerios
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-primary px-4 py-2 font-medium"
              >
                Mi Iglesia
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-primary px-4 py-2 font-medium"
              >
                Servicios
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-primary px-4 py-2 font-medium"
              >
                Donar
              </a>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="hidden md:block">
            <div className="flex items-center gap-4">
              <button className="btn btn-primary">Únete Hoy</button>
              <button className="btn btn-secondary">Ver en Vivo</button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900">
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
