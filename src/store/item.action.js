/* eslint-disable */
import { CrudlService } from '../services/crudl.service.js';

export function loadItems() {
  console.log('in action');
  return async (dispatch) => {
    try {
      const items = await CrudlService.query();
      console.log(items);
      dispatch({ type: 'SET_ITEMS', items });
      // dispatch({ type: 'SET_CURRITEM', item });
    } catch (err) {
      console.log('could not get items ', err);
    }
  };
}

export function addItem(item) {
  console.log(item);
  return async (dispatch) => {
    try {
      const savedItem = await CrudlService.save(item);
      console.log(savedItem);
      console.log('Added Succesfully!');
      dispatch({ type: 'ADD_BOARD', savedItem });
    } catch (err) {
      console.log('cannot add item', err);
    }
  };
}

export function updateItem(item) {
  // console.log(item);
  return async (dispatch) => {
    try {
      const updatedItem = await CrudlService.save(item);
      // console.log(updatedItem);
      dispatch({ type: 'UPDATE_BOARDS', updatedItem });
      dispatch({ type: 'UPDATE_CURRBOARD', updatedItem });
    } catch (err) {
      console.log('couldnt update item', err);
    }
  };
}

export function removeItem(itemId) {
  return (dispatch) => {
    CrudlService.remove(itemId)
      .then(() => {
        dispatch({ type: 'REMOVE_BOARD', itemId });
      })
      .catch((err) => {
        console.log('cannot delete item');
      });
  };
}
