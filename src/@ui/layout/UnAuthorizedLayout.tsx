import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import FBAuthScriptManager from 'core/FBAuthScriptManager';

const UnAuthorizedLayout = () => {
  const authenticated = FBAuthScriptManager.getToken();
  if (authenticated) {
    return (
      <Navigate to="/home" />
    );
  }

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default UnAuthorizedLayout;
