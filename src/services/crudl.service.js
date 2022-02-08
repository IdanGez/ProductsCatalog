import axios from 'axios';
import { storageService } from './async-storage.service.js';
import { loadFromStorage, saveToStorage } from './storage.service.js';
// import { utilService } from './util.service';
import { httpService } from './http.service.js';

import Products from '../data/products.json'

const STORAGE_KEY_BOARD = 'board';

export const CrudlService = {
  query,
  getById,
  save,
  remove,
  update,
};

// If you want to use full crudl with storage use async storage service
// If you want to use only load from storage and save to storage use storage service

// const testObjects = [
//   { name: 'Idan', age: 35 },
//   { name: 'Inbar', age: 33 },
//   { name: 'Tom', age: 2.5 },

// ];

async function query() {
  console.log(Products.Stores);
  // let boards = await storageService.query('board');
  // const boards = await httpService.get(`board`);
  // console.log(boards);
  // return boards;
  return Products;
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
