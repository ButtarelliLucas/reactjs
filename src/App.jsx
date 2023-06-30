import Navbar from "./components/Navbar/Navbar";
import {  Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import P404 from "./components/Error/Error";

export default function App() {


  return (
    <div className=" bg-gray-100">
      
      <Navbar  />
     
     <br />

      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products"element={<ItemListContainer/>}/>
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/products/category/:categoryId" element={ <ItemListContainer/>}/>
        
        <Route path="/products/category/:categoryId/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<h3>Cart</h3>} />
        <Route path="/404" element={<P404/>} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
   












      
    </div>
  )
}
