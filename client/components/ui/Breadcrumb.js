import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { getCategories } from '../../store/selectors';
import { fetchProductsByCategory } from '../../store/product/product.actions';
import Loader from './Loader';
import styles from '../../styles/items.module.scss';

const Breadcrumb = ({ categories, fetchProductsByCategory }) => {
  const router = useRouter();
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {}, [categories]);

  useEffect(() => {
    if (category) {
      setLoading(true);
      fetchProductsByCategory(category).then((res) => {
        if (res) {
          setLoading(false);
          router.push('/items');
        } else {
          setLoading(false);
        }
      });
    }
  }, [category]);

  return (
    <ul className={styles.categories}>
      {categories && loading ? (
        <Loader />
      ) : (
        categories &&
        categories.map((category, index) => (
          <li key={index} data-testid="breadcrumb">
            <p onClick={() => setCategory(category.id)}>{category.name}</p>
            {index < categories.length - 1 && <span>&nbsp; &#62; &nbsp;</span>}
          </li>
        ))
      )}
    </ul>
  );
};

Breadcrumb.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
  fetchProductsByCategory: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  categories: getCategories(state),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchProductsByCategory,
    },
    dispatch
  );

export default compose(connect(mapStateToProps, mapDispatchToProps))(
  Breadcrumb
);
