import React from 'react';
import ItemCount from './ItemCount';


export default function ItemDetail({data = []}) {

  const onAdd = (quantity)=>{
    console.log(`El usuario agregó ${quantity} unidades`)
  }

    return (
    <div>
        <img src={data.image} alt={data.title}/>
        <div>
          <h1>{data.title}</h1>
          <p>{data.description}</p>
          <p>{data.price}</p>
        </div>
        <ItemCount initial={1} stock={10} onAdd={onAdd} />
    </div>
  )
}
