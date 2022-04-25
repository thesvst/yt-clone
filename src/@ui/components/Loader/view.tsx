import React from 'react';
import { RotatingLines } from 'react-loader-spinner';

import styles from './module.scss';

const Loader = () => (
  <div className={styles.container}>
    <RotatingLines width="100" strokeColor="#FF5733" strokeWidth="1" />
  </div>
);

export default Loader;
