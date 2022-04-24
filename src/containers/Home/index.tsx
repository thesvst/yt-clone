import React, { useEffect } from 'react';

import AuthorizedLayout from '@ui/layout/AuthorizedLayout';

import { useFetchYouTubeAPI } from 'hooks/useFetchYouTubeAPI';

import { mapAPIDataToUI } from './utils';

const Home = () => {
  const { request } = useFetchYouTubeAPI({
    endpoint: 'search?part=snippet&q=test',
    method: 'GET',
    mapper: mapAPIDataToUI,
  });

  useEffect(() => {
    request();
  }, []);

  return (
    <AuthorizedLayout>
      <div>
        <span>Hello world</span>
      </div>

    </AuthorizedLayout>
  );
};
export default Home;
