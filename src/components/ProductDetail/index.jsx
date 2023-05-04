
import { Card, CardBody, CardFooter, CardHeader, ThemeProvider, Button } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";


const ProductDetail = () => {
  const [producto, setProducto] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const getProducto = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProducto(data);
      setLoading(false);
    } catch (error) {
      setProducto(null);
    }
  };

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

        <div className=" grid justify-items-center">
          <div className="w-3/4 ">
            <br />
            <br />
            <Card className="  bg-gradient-to-t from-gray-200 grid grid-cols-2  ">

              <div className="flex justify-center">
                <CardHeader className=" flex justify-center  ">
                  <img
                    src={producto.image}
                    alt="img-blur-shadow"
                    className=" p-10"
                    width="400"
                  />
                </CardHeader>
              </div>


              <CardBody className=" ">
                <span className="mb-2   ">
                  <span className="flex flex-col space-y-10 ">
                    <span className=" text-2xl font-bold text-left text-black">{producto.title}</span>
                    <div>
                      <div className="font-bold text-left text-black">Descripcion</div>
                      <div className="text-left">{producto.description}</div>
                    </div>
                    <div className=" text-right ">{"Category: " + producto.category}</div>
                  </span>


                </span>
                <Button className=" rounded-full mt-5 item   " color="cyan" > Add to Cart  $ {producto.price}</Button>
              </CardBody>

              <div></div>

              <CardFooter divider className=" p-2">

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
