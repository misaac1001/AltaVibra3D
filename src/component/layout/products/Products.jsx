import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { productsData } from '../../../servicesAPI/products';
import { ProductList } from '../../specific/productList/ProductList';
import {Loading} from '/src/component/loading/Loading';
import "./products.css";
import { Box, Tabs, Tab } from '@mui/material';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <span>{children}</span>
        </Box>
      )}
    </div>
  );
}

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('ANIMALES');
  const [activeSubcategory, setActiveSubcategory] = useState(null);
  const navigate = useNavigate();
  const { cid } = useParams();

  useEffect(() => {
    setLoading(true);
    try {
      let filteredProducts = [];

      // Si hay una subcategoría activa, filtra por esa subcategoría
      if (activeSubcategory) {
        filteredProducts = productsData[activeCategory][activeSubcategory] || [];
      } else if (cid) {
        // Si hay un cid pero no una subcategoría activa, filtra por cid
        filteredProducts = productsData[activeCategory][cid] || [];
      } else {
        // Si no hay ni cid ni subcategoría activa, muestra todos los productos de la categoría activa
        Object.keys(productsData[activeCategory]).forEach((key) => {
          filteredProducts = [...filteredProducts, ...productsData[activeCategory][key]];
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
    if (category === 'LLAVEROS' || category === 'MASCARAS') {
      // Si la categoría es 'LLAVEROS' o 'MASCARAS', directamente asigna los productos correspondientes
      filteredProducts = productsData[category];
    } else if (productsData[category]) {
      // Para categorías con subcategorías, como 'ANIMALES', filtra los productos basándose en la categoría seleccionada
      filteredProducts = Object.keys(productsData[category]).reduce((acc, key) => {
        return [...acc, ...productsData[category][key]];
      }, []);
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
        handleCategoryClick('ANIMALES');
        break;
      case 1:
        handleCategoryClick('LLAVEROS');
        break;
      case 2:
        handleCategoryClick('MASCARAS');
        break;
      default:
        break;
    }
  };

  

  return (
    <div className="container mx-auto px-4 py-8 mt-8">
      <h1 className="text-3xl text-center mb-6">Nuestros Productos</h1>
      <Box className="Box" sx={{ borderBottom: 1, borderColor: 'divider' }}>
  <Tabs className="Tabs" value={value} onChange={handleChange} aria-label="basic tabs example">
    <Tab className="Tab" label="Animales" {...a11yProps(0)} />
    <Tab className="Tab" label="Llaveros" {...a11yProps(1)} />
    <Tab className="Tab" label="Máscaras" {...a11yProps(2)} />
  </Tabs>
</Box>
      
      {activeCategory === 'ANIMALES' && (
        <div>
          <button onClick={() => handleSubcategoryClick('Dinosaurios')}>Dinosaurios</button>
          <button onClick={() => handleSubcategoryClick('Dragones')}>Dragones</button>
          <button onClick={() => handleSubcategoryClick('Insectos')}>Insectos</button>
          <button onClick={() => handleSubcategoryClick('Reptiles')}>Reptiles</button>
          <button onClick={() => handleSubcategoryClick('Marítimos')}>Marítimos</button>
          <button onClick={() => handleSubcategoryClick('Mamíferos')}>Mamíferos</button>
        </div>
      )}
      
      {loading ? <Loading /> : <ProductList products={products} />}
    </div>
  );
};