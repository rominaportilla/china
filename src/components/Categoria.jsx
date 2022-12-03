import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/Categoria.css';


export default function Categoria(props) {
    return (
    <div className='contenedor-categoria'>
        <Link className='categoria-cards' to={`/category/${props.imagen}`}>
        <img 
        className='imagen-categoria'
        src={require(`../imagenes/${props.imagen}.png`)}
        alt={`Foto de ${props.categoria}`} />
        <p className='titulo-categoria'>{props.categoria}</p>
        </Link>
    </div>
    );
}