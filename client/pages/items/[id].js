import React, { useEffect, useState } from 'react';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import toast, { Toaster } from 'react-hot-toast';
import { getSuccessMsg, getErrorMsg } from '../../store/selectors';
import {
  resetError,
  resetSuccessMsg,
  setSuccessMsg,
} from '../../store/app/app.actions';
import {
  getProductById,
  fetchCategoryName,
} from '../../store/product/product.actions';
import { priceFormat } from '../../utils/helpers';
import Layout from '../../components/layouts/Layout';
import Breadcrumb from '../../components/ui/Breadcrumb';
import Loader from '../../components/ui/Loader';
import styles from '../../styles/item.module.scss';

const ItemDetail = ({
  getProductById,
  fetchCategoryName,
  error,
  success,
  resetError,
  resetSuccessMsg,
  setSuccessMsg,
}) => {
  const router = useRouter();
  const {
    query: { id },
  } = router;
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);
  const [categories, setCategories] = useState([]);

  /* 
    Detecta algun mensaje a mostrar al usuario, y se lo muestra durante 2 segundos (en caso de exito) o 4 segundos (en caso de error)
  */
  useEffect(() => {
    if (error) {
      toast.error(error);
      resetError();
    }
    if (success) {
      toast.success(success);
      resetSuccessMsg();
    }
    // eslint-disable-next-line
  }, [error, success]);

  useEffect(() => {
    id &&
      getProductById(id)
        .then((response) => setProduct(response.item))
        .finally(() => setLoading(false));
  }, [id]);

  /* 
    Al obtener el producto segun el ID, se obtiene el nombre de las caterías para armar el Breadcrumb dinamicamente 
  */
  useEffect(() => {
    console.log('Producto: ', product);
    product &&
      fetchCategoryName(product.category_id).then((response) =>
        setCategories(response.path_from_root.map((category) => category.name))
      );
  }, [product]);

  const onClick = () => {
    setSuccessMsg('Se realizó con éxito.');
  };

  return (
    <Layout title="Detalle Producto">
      {loading || !product ? (
        <Loader />
      ) : (
        <div className={styles.container}>
          <Breadcrumb categories={categories} />
          <div className={styles.item__container}>
            <div className={styles.item__info}>
              <img src={product.picture} alt="product" />
              <div className={styles.item__features}>
                <p className={styles.item__condition}>{`${
                  product.condition === 'new' ? 'Nuevo' : 'Usado'
                } - ${product.sold_quantity} vendidos`}</p>
                <p className={styles.item__title}>{product.title}</p>
                <p className={styles.item__price}>
                  {priceFormat(product.price)}
                  <span>
                    {product.price.decimals ? product.price.decimals : '00'}
                  </span>
                </p>
                <button type="button" onClick={onClick}>
                  Comprar
                </button>
              </div>
            </div>
            <div className={styles.description}>
              <p>Descripción del producto</p>
              <p className={styles.description__text}>{product.description}</p>
            </div>
          </div>
          <div>
            <Toaster position="bottom-right" reverseOrder={false} />
          </div>
        </div>
      )}
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  success: getSuccessMsg(state),
  error: getErrorMsg(state),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getProductById,
      fetchCategoryName,
      setSuccessMsg,
      resetSuccessMsg,
      resetError,
    },
    dispatch
  );

export default compose(connect(mapStateToProps, mapDispatchToProps))(
  ItemDetail
);