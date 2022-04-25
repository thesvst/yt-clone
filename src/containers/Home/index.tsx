import React, { useContext, useEffect, useState } from 'react';

import HomeView from '@ui/pages/Home';

import { useFetchYouTubeAPI } from 'hooks/useFetchYouTubeAPI';

import { SearchQueryContext } from '@ui/layout/AuthorizedLayout';

import { TPlayerVideoData } from '@ui/components/MainContent/types';

import { mapAPIDataToUI } from './utils';
import { OnMovieClick } from './types';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [videoData, setVideoData] = useState<TPlayerVideoData | null>(null);
  const searchQuery = useContext(SearchQueryContext);
  const { request } = useFetchYouTubeAPI({
    endpoint: `search?part=snippet&q=${searchQuery}`,
    method: 'GET',
    mapper: mapAPIDataToUI,
  });

  const onMovieClick: OnMovieClick = (data) => {
    setVideoData(data);
  };

  useEffect(async () => {
    const data = await request();
    setMovies(data);
  }, [searchQuery]);

  return (
    <HomeView
      movies={movies}
      videoData={videoData}
      onMovieClick={onMovieClick}
    />
  );
};
export default Home;
