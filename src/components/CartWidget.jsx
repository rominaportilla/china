import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import '../stylesheets/CartWidget.css';

function CartWidget() {
    return (
    <div>
      <IconButton aria-label='shoppingCartIcon' variant='contained'>
        <ShoppingCartIcon className='icono-carrito' />
      </IconButton>
    </div>
  );
}

export default CartWidget;
