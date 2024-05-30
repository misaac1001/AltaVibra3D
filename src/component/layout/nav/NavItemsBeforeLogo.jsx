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
  ];

  return [
    <div
      className="lg:flex lg:items-center lg:order-2 lg:mx-7"
      key="navItemsBeforeLogo"
    >
      {navItemsBeforeLogo.map((link) => (
        <NavLink
          key={link.id}
          to={`/${link.path}`}
          className="block lg:inline-block lg:mt-0 lg:mx-5 text-black hover:text-black mr-4"
        >
          {link.title}
        </NavLink>
      ))}
    </div>,
  ];
};

export default NavItemsBeforeLogo;
