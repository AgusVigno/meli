import React from 'react';
import Layout from '../components/layouts/Layout';
import styles from '../styles/404.module.scss';

export default function FourOhFour() {
  return (
    <Layout>
      <div className={styles.container}>
        <h1>404 - No se encontró la página</h1>
        <img src="/images/logo__large_plus.png" alt="logo" />
      </div>
    </Layout>
  );
}
