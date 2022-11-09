import React from 'react';
import Item from './Item';
import '../stylesheets/Item.css'

export default function ItemList({data = []}) {
    return (
        <div className='producto-container'>
            {data.map(producto => <Item key={producto.id} detalle={producto} />)}
        </div>
    )
}
