import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import ItemList from "../ItemList";
import {  getProductos } from "../../asyncmock";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  console.log(categoryId)
  useEffect(() => {
    const fetchProductos = async () => {
      try {
        let data;
        if (categoryId) {
          data = await getProductos();
          console.log(data)
          console.log(categoryId)
          setProductos (data.filter((producto) => producto.category === categoryId));
        } else {
          data = await getProductos();
          setProductos(data);
        }
        setLoading(false);
      } catch (error) {
        setProductos([]);
        setLoading(false);
      }
    };

    fetchProductos();
  }, [categoryId]);

  if (!productos) {
    return <Navigate to="/404" />;
  }

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="flex justify-center">
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;
