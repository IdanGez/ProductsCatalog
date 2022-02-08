import React, {useState, useEffect, useLayoutEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {CrudlService} from '../services/crudl.service.js';
import {GenderFilter} from '../cmps/GenderFilter.jsx';
import {PriceRangeFilter} from '../cmps/PriceRangeFilter';
import {loadItems, addItems, updateItems, removeItems} from '../store/item.action.js';

export function HomePage() {
	const dispatch = useDispatch();
	const {stores} = useSelector((state) => ({stores: state.itemModule.stores}));

	useEffect(() => {
		getItems();
	}, []);

	useEffect(async () => {
		await getItems();
	}, []);

	const getItems = async () => {
		dispatch(loadItems());
	};
	if (!stores.length) return <div>Loading...</div>;
	return (
		<section className='home-page'>
			<section className='filters'>
				<GenderFilter />
				<PriceRangeFilter />
			</section>
			<main className='app-main grid-list flex-center'>
				{stores &&
					stores.map((store) => {
						return store.Products.map((product) => {
							return (
								<div className='product-preview' key={product.ProductId}>
									<div className='product-img-container'>
										<img className='product-img' src={product.ProductImage} alt='' />
									</div>
									<div className='product-details'>
										<h3 className='store-name'> {store.StoreName}</h3>
										<h3 className='product-price'> {product.PriceLabel}</h3>
										<h3 className='product-name'>
											{' '}
											{product.ProductTitle.length < 20
												? product.ProductTitle
												: product.ProductTitle.slice(0, 20) + '...'}
										</h3>
									</div>
								</div>
							);
						});
					})}
			</main>
		</section>
	);
}
