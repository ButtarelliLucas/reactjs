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

const ProductItem = ({ producto }) => {
     return (

<ThemeProvider>

         <div className="">
              <br />
              <br />
             <Card className=" w-72 bg-gradient-to-t from-gray-200">
        <CardHeader color="black" className="relative h-56 flex justify-center">
          <img
            src={producto.image}
            alt="img-blur-shadow"
            className="h-full p-10"
          />
        </CardHeader>
        <CardBody className="text-center items-center ">
          <Typography  className="mb-2 h-10 flex justify-center items-center">
          {producto.title}
          </Typography>
          
        </CardBody>
        <CardFooter divider className="flex items-center justify-between py-3">
        <Button className=" rounded-full " color="cyan"> Add to Cart</Button> <Chip className="rounded-full bg-cyan-700 " value={"$ " + producto.price}> ${producto.price}</Chip>
        </CardFooter>
      </Card> 
       </div>
       
       </ThemeProvider>
  );
}

   
    //   <Card className="w-96">
    //     <CardHeader color="blue" className="relative h-56">
    //       <img
    //         src="/img/blog.jpg"
    //         alt="img-blur-shadow"
    //         className="h-full w-full"
    //       />
    //     </CardHeader>
    //     <CardBody className="text-center">
    //       <Typography variant="h5" className="mb-2">
    //         Cozy 5 Stars Apartment
    //       </Typography>
    //       <Typography>
    //         The place is close to Barceloneta Beach and bus stop just 2 min by
    //         walk and near to "Naviglio" where you can enjoy the main night life in
    //         Barcelona.
    //       </Typography>
    //     </CardBody>
    //     <CardFooter divider className="flex items-center justify-between py-3">
    //       <Typography variant="small">$899/night</Typography>
    //       <Typography variant="small" color="gray" className="flex gap-1">
    //         <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
    //         Barcelona, Spain
    //       </Typography>
    //     </CardFooter>
    //   </Card>
  export default ProductItem