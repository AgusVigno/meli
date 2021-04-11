import { API_BASE_URL } from '../constants/config';
import { store } from '../store/store';
import { setError } from '../store/app/app.actions';

export const runFetch = (url, params = {}) => {
  return fetch(API_BASE_URL + url, params)
    .then((response) => {
      if (response.ok) {
        return response.status !== 204
          ? Promise.resolve(response.json())
          : Promise.resolve(true);
      }
      store.dispatch(setError('Hubo un error en la consulta.'));
      return false;
    })
    .catch((error) => {
      store.dispatch(setError(error || 'Hubo un error en la consulta.'));
    });
};
