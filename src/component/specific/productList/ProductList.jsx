import { useState } from "react";
import PropTypes from "prop-types";
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
    <div className="container mt-4">
      <div className="mb-3"> 
      </div>
      <div className="d-flex flex-wrap justify-content-center gap-3">
        {filteredProducts.map((product) => (
          <Item key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

ProductList.propTypes = {
  children: PropTypes.node.isRequired,
};
