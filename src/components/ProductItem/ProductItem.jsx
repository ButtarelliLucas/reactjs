import { ThemeProvider } from "@material-tailwind/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Chip,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import 'animate.css'

const ProductItem = ({ producto }) => {
  return (

    <ThemeProvider>

      <div className="animate__animated animate__fadeIn grid-flow-col transition-colors ">
        <br />
        <br />
        <Card className=" w-72 bg-gradient-to-t from-gray-200">


          <Link to={`${producto.id}`} >
            <CardHeader className="relative h-56 flex justify-center">
              <img
                src={producto.image}
                alt="img-blur-shadow"
                className="h-full p-10"
              />
            </CardHeader>
          </Link>


          <CardBody className="text-center items-center ">
            <Typography className="mb-2 h-10 flex justify-center items-center">
              {producto.title}
            </Typography>

          </CardBody>
          <CardFooter divider className="flex items-center justify-between py-3">
            <Button className=" bg-orange-600 rounded-full " color="orange"> Add to Cart</Button> <Chip className="rounded-full bg-orange-700 " value={"$ " + producto.price}> ${producto.price}</Chip>
          </CardFooter>
        </Card>
      </div>

    </ThemeProvider>
  );
}



export default ProductItem