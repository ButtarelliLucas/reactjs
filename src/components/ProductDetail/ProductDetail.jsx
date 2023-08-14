import { Card, CardBody, CardFooter, CardHeader, ThemeProvider, Button } from "@material-tailwind/react";
import { useEffect, useState, useContext } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { getProductos } from "../../asyncmock";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";

const ProductDetail = () => {
  const [producto, setProducto] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [agregarCantidad, setAgregarCantidad] = useState(0)

  const { agregarProducto, descontarStock } = useContext(CartContext);



  const getProducto = async () => {
    try {
      const data = await getProductos();
      setProducto(data.find(producto => producto.id === +id));
      setLoading(false);
    } catch (error) {
      setProducto(null);
    }
  };
  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    console.log("productos agregados " + cantidad
    )

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
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <ThemeProvider>
        <div className="grid justify-items-center">
          <div className="w-3/4">
            <br />
            <br />
            <Card className="bg-gradient-to-t from-gray-200 grid grid-cols-2">
              <div className="flex justify-center">
                <CardHeader className="flex justify-center">
                  <img
                    src={producto.image}
                    alt="img-blur-shadow"
                    className="p-10"
                    width="400"
                  />
                </CardHeader>
              </div>
              <CardBody className="">
                <span className="mb-2">
                  <span className="flex flex-col space-y-10">
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
                  <div>
                    <Link to="/products " >
                      <Button className="bg-orange-600 rounded-full mt-5 item" color="orange" > ⬅ Seguir Comprando </Button>
                    </Link>
                    <br />
                    <Link to="/cart" >
                      <Button className="bg-orange-600 rounded-full mt-5 item" color="orange" > Terminar Compra </Button>
                    </Link>
                  </div>) :
                  (<ItemCount inicial={1} stock={producto.stock} precio={producto.price} funcionAgregar={manejadorCantidad} />)
                }
              </CardBody>
              <div></div>
              <CardFooter divider className="p-2">
                <div></div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
};

export default ProductDetail;