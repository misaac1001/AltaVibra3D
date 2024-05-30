import { ContactImage } from "../../../assets/images/ContactImage";
import "./contactInfo.css";
import {} from "module";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export const ContactInfo = () => {
  return (
    <div className="contenedor ">
      <div className="flex flex-wrap justify-between items-center ">
        <div className="hidden lg:block lg:w-1/2 p-4">
          <ContactImage />
        </div>
        <span className="w-full lg:w-1/2 lg:p-4">
          <div className="seccion mb-4">
            <div className="flex row lg:mb-2 mb- ">
              <div className="icono-burbuja">
                <AutoStoriesIcon
                  className="mt-2 mx-2"
                  style={{ color: "white", fontSize: "1.5rem" }}
                />
              </div>
              <h1 className="mx-5 my-1">
                {" "}
                <strong>Somos </strong>{" "}
              </h1>
            </div>
            <p>
              Somos un emprendimiento familiar dedicado a crear diseños
              articulados en 3D.
            </p>
          </div>
          <div className="seccion">
            <div className="flex row mb-2">
              <div className="icono-burbuja ">
                <WhatsAppIcon
                  className="mt-2 mx-2 iconSize"
                  style={{ color: "white", fontSize: "1.5rem" }}
                />
              </div>
              <h1 className="mx-5 my-1">
                {" "}
                <strong>Atención por WhatsApp </strong>{" "}
              </h1>
            </div>
            <p>Contactanos directamente a nuestro whatsapp</p>
          </div>
          <div className="seccion">
            <div className="flex row mb-2 ">
              <div className="icono-burbuja">
                <LocationOnIcon
                  className="lg:mt-2 lg:mx-2"
                  style={{ color: "white", fontSize: "1.5rem" }}
                />
              </div>
              <h1 className="mx-5 my-1">
                {" "}
                <strong>Ubicación</strong>{" "}
              </h1>
            </div>
            <p>Visitanos en:</p>
            {/* Agrega aquí más detalles de ubicación si es necesario */}
          </div>
        </span>
      </div>
    </div>
  );
};
