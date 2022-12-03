import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React, { useState } from 'react';
import { useCartContext } from '../context/CartProvider';
import '../stylesheets/Checkout.css';


export default function Checkout() {
    const { cart, totalPrice, totalProducts, clearCart } = useCartContext();
    const [name, setName] = useState('');
    const [tel, setTel] = useState('');
    const [email, setEmail] = useState('');
    const [lastName, setLastName] = useState('');
    const [adress, setAdress] = useState('');
    const [orderId, setOrderId] = useState('');

    function validateEmail(email) {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(email) == false) {
            alert('email inválido');
            return false
        }
        return true;
    }

    const realizarPedido = () =>{
        const order = {
            buyer: {
                name: name,
                lastName: lastName,
                tel: tel,
                adress: adress,
                email: email
            },
            items: cart.map(product => ({ id: product.id, title: product.title, price: product.price, quantity: product.quantity })),
            total: totalPrice(),
        };
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');

        if (!name || !lastName || !tel || !email || !adress) {
            return
        }
        if (validateEmail(email) == false) {
            return
        }

        addDoc(ordersCollection, order).then(({id}) => {
            setOrderId(id);
            clearCart();
        })
    }

    return (
        <div style={{margin: '100px'}}>
        {orderId ? ('Gracias por confiar en nosotros. Tu id de compra es: ' + orderId) : (
        <div className='checkout-container'>
        <h1 className='checkout-title'>Checkout</h1>
        <div className='form-container'>
        <h2 className='checkout-subtitles'>Detalles de facturación</h2>
        <input type="text" placeholder='Nombre' value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="text" placeholder='Apellido' value={lastName} onChange={(e) => setLastName(e.target.value)} required />
        <input type="tel" placeholder='Teléfono' value={tel} onChange={(e) => setTel(e.target.value)} required/>
        <input type="text" placeholder='Dirección' value={adress} onChange={(e) => setAdress(e.target.value)} required/>
        <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required/>
        <button className='realizarPedido' onClick={realizarPedido}>REALIZAR EL PEDIDO</button>
        </div>
        </div>
        )}
        </div>
    )
}
