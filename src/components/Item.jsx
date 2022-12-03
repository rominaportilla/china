import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/Item.css';


export default function Item({detalle}) {
    return (
    <Link to={'/item/' + detalle.id} className='producto'>
        <img src={detalle.image} alt={detalle.title} />
        <h5 className='producto-title'>{detalle.title}</h5>
        <p className='producto-description'>{detalle.description}</p>
        <p className='producto-price'>${detalle.price}</p>
    </Link>
    )
}
