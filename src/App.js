import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import Categoria from './components/Categoria';
import Footer from './components/Footer';
import UniversoBebes from './components/UniversoBebes';
import Ofertas from './components/Ofertas';

function App() {
  return (
    <>
    <Navbar/>
    <ItemListContainer 
      greeting={'你好，早上好'} />
    <h3>UNIVERSO BEBÉS</h3>
    <div className='contenedor-universoBebes'>
    <UniversoBebes
      subcategoria='COMIDA PARA EL BEBÉ'
      imagen='comidaParaElBebe' />
    <UniversoBebes
      subcategoria='HIGIENE DEL BEBÉ'
      imagen='higieneDelBebe' />
    <UniversoBebes
      subcategoria='PAÑALES'
      imagen='pañales' />
    </div>
    <h3>OFERTAS</h3>
    <div className='contenedor-ofertas'>
    <Ofertas/>
    <Ofertas/>
    <Ofertas/>
    <Ofertas/>
    </div>
    <h3>CATEGORÍAS</h3>
    <div className='contenedor-categorias'>
    <Categoria
      categoria='CUIDADO PERSONAL'
      imagen='cuidadoPersonal' />
    <Categoria
      categoria='BEBÉS'
      imagen='bebes' />
    <Categoria
      categoria='LIMPIEZA'
      imagen='limpieza' />
    <Categoria
      categoria='BEBIDAS'
      imagen='bebidas' />
    <Categoria
      categoria='ALMACÉN'
      imagen='almacen' />
    <Categoria
      categoria='MASCOTAS'
      imagen='mascotas' />
    </div>
    <h3>ENCONTRÁ LO QUE BUSCÁS</h3>
    <a href='https://www.mercadopago.com.ar/' target='_BLANK'><img src={require(`./imagenes/mercadoCredito.png`)} alt='Mercado Crédito'/></a>
    <h3>ENCONTRÁ TUS MARCAS FAVORITAS</h3>
    <Footer/>
    </>
  );
}

export default App;