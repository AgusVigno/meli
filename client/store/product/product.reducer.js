import { PRODUCT_ACTION_TYPES } from './product.types';

export const INITIAL_STATE = {
  products: [],
};

const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PRODUCT_ACTION_TYPES.FETCH_PRODUCTS_SUCCESS: {
      return {
        ...state,
        products: action.payload,
      };
    }
    default:
      return state;
  }
};

export default productReducer;
