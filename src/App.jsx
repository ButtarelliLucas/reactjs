import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Error from "./components/Error/Error";
import Cart from "./components/Cart/Cart";
import { CarritoProvider } from "./context/CartContext";
import Formulario from "./components/Formulario/Formulario";
import Checkout from "./components/Checkout/Checkout";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

export default function App() {
  const [productsLoaded, setProductsLoaded] = useState(false);
  console.log (productsLoaded)

  const handleProductsLoaded = () => {
    setProductsLoaded(true)
    console.log (handleProductsLoaded);
  };

  return (
    <div className="">
      <CarritoProvider>
        <Navbar />
        <br />
        <Routes>
          <Route path="/" element={<Navigate to="/products" />} />
          <Route path="/home" element={<Home onProductsLoaded={handleProductsLoaded} />} />
          <Route
            path="/products"
            element={<ItemListContainer onProductsLoaded={handleProductsLoaded} />}
            
          />
          <Route
            path="/products/:id"
            element={<ProductDetail onProductsLoaded={handleProductsLoaded} />}
           
          />
          <Route
            path="/products/category/:categoryId"
            element={<ItemListContainer onProductsLoaded={handleProductsLoaded} />}
            
          />
          <Route
            path="/products/category/:categoryId/:id"
            element={<ProductDetail onProductsLoaded={handleProductsLoaded} />}
         
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/contacto" element={<Formulario />} />
          <Route path="/404" element={<Error />} />
          <Route
            path="*"
            element={<Navigate to="/404" />}

          />
        </Routes>
        {productsLoaded && <Footer />}
      </CarritoProvider>
    </div>
  );
}
