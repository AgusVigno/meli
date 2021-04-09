import { APP_ACTION_TYPES } from './app.types';

export const INITIAL_STATE = {
  errorMsg: null,
  successMsg: null,
};

const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case APP_ACTION_TYPES.SET_ERROR_MSG:
      return {
        ...state,
        errorMsg: action.payload,
      };
    case APP_ACTION_TYPES.SET_SUCCESS_MSG:
      return {
        ...state,
        successMsg: action.payload,
      };
    default:
      return state;
  }
};

export default appReducer;
