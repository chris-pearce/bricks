import React from 'react';
import propTypes from 'prop-types';
import styles from './Main.module.css';

const Main = ({ children }) => <main className={styles.root}>{children}</main>;

Main.propTypes = {
  children: propTypes.node.isRequired,
};

export default Main;
