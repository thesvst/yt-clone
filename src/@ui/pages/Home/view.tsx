import React, { FC, ReactElement } from 'react';

import MainContent from '@ui/components/MainContent';
import SideBar from '@ui/components/SideBar';
import { TMovie } from '@ui/components/Movie';

import { OnMovieClick } from 'containers/Home/types';

import { TVideoData } from '@ui/components/MainContent/types';

import styles from './module.scss';

interface IHomeProps {
  movies: TMovie[],
  onMovieClick: OnMovieClick,
  videoData: TVideoData | null,
}

const Home: FC<IHomeProps> = ({
  movies,
  onMovieClick,
  videoData,
}: IHomeProps): ReactElement => (
  <div className={styles.mainContent}>
    <MainContent videoData={videoData} />
    <SideBar
      movies={movies}
      onMovieClick={onMovieClick}
    />
  </div>
);

export default Home;
