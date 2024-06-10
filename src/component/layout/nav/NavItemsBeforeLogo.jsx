import { NavLink } from "react-router-dom";

const NavItemsBeforeLogo = () => {
  const navItemsBeforeLogo = [
    {
      title: "Home",
      id: "home",
      hash: "/",
    },
    {
      title: "Productos",
      id: "productos",
      hash: "/#products",
    },
    {
      title: "Proceso de compra",
      id: "proceso",
      hash: "/#header",
    },
  ];

  return (
    <div key="navItemsBeforeLogo" className="flex flex-col lg:flex-row">
      {navItemsBeforeLogo.map((link) => (
        <NavLink key={link.id} to={link.hash} className="mx-4">
          {link.title}
        </NavLink>
      ))}
    </div>
  );
};

export default NavItemsBeforeLogo;
