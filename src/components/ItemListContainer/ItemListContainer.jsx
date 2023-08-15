import React, { useEffect, useState, } from "react";
import { Navigate, useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { db } from "../../services/config";
import { getDocs, collection, query, where } from 'firebase/firestore';

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    const misProductos = categoryId ? query(collection(db, "tiendaReactJs"), where("category", "==", categoryId)) : collection(db, "tiendaReactJs");
    
    getDocs(misProductos)
      .then(res => {
        const nuevosProductos = res.docs.map(doc => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setProductos(nuevosProductos);
        setLoading(false); 
      })
      .catch(error => {
        console.log(error);
        setLoading(false); 
      });
  }, [categoryId]);

  if (loading) {
    return <h2>Loading...</h2>; 
  }

  if (!productos) {
    return <Navigate to="/404" />;
  }

  return (
    <div className="flex justify-center">
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;
