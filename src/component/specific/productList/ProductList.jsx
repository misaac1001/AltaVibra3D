import { useState } from "react";
import { Item } from "./Item";

export const ProductList = ({ products }) => {
  const [filterState, setFilterState] = useState("");

  const handleFilterChange = (event) => {
    setFilterState(event.target.value);
  };

  const filteredProducts = filterState
    ? products.filter((prod) =>
        prod.nombre.toLowerCase().includes(filterState.toLowerCase())
      )
    : products;

  return (
    <div >
      <div > 
      </div>
      <div >
        {filteredProducts.map((product) => (
          <Item key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

