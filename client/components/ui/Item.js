import React from 'react';
import Link from 'next/link';
import { priceFormat } from '../../utils/helpers';
import styles from '../../styles/items.module.scss';

const Item = ({ product }) => {
  const { id, title, price, picture, free_shipping, location } = product;

  return (
    <li className={styles.item}>
      <div className={styles.item__data}>
        <Link href="/items/[id]" as={`/items/${id}`}>
          <img src={picture} alt="product" className={styles.picture} />
        </Link>
        <div className={styles.item__description}>
          <div className={styles.item__price}>
            <p>
              {priceFormat(price)}
              <span>{price.decimals ? price.decimals : '00'}</span>
            </p>
            {free_shipping && (
              <img src="images/shipping.png" alt="envio gratis" />
            )}
          </div>
          <Link href="/items/[id]" as={`/items/${id}`}>
            <p className={styles.item__title}>{title}</p>
          </Link>
        </div>
      </div>
      <p className={styles.item__address}>{location}</p>
    </li>
  );
};

export default Item;
