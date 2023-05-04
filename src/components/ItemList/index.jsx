import ProductItem from "../ProductItem"

const ItemList = (productos) => {
    console.log (productos)
    console.log (productos.productos)

  return (
    <div  className="grid grid-cols-4 gap-x-8 gap-y-8 ">
          {productos.productos.map((producto ) => (
            <ProductItem producto={producto} key={producto.id} />
          ))}
          </div> 
  )
}

export default ItemList