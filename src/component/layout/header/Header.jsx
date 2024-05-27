import "./header.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import TouchAppIcon from '@mui/icons-material/TouchApp';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export const Header = () => {
  return (
    <section className="container mx-auto px-4 py-8 mt-8">
      <h1 className="text-3xl  text-center mb-6">Proceso de compra</h1>
      <p className="text-black text-center mb-20">
        Accede al catalogo de productos, elegí el que más te guste y contáctate
        con nosotras para finalizar la compra.
      </p>
      <div className="container flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8">
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
        <div className="flex items-center space-x-2">
          <ArrowForwardIosIcon className="text-gray-500" />
          <ArrowForwardIosIcon className="text-gray-500" />
        </div>
        <div className="flex flex-col items-center justify-center text-center">
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
        <div className="flex items-center space-x-2">
          <ArrowForwardIosIcon className="text-gray-500" />
          <ArrowForwardIosIcon className="text-gray-500" />
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <div className="iconStyle flex justify-center mb-5">
            <WhatsAppIcon
              className="mt-6"
              style={{ color: "white", fontSize: "3rem" }}
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
