import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import { Button } from "@nextui-org/react";
const Cart = () => {
    const {carrito, vaciarCarrito, total, cantidadTotal} = useContext(CarritoContext);

    if(cantidadTotal === 0 ) {
        return (
            <>
                <h2>Tu carrito esta vacío</h2>
                <Link to="/"><Button className="text-white bg-[#1014c5] m-5">Ver Productos</Button></Link>
            </>
        )
    }

  return (
    <div>
        {
            carrito.map(producto => <CartItem key={producto.item.id} {...producto} />)
        }
        <div className="max-w-xl flex items-center justify-between mx-auto" >
        <h3>Total: $ {total} </h3>
        <h3>Cantidad Total: {cantidadTotal} </h3>
        </div>
        
        <button className="p-3 m-2 bg-[#1014c5] text-white rounded-2xl hover:bg-blue-600 transition-all" onClick={vaciarCarrito}> Vaciar carrito</button>

        <Link to="/checkout"><button className="p-3 m-2 bg-[#1014c5] text-white rounded-2xl hover:bg-blue-600 transition-all">Finalizar compra</button></Link>
    </div>
  )
}

export default Cart