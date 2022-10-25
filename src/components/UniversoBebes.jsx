import React from 'react';
import '../stylesheets/UniversoBebes.css';

export default function UniversoBebes(props) {
    return (
    <div className='contenedor-universoBebe'>
        <img 
        className='imagen-universoBebe'
        src={require(`../imagenes/universoBebe-${props.imagen}.png`)}
        alt={`Foto de ${props.subcategoria}`} />
        <div className='contenedor-tituloUniversoBebe'>
        <p className='titulo-universoBebe'>{props.subcategoria}</p>
        <p style={{color:'blue'}}>Ver ofertas</p>
        </div>
    </div>
    )
}
