import React, { FC, ReactElement } from 'react';

import MainContent from '@ui/components/MainContent';
import SideBar from '@ui/components/SideBar';
import { TMovie } from '@ui/components/Movie';

import { OnMovieClick } from 'containers/Home/types';

import styles from './module.scss';

interface IHomeProps {
  movies: TMovie[],
  onMovieClick: OnMovieClick,
}

const Home: FC<IHomeProps> = ({
  movies,
  onMovieClick,
}: IHomeProps): ReactElement => (
  <div className={styles.mainContent}>
    <MainContent>
      <span>child</span>
    </MainContent>
    <SideBar
      movies={movies}
      onMovieClick={onMovieClick}
    />
  </div>
);

export default Home;
