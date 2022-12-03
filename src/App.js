import './App.css';
import React from 'react';
import Footer from './components/Footer';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Cart from './components/Cart';
import {BrowserRouter, Routes, Route } from 'react-router-dom'; 
import CartProvider from './context/CartProvider'
import Checkout from './components/Checkout';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <CartProvider>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<ItemListContainer />}/>
      <Route path='/category/:categoryId' element={<ItemListContainer />}/>
      <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
      <Route path='/cart' element={<Cart />}/>
      <Route path='/checkout' element={<Checkout />}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </CartProvider>
    </>
  );
}

export default App;