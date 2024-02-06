import { useState } from 'react';
import Contador from '../Contador/Contador';
import { Link } from 'react-router-dom';
import './ItemDetail.css';
import Atropos from 'atropos/react';
import { CarritoContext } from '../../context/CarritoContext';
import { useContext } from 'react';
import { toast } from 'react-toastify';

const ItemDetail = ({ id, nombre, stock, precio, img }) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const { agregarAlCarrito } = useContext(CarritoContext);


  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    const item = { id, nombre, precio, img };
    agregarAlCarrito(item, cantidad);
  }

  return (
    <div className='contenedorItem1'>
      <div className='contenedorItem'> <Atropos className='my-atropos'
        shadow={false}> <img className="drop-shadow-[1px_6px_7px_rgba(0,0,0,0.75)]" src={img} alt={nombre} /></Atropos></div>
      <div className='contenedorItem'>
        <h2>{nombre} </h2>
        <p>${precio} </p>
        <p>
          Calcos en <strong>Vinilo</strong> <br />
          Disponibles en 3 tamaños <br />
          A prueba de: <strong>Agua, Sol y Roces</strong></p>

        {
          agregarCantidad > 0 ? (<Link to="/cart"><button className='p-3 m-2 bg-[#1014c5] text-white rounded-2xl hover:bg-blue-600 transition-all'>Terminar Compra</button></Link>) : (<Contador inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
        }
      </div>

    </div>

  )
}

export default ItemDetail