import React, {
  Dispatch, FC, ReactElement, SetStateAction, useState,
} from 'react';

import Hamburger from '@ui/components/Hamburger';
import { FaAccessibleIcon, FaAcquisitionsIncorporated, FaAccusoft } from 'react-icons/fa';
import Logo from '@ui/components/Logo';

import styles from './module.scss';

interface ITopBarProps {
  onSearch: Dispatch<SetStateAction<string>>
}

const TopBar: FC<ITopBarProps> = ({
  onSearch,
}: ITopBarProps): ReactElement => {
  const [search, setSearch] = useState('');

  return (
    <div className={styles.topBar}>
      <div className={styles.leftSide}>
        <Hamburger />
        <Logo />
      </div>
      <div className={styles.inputWrapper}>
        <input value={search} type="text" name="search" onChange={(event) => setSearch(event.target.value)} />
        <button type="submit" onClick={() => onSearch(search)}>Search!</button>
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
};

export default TopBar;
