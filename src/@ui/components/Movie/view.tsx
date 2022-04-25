import React, { FC } from 'react';

import { getSimplifiedPastInfo } from 'common/utils/GetSimplifiedPastInfo';
import { getDateDifferences } from 'common/utils/GetDateDifferences';

import { OnMovieClick } from 'containers/Home/types';

import styles from './module.scss';

export type TMovie = {
  id: string,
  title: string,
  author: string,
  publishedAt: string,
  thumbUrl: string,
  description: string
};

interface IMovieProps {
  movie: TMovie,
  onMovieClick: OnMovieClick,
}

const Movie: FC<IMovieProps> = ({
  movie,
  onMovieClick,
}: IMovieProps) => {
  const published = getSimplifiedPastInfo(getDateDifferences(movie.publishedAt));
  const onMovieClickAction = (clickedMovie: TMovie) => {
    onMovieClick(({
      id: clickedMovie.id,
      title: clickedMovie.title,
      description: clickedMovie.description,
    }));
  };

  return (
    <div
      className={styles.movie}
      onClick={() => onMovieClickAction(movie)}
    >
      <div className={styles.thumbnail} style={{ backgroundImage: `url(${movie.thumbUrl})` }} />
      <div>
        <div className={styles.title}>{ movie.title }</div>
        <div className={styles.details}>
          <div>{ movie.author }</div>
          <div className={styles.detailsInner}>
            <div>{ published }</div>
          </div>
        </div>
        <div />
      </div>
    </div>
  );
};

export default Movie;
