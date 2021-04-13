import React, { useEffect } from 'react';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import toast, { Toaster } from 'react-hot-toast';
import { resetError } from '../store/app/app.actions';
import { getErrorMsg, getProducts } from '../store/selectors';
import Layout from '../components/layouts/Layout';
import Item from '../components/ui/Item.js';
import Breadcrumb from '../components/ui/Breadcrumb.js';
import styles from '../styles/items.module.scss';

const Items = ({ error, products }) => {
  // Detecta algun mensaje a mostrar al usuario, y se lo muestra durante 4 segundos
  useEffect(() => {
    if (error) {
      toast.error(error);
      resetError();
    }
    // eslint-disable-next-line
  }, [error]);

  return (
    <div>
      <Layout title="Productos">
        <div className={styles.list__items}>
          <Breadcrumb />
          <ul className={styles.items__container}>
            {products && products.length === 0 ? (
              <p>No hay resultados</p>
            ) : (
              products &&
              products.map((product) => (
                <Item key={product.id} product={product} />
              ))
            )}
          </ul>
        </div>
        <div>
          <Toaster position="bottom-right" reverseOrder={false} />
        </div>
      </Layout>
    </div>
  );
};

Items.propTypes = {
  error: PropTypes.string,
  products: PropTypes.arrayOf(
    PropTypes.shape({
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
    }).isRequired
  ).isRequired,
};

const mapStateToProps = (state) => ({
  products: getProducts(state),
  error: getErrorMsg(state),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ resetError }, dispatch);

export default compose(connect(mapStateToProps, mapDispatchToProps))(Items);
