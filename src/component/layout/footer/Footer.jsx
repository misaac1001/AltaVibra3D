import { Logo } from "../../../assets/logo/Logo";
import "./footer.css";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export const Footer = () => {
  const navItems = [
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
    <>
      <footer>
        <section className="flex justify-around lg:flex-row flex-col items-center mb-5 mt-5">
          <div className="logoF">
            <Logo className="" />
          </div>

          <div className="hidden lg:block flex flex-col items-center mt-5">
            <h1 className="mx-6 mb-4">
              {" "}
              <strong>Alta Vibra 3D</strong>{" "}
            </h1>
            <div key="navItemsAfterLogo" className="flex flex-col items-center">
              {navItems.map((link) => (
                <div key={link.id} to={`/${link.path}`} className="my-2">
                  {link.title}
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center mt-10 ">
            <h1 className="mb-4">
              {" "}
              <strong>Contactanos</strong>{" "}
            </h1>
            <div className="flex lg:flex-col lg:items-center mb-5">
              <a
                href="https://api.whatsapp.com/send?phone=5491140828549&text=Hola!,%20quiero%20información:
                      "
                target="_blank"
                className="flex"
                rel="noopener noreferrer"
              >
                <div className="icons">
                  <WhatsAppIcon
                    className="flex justify-center iconsStyle"
                    style={{ color: "white", fontSize: "2rem" }}
                  />
                </div>
                <div className="hidden lg:block mx-2 mt-2">Whatsapp</div>
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=5491140828549&text=Hola!,%20quiero%20información:
                      "
                target="_blank"
                className="flex"
                rel="noopener noreferrer"
              >
                <div className="icons lg:mx-0 mx-3 lg:my-3">
                  <FacebookIcon
                    className="flex justify-center iconsStyle"
                    style={{ color: "white", fontSize: "2rem" }}
                  />
                </div>
                <div className="hidden lg:block mx-2 lg:mt-5">Facebook</div>
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=5491140828549&text=Hola!,%20quiero%20información:
                      "
                target="_blank"
                className="flex"
                rel="noopener noreferrer"
              >
                <div className="icons lg:mx-0 mx-3 lg:my-3">
                  <InstagramIcon
                    className="flex justify-center iconsStyle"
                    style={{ color: "white", fontSize: "2rem" }}
                  />
                </div>
                <div className="hidden lg:block mx-2 lg:mt-5">Instagram</div>
              </a>
            </div>
          </div>
        </section>
        <div className="flex justify-center">
          <p>&copy; 2024 Alta Vibra 3D. Todos los derechos reservados.</p>
        </div>
      </footer>
    </>
  );
};
