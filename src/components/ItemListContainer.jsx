import React, {useState, useEffect} from 'react';
import ItemList from './ItemList';
import Categoria from './Categoria';
import Ofertas from './Ofertas';
import UniversoBebes from './UniversoBebes';
import { useParams } from 'react-router-dom';
import { productos } from './data.js'

const ItemListContainer = ({greeting}) => {

  const { categoryId } = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = new Promise ((res) => {
      setTimeout(() => {
        res(productos)
      }, 2000);
    });
    
    getData
    .then((res) => {
      if (categoryId) {
        setData(res.filter((item) => item.category == categoryId))
      }else{
        setData(res)
      }
    })
    .catch((e) => {
      console.error(e)
    })
    .finally(() => {
      console.log('mostramos productos')
    });
  }, [categoryId])

  return(
    <>
    <h2 style={{backgroundColor:'#cc0c1a', textAlign:'center', color:'white', height:'400px'}}>{greeting}</h2>
    <div>
    <ItemList data={data}/>
    </div>

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
    <a href='https://www.mercadopago.com.ar/' target='_BLANK'><img src={require(`../imagenes/mercadoCredito.png`)} alt='Mercado Crédito'/></a>
    <h3>ENCONTRÁ TUS MARCAS FAVORITAS</h3>
    </>
  )
}

export default ItemListContainer;