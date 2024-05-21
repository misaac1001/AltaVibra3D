import "./App.css";
import { Banner } from "./component/banner/Banner";
import { Header } from "./component/header/Header";
import { Nav } from "./component/nav/Nav";
import { ProductList } from "./component/productList/ProductList";

function App() {
  return (
    <>
      <Nav />
      <Banner/>
      <Header/>
      <ProductList/>
      
    </>
  );
}

export default App;
