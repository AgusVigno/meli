import { PRODUCTS } from './products';
import { CATEGORIES } from './categories';

export const INITIAL_STATE = {
  product: { products: { items: PRODUCTS, categories: CATEGORIES } },
  app: {
    errorMsg: null,
    successMsg: null,
  },
};
