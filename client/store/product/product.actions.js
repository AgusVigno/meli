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

export const getProductById = (productId) => async (dispatch) => {
  try {
    const response = await productService.getById(productId);
    response
      ? dispatch({ type: PRODUCT_ACTION_TYPES.FETCH_PRODUCT_SUCCESS })
      : dispatch({ type: PRODUCT_ACTION_TYPES.FETCH_PRODUCT_ERROR });
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const fetchCategoryName = (categoryId) => async (dispatch) => {
  try {
    const response = await productService.getCategoryName(categoryId);
    response
      ? dispatch({ type: PRODUCT_ACTION_TYPES.FETCH_CATEGORY_SUCCESS })
      : dispatch({ type: PRODUCT_ACTION_TYPES.FETCH_CATEGORY_ERROR });
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};
