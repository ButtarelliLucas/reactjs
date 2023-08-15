import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './CartItem.css'; // Importa el archivo CSS que contiene los estilos

const CartItem = ({ item, cantidad }) => {
  const { eliminarProducto } = useContext(CartContext);

  return (
    <div className="cart-item mt-8 w-auto" style={{ display: 'flex', alignItems: 'center', marginTop: '8px', borderBottom: '1px solid #e2e8f0', paddingBottom: '8px' }}>
      <div className="flow-root">
        <ul role="list" className="-my-6 divide-y divide-gray-200">

          <li key={item.id} className="flex py-6">
          <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
  <img
    src={item.image}
    alt={item.title}
    className="h-full w-full object-cover object-center"
    style={{ objectFit: 'contain', objectPosition: 'center' }}
  />
</div>


            <div className="ml-4 flex flex-1 flex-col">
              <div>
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <h3>
                    <div className="cart-item-title">Producto : {item.title}</div>
                  </h3>
                  <p className="ml-4 cart-item-price">Precio por unidad ${item.precio}</p>
                  <p className="ml-4 cart-item-price">Precio total ${item.precio * cantidad}</p>
                </div>
                {/* <p className="mt-1 text-sm text-gray-500">{product.color}</p> */}
              </div>
              <div className="flex flex-1 items-end justify-between text-sm">
                <p className="text-gray-500">Cantidad : {cantidad}</p>

                <div className="flex">
                  <button
                    type="button"
                    className="font-medium text-orange-600 hover:text-orange-500"
                    onClick={() => eliminarProducto(item.id)}>
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          </li>

        </ul>
      </div>
    </div>
  )
}

export default CartItem;
