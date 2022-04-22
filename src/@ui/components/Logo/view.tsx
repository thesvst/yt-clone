import React from 'react';

import image from 'common/assets/ytlogo.png';

import styles from './module.scss';

const Logo = () => (
  <div className={styles.logo}>
    <img src={image} alt="logo" />
  </div>
);

export default Logo;
