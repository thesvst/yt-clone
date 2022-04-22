import React from 'react';

import Hamburger from '@ui/components/Hamburger';
import { FaAccessibleIcon, FaAcquisitionsIncorporated, FaAccusoft } from 'react-icons/fa';
import Logo from '@ui/components/Logo';

import styles from './module.scss';

const TopBar = () => (
  <div className={styles.topBar}>
    <div className={styles.leftSide}>
      <Hamburger />
      <Logo />
    </div>
    <div className={styles.inputWrapper}>
      <input type="text" name="" id="" />
    </div>

    {/* @ These icons are just placeholders to make it look more like real yt. */}
    <div className={styles.iconsWrapper}>
      <div className={styles.icon}>
        <FaAccessibleIcon />
      </div>
      <div className={styles.icon}>
        <FaAcquisitionsIncorporated />
      </div>
      <div className={styles.icon}>
        <FaAccusoft />
      </div>
    </div>
  </div>
);

export default TopBar;
