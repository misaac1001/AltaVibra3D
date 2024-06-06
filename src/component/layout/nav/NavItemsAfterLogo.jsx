import { NavLink } from "react-router-dom";

const link = [
  {
    title: "Clientes",
    id: "clientes",
    path: "Clientes",
  },
  {
    title: "Nosotras",
    id: "nosotras",
    path: "Nosotras",
  },
];

const NavItemsAfterLogo = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      {link.map((link) => (
        <NavLink key={link.id} to={`/link/${link.path}`} className="mx-4">
          {link.title}
        </NavLink>
      ))}
    </div>
  );
};

export default NavItemsAfterLogo;
