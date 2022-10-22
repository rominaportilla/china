import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  // a mi me falta acá --> , document.getElementNyId('root') separamos por comas porque son dos argumentos distintos. el primero es es el elemento y el segundo es el contenedor donde lo vamos a renderizar
); //estamos creando el componente principal de la app en modo estricto,esto viene por defecto