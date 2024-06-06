import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { CustomNav } from "../component/layout/nav/Nav";
import { Banner } from "../assets/banner/Banner";
import { Header } from "../component/layout/header/Header";
import { Products } from "../component/layout/products/Products";
import { ProductList } from "../component/specific/productList/ProductList";
import { ContactInfo } from "../component/layout/contactInfo/ContactInfo";
import { Footer } from "../component/layout/footer/Footer";
import { Clientes } from "../pages/Clientes";
import { Nosotras } from "../pages/Nosotras";

export const Home = () => {
  return (
    <>
      <BrowserRouter>
        <CustomNav />
        <Banner />
        <Header />
        <Routes>
          <Route path="/product" element={<Products />} />
          <Route path="/detalle" element={<ProductList />} />
          <Route path="/product" element={<Products />} />
          <Route path="/detalle" element={<ProductList />} />
          <Route path="/productos" element={<Products />} />
          <Route path="/proceso" element={<ProductList />} />
          <Route path="/link/:cid" element={<Clientes />} />
          <Route path="/link/:cid" element={<Nosotras />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <ContactInfo />
        <Footer />
      </BrowserRouter>
    </>
  );
};
