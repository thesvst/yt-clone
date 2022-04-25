import React, { useContext, useEffect, useState } from 'react';

import HomeView from '@ui/pages/Home';

import { useFetchYouTubeAPI } from 'hooks/useFetchYouTubeAPI';

import { SearchQueryContext } from '@ui/layout/AuthorizedLayout';

import { TPlayerVideoData } from '@ui/pages/Home/components/MainContent/types';

import { mapAPIDataToUI } from './utils';
import { OnMovieClick } from './types';
import { TMovie } from '../../@ui/components/Movie';

const Home = () => {
  const [movies, setMovies] = useState<TMovie[]>([]);
  const [videoData, setVideoData] = useState<TPlayerVideoData | null>(null);
  const [videoLoading, setVideoLoading] = useState(false);
  const searchQuery = useContext(SearchQueryContext);
  const { request } = useFetchYouTubeAPI({
    endpoint: `search?part=snippet&q=${searchQuery}`,
    method: 'GET',
    mapper: mapAPIDataToUI,
  });

  const onMovieClick: OnMovieClick = (data) => {
    setVideoLoading(true);
    setVideoData(data);
  };

  useEffect(() => {
    async function getData() {
      const data = await request();

      setMovies(data);
    }

    getData().catch(() => {
      throw new Error('Unable to get data');
    });
  }, [searchQuery]);

  return (
    <HomeView
      movies={movies}
      videoData={videoData}
      videoLoading={videoLoading}
      setVideoLoading={setVideoLoading}
      onMovieClick={onMovieClick}
    />
  );
};
export default Home;
