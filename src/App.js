import './App.css';
import Footer from './components/Footer';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
import {BrowserRouter, Routes, Route } from 'react-router-dom'; 

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<ItemListContainer greeting={'你好，早上好'} />}/>
      <Route path='/category/:categoryId' element={<ItemListContainer />}/>
      <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;