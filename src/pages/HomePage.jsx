import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CrudlService } from '../services/crudl.service.js';
import {
  loadItems,
  addItems,
  updateItems,
  removeItems,
} from '../store/item.action.js';

export function HomePage() {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => ({ items: state.itemModule.items }));

  useEffect(() => {
    getItems();
  }, []);

  const getItems = async () => {
    // console.log('you are in load product in home page ');
    dispatch(loadItems());
  };

  if (!items) return <div>Loading...</div>;
  return (
    <section className='home-page'>
      <h1 clasName="hero-title">HomePage</h1>
      <section className='grid-list flex-center'>
        {items.map((item) => {
          return (<div className='item-preview'>
            <h2 className='item-name'>Name: {item.name}</h2>
            <h3 className='item-age'>Age: {item.age}</h3>
          </div>
          )
        })}
      </section>
    </section>
  );
}