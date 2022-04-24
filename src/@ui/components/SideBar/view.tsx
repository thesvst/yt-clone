import React, { FC, ReactElement } from 'react';
import cls from 'classnames';

import Movie, { TMovie } from '@ui/components/Movie';

import styles from './module.scss';

interface ISideBarProps {
  movies: TMovie[]
}

const SideBar: FC<ISideBarProps> = ({
  movies,
}: ISideBarProps): ReactElement => (
  <div className={cls(styles.sidebar)}>
    { movies.map((movie) => (
      <div
        key={movie.id}
        className={styles.movie}
      >
        <Movie movie={movie} />
      </div>
    )) }
  </div>
);

export default SideBar;
