
import { useState, useEffect, useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { db } from "../../services/config";
import { collection, addDoc, updateDoc, getDoc, doc } from "firebase/firestore";
import './Checkout.css';
import {Input, input} from "@nextui-org/react";
const Checkout = () => {
    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfimacion, setEmailConfirmacion] = useState("");
    const [ordenId, setOrdenId] = useState("");
    const [error, setError] = useState("");

    const manejadorSubmit = (event) => {
        event.preventDefault();

        if (!nombre || !apellido || !telefono || !email || !emailConfimacion) {
            setError("Por favor completa todos los campos para continuar");
            return;
        }

        if (email !== emailConfimacion) {
            setError("Los emails no coinciden");
            return;
        }

     

        const orden = {
            items: carrito.map(producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad,
                
            })),
            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email
        }


        Promise.all(
            orden.items.map(async (productoOrden) => {
                const productoRef = doc(db, "productos", productoOrden.id);
                const productoDoc = await getDoc(productoRef);
                const stockActual = productoDoc.data().stock;

                await updateDoc(productoRef, {
                    stock: stockActual - productoOrden.cantidad
                })

            })
        )
            .then(() => {
                addDoc(collection(db, "ordenes"), orden)
                    .then(docRef => {
                        setOrdenId(docRef.id);
                        vaciarCarrito();
                    })
                    .catch(error => console.log("Error al crear la orden ", error))
            })
            .catch(error => {
                console.log("No se pudo actualizar el stock ", error);
                setError("No se pudo actualizar el stock ");
            })
    }

    
    return (
        <div>
            <h3 className="text-4xl max-w-xl my-5 mx-auto" > Checkout </h3>

            <form onSubmit={manejadorSubmit} className="max-w-xl my-0 mx-auto">
                {
                    carrito.map(producto => (
                        
                        <div className="flex items-center justify-between" key={producto.item.id}>
                            <div>
                            <p> <strong>{producto.item.nombre}:</strong> x {producto.cantidad} </p>
                            <p> <strong>Precio:</strong> $ {producto.item.precio} </p>
                            </div>
                            <img className="w-32" src={producto.item.img} alt={producto.item.nombre} />

                            
                        </div>
                    ))
                }
                

                
                    <Input classNames={{label:["text-[#1014c5]",],}} 
                     className="flex w-full flex-wrap md:flex-nowrap gap-4 m-3" label="Nombre"  type="text" onChange={(e) => setNombre(e.target.value)} />
    
                    <Input classNames={{label:["text-[#1014c5]",],}}  label="Apellido" className="flex w-full flex-wrap md:flex-nowrap gap-4 m-3" htmlFor="" type="text" onChange={(e) => setApellido(e.target.value)} />
                
                    <Input classNames={{label:["text-[#1014c5]",],}}  className="flex w-full flex-wrap md:flex-nowrap gap-4 m-3" type="number" label="Telefono" htmlFor="" onChange={(e) => setTelefono(e.target.value)} />
                

                
                   
                    <Input classNames={{label:["text-[#1014c5]",],}}  className="flex w-full flex-wrap md:flex-nowrap gap-4 m-3" label="Email" type="email" onChange={(e) => setEmail(e.target.value)} />
                

               
                    <Input classNames={{label:["text-[#1014c5]",],}}  className="flex w-full flex-wrap md:flex-nowrap gap-4 m-3" label="Email Confirmación" type="email" onChange={(e) => setEmailConfirmacion(e.target.value)} />
                

                {
                    error && <p style={{ color: "red" }}> {error} </p>
                }

                <button type="submit" className="p-3 m-2 bg-[#1014c5] text-white rounded-2xl hover:bg-blue-600 transition-all"> Finalizar Orden </button>

                {
                    ordenId && (
                        <strong className="ordenId">¡Gracias por su compra! Tu número de orden es: {ordenId} </strong>
                    )
                }

            </form>
        </div>
    )
}

export default Checkout