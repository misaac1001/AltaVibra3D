import { useState } from "react";
import { Item } from "../item/Item";

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
    <div className="container" >
      <div className="flex flex-wrap " >
        {filteredProducts.map((product) => (
          <Item key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

