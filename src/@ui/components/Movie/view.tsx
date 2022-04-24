import React, { FC } from 'react';

import { simplifiedPastInfo } from 'common/utils/SimplifiedPastInfo';
import { getDateDifferences } from 'common/utils/GetDateDifferences';

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
}: IMovieProps) => {
  const published = simplifiedPastInfo(getDateDifferences(movie.publishedAt));

  return (
    <div className={styles.movie}>
      <div className={styles.thumbnail} style={{ backgroundImage: `url(${movie.thumbUrl})` }} />
      <div>
        <div className={styles.title}>{ movie.title }</div>
        <div className={styles.details}>
          <div>{ movie.author }</div>
          <ul className={styles.detailsInner}>
            <li>{ movie.views }</li>
            <li>{ published }</li>
          </ul>
        </div>
        <div />
      </div>
    </div>
  );
};

export default Movie;
