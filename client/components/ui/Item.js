import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { priceFormat } from '../../utils/helpers';
import styles from '../../styles/items.module.scss';

const Item = ({ product }) => {
  const { id, title, price, picture, free_shipping, location } = product;

  return (
    <li data-testid="producto" className={styles.item}>
      <div className={styles.item__data}>
        <Link href="/items/[id]" as={`/items/${id}`}>
          <img
            data-testid="producto-imagen"
            src={picture}
            alt="product"
            className={styles.picture}
          />
        </Link>
        <div className={styles.item__description}>
          <div className={styles.item__price}>
            <p data-testid="producto-precio">
              {priceFormat(price)}
              <span>{price.decimals ? price.decimals : '00'}</span>
            </p>
            {free_shipping && (
              <img src="images/shipping.png" alt="envio gratis" />
            )}
          </div>
          <Link href="/items/[id]" as={`/items/${id}`}>
            <p data-testid="producto-titulo" className={styles.item__title}>
              {title}
            </p>
          </Link>
        </div>
      </div>
      <p data-testid="producto-ubicacion" className={styles.item__address}>
        {location}
      </p>
    </li>
  );
};

Item.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.shape({
      currency: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      decimals: PropTypes.number,
    }).isRequired,
    picture: PropTypes.string.isRequired,
    condition: PropTypes.string.isRequired,
    free_shipping: PropTypes.bool.isRequired,
    location: PropTypes.string.isRequired,
  }).isRequired,
};

export default Item;
