import React from 'react';
import styles from '../../styles/item.module.scss';

const Loader = () => {
  return (
    <div className={styles.loading}>
      <div className={styles.spin}></div>
      <p>Cargando..</p>
    </div>
  );
};

export default Loader;
