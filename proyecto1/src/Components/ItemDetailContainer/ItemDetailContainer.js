import React from 'react'
import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import productos from '../../json/productos.json';
import ItemDetail from '../ItemDetail/ItemDetail';
import '../ItemDetailContainer/ItemDetailContainer.css';



const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const {id} = useParams();

  useEffect(() => {
    const promesa = new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos.find((item) => item.id === parseInt(id)));
      }, 2000);
    });
    promesa.then((data) => {
      setItem(data);
    });
  }, [id]);

  return (
    <div className='container'>
      {item && <ItemDetail item={item} />}
    </div>
  );
};

export default ItemDetailContainer
