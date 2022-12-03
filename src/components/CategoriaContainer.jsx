import React from 'react';
import Categoria from './Categoria';


export default function CategoriaContainer() {
    return (
    <div className='categorias'>
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
    </div>
    )
}
