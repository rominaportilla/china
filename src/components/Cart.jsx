import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartProvider';
import '../stylesheets/CartWidget.css';
import ItemCart from './ItemCart';


export default function Cart() {
    const { cart, totalPrice, clearCart } = useCartContext();

    if(cart.length === 0) {
        return (
            <div className='carrito-container'>
            <h1 className='carrito-title'>Mi carrito</h1>
            <p className='carritoVacio'>El carrito está vacío</p>
            <Link className='realizarCompra' to='/'>REALIZAR UNA COMPRA</Link>
            </div>
        );
    }

    return (
    <div className='carrito-container'>
        <h1 className='carrito-title'>Mi carrito</h1>
        <div className='carrito'>
        <div className='carritoItem-container'>
            {
                cart.map(product => <ItemCart key={product.id} product={product} />)
            }
        </div>

        <div className='totalCarrito-container'>
        <p className='total-carrito'> Total: ${totalPrice()}</p>
        <Link className='checkout-boton' to='/checkout'>CHECKOUT</Link>
        <button className='vaciarCarrito-boton' onClick={() => clearCart()}>VACIAR CARRITO</button>
        </div>
        </div>
    </div>
    )
}
