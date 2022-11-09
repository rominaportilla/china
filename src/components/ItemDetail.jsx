import React from 'react';


export default function ItemDetail({data = []}) {
    return (
    <div>
        <img src={data.image} alt={data.title}/>
        <div>
          <h1>{data.title}</h1>
          <p>{data.description}</p>
          <p>{data.price}</p>
        </div>
    </div>
  )
}
