import React, { FC, ReactElement } from 'react';

import TopBar from './TopBar';
import SideBar from './SideBar';
import MainContent from './MainContent';

interface IAuthorizedLayoutProps {
  children: ReactElement
}

const AuthorizedLayout: FC<IAuthorizedLayoutProps> = ({
  children,
}: IAuthorizedLayoutProps): ReactElement => (
  <div>
    <TopBar />
    <SideBar />
    <MainContent>
      {children}
    </MainContent>
  </div>
);

export default AuthorizedLayout;
