import { useState } from 'react';

import YouTubeRequestManager from '../../core/YouTubeRequestManager';
import { TRequestMethod } from '../../types/TRequestMethod';
import { UseFetchYouTubeAPIResult } from './types';

interface IUseFetchYouTubeAPI {
  endpoint: string,
  headers?: {
    [key: string]: string
  },
  method: TRequestMethod,
}

type UseFetchYouTubeAPI = (props: IUseFetchYouTubeAPI) => UseFetchYouTubeAPIResult;

export const useFetchYouTubeAPI: UseFetchYouTubeAPI = ({
  endpoint,
  headers,
  method,
}) => {
  const [loading, setLoading] = useState(false);

  const request = () => new Promise((resolve, reject) => {
    setLoading(true);
    YouTubeRequestManager.fetch(`https://youtube.googleapis.com/youtube/v3/${endpoint}`, {
      method,
      headers: {
        Accept: 'application/json',
        ...(headers),
      },
    }).then((data) => {
      setLoading(false);
      resolve(data);
    }).catch((error) => {
      reject(error);
    });
  });

  return {
    loading,
    request,
  };
};
