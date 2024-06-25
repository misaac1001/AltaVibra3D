import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
/* import { CartContextProvider } from "./pages/CartContextProvider"; */
import { CustomNav } from "./component/layout/nav/Nav";
import { Banner } from "./assets/banner/Banner";
import { Products } from "./component/layout/products/Products";
import { ProductList } from "./component/specific/productList/ProductList";

import { Footer } from "./component/layout/footer/Footer";
import { Clientes } from "./pages/clientes/Clientes";
import { Nosotras } from "./pages/nosotras/Nosotras";
import { Header } from "./component/layout/header/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <CustomNav />
        <Banner />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:category" element={<Products />} />
          <Route
            path="/product/:category/:subcategory"
            element={<Products />}
          />
          <Route path="/#header" element={<Header />} />
          <Route path="/detalle/pid" element={<ProductList />} />
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/nosotras" element={<Nosotras />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
