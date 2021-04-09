import { combineReducers } from 'redux';
import appReducer from './app/app.reducer';

const mainReducer = combineReducers({
  app: appReducer,
});

const rootReducer = (state, action) => {
  return mainReducer(state, action);
};

export default rootReducer;
