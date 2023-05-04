
import { Card, CardBody, CardFooter, CardHeader, ThemeProvider, Button } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import ItemList from "../ItemList";


const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const {categoryId} = useParams();
 console.log (productos)
  const getProducto = async () => {
    const url= categoryId === undefined ? 'https://fakestoreapi.com/products' : `https://fakestoreapi.com/products/category/${categoryId}`

    let url2;

    if (categoryId=== undefined){url2= 'https://fakestoreapi.com/products'}

    else {url2= `https://fakestoreapi.com/products/category/${categoryId}`}


    try {
      const response = await fetch( url2 );
      const data = await response.json();
      setProductos(data);
      setLoading(false);
    } catch (error) {
      setProductos([]);
    }
  };

  useEffect(() => {
    getProducto();
  }, [categoryId]);

  if (!productos) {
    return <Navigate to="/404" />;
  }

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
    <ItemList productos={productos} />
    </>
  );
};

export default ItemListContainer;