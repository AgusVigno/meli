import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { useRouter } from 'next/router';
import { fetchProducts } from '../../store/product/product.actions';
import styles from '../../styles/index.module.scss';

const Search = ({ fetchProducts }) => {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (search !== '') {
      setLoading(true);
      fetchProducts(search).then(() => {
        setLoading(false);
        router.push(`/items?search=${search}`);
      });
    }
  };

  return (
    <>
      {loading && <p>Cargando</p>}
      <form
        className={styles.header__search}
        onSubmit={(event) => handleSubmit(event)}
      >
        <input
          type="text"
          placeholder="Nunca dejes de buscar"
          value={search}
          onChange={(evet) => setSearch(evet.target.value)}
        />
        <button type="submit">
          <img src="/images/search.png" alt="icon search" />
        </button>
      </form>
    </>
  );
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchProducts,
    },
    dispatch
  );

export default compose(connect(null, mapDispatchToProps))(Search);
