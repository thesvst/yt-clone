import React, { FC } from 'react';

import styles from './module.scss';

export type TMovie = {
  id: string,
  title: string,
  author: string,
  views: string,
  publishedAt: string,
  thumbUrl: string,
};

interface IMovieProps {
  movie: TMovie,
}

const Movie: FC<IMovieProps> = ({
  movie,
}: IMovieProps) => (
  <div className={styles.movie}>
    <div className={styles.thumbnail} style={{ backgroundImage: `url(${movie.thumbUrl})` }} />
    <div>
      <div className={styles.title}>{ movie.title }</div>
      <div className={styles.details}>
        <div>{ movie.author }</div>
        <ul className={styles.detailsInner}>
          <li>{ movie.views }</li>
          <li>{ movie.publishedAt }</li>
        </ul>
      </div>
      <div />
    </div>
  </div>
);

export default Movie;
