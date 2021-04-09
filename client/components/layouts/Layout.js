import React from 'react';
import Head from 'next/head';
import Header from './Header';

const Layout = (props) => {
  return (
    <>
      <Head>
        <title>Challenge Mercado Libre</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
