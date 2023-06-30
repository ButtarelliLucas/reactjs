import ProductItem from "../ProductItem/ProductItem"

const ItemList = (productos) => {
    console.log (productos)
    console.log (productos.productos)

  return (
    <div  className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4 xl:gap-x-8">
          {productos.productos.map((producto ) => (
            <ProductItem producto={producto} key={producto.id} />
          ))}
          </div> 
  )
}

export default ItemList