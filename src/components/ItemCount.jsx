import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import React, { useState } from 'react';

export default function ItemCount({initial, stock, onAdd}) {
  const [count, setCount] = useState(initial);

  const increase = () => {
    setCount(count + 1)
  }
  const decrease = () => {
    setCount(count - 1)
  }

  return (
    <div className='itemCount-container'>
    <div className='contador-container'>
    <p>Cantidad</p>
    <div className='contador'>
    <button disabled={count <= 1} onClick={decrease}> - </button>
    <span>{count}</span>
    <button disabled={count >= stock} onClick={increase}> + </button>
    </div>
    </div>

    <button className='añadirCarrito-boton' disabled={stock <= 0} onClick={()=>onAdd(count)}>
    <IconButton aria-label='shoppingCartIcon' variant='contained'>
        <ShoppingCartIcon className='añadirCarrito-icono' />
      </IconButton>
      AÑADIR AL CARRITO
    </button>
    </div>
  )
}
