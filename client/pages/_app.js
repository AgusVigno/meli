import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { store } from '../store/store';
import '../styles/globals.scss';

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
};

export default MyApp;
