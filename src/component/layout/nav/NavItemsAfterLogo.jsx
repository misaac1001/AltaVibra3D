import { NavLink } from "react-router-dom";

const NavItemsAfterLogo = () => {
  const link = [
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
    <div className="flex flex-col lg:flex-row">
      {link.map((link) => (
        <NavLink key={link.id} to={`/${link.path}`} className="mx-4">
          {link.title}
        </NavLink>
      ))}
    </div>
  );
};

export default NavItemsAfterLogo;
