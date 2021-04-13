import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import Header from './Header';

const Layout = (props) => {
  return (
    <>
      <Head>
        <title>
          Challenge Mercado Libre {props.title && `- ${props.title}`}
        </title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <meta
          name="keywords"
          content="comercio electrónico, e-commerce, negocio electrónico, e-business"
        />
        <meta
          name="description"
          content="Compra y venta de todo tipo de productos."
        />
      </Head>
      <Header />
      <main>{props.children}</main>
    </>
  );
};

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
};
export default Layout;
