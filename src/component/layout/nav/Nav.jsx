import { Logo } from "../../../assets/logo/Logo";
import "./nav.css";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import NavItemsBeforeLogo from "./NavItemsBeforeLogo";
import NavItemsAfterLogo from "./NavItemsAfterLogo";
import { NavLink } from "react-router-dom";

export const CustomNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-white text-black p-4 navStyle">
      <div className="flex items-center justify-between relative w-full">
        <div className="hidden lg:flex lg:items-center lg:order-2 lg:mx-7">
          <NavItemsBeforeLogo className="block lg:inline-block lg:mt-0 lg:mx-5 text-black hover:text-black mr-4" />
        </div>
        <NavLink
          to="/"
          className="logoN lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 text-xl font-bold"
        >
          <Logo />
        </NavLink>
        <div className="hidden lg:flex lg:items-center lg:order-2 lg:mx-7">
          <NavItemsAfterLogo className="block lg:inline-block lg:mt-0 lg:mx-5 text-black hover:text-black mr-4" />
        </div>
        <button onClick={toggleMenu} className="lg:hidden">
          <MenuIcon />
        </button>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden mt-4">
          <NavItemsBeforeLogo />
          <NavItemsAfterLogo />
        </div>
      )}
    </div>
  );
};
