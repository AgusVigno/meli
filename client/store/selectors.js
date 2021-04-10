// APP
export const getErrorMsg = (store) => store.app.errorMsg;
export const getSuccessMsg = (store) => store.app.successMsg;

// PRODUCTS
export const getAuthor = (store) => store.product.products.author;
export const getCategories = (store) => store.product.products.categories;
export const getProducts = (store) => store.product.products.items;
