import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Loading } from "../../loading/Loading";

export const Item = ({ product }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const dbFirestore = getFirestore();
        const productDoc = doc(dbFirestore, "products", product.id);
        const productData = await getDoc(productDoc);

        if (productData.exists()) {
          console.log("Detalles del producto cargados:", productData.data());
        } else {
          console.log("No se encontraron datos para el ID proporcionado");
        }
      } catch (error) {
        console.error("Error fetching product details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [product.id]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="max-w-xs mb-6 bg-white shadow-lg rounded overflow-hidden">
          <img
            src={product.img}
            className="w-full"
            alt="Imagen de planta"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{product.nombre}</div>
            
            <Link to={`/detalle/${product.id}`}>
              <button className="mt-4 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow w-full">
                Detalles
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
