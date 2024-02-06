import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Button } from "@nextui-org/react";

const CartItem = ({ item, cantidad }) => {
    const { eliminarProducto } = useContext(CarritoContext);

    return (
       <><div className="max-w-xl flex items-center justify-between mx-auto">
            <div>
            <h4> {item.nombre} </h4>
            <p> Cantidad: {cantidad} </p>
            <p> Precio: {item.precio} </p>
            </div>
            <div>
                <img src={item.img} alt={item.nombre} className="w-32" />
            </div>
            </div>
            <button className="flex max-w-xl mx-auto p-3 m-2 bg-[#1014c5] text-white rounded-2xl hover:bg-blue-600 transition-all" onClick={()=> eliminarProducto(item.id)}> Eliminar Producto </button>
            
        </>
    )
}

export default CartItem