import React, { FC, ReactElement } from 'react';

import styles from './module.scss';

interface IMovieDetailsProps {
  title: string,
  description: string,
}

const MovieDetails: FC<IMovieDetailsProps> = ({
  title,
  description,
}: IMovieDetailsProps): ReactElement => (
  <div>
    <div>
      <div className={styles.title}>
        {title}
      </div>
      <div className={styles.description}>
        {description}
      </div>
    </div>
  </div>
);

export default MovieDetails;
