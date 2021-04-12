import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { render as rtlRender } from '@testing-library/react';
import appReducer from '../store/app/app.reducer';
import productReducer from '../store/product/product.reducer';

const mainReducer = combineReducers({
  app: appReducer,
  product: productReducer,
});

function render(
  ui,
  {
    initialState,
    store = createStore(mainReducer, initialState),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from '@testing-library/react';

export { render };
