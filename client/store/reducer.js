import { combineReducers } from 'redux';
import appReducer from './app/app.reducer';
import productReducer from './product/product.reducer';

const mainReducer = combineReducers({
  app: appReducer,
  product: productReducer,
});

const rootReducer = (state, action) => {
  return mainReducer(state, action);
};

export default rootReducer;
