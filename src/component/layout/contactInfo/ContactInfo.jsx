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
        <span className="w-full lg:w-1/2 lg:p-4 ">
          <div className="seccion ">
            <div className="flex row mb-2  ">
              <div className="icono-burbuja">
                <AutoStoriesIcon
                  className="lg:mt-3 lg:mx-3 mx-6 sm-icon-size"
                  style={{ color: "white", fontSize: "27px" }}
                />
              </div>
              <h4 className="mx-5">
                {" "}
                <strong>Somos </strong>{" "}
              </h4>
            </div>
            <p className="txtSm">
              Somos un emprendimiento familiar dedicado a crear diseños
              articulados en 3D.
            </p>
          </div>
          <div className="seccion">
            <div className="flex row mb-2">
              <div className="icono-burbuja ">
                <WhatsAppIcon
                  className="lg:mt-3 lg:mx-3 mx-6 sm-icon-size"
                  style={{ color: "white", fontSize: "27px" }}
                />
              </div>
              <h4 className="mx-5">
                {" "}
                <strong>Atención por WhatsApp </strong>{" "}
              </h4>
            </div>
            <p className="txtSm">Contactanos directamente a nuestro whatsapp</p>
          </div>
          <div className="seccion">
            <div className="flex row mb-2 ">
              <div className="icono-burbuja">
                <LocationOnIcon
                  className="lg:mt-3 lg:mx-3 mx-6 sm-icon-size"
                  style={{ color: "white", fontSize: "27px" }}
                />
              </div>
              <h4 className="mx-5 ">
                {" "}
                <strong>Ubicación</strong>{" "}
              </h4>
            </div>
            <p className="txtSm">Visitanos en:</p>
          </div>
        </span>
      </div>
    </div>
  );
};
