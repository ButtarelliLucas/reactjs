import Navbar from "./components/Navbar/Navbar";
import {  Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Error from "./components/Error/Error";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
import { CarritoProvider } from "./context/CartContext";




export default function App() {

  const [showCart, setShowCart] = useState(false);

  return (
    <div className=" bg-gray-100">
      <CarritoProvider>
      
      <Navbar  />
     
     <br />
     

      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products"element={<ItemListContainer/>}/>
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/products/category/:categoryId" element={ <ItemListContainer/>}/>
        
        <Route path="/products/category/:categoryId/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart/> } />
        <Route path="/checkout" element= {<h2> bancame un flan porfis, me falta esto solamente</h2>}/>
        

        <Route path="/404" element={<Error/>} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
      </CarritoProvider>
   
   












      
    </div>
  )
}
