import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar/>
      <header className="App-header">
        <h1 className='logo'>china</h1>
      </header>
      <div className='hero'></div>
      <h3>ESPECIAL MASCOTAS</h3>
      <div className='container-mascotas'>
        <div className='div-mascotas'></div>
        <div className='div-mascotas'></div>
        <div className='div-mascotas'></div>
      </div>
      <h3>OFERTAS</h3>
      <div className='container-ofertas'>
        <div className='div-ofertas'></div>
        <div className='div-ofertas'></div>
        <div className='div-ofertas'></div>
        <div className='div-ofertas'></div>
      </div>
      <h3>CATEGORÍAS</h3>
      <div className='container-categorias'>
        <div className='div-categorias'></div>
        <div className='div-categorias'></div>
        <div className='div-categorias'></div>
        <div className='div-categorias'></div>
        <div className='div-categorias'></div>
        <div className='div-categorias'></div>
      </div>
      <h3>ENCONTRÁ LO QUE BUSCÁS</h3>
      <div className='container-subcategorias'>

      </div>
      <h3>ENCONTRÁ TUS MARCAS FAVORITAS</h3>
      <div className='container-marcas'>

      </div>
      <footer>
        <p className='p-footer'>Copyright &copy; 2022 Romina Portilla. All Rights Reserved.</p>
      </footer>
    </>
    
  );
}

export default App;


/* import "./App.css";
import BodyApp from "./components/BodyApp";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
importar itemlistcontainer

export default function App() {
  function saludar() {
    alert("hola chiques");
  }

  function funcionLogin() {
    alert("algo importante sobre el login");
  }
  return (
    <div>
      <Navbar conBoton={true} color={"#ddd"} funcionLogin={funcionLogin} />
      <ItemListContainer/> MANDARLE EL GREETING
      <BodyApp />
      <Footer />
    </div>
  );
} */