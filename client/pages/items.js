import React, { useState, useEffect } from 'react';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { resetError } from '../store/app/app.actions';
import { getCategories, getErrorMsg, getProducts } from '../store/selectors';
import Layout from '../components/layouts/Layout';
import Item from '../components/ui/Item.js';
import Breadcrumb from '../components/ui/Breadcrumb.js';
import styles from '../styles/items.module.scss';

const Items = ({ error, products, categories }) => {
  /* 
    Detecta algún error, y se lo muestra durante 2 segundos al usuario
  */
  useEffect(() => {
    console.log('Productos', products);

    if (error) {
      toast.error(error);
      resetError();
    }
    // eslint-disable-next-line
  }, [error, products]);

  return (
    <div>
      <Layout title="Productos">
        <div className={styles.list__items}>
          <Breadcrumb categories={categories} />
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

const mapStateToProps = (state) => ({
  products: getProducts(state),
  categories: getCategories(state),
  error: getErrorMsg(state),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      resetError,
    },
    dispatch
  );

export default compose(connect(mapStateToProps, mapDispatchToProps))(Items);
