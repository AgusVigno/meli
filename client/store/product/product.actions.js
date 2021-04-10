import { PRODUCT_ACTION_TYPES } from './product.types';
import { productService } from '../../services';

export const setProducts = (products) => ({
  type: PRODUCT_ACTION_TYPES.FETCH_PRODUCTS_SUCCESS,
  payload: products,
});

export const fetchProducts = (query) => async (dispatch) => {
  try {
    const response = await productService.getAll(query);
    response
      ? dispatch(setProducts(response))
      : dispatch({ type: PRODUCT_ACTION_TYPES.FETCH_PRODUCTS_ERROR });
  } catch (error) {
    return Promise.reject(error);
  }
};
