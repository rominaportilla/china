import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../stylesheets/ItemListContainer.css';
import CategoriaContainer from './CategoriaContainer';
import ItemList from './ItemList';


const ItemListContainer = () => {

  const { categoryId } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const db = getFirestore();

    let products;
    if(categoryId){
      products = query(collection(db, 'productos'), where('category', '==', categoryId));
    }else{
      products = collection(db, 'productos');
    }

    getDocs(products).then((res) =>{
      const arrayProducts = res.docs.map((doc) =>{
        return{
          id: doc.id, image: doc.data().image, title: doc.data().title, description: doc.data().description, price: doc.data().price, category: doc.data().category
        }
      });
      setData(arrayProducts);
    })
  }, [categoryId])

  return(
    <>
    <img className='hero-home' style={{marginTop:'70px'}} src='/imagenes/hero0.png' alt='hero'/>
    <h1 className='titulo-home'>China Supermarket</h1>
    <div>
    <ItemList data={data}/>
    </div>
    <CategoriaContainer />
  </>
  )
}

export default ItemListContainer;