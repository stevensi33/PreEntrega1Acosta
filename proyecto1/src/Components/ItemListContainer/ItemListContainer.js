import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import productos from '../../json/productos.json';
import ItemList from '../ItemList/ItemList';
import '../ItemListContainer/ItemListContainer.css';



const ItemListContainer = () => {
  const [item, setItem] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await new Promise((resolve) => {
          setTimeout(() => {
            resolve(id ? productos.filter(item => item.category === id) : productos)
          }, 2000);
        });
        setItem(data);
      } catch (error) {
        console.log('Error:', error);
      }
    };
    fetchData();

  }, [id])

  return (
    <div className='container item-list-container'>
      <div className='row item-list-row'>
        <ItemList item={item} />
      </div>
    </div>
  )
}

export default ItemListContainer
