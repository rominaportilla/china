import React from 'react';
import { useCartContext } from '../context/CartProvider';


export default function ItemCart({ product }) {
    const { removeItem } = useCartContext();
    return (
    <div className='carritoItem'>
        <img className='carritoItem-image' src={product.image} alt={product.title} />
        <div>
        <p className='productoCarrito-title'>{product.title}</p>
        <p className='productoCarrito-description'>Cantidad: {product.quantity}</p>
        <p className='productoCarrito-description'>Precio u.: ${product.price}</p>
        <p className='productoCarrito-description'>Subtotal: ${product.quantity * product.price}</p>
        </div>
        <button className='eliminarCarrito-boton' onClick={() => removeItem(product.id)}>ELIMINAR</button>
    </div>
    )
}
