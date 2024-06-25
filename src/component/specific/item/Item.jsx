import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Loading } from "../../loading/Loading";
import { productsData } from "../../../servicesAPI/products"; 
import "./item.css"

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
        <div className="target">
          <div className="name">{product.nombre}</div>
          <div className="cardSize">
          <img
            src={product.img}
            className=""
            alt={product.nombre}
          />
          <div className="">
            <Link to={`/detalle/${product.id}`}>
              <button className="">
                Ver
              </button>
            </Link>
          </div>
          </div>
        </div>
      )}
    </>
  );
};