/* eslint-disable */
import { CrudlService } from '../services/crudl.service.js';

export function loadItems() {
  // console.log('in action');
  return async (dispatch) => {
    try {
      let data = await CrudlService.query();
      let { Stores } = data
      let stores = Stores
      // let products = await CrudlService.getProducts()
      // console.log (products)
      dispatch({ type: 'SET_STORES', stores });
      // dispatch({ type: 'SET_PRODUCTS', products });
    } catch (err) {
      console.log('could not get items ', err);
    }
  };
}

export function sortByGender(gender, priceRange) {
  // console.log(gender)
  // console.log(priceRange)
  return (dispatch) => {
    try {
      const filteredProdcuts = CrudlService.sortProducts(gender, priceRange)
      dispatch({ type: 'SET_GENDER', gender })
      dispatch({ type: 'SET_PRODUCTS', products: filteredProdcuts })
    }
    catch {
      console.log('cannot filter products')
    }
  }
}
export function sortPriceRange(gender, priceRange) {
  return (dispatch) => {
    try {
      const sortedProducts = CrudlService.sortProducts(gender, priceRange)
      dispatch({ type: 'SET_PRICE_RANGE', priceRange })
    }
    catch {
      console.log('cannot filter products')
    }
  }

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
