import React from 'react';
import { Link } from 'react-router-dom';

export default function Item({detalle}) {
    return (
    <div className='producto'>
        <img src={detalle.image} alt={detalle.title} />
        <Link to={'/item/' + detalle.id}>{detalle.title}</Link>
        <p>{detalle.description}</p>
        <p>${detalle.price}</p>
    </div>
    )
}
