import React, { useEffect, useState } from 'react';
import {
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';

import Home from './containers/Home';

import './styles/_reset.scss';
import './styles/_main.scss';
import { AuthorizedLayout, UnAuthorizedLayout } from './@ui/layout';
import FBAuthScriptManager from './core/FBAuthScriptManager';
import Loader from './@ui/components/Loader';

const App = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    FBAuthScriptManager.appendScript();
  }, []);

  const onLogin = () => {
    window.FB.getLoginStatus((response) => {
      setIsLoading(true);
      if (response.status !== 'connected') {
        window.FB.login((res) => {
          if (res.status === 'connected') {
            setIsLoading(false);
            navigate('/home');
          }
        });
      }

      if (response.status === 'connected') {
        navigate('/home');
      }
    });
  };

  return (
    <div>
      {isLoading && <Loader />}
      <Routes>
        <Route path="/" element={<AuthorizedLayout />}>
          <Route path="/home" element={<Home />} />
        </Route>
        <Route path="/u" element={<UnAuthorizedLayout />}>
          <Route
            path="/u/login"
            element={(
              <div>
                <button onClick={onLogin}>Login</button>
              </div>
            )}
          />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
