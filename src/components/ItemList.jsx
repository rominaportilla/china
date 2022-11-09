import React from 'react';
import Item from './Item'

export default function ItemList({data = []}) {
    return (
        <div>
            {data.map(producto => <Item key={producto.id} detalle={producto} />)}
        </div>
    )
}
