import React, { useState } from "react";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-primary">
                Nueva Casa
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:block">
            <div className="flex items-center gap-8">
              <a href="#" className="text-primary px-4 py-2 font-medium">
                Inicio
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-primary px-4 py-2 font-medium transition-colors duration-200"
              >
                Ministerios
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-primary px-4 py-2 font-medium transition-colors duration-200"
              >
                Mi Iglesia
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-primary px-4 py-2 font-medium transition-colors duration-200"
              >
                Servicios
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-primary px-4 py-2 font-medium transition-colors duration-200"
              >
                Donar
              </a>
            </div>
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:block">
            <div className="flex items-center gap-4">
              <button className="btn btn-primary p-1">Ver en Vivo</button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900 p-2"
              aria-label="Abrir menú"
            >
              {isMobileMenuOpen ? (
                // Close icon
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Hamburger icon
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
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 border-t border-gray-200 bg-white">
            {/* Mobile Navigation Links */}
            <a
              href="#"
              className="block px-3 py-2 text-primary font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Inicio
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-gray-600 hover:text-primary font-medium transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Ministerios
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-gray-600 hover:text-primary font-medium transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Mi Iglesia
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-gray-600 hover:text-primary font-medium transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Servicios
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-gray-600 hover:text-primary font-medium transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Donar
            </a>

            {/* Mobile Action Buttons */}
            <div className="pt-4 pb-2 space-y-3">
              <button
                className="w-full btn btn-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Únete Hoy
              </button>
              <button
                className="w-full btn btn-secondary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Ver en Vivo
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
