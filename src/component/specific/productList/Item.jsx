import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Loading } from "../../loading/Loading";
import { productsData } from "../../../servicesAPI/products"; 

export const Item = ({ product }) => {
  const [productDetails, setProductDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula la carga de datos
    setLoading(true);
    setTimeout(() => {
      // Aquí asumimos que 'product' tiene una propiedad 'category' y 'subcategory'
      const details = productsData[product.category]?.[product.subcategory]?.find(p => p.nombre === product.nombre);
      setProductDetails(details);
      setLoading(false);
    }, 1000); // Retraso simulado
  }, [product]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="max-w-xs mb-6 bg-black shadow-lg rounded overflow-hidden">
  <img
    src={product.img}
    className="w-full"
    alt={product.nombre}
  />
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2 text-white">{product.nombre}</div>
    
    <Link to={`/detalle/${product.id}`}>
      <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 border border-blue-700 rounded shadow w-full">
        Ver
      </button>
    </Link>
  </div>
</div>
      )}
    </>
  );
};