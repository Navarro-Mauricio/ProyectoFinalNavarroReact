
import Atropos from 'atropos/react';

import { Link } from 'react-router-dom';
import { Button } from '@nextui-org/react';

const Item = ({ id, nombre, precio, img }) => {
  return (
<Link to={`/item/${id}`}>
    <div id="app" className="bg-white rounded w-56 p-4 m-1.5 flex-col al items-center">
      <Atropos className='my-atropos'
        shadow={false}>
        <img src={img} alt={nombre} className='overflow-visible drop-shadow-[1px_6px_7px_rgba(0,0,0,0.75)]' />
      </Atropos>
      <h3>{nombre} </h3>
      <p>${precio} </p>
      <div className='flex items-center justify-center'>
      <button className='p-3 m-2 bg-[#1014c5] text-white rounded-2xl hover:bg-blue-600 transition-all'>Ver Detalles</button>
      </div>
    </div>
    </Link>
  )
}

export default Item