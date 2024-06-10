import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productsData } from "../../../servicesAPI/products";
import { ProductList } from "../../specific/productList/ProductList";
import { Loading } from "../../loading/Loading";

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { cid } = useParams();

  useEffect(() => {
    setLoading(true);
    try {
      let filteredProducts = [];

      if (cid) {
        console.log("Filtrando por categoría:", cid);
        // Asumiendo que cada categoría es una clave en productsData
        filteredProducts = productsData[cid] || [];
      } else {
        // Si no hay cid, asumimos que queremos todos los productos
        Object.keys(productsData).forEach((key) => {
          filteredProducts = [...filteredProducts, ...productsData[key]];
        });
      }

      console.log("Productos filtrados:", filteredProducts);
      setProducts(filteredProducts);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  }, [cid]);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Productos</h2>
      {loading ? <Loading /> : <ProductList products={products} />}
    </div>
  );
};
