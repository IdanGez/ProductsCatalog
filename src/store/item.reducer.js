// in the start of project change all the item to the word we working on

const initialState = {
  stores: [],
  products: [],
  gender: { value: 1, label: 'BOTH' },
  priceRange: null,
};

export function itemReducer(state = initialState, action) {
  let newState = state;
  switch (action.type) {
    case 'SET_ITEMS':
      newState = { ...state, items: action.items };
      break;
    case 'SET_STORES':
      newState = { ...state, stores: action.stores };
      break;
    case 'SET_GENDER':
      newState = { ...state, gender: action.gender };
      break;
    // case 'SET_PRODUCTS':
    //   console.log(action)
    //   newState = { ...state, products: action.products };
    //   break;
    case 'SET_PRICE_RANGE':
      newState = { ...state, priceRange: action.priceRange };
      break;
    case 'UPDATE_ITEMS':
      newState = {
        ...state,
        items: state.items.map((item) => {
          // console.log(item, action.updatedItem);
          return item._id === action.updatedItem._id
            ? action.updatedItem
            : item;
        }),
      };
      break;

    case 'ADD_ITEM':
      newState = {
        ...state,
        items: [...state.items, action.savedItem],
      };
      break;

    case 'SET_ITEM':
      newState = { ...state, currItem: action.currItem };
      break;

    case 'REMOVE_ITEM':
      newState = {
        ...state,
        items: state.items.filter((item) => item._id !== action.itemId),
      };
      break;

    case 'UPDATE_CURRITEM':
      newState = {
        ...state,
        currItem: action.updatedItem,
      };
      break;

    default:
  }

  return newState;
}
