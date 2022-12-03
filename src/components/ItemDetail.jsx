import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import { useCartContext } from '../context/CartProvider';
import '../stylesheets/ItemDetalle.css';


export default function ItemDetail({data = []}) {

  const [goToCart, setGoToCart] = useState(false);
  const {addItem} = useCartContext(); 
  const onAdd = (quantity)=>{
    setGoToCart(true)
    addItem(data, quantity);
  }

    return (
    <div className='producto-detalle'>
        <img src={data.image} alt={data.title}/>
        <div className='detalle'>
          <h1 className='detalle-title'>{data.title}</h1>
          <p className='detalle-description'>{data.description}</p>
          <p className='detalle-price'>${data.price}</p>
        {
          goToCart
          ? <div className='aparecerLinks'><Link to='/' className='aparecerLinksBoton seguirComprando'>SEGUIR COMPRANDO</Link> <Link className='aparecerLinksBoton verCarrito' to='/cart'>VER CARRITO</Link></div>
          : <ItemCount initial={1} stock={data.stock} onAdd={onAdd} />
        }
        </div>
    </div>
  )
}
