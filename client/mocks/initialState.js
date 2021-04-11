import { PRODUCTS } from './products';

export const INITIAL_STATE = {
  product: { products: { items: PRODUCTS } },
  app: {
    errorMsg: null,
    successMsg: null,
  },
};
