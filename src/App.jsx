
import Button from "./components/Button/index";
import ItemListContainer from "./components/ItemListContainer/index";
import Navbar from "./components/Navbar/index";

export default function App() {
  

  return (
    <>
    <Navbar/>
    <ItemListContainer greeting="DetalleProducto"/>
    <h1 >
      Hola mundo
    </h1>
    <Button texto="Home"/>
    <Button texto="Productos"/>
    <Button texto="Contact"/>
    <p>contador{}</p>
    </>
  ) 
}