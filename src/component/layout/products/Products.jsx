import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProductList } from "../../specific/productList/ProductList";

export const Products = () => {
  return (
    <>
      <BrowserRouter>
        <section className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-center mb-6">
            Nuestros productos
          </h1>
          <p className="text-gray-600 text-center mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            commodi nesciunt incidunt quo vel, debitis cupiditate eum ullam ad,
            in maiores voluptas dolores quos iste a eveniet laudantium? Aliquam,
            officiis.
          </p>
          <Routes>
            <Route path="/Detalle" element={<ProductList />}></Route>
          </Routes>
        </section>
      </BrowserRouter>
    </>
  );
};
