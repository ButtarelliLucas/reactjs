import { Button } from '@material-tailwind/react';
import React from 'react'
import { useState } from 'react'

const ItemCount = ({ inicial, stock, funcionAgregar, precio }) => {
    const [contador, setContador] = useState(inicial);



    const incrementar = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }

    const decrementar = () => {
        if (contador > inicial) {
            setContador(contador - 1);
        }
    }

    return (
        <>
        <div>
            <div>
                <button onClick={decrementar}> - </button>
                <p> {contador} </p>
                <button onClick={incrementar}> + </button>
            </div>
            <Button className="bg-orange-600 rounded-full mt-5 item" color="orange" onClick={() => funcionAgregar(contador)}> Agregar al Carrito {precio} </Button>
            </div>
        </>
    )
}



export default ItemCount