import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { db } from "../../services/config";
import { collection, addDoc, updateDoc, doc,  } from "firebase/firestore";
import './Checkout.css'


const Checkout = () => {
    const {carrito, limpiarCarrito, cantidadTotal} = useContext(CartContext);
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");
    const [error, setError] = useState("");
    const [orderId, setOrdenId] = useState("");

    //Funciones y validaciones: 

    const manejadorFormulario = (e) => {
        e.preventDefault();

        //Verificamos que los campos esten completos: 
        if(!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError("Por favor complete todos los campos");
            return;
        }

        //Validamos que los campos del email coincidan: 
        if(email !== emailConfirmacion) {
            setError("Los campos del email no coinciden, maldito seas!!");
            return;
        }

        //Paso 1: Creamos el objeto de la orden. 
        const orden = {
            items: carrito.map( producto => ({
                id: producto.item.id,
                nombre: producto.item.title,
                cantidad: producto.cantidad
            })),
            total: cantidadTotal,
            nombre,
            apellido,
            telefono,
            email,
        };

        //Paso 2: Guardamos la orden en la base de datos

        addDoc(collection(db, "ordenes"), orden)
            .then(docRef => {
                setOrdenId(docRef.id);
                limpiarCarrito();
            })
            .catch(error => {
                console.log("Error al crear la orden", error);
                setError("Se produjo un error al crear la orden, vuelva prontus");
            })
    }

    return (
        <div className="checkout-container">
          <h2>Checkout</h2>
          <form onSubmit={manejadorFormulario}>

            <div className="form-group">
              <label htmlFor="nombre">Nombre</label>
              <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
            </div>
    
            <div className="form-group">
              <label htmlFor="apellido">Apellido</label>
              <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
            </div>
    
            <div className="form-group">
              <label htmlFor="telefono">Telefono</label>
              <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
            </div>
    
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
    
            <div className="form-group">
              <label htmlFor="emailConfirmacion">Email Confirmación</label>
              <input type="email" value={emailConfirmacion} onChange={(e) => setEmailConfirmacion(e.target.value)} />
            </div>
    
            {error && <p className="error-message">{error}</p>}
    
            
            <button type="submit" className='transition animate__delay-2s animate__animated animate__bounceOutRight bg-orange-600 rounded-full text-white hover:bg-orange-800 hover:   hover:text-white px-3 py-2 text-sm font-medium'>Finalizar Compra</button>
            <p>fuiste troliado apaga la animacion rata!(L)</p>
          </form>
          {orderId && (
            <p className="checkout-thank-you">
              ¡Gracias por tu compra! Tu número de orden es {orderId}
            </p>
          )}
        </div>
      );
    };

    export default Checkout;