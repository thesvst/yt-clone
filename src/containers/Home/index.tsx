import React, { useEffect, useState } from 'react';

import HomeView from '@ui/pages/Home';

import { useFetchYouTubeAPI } from 'hooks/useFetchYouTubeAPI';

import { mapAPIDataToUI } from './utils';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const { request } = useFetchYouTubeAPI({
    endpoint: 'search?part=snippet&q=test',
    method: 'GET',
    mapper: mapAPIDataToUI,
  });

  useEffect(async () => {
    const data = await request();
    setMovies(data);
  }, []);

  return (
    <HomeView movies={movies} />
  );
};
export default Home;
