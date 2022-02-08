import axios from 'axios';
import {storageService} from './async-storage.service.js';
import {loadFromStorage, saveToStorage} from './storage.service.js';
// import { utilService } from './util.service';
import {httpService} from './http.service.js';

import Data from '../data/products.json';

const STORAGE_KEY_BOARD = 'board';

export const CrudlService = {
	query,
	getById,
	save,
	remove,
	update,
	sortProducts,
};

// If you want to use full crudl with storage use async storage service
// If you want to use only load from storage and save to storage use storage service

async function query() {
	return Data;
}

async function getStores() {
	let data = await query();
	let products = [];
	let {Stores} = data;
	let stores = Stores;
	// Stores.map(store => {
	//   return store.Products.map(product => {
	//     return products.push(product)
	//   })
	// })
	return stores;
}
// async function getProducts() {
//   let data = await query()
//   let products = []
//   let { Stores } = data
//   Stores.map(store => {
//     return store.Products.map(product => {
//       return products.push(product)
//     })
//   })
//   return products
// }
async function sortProducts(gender = null, priceRange = null) {
	let stores = await getStores();
	// if (!gender && !priceRange) return products
	let tags = [];
	tags.push(gender.value);
	const filteredProdcuts = [];
	// stores.Products.filter
	stores.forEach((store) => {
		store.filteredProdcuts = [];
		store.Products.filter((product) => {
			let currProduct = tags.every((tag) => {
				return product.ProductTags.includes(tag);
			});
			if (currProduct) store.filteredProdcuts.push(product);
			return store;
		});
	});
	console.log(stores);
	return stores;
}

async function getById(boardId) {
	// console.log(boardId);
	// const board = await storageService.get('board', boardId);
	const board = await httpService.get(`board/${boardId}`);
	return board;
}

async function save(board) {
	// const emptyBoard = _getEmptyBoard(board);
	// TODO to make a function that creates an empty object
	// return await httpService.post('board', emptyBoard);
	console.log('hi');
}

async function update(board) {
	return await httpService.put(`board/${board._id}`, board);
}

async function remove(boardId) {
	// return storageService.remove('board', boardId);
	return await httpService.delete(`board/${boardId}`);
}
