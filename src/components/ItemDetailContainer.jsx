import { doc, getDoc, getFirestore } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';


export default function ItemDetailContainer() {

  const { itemId } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    const db = getFirestore();
    const product = doc(db, 'productos', itemId);
    
    getDoc(product).then(res => setData({id:res.id, ...res.data()})
    )
  }, [itemId])

    return (
      <div>
        <ItemDetail data={data} />
      </div>
  )
}