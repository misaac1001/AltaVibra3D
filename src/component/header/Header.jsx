import "./header.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
export const Header = () => {
  return (
    <section className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Proceso de compra</h1>
      <p className="text-gray-600 text-center mb-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis commodi
        nesciunt incidunt quo vel, debitis cupiditate eum ullam ad, in maiores
        voluptas dolores quos iste a eveniet laudantium? Aliquam, officiis.
      </p>
      <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8">
        <div className="text-center">
          <p className="text-xl font-semibold mb-2">MIRÁ</p>
          <p className="text-gray-600">
            Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit, Maecenas ultrices, orci vitae convallis mattis.
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <ArrowForwardIosIcon className="text-gray-500" />
          <ArrowForwardIosIcon className="text-gray-500" />
        </div>
        <div className="text-center">
          <p className="text-xl font-semibold mb-2">ELEGÍ</p>
          <p className="text-gray-600">
            Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit, Maecenas ultrices, orci vitae convallis mattis.
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <ArrowForwardIosIcon className="text-gray-500" />
          <ArrowForwardIosIcon className="text-gray-500" />
        </div>
        <div className="text-center">
          <p className="text-xl font-semibold mb-2">PEDÍ</p>
          <p className="text-gray-600">
            Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit, Maecenas ultrices, orci vitae convallis mattis.
          </p>
        </div>
      </div>
    </section>
  );
};
