import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { CartContextProvider } from "./pages/CartContextProvider";
import { CustomNav } from "./component/layout/nav/Nav";
import { Banner } from "./assets/banner/Banner";
import { Products } from "./component/layout/products/Products";
import { ProductList } from "./component/specific/productList/ProductList";
import { Clientes } from "./pages/Clientes";
import { Nosotras } from "./pages/Nosotras";
import { Footer } from "./component/layout/footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartContextProvider value={{}}>
          <CustomNav />
          <Banner />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/product" element={<Products />} />
            <Route path="/detalle" element={<ProductList />} />
            <Route path="/clientes" element={<Clientes />} />
            <Route path="/nosotras" element={<Nosotras />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer />
        </CartContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
