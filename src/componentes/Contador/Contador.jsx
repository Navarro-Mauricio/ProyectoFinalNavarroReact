import { useState } from "react";
import './Contador.css';
import { Button } from "@nextui-org/react";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Contador = ({inicial, stock, funcionAgregar}) => {
    const [contador, setContador] = useState(inicial);
    
    function notifyAgregar() { 
        funcionAgregar(contador);
        notify();
      };

    const notify = () => toast("Agregado al Carrito!");

    const sumarContador = () => {
        if(contador < stock ){
            setContador(contador + 1);
        }
    }

    const restarContador = () => {
        if (contador > inicial) {
            setContador(contador - 1);
        }
    }

  return (
    <div>
        <div className="contadorC">
        <Button className="p-0 text-[#1014c5]" onClick={restarContador}> - </Button>
            <p className="pContenedor"> {contador} </p>
           
            <Button className="p-0 text-[#1014c5]" onClick={sumarContador}> + </Button>
        </div>

        <button className='p-3 m-2 bg-[#1014c5] text-white rounded-2xl hover:bg-blue-600 transition-all' onClick={()=> funcionAgregar(contador)}>Agregar al carrito</button>
        {/* <button onClick={notify}>prueba</button> */}
<ToastContainer />
       
    </div>
  )
  }

export default Contador