import React, { useState, useContext, useEffect } from 'react';

export const CartContext = React.createContext([]);
export const useCartContext = () => useContext(CartContext);

export default function CartProvider({ children }) {

    const [cart, setCart] = useState( JSON.parse(localStorage.getItem('cart')) || []);

    const addItem = (item, quantity) => {
        if (isInCart(item.id)){
            setCart(cart.map(product => {
                return product.id === item.id ? { ...product, quantity: product.quantity + quantity } : product
            }));
        }else{
            setCart([...cart, {...item, quantity }]);
        }
    }

    const totalPrice = () => {
        return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
    }
    const totalProducts = () => cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0);
    function clearCart() {
        setCart([]);
    }
    const isInCart = (id) => cart.find(product => product.id === id) ? true : false;
    const removeItem = (id) => setCart(cart.filter(product => product.id !== id));

    useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    return (
    <CartContext.Provider value={{clearCart, isInCart, removeItem, addItem, totalPrice, totalProducts, cart}}>
        {children}
    </CartContext.Provider>
    )
}
