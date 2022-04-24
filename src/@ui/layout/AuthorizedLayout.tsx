import React, { FC, ReactElement } from 'react';

import TopBar from './TopBar';

interface IAuthorizedLayoutProps {
  children: ReactElement
}

const AuthorizedLayout: FC<IAuthorizedLayoutProps> = ({
  children,
}: IAuthorizedLayoutProps): ReactElement => (
  <div>
    <TopBar />
    {children}
  </div>
);

export default AuthorizedLayout;
