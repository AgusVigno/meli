import React, { useState, useEffect } from 'react';
import styles from '../../styles/items.module.scss';

const Breadcrumb = ({ categories }) => {
  const [breadcrumb, setBreadcrumb] = useState('');

  useEffect(() => {
    if (categories) {
      if (typeof categories === 'string') {
        setBreadcrumb(categories);
      } else {
        let text = '';
        for (let index = 0; index < categories.length; index++) {
          text += `${categories[index]} ${
            index < categories.length - 1 ? ' > ' : ''
          }`;
        }
        setBreadcrumb(text);
      }
    }
  }, [categories]);

  return (
    <p data-testid="breadcrumb" className={styles.category}>
      {breadcrumb}
    </p>
  );
};

export default Breadcrumb;
