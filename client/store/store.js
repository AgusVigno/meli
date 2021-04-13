import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

/* 
Para ver en consola desarrollador de Chrome la funcion de redux, descomentar y cambiar compose por composeEnhacer
const composeEnhancer =
  typeof window !== 'undefined'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;
*/

export const store = createStore(reducer, compose(applyMiddleware(thunk)));
