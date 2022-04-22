import React, { FC, ReactElement } from 'react';

import TopBar from './TopBar';
import SideBar from './SideBar';
import MainContent from './MainContent';

import styles from './AuthorizedLayout.module.scss';

interface IAuthorizedLayoutProps {
  children: ReactElement
}

const AuthorizedLayout: FC<IAuthorizedLayoutProps> = ({
  children,
}: IAuthorizedLayoutProps): ReactElement => (
  <div>
    <TopBar />
    <div className={styles.mainContent}>
      <MainContent>
        {children}
      </MainContent>
      <SideBar />
    </div>
  </div>
);

export default AuthorizedLayout;
