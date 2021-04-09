import React from 'react';
import Link from 'next/link';
import Search from '../ui/Search';
import styles from '../../styles/index.module.scss';

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.header__container}>
        <Link href="/">
          <img src="/images/logo.png" className={styles.header__logo}></img>
        </Link>
        <Search />
      </div>
    </header>
  );
};

export default Header;
