import React, { useState, useEffect} from 'react';

export default function ItemCount({initial, stock, onAdd}) {
  const [count, setCount] = useState(initial);

  const increase = () => {
    setCount(count + 1)
  }
  const decrease = () => {
    setCount(count - 1)
  }

  return (
    <div>
    <button disabled={count >= stock} onClick={increase}> + </button>
    <span>{count}</span>
    <button disabled={count <= 1} onClick={decrease}> - </button>
    <button disabled={stock <= 0} onClick={()=>onAdd(count)}>
      Agregar al carrito
    </button>
    </div>
  )
}
