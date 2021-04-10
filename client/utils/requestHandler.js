import { runFetch } from './fetchHandler';

export const requests = {
  get: async (url, params) => {
    try {
      if (params) {
        url += `?${new URLSearchParams(params).toString()}`;
      }
      const response = await runFetch(url, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      return Promise.resolve(response);
    } catch (error) {
      console.log(error);
    }
  },
};
