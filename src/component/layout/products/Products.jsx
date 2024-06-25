import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { productsData } from "../../../servicesAPI/products";
import { ProductList } from "../../specific/productList/ProductList";
import { Loading } from "/src/component/loading/Loading";
import "./products.css";
import { Box, Tabs, Tab } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("ANIMALES");
  const [activeSubcategory, setActiveSubcategory] = useState(null);
  const navigate = useNavigate();
  const { cid } = useParams();

  useEffect(() => {
    setLoading(true);
    try {
      let filteredProducts = [];

      // Si hay una subcategoría activa, filtra por esa subcategoría
      if (activeSubcategory) {
        filteredProducts =
          productsData[activeCategory][activeSubcategory] || [];
      } else if (cid) {
        // Si hay un cid pero no una subcategoría activa, filtra por cid
        filteredProducts = productsData[activeCategory][cid] || [];
      } else {
        // Si no hay ni cid ni subcategoría activa, muestra todos los productos de la categoría activa
        Object.keys(productsData[activeCategory]).forEach((key) => {
          filteredProducts = [
            ...filteredProducts,
            ...productsData[activeCategory][key],
          ];
        });
      }

      setProducts(filteredProducts);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  }, [cid, activeCategory, activeSubcategory]);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setActiveSubcategory(null); // Resetea la subcategoría al cambiar de categoría

    let filteredProducts = [];
    if (category === "LLAVEROS" || category === "MASCARAS") {
      // Si la categoría es 'LLAVEROS' o 'MASCARAS', directamente asigna los productos correspondientes
      filteredProducts = productsData[category];
    } else if (productsData[category]) {
      // Para categorías con subcategorías, como 'ANIMALES', filtra los productos basándose en la categoría seleccionada
      filteredProducts = Object.keys(productsData[category]).reduce(
        (acc, key) => {
          return [...acc, ...productsData[category][key]];
        },
        []
      );
    }

    setProducts(filteredProducts); // Actualiza la lista de productos con los filtrados
    navigate(`/product/${category}`); // Navega a la ruta de la categoría
  };

  const handleSubcategoryClick = (subcategory) => {
    setActiveSubcategory(subcategory);
    navigate(`/product/${activeCategory}/${subcategory}`); // Navega a la ruta de la subcategoría
  };

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        handleCategoryClick("ANIMALES");
        break;
      case 1:
        handleCategoryClick("LLAVEROS");
        break;
      case 2:
        handleCategoryClick("MASCARAS");
        break;
      default:
        break;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 mt-8  shadow rounded">
      <h1 className="text-3xl  text-center mb-6">Nuestros Productos</h1>

      <Box className="box " sx={{ borderBottom: 1, borderColor: "#908D88" }}>
        <ThemeProvider theme={theme}>
          <Tabs
            className=" -mb-px "
            textColor="secondary"
            indicatorColor="secondary"
            value={value}
            onChange={handleChange}
          >
            <Tab
              className="block focus:outline-none"
              style={{ fontSize: "15px" }}
              label="Animales"
              {...a11yProps(0)}
            />
            <Tab
              className="block focus:outline-none"
              label="Llaveros"
              {...a11yProps(1)}
            />
            <Tab
              className="py-4 px-6 block focus:outline-none "
              label="Máscaras"
              {...a11yProps(2)}
            />
          </Tabs>
        </ThemeProvider>
      </Box>

      {activeCategory === "ANIMALES" && (
        <div className="flex flex-wrap justify-center gap-4 py-4 ">
          <button
            className="hover:bg-gray-200 py-2 px-4 rounded border"
            onClick={() => handleSubcategoryClick("Dinosaurios")}
            style={{ borderRadius: "10px", borderColor: "black" }}
          >
            Dinosaurios
          </button>
          <button
            className="hover:bg-gray-200 py-2 px-4 rounded border"
            onClick={() => handleSubcategoryClick("Dragones")}
            style={{ borderRadius: "10px", borderColor: "black" }}
          >
            Dragones
          </button>
          <button
            className="hover:bg-gray-200 py-2 px-4 rounded border"
            onClick={() => handleSubcategoryClick("Insectos")}
            style={{ borderRadius: "10px", borderColor: "black" }}
          >
            Insectos
          </button>
          <button
            className="hover:bg-gray-200 py-2 px-4 rounded border"
            onClick={() => handleSubcategoryClick("Reptiles")}
            style={{ borderRadius: "10px", borderColor: "black" }}
          >
            Reptiles
          </button>
          <button
            className="hover:bg-gray-200 py-2 px-4 rounded border"
            onClick={() => handleSubcategoryClick("Marítimos")}
            style={{ borderRadius: "10px", borderColor: "black" }}
          >
            Marítimos
          </button>
          <button
            className=" hover:bg-gray-200 py-2 px-4 rounded border"
            onClick={() => handleSubcategoryClick("Mamíferos")}
            style={{ borderRadius: "10px", borderColor: "black" }}
          >
            Mamíferos
          </button>
        </div>
      )}

      {loading ? (
        <div className="flex justify-center items-center">
          <div
            className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
            role="status"
          >
            <span className="visually-hidden">
              <Loading />
            </span>
          </div>
        </div>
      ) : (
        <ProductList products={products} />
      )}
    </div>
  );
};
