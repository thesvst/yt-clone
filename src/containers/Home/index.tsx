import React, { useContext, useEffect, useState } from 'react';

import HomeView from '@ui/pages/Home';

import { useFetchYouTubeAPI } from 'hooks/useFetchYouTubeAPI';

import { SearchQueryContext } from '@ui/layout/AuthorizedLayout';

import { mapAPIDataToUI } from './utils';
import { OnMovieClick } from './types';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const searchQuery = useContext(SearchQueryContext);
  const { request } = useFetchYouTubeAPI({
    endpoint: `search?part=snippet&q=${searchQuery}`,
    method: 'GET',
    mapper: mapAPIDataToUI,
  });

  const onMovieClick: OnMovieClick = (id) => {
    console.log(id);
  };

  useEffect(async () => {
    const data = await request();
    setMovies(data);
  }, [searchQuery]);

  return (
    <HomeView
      movies={movies}
      onMovieClick={onMovieClick}
    />
  );
};
export default Home;
