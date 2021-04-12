import { requests } from '../utils/requestHandler';

export const productService = {
  getAll: (query) => requests.get(`items?q=${query}`),
  getAllByCategory: (categoryId) => requests.get(`category?id=${categoryId}`),
  getById: (productId) => requests.get(`items/${productId}`),
  getCategoryName: (categoryId) => requests.get(`categories/${categoryId}`),
};
