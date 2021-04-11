import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
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

// re-export everything
export * from '@testing-library/react';
// override render method
export { render };
