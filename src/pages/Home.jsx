import { Header } from "../component/layout/header/Header";
import { Products } from "../component/layout/products/Products";
import { ContactInfo } from "../component/layout/contactInfo/ContactInfo";

export const Home = () => {
  return (
    <>
      <div id="header">
        <Header />
      </div>
      <div id="products">
        <Products />
      </div>
      <ContactInfo />
    </>
  );
};
