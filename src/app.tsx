import React from 'react';

import Home from './containers/Home';

import './styles/_reset.scss';
import './styles/_main.scss';
import AuthorizedLayout from './@ui/layout/AuthorizedLayout';

const App = () => (
  <div>
    <AuthorizedLayout>
      <Home />
    </AuthorizedLayout>
  </div>
);

export default App;
