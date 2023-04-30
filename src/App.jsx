
import { useEffect, useState } from "react";
import Button from "./components/Button/index";
// import CounterMuestra from "./components/Counter/CounterMuestra";
import IconPlus from "./components/Icons";
import ItemListContainer from "./components/ItemListContainer/index";
import Navbar from "./components/Navbar/index";
import axios from "axios";
import ProductItem from "./components/ProductItem/index";


const URL_API = "https://fakestoreapi.com/products";

export default function App() {
  // const [count, setCount] = useState(1);
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
    < >
      <Navbar />
      <div>
        <ItemListContainer greeting="DetalleProducto" />
      </div>
      <h1 >
        Hola mundo
      </h1>
      <Button texto="Home" />
      <Button texto="Productos" />
      <Button texto="IconPlus" />
      <IconPlus />
      <div  className="grid grid-cols-4 gap-x-8 gap-y-8">
      {productos.map((producto, ) => (
        <ProductItem producto={producto} key={producto.id} />
      ))}
      </div>
      {/* <p>contador{ }</p>
      <div>
        <h1>My App</h1>
        <CounterMuestra count={count} setCount={setCount} />
        <h2>{producto.title}</h2>
        <img src={producto.image} alt={producto.title} />
        <h3>{producto.description}</h3>
      </div> */}
    </>
  )
}