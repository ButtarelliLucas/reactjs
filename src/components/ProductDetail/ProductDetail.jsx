import { Card, CardBody, CardFooter, CardHeader, ThemeProvider, Button } from "@material-tailwind/react";
import { useEffect, useState, useContext } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { doc, getDoc } from 'firebase/firestore'; // Agregado
import { db } from "../../services/config"; // Agregado
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";

const ProductDetail = () => {
  const [producto, setProducto] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [agregarCantidad, setAgregarCantidad] = useState(0)

  const { agregarProducto } = useContext(CartContext);

  const getProducto = async () => {
    try {
      const productoDocRef = doc(db, "tiendaReactJs", id); // Cambio en cómo se obtiene el producto
      const productoDocSnapshot = await getDoc(productoDocRef);

      if (productoDocSnapshot.exists()) {
        const productoData = productoDocSnapshot.data();
        setProducto({ id: productoDocSnapshot.id, ...productoData });
      } else {
        setProducto(null);
      }

      setLoading(false);
    } catch (error) {
      console.error("Error al obtener el producto:", error);
      setProducto(null);
    }
  };

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);

    const item = { id: producto.id, title: producto.title, precio: producto.price, image: producto.image, stock: producto.stock };
    agregarProducto(item, cantidad);
  }

  useEffect(() => {
    getProducto();
  }, []);

  if (!producto) {
    return <Navigate to="/404" />;
  }

  if (loading) {
    return <h2 className=" animate-pulse">Loading...</h2>;
  }


  return (
    <div className="grid justify-items-center">
      <div className="w-full sm:w-3/4 lg:w-2/3 xl:w-1/2">
        <br />
        <br />
        <Card className="bg-gradient-to-t from-gray-200 grid grid-cols-1 sm:grid-cols-2">
          <div className="flex justify-center">
            <div className="flex flex-col">
            <CardHeader className="flex justify-center ">
              <img
                src={producto.image}
                alt="img-blur-shadow"
                className="p-10 w-full"
                // Add a style to control the height of the image (optional)
                style={{ maxHeight: "400px" }}
              />
            </CardHeader>
            <div className="flex justify-center"></div>
          </div></div>
          <CardBody className="p-4">
            <span className="mb-2">
              <span className="flex flex-col space-y-4">
                <span className="text-2xl font-bold text-left text-black">
                  {producto.title}
                </span>
                <div>
                  <div className="font-bold text-left text-black">
                    Descripcion
                  </div>
                  <div className="text-left">{producto.description}</div>
                </div>
                <div className="text-right">
                  {"Category: " + producto.category}
                </div>
              </span>
            </span>
            {agregarCantidad > 0 ? (
              <div className="space-y-2">
                <Link to="/products">
                  <Button className="bg-orange-600 rounded-full item">
                    ⬅ Seguir Comprando
                  </Button>
                </Link>
                <Link to="/cart">
                  <Button className="bg-orange-600 rounded-full item">
                    Terminar Compra
                  </Button>
                </Link>
              </div>
            ) : (
              <ItemCount inicial={1} stock={producto.stock} precio={producto.price} funcionAgregar={manejadorCantidad} />
            )}
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default ProductDetail;

