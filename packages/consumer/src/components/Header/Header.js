import React from 'react';
import styles from './Header.module.css';

const Header = () => (
  <header className={styles.root}>
    <h1 className={styles.heading}>
      <span aria-hidden="true">🧱</span> Bricks / Consumer
    </h1>
    <p className={styles.byline}>For simulating a consumers environment.</p>
  </header>
);

export default Header;
