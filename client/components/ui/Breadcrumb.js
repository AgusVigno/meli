import React from 'react';
import styles from '../../styles/items.module.scss';

const Breadcrumb = ({ categories }) => {
  return (
    <ul className={styles.categories}>
      {categories.map((category, index) => (
        <li key={index} data-testid="breadcrumb">
          <p>{category}</p>
          {index < categories.length - 1 && <span>&nbsp; &#62; &nbsp;</span>}
        </li>
      ))}
    </ul>
  );
};

export default Breadcrumb;
