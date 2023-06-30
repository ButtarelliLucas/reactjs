import Navbar from "./components/Navbar/index";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Index";
import ProductDetail from "./components/ProductDetail/index";
import ItemListContainer from "./components/ItemListContainer";
import P404 from "./components/404/P404";

export default function App() {


  return (
    <div className=" bg-gray-100">
      <BrowserRouter>
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
      </BrowserRouter>









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
