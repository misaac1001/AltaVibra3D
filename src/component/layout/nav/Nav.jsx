import { BrowserRouter, NavLink } from "react-router-dom";
import { Logo } from "../../../assets/logo/Logo";
import "./nav.css";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import NavItemsBeforeLogo from "./NavItemsBeforeLogo";


export const CustomNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  

  const navItemsAfterLogo = [
    {
      title: "Proceso de compra",
      id: "proceso",
      path: "proceso",
    },
    {
      title: "Clientes",
      id: "clientes",
      path: "clientes",
    },
    {
      title: "Nosotras",
      id: "nosotras",
      path: "nosotras",
    },
  ];

  

  return (
    <BrowserRouter>
      <nav className="bg-white text-black p-4 navStyle">
        <div className="flex items-center justify-between relative">
        <NavItemsBeforeLogo  />
          <NavLink
            to="/"
            className="lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 text-xl font-bold"
          >
            <Logo />
          </NavLink>

          <div className="hidden lg:flex lg:items-center lg:order-2 lg:mx-7">
            {navItemsAfterLogo.map((link) => (
              <NavLink
                key={link.id}
                to={`/${link.path}`}
                className="block lg:inline-block lg:mt-0 lg:mx-5 text-black hover:text-black mr-4"
              >
                {link.title}
              </NavLink>
            ))}
          </div>

          <button onClick={toggleMenu} className="lg:hidden">
            <MenuIcon />
          </button>
        </div>
        {isMenuOpen && (
          <div className="lg:hidden mt-4">
            <NavItemsBeforeLogo/>
              
            
          </div>
        )}
      </nav>
    </BrowserRouter>
  );
};
