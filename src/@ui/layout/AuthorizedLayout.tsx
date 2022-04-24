import React, { FC, ReactElement, useState } from 'react';

import TopBar from './TopBar';

interface IAuthorizedLayoutProps {
  children: ReactElement
}

export const SearchQueryContext = React.createContext('');

const AuthorizedLayout: FC<IAuthorizedLayoutProps> = ({
  children,
}: IAuthorizedLayoutProps): ReactElement => {
  const [search, setSearch] = useState('');

  return (
    <SearchQueryContext.Provider value={search}>
      <TopBar onSearch={setSearch} />
      {children}
    </SearchQueryContext.Provider>
  );
};

export default AuthorizedLayout;
