import { Button } from '@material-tailwind/react';
import React from 'react';
import { useState} from 'react';

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
        <div>
            <div>
                <Button className="bg-orange-600 rounded-full mt-5 mr-2 ml-2 item" color="orange" onClick={decrementar}> - </Button>
                <Button className="bg-orange-600 rounded-full mt-5 mr-2 ml-2 item" color="orange" > {contador} </Button>
                <Button className="bg-orange-600 rounded-full mt-5 mr-2 ml-2 item" color="orange" onClick={incrementar}> + </Button>
            </div>
            <Button className="bg-orange-600 rounded-full mt-5 item" color="orange" onClick={() => funcionAgregar(contador)}> Agregar al Carrito {precio} </Button>
        </div>
    );
}

export default ItemCount;
