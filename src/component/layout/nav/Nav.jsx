import { useState } from "react";


export const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    {
      title: "Proyectos",
      label: "proyectos",
      url: "#projects",
    },
    {
      title: "Habilidades",
      label: "habilidades",
      url: "#skills",
    },
    {
      title: "Sobre mí",
      label: "sobre-mi",
      url: "#about",
    },
    {
      title: "Contacto",
      label: "contacto",
      url: "#contact",
    },
  ];

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              {/* Logo del sitio */}
              <a href="#" className="flex items-center py-4 px-2">
                <span className="font-semibold text-gray-500 text-lg">
                  Mi Logo
                </span>
              </a>
            </div>
            {/* Links de la navbar */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  className="text-gray-500 hover:text-pink-500 no-underline text-md px-3"
                  aria-label={link.label}
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>
          {/* Botón de menú móvil */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="outline-none mobile-menu-button"
            >
              {isMenuOpen ? (
                <svg
                  className="w-6 h-6 text-gray-500"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6 text-gray-500"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Menu móvil */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <ul className="space-y-2">
          {navItems.map((link) => (
            <li key={link.label}>
              <a
                href={link.url}
                className="block text-gray-500 hover:text-pink-500 no-underline text-md px-3 py-2"
                aria-label={link.label}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
