import React from 'react';
import '../stylesheets/Categoria.css'

export default function Categoria(props) {
    return (
    <div className='contenedor-categoria'>
        <img 
        className='imagen-categoria'
        src={require(`../imagenes/${props.imagen}.png`)}
        alt={`Foto de ${props.categoria}`} />
        <p className='titulo-categoria'>{props.categoria}</p>
    </div>
    );
}