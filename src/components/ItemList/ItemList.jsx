import React, { useState, useEffect } from "react";
import ProductItem from "../ProductItem/ProductItem";
import 'animate.css'

const ItemList = ({ productos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < productos.length) {
      const timer = setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
      }, 120); // Cambia este valor al retardo deseado en milisegundos
      return () => clearTimeout(timer);
    }
  }, [currentIndex, productos]);

  return (
    <div className="   grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4 xl:gap-x-8">
      {productos.slice(0, currentIndex).map((producto) => (
        <ProductItem  producto={producto} key={producto.id} />
      ))}
    </div>
  );
};

export default ItemList;
