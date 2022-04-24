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
  movies: TMovie[],
}

const Movie: FC<IMovieProps> = ({
  movies,
}: IMovieProps) => (
  <div>
    {movies ? movies.map(({
      title, author, publishedAt, views,
    }: TMovie) => (
      <div>
        <div className={styles.thumbnail} />
        <div>
          <div>
            Title:
            { title }
          </div>
          <div>
            Author:
            { author }
          </div>
          <div>
            <div>
              Views:
              { views }
            </div>
            <div>
              Months:
              { publishedAt }
            </div>
          </div>
        </div>
      </div>
    )) : 'Loading'}
  </div>
);

export default Movie;
