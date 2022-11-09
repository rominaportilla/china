import React, {useState, useEffect} from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { productos } from './data.js';

export default function ItemDetailContainer() {

  const { itemId } = useParams();

  const [data, setData] = useState({});

  useEffect(() => {
    const getData = new Promise((res) => {
      setTimeout(() => {
        res(productos)
      }, 2000)
    });

    getData
    .then((res) => {
      setData(res.find((item) => item.id == itemId))
    })
  }, [itemId])

    return (
      <div>
        <ItemDetail data={data} />
      </div>
  )
}
