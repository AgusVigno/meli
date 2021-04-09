import { APP_ACTION_TYPES } from './app.types';

export const setError = (msg) => ({
  type: APP_ACTION_TYPES.SET_ERROR_MSG,
  payload:
    msg && typeof msg === 'string' ? msg : !msg ? null : 'Error en el sistema',
});

export const setSuccessMsg = (msg) => ({
  type: APP_ACTION_TYPES.SET_SUCCESS_MSG,
  payload: msg && typeof msg === 'string' ? msg : null,
});

export const setAppFilters = (filters) => ({
  type: APP_ACTION_TYPES.SET_FILTERS,
  payload: filters,
});

export const resetError = () => (dispatch) => {
  dispatch(setError(null));
};

export const resetSuccessMsg = () => (dispatch) => {
  dispatch(setSuccessMsg(null));
};
