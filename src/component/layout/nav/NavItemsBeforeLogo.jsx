import { NavLink } from "react-router-dom";

const NavItemsBeforeLogo = () => {
  const navItemsBeforeLogo = [
    {
      title: "Home",
      id: "home",
      path: "home",
    },
    {
      title: "Productos",
      id: "productos",
      path: "productos",
    },
    {
      title: "Proceso de compra",
      id: "proceso",
      path: "proceso",
    },
  ];

  return (
    <div key="navItemsBeforeLogo" className="flex flex-col lg:flex-row">
      {navItemsBeforeLogo.map((link) => (
        <NavLink key={link.id} to={`/link/${link.path}`} className="mx-4">
          {link.title}
        </NavLink>
      ))}
    </div>
  );
};

export default NavItemsBeforeLogo;
