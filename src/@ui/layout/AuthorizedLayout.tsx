import React, {
  FC, ReactElement, useState,
} from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import FBAuthScriptManager from 'core/FBAuthScriptManager';

import TopBar from './TopBar';

export const SearchQueryContext = React.createContext('');

const AuthorizedLayout: FC = (): ReactElement => {
  const [search, setSearch] = useState('');

  const authenticated = FBAuthScriptManager.getToken();

  if (!authenticated) {
    return (
      <Navigate to="u/login" />
    );
  }

  return (
    <SearchQueryContext.Provider value={search}>
      <TopBar onSearch={setSearch} />
      <Outlet />
    </SearchQueryContext.Provider>
  );
};

export default AuthorizedLayout;
