import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import '../Navbar/NavBar.css';
const CartWidget = () => {
    const {cantidadTotal} = useContext(CarritoContext);

  return (
    <Link to="/cart">
        <div className="mx-7 flex">
            
            
                <img className="w-10 fill-blue-500" src="/img/Cart.svg" alt="" />
                <div className="circulo">
                    {
                cantidadTotal > 0 && <strong> {cantidadTotal} </strong>
            }
                </div>
                
            </div>
            </Link>
            
    
  )
}

export default CartWidget