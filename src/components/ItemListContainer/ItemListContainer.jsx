import React, { useEffect, useState, useContext } from "react";
import { Navigate, useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { db } from "../../services/config";
import { getDocs, collection, query, where, doc, updateDoc } from 'firebase/firestore';

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const misProductos = query(collection(db, "tiendaReactJs"));

        const respuesta = await getDocs(misProductos);
        const data = respuesta.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

        let filteredProductos = data;

        // const descontarStock = async (producto) => {

        //   const productoRef = doc(db, "tiendaReactJs", producto.id);
        //   const nuevoStock = producto.stock -1;

        //   await updateDoc (productoRef, {stock: nuevoStock})
        // }



        if (categoryId) {
          filteredProductos = data.filter((producto) => producto.category === categoryId);
        }

        setProductos(filteredProductos);
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

