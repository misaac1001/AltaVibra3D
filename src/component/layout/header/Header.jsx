import "./header.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import TouchAppIcon from "@mui/icons-material/TouchApp";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export const Header = () => {
  return (
    <section className="container mx-auto px-4 py-8 mt-8">
      <h1 className="text-3xl  text-center mb-6">Proceso de compra</h1>
      <div className="style">
        <p className="subtitle text-black text-center ">
          Accede al catalogo de productos, elegí el que más te guste y
          contáctate con nosotras para finalizar la compra.
        </p>
      </div>
      <div className="flex flex-col md:flex-row mt-10 justify-center">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="iconStyle flex justify-center mb-5">
            <RemoveRedEyeIcon
              className="mt-6"
              style={{ color: "white", fontSize: "3rem" }}
            />
          </div>
          <p className="text-xl text-black font-semibold mb-3">MIRÁ</p>
          <p className="text-black">
            Descubrí los increíbles productos que tenemos para ofrecerte
          </p>
        </div>
        <div className="hidden lg:block ">
          <div className="flex flex-col items-center justify-center">
            <ArrowForwardIosIcon
              className="text-gray-500"
              style={{ color: "#1A202C", fontSize: "2rem", marginTop: "4rem" }}
            />
            <ArrowForwardIosIcon
              className="text-gray-500"
              style={{ color: "#1A202C", fontSize: "2rem" }}
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center text-center mt-7 lg:mt-0">
          <div className="iconStyle flex justify-center mb-5">
            <TouchAppIcon
              className="mt-6"
              style={{ color: "white", fontSize: "3rem" }}
            />
          </div>
          <p className="text-xl text-black font-semibold mb-3">ELEGÍ</p>
          <p className="text-black">
            Selecciona tu favorito desde un amplio catalogo
          </p>
        </div>
        <div className="hidden lg:block ">
          <div className="flex flex-col items-center justify-center">
            <ArrowForwardIosIcon
              className="text-gray-500"
              style={{ color: "#1A202C", fontSize: "2rem", marginTop: "4rem" }}
            />
            <ArrowForwardIosIcon
              className="text-gray-500"
              style={{ color: "#1A202C", fontSize: "2rem" }}
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center text-center mt-7 lg:mt-0">
          <div className="iconStyle flex justify-center mb-5">
            <WhatsAppIcon
              className="mt-6"
              style={{ color: "#FFF9F9", fontSize: "3rem" }}
            />
          </div>
          <p className="text-xl text-black font-semibold mb-3">PEDÍ</p>
          <p className="text-black">
            Contáctate directamente con nosotras y realiza tu pedido
          </p>
        </div>
      </div>
    </section>
  );
};
