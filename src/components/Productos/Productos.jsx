import React, { useState, useEffect } from 'react'
import { getDocs, collection, query, doc } from 'firebase/firestore'
import { db } from '../../services/config'

const Productos = () => {
    const [productos, setProductos] = useState([])
    //Obtener los productos de la base de datos
    useEffect(() => {
        const misProductos = query(collection (db, "tiendaReactJs"))

        getDocs(misProductos)
            .then(respuesta => {
                setProductos(respuesta.docs.map((doc) => ({ id: doc.id, ...doc.data()})))
            })
    }, [])

    //los datos se obtienen cuando se monta el componente

    return (
        <>
            <h2>Productos</h2>
            <div className='productos-container'>
                {productos.map(producto => (
                    <div className="producto-card" key={doc.id}>
                        <h2> {producto.title}</h2>
                        <p>Descripcion: {producto.description} </p>
                        <p>Stock: {producto.stock}</p>
                        <p>Precio: {producto.price}</p>
                        <button>Comprar</button>


                    </div>
                ))}

            </div>
        </>
    )
}

export default Productos