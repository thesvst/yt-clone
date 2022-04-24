import React, { FC, ReactElement } from 'react';
import cls from 'classnames';

import Movie, { TMovie } from '@ui/components/Movie';
import { OnMovieClick } from 'containers/Home/types';

import styles from './module.scss';

interface ISideBarProps {
  movies: TMovie[],
  onMovieClick: OnMovieClick,
}

const SideBar: FC<ISideBarProps> = ({
  movies,
  onMovieClick,
}: ISideBarProps): ReactElement => (
  <div className={cls(styles.sidebar)}>
    { movies.map((movie) => (
      <div
        key={movie.id}
        className={styles.movie}
      >
        <Movie
          movie={movie}
          onMovieClick={onMovieClick}
        />
      </div>
    )) }
  </div>
);

export default SideBar;
