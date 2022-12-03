import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartProvider';
import '../stylesheets/CartWidget.css';
import '../stylesheets/Navbar.css';


function CartWidget() {
  const {totalProducts} = useCartContext();
    return (
    <Link className='cartWidget-icono' to={`/cart`}>
      <IconButton aria-label='shoppingCartIcon' variant='contained'>
        <ShoppingCartIcon className='icono-carrito' />
      </IconButton>
      <span className='totalProducto-icono'>{totalProducts() || '0'}</span>
    </Link>
  );
}

export default CartWidget;