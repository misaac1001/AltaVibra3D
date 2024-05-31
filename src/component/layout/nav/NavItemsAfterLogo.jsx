import { NavLink } from "react-router-dom";

const NavItemsAfterLogo = () => {
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

  return [
    <div key="navItemsAfterLogo" className="flex flex-col lg:flex-row">
      {navItemsAfterLogo.map((link) => (
        <NavLink key={link.id} to={`/${link.path}`} className="mx-4">
          {link.title}
        </NavLink>
      ))}
    </div>,
  ];
};

export default NavItemsAfterLogo;
