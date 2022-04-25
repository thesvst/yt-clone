import React, {
  Dispatch, FC, ReactElement, SetStateAction,
} from 'react';

import MainContent from '@ui/components/MainContent';
import SideBar from '@ui/components/SideBar';
import { TMovie } from '@ui/components/Movie';

import { OnMovieClick } from 'containers/Home/types';

import { TPlayerVideoData } from '@ui/components/MainContent/types';

import styles from './module.scss';

interface IHomeProps {
  movies: TMovie[],
  onMovieClick: OnMovieClick,
  videoData: TPlayerVideoData | null,
  videoLoading: boolean,
  setVideoLoading: Dispatch<SetStateAction<boolean>>,
}

const Home: FC<IHomeProps> = ({
  movies,
  onMovieClick,
  videoData,
  videoLoading,
  setVideoLoading,
}: IHomeProps): ReactElement => (
  <div className={styles.mainContent}>
    <MainContent
      videoData={videoData}
      videoLoading={videoLoading}
      setVideoLoading={setVideoLoading}
    />
    <SideBar
      movies={movies}
      onMovieClick={onMovieClick}
    />
  </div>
);

export default Home;
