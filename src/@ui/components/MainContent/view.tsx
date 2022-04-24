import React, { FC, ReactElement } from 'react';

import styles from './module.scss';

interface IMainContentProps {
  children: ReactElement
}

const MainContent: FC<IMainContentProps> = ({
  children,
}: IMainContentProps): ReactElement => (
  <div className={styles.mainContent}>
    {children}
  </div>
);

export default MainContent;
