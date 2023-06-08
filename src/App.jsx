
import { useEffect, useState } from "react";

// import CounterMuestra from "./components/Counter/CounterMuestra";
import IconPlus from "./components/Icons";

import Navbar from "./components/Navbar/index";
import axios from "axios";
import ProductItem from "./components/ProductItem/index";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/Home/index";
import ProductDetail from "./components/ProductDetail/index";
import ItemListContainer from "./components/ItemListContainer";

//  Formas Viejas
const URL_API = "https://fakestoreapi.com/products";

export default function App() {
  const [productos, setProductos] = useState([]);

  const getProductos = async () => {
    try {
      const res = await axios(URL_API);
      setProductos(res.data);
    } catch (error) {
      console.log("ERROR: " + error);
    }
  };

  useEffect(() => {
    getProductos();
  }, []);



  return (
    <div className=" bg-gray-100">
      <Navbar  />
     {/*
     <br />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />



        <Route 
          path="/products"
          element={<ItemListContainer/>}
           
        />


        <Route 
          path="/products/category/:categoryId" 
          element={ <ItemListContainer/>
          }/>

        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<h3>Cart</h3>} />
        <Route path="/404" element={<h2>404 Not Found</h2>} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
*/}







      {/* <p>contador{ }</p>
      <div>
        <h1>My App</h1>
        <CounterMuestra count={count} setCount={setCount} />
        <h2>{producto.title}</h2>
        <img src={producto.image} alt={producto.title} />
        <h3>{producto.description}</h3>
      </div> */}





      
    </div>
  )
}