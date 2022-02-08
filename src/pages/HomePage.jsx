import React, {useState, useEffect, useLayoutEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {CrudlService} from '../services/crudl.service.js';
import {GenderFilter} from '../cmps/GenderFilter.jsx';
import {PriceRangeFilter} from '../cmps/PriceRangeFilter.jsx';
import {loadItems, addItems, updateItems, removeItems} from '../store/item.action.js';

export function HomePage() {
	const dispatch = useDispatch();
	const {stores} = useSelector((state) => ({stores: state.itemModule.stores}));

	// useEffect(() => {
	// 	getItems();
	// }, []);

	useEffect(async () => {
		await getItems();
	}, []);

	const getItems = async () => {
		// console.log('you are in load product in home page ');
		dispatch(loadItems());
	};
	// console.log(stores);
	if (!stores.length) return <div>Loading...</div>;
	return (
		<section className='home-page'>
			<h1 className='hero-title'>HomePage</h1>
			<GenderFilter />
			<PriceRangeFilter />
			<main className='grid-list flex-center'>
				{stores &&
					stores.map((store) => {
						return store.Products.map((product) => {
							return (
								<div className='product-preview' key={product.ProductId}>
									<div className='product-img-container'>
										<img className='product-img' src={product.ProductImage} alt='' />
									</div>
									<div className='product-details'>
										<h4 className='store-name'> {store.StoreName}</h4>
										<h4 className='product-price'> {product.PriceLabel}</h4>
										<h4 className='product-name'>
											{' '}
											{product.ProductTitle.length < 30
												? product.ProductTitle
												: product.ProductTitle.slice(0, 25) + '...'}
										</h4>
									</div>
								</div>
							);
						});
					})}
			</main>
		</section>
	);
}
