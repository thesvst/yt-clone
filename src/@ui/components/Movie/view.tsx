import React, { FC } from 'react';

import styles from './module.scss';

type TMovie = {
  title: string,
  author: string,
  views: string,
  months: string,
  thumbUrl: string,
  url: string,
};

interface IMovieProps {
  movies: TMovie[],
}

const Movie: FC<IMovieProps> = ({
  movies,
}: IMovieProps) => (
  <div>
    {movies ? movies.map(({
      title, author, months, views,
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
              { months }
            </div>
          </div>
        </div>
      </div>
    )) : 'Loading'}
  </div>
);

export default Movie;
