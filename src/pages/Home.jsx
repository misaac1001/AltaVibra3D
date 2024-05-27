import { Banner } from "../assets/banner/Banner";
import { ContactInfo } from "../component/layout/contactInfo/ContactInfo";
import { Footer } from "../component/layout/footer/Footer";
import { Header } from "../component/layout/header/Header";
import { CustomNav } from "../component/layout/nav/Nav";
import { Products } from "../component/layout/products/Products";

export const Home = () => {
  return (
    <>
      <CustomNav />
      <Banner />
      <Header />
      <Products />
      <ContactInfo />
      <Footer />
    </>
  );
};
