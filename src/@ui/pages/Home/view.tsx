import React, { FC, ReactElement } from 'react';

import MainContent from '@ui/components/MainContent';
import SideBar from '@ui/components/SideBar';

import styles from './module.scss';
import { TMovie } from '../../components/Movie/view';

interface IHomeProps {
  movies: TMovie[],
}

const Home: FC<IHomeProps> = ({
  movies,
}: IHomeProps): ReactElement => (
  <div className={styles.mainContent}>
    <MainContent>
      <span>child</span>
    </MainContent>
    <SideBar movies={movies} />
  </div>
);

export default Home;
